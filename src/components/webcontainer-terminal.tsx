"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw, Loader2, AlertTriangle } from "lucide-react";
import type { WebContainer } from "@webcontainer/api";

// Terminal state
type BootState = "idle" | "booting" | "ready" | "error" | "unsupported";

export function WebContainerTerminal() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const xtermRef = useRef<import("@xterm/xterm").Terminal | null>(null);
  const containerRef = useRef<WebContainer | null>(null);
  const shellInputRef = useRef<WritableStreamDefaultWriter<string> | null>(null);
  const fitAddonRef = useRef<import("@xterm/addon-fit").FitAddon | null>(null);
  const [bootState, setBootState] = useState<BootState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const bootedRef = useRef(false);

  /**
   * Check if the browser supports SharedArrayBuffer (required for WebContainers).
   * SharedArrayBuffer requires cross-origin isolation (COOP + COEP headers).
   */
  const isSupported = useCallback(() => {
    return typeof SharedArrayBuffer !== "undefined";
  }, []);

  /**
   * Boot the WebContainer and xterm.js terminal.
   * Lazily imports both to keep the bundle lean for pages that don't need them.
   */
  const boot = useCallback(async () => {
    if (bootedRef.current) return;
    bootedRef.current = true;

    if (!isSupported()) {
      setBootState("unsupported");
      setErrorMsg(
        "Your browser doesn't support WebContainers. Use Chrome or Edge with cross-origin isolation enabled."
      );
      return;
    }

    setBootState("booting");

    try {
      // Dynamic imports — only loaded when terminal is opened
      const [{ WebContainer }, { Terminal }, { FitAddon }] = await Promise.all([
        import("@webcontainer/api"),
        import("@xterm/xterm"),
        import("@xterm/addon-fit"),
      ]);

      // Initialize xterm
      const fitAddon = new FitAddon();
      const term = new Terminal({
        cursorBlink: true,
        fontSize: 13,
        fontFamily: "var(--font-geist-mono), Menlo, Monaco, 'Courier New', monospace",
        theme: {
          background: "#09090b",
          foreground: "#e4e4e7",
          cursor: "#22c55e",
          selectionBackground: "#27272a",
          black: "#09090b",
          red: "#ef4444",
          green: "#22c55e",
          yellow: "#eab308",
          blue: "#3b82f6",
          magenta: "#a855f7",
          cyan: "#06b6d4",
          white: "#e4e4e7",
          brightBlack: "#52525b",
          brightRed: "#f87171",
          brightGreen: "#4ade80",
          brightYellow: "#facc15",
          brightBlue: "#60a5fa",
          brightMagenta: "#c084fc",
          brightCyan: "#22d3ee",
          brightWhite: "#fafafa",
        },
        allowProposedApi: true,
      });

      term.loadAddon(fitAddon);
      xtermRef.current = term;
      fitAddonRef.current = fitAddon;

      if (terminalRef.current) {
        term.open(terminalRef.current);

        // Small delay to let the DOM settle before fitting
        requestAnimationFrame(() => {
          fitAddon.fit();
        });
      }

      term.writeln("\x1b[33m⏳ Booting WebContainer environment...\x1b[0m");

      // Boot WebContainer
      const instance = await WebContainer.boot();
      containerRef.current = instance;

      // Mount a minimal project structure
      await instance.mount({
        "package.json": {
          file: {
            contents: JSON.stringify(
              {
                name: "techpath-sandbox",
                version: "1.0.0",
                description: "TechPath interactive sandbox",
                scripts: {
                  start: "node index.js",
                  dev: "node index.js",
                },
              },
              null,
              2
            ),
          },
        },
        "index.js": {
          file: {
            contents: '// Welcome to TechPath sandbox!\nconsole.log("Hello from TechPath! 🚀");\n',
          },
        },
        "README.md": {
          file: {
            contents:
              "# TechPath Sandbox\\n\\nThis is a real Node.js environment running in your browser.\\nTry running: node index.js\\n",
          },
        },
      });

      // Start a shell (jsh - the built-in WebContainer shell)
      const shell = await instance.spawn("jsh", [], {
        terminal: { cols: term.cols, rows: term.rows },
      });

      // Pipe shell output → xterm
      shell.output.pipeTo(
        new WritableStream({
          write(data) {
            term.write(data);
          },
        })
      );

      // Pipe xterm input → shell stdin
      const writer = shell.input.getWriter();
      shellInputRef.current = writer;

      term.onData((data: string) => {
        writer.write(data);
      });

      // Handle resize
      term.onResize(({ cols, rows }: { cols: number; rows: number }) => {
        // WebContainers jsh handles resize via the terminal size passed at spawn.
        // For dynamic resize we'd need to restart the shell or use a PTY-aware approach.
        // This is a known limitation of jsh.
      });

      // Clear the booting message and show a welcome
      term.clear();
      term.writeln("\x1b[32m✅ WebContainer ready!\x1b[0m");
      term.writeln(
        "\x1b[90mReal Node.js environment in your browser. Try: node index.js\x1b[0m"
      );
      term.writeln("");

      setBootState("ready");
    } catch (err) {
      console.error("WebContainer boot error:", err);
      setBootState("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Failed to boot WebContainer. Try refreshing."
      );
    }
  }, [isSupported]);

  // Boot on mount
  useEffect(() => {
    boot();

    return () => {
      // Cleanup
      xtermRef.current?.dispose();
      containerRef.current?.teardown();
      bootedRef.current = false;
    };
  }, [boot]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (fitAddonRef.current && xtermRef.current) {
        try {
          fitAddonRef.current.fit();
        } catch {
          // Ignore fit errors during transitions
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleRestart = useCallback(async () => {
    // Teardown existing
    xtermRef.current?.dispose();
    xtermRef.current = null;
    containerRef.current?.teardown();
    containerRef.current = null;
    shellInputRef.current = null;
    fitAddonRef.current = null;
    bootedRef.current = false;

    // Re-boot
    await boot();
  }, [boot]);

  // Unsupported state
  if (bootState === "unsupported") {
    return (
      <div className="bg-zinc-950 text-zinc-100 font-mono text-sm p-6 h-80 flex flex-col items-center justify-center gap-3">
        <AlertTriangle className="h-8 w-8 text-yellow-500" />
        <p className="text-center text-zinc-400 max-w-md">{errorMsg}</p>
        <p className="text-xs text-zinc-500">
          The simulated terminal is available as a fallback.
        </p>
      </div>
    );
  }

  // Error state
  if (bootState === "error") {
    return (
      <div className="bg-zinc-950 text-zinc-100 font-mono text-sm p-6 h-80 flex flex-col items-center justify-center gap-3">
        <AlertTriangle className="h-8 w-8 text-red-500" />
        <p className="text-center text-zinc-400 max-w-md">{errorMsg}</p>
        <Button
          variant="outline"
          size="sm"
          onClick={handleRestart}
          className="gap-2"
        >
          <RotateCcw className="h-3 w-3" />
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-zinc-950 text-zinc-100 font-mono text-sm relative">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-3 py-1 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          {bootState === "booting" && (
            <span className="flex items-center gap-1.5 text-xs text-yellow-400">
              <Loader2 className="h-3 w-3 animate-spin" />
              Booting Node.js...
            </span>
          )}
          {bootState === "ready" && (
            <span className="text-xs text-green-400">● Node.js</span>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 text-zinc-400 hover:text-zinc-100"
          onClick={handleRestart}
          disabled={bootState === "booting"}
        >
          <RotateCcw className="h-3 w-3" />
        </Button>
      </div>

      {/* Terminal */}
      <div
        ref={terminalRef}
        className="h-80 px-1 py-1"
        style={{ backgroundColor: "#09090b" }}
      />

      {/* Loading overlay */}
      {bootState === "booting" && (
        <div className="absolute inset-0 top-8 bg-zinc-950/80 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-6 w-6 animate-spin text-green-400" />
            <span className="text-xs text-zinc-400">
              Starting environment...
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
