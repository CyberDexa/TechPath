"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw, Copy, Check } from "lucide-react";

interface TerminalLine {
  type: "input" | "output" | "error" | "system";
  content: string;
}

export function TerminalComponent() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: "system",
      content: "Welcome to the DevOps Learning Terminal! 🚀",
    },
    {
      type: "system",
      content: "This is a simulated shell environment for practice.",
    },
    {
      type: "system",
      content: 'Type commands below and press Enter. Try "help" to get started.\n',
    },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [cwd, setCwd] = useState("/home/learner");
  const [copied, setCopied] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Virtual file system
  const [fileSystem, setFileSystem] = useState<Record<string, string>>({
    "/home/learner/README.md": "# Welcome to DevOps Learning\nStart practicing commands!",
    "/home/learner/hello.txt": "Hello, World!",
    "/home/learner/projects/": "",
    "/home/learner/.bashrc": "# Bash config\nexport PS1='$ '",
  });

  const scrollToBottom = useCallback(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const addLine = useCallback(
    (type: TerminalLine["type"], content: string) => {
      setLines((prev) => [...prev, { type, content }]);
    },
    []
  );

  const listFiles = useCallback(
    (path: string, showHidden: boolean = false) => {
      const targetPath = path.endsWith("/") ? path : path + "/";
      const entries = new Set<string>();

      Object.keys(fileSystem).forEach((fp) => {
        if (fp.startsWith(targetPath)) {
          const rest = fp.slice(targetPath.length);
          const parts = rest.split("/");
          if (parts[0]) {
            const name = parts.length > 1 ? parts[0] + "/" : parts[0];
            if (showHidden || !name.startsWith(".")) {
              entries.add(name);
            }
          }
        }
      });

      return Array.from(entries).sort();
    },
    [fileSystem]
  );

  const resolvePath = useCallback(
    (inputPath: string) => {
      if (inputPath.startsWith("/")) return inputPath;
      if (inputPath.startsWith("~")) return "/home/learner" + inputPath.slice(1);

      const parts = (cwd + "/" + inputPath).split("/").filter(Boolean);
      const resolved: string[] = [];
      for (const part of parts) {
        if (part === "..") resolved.pop();
        else if (part !== ".") resolved.push(part);
      }
      return "/" + resolved.join("/");
    },
    [cwd]
  );

  const executeCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim();
      if (!trimmed) return;

      addLine("input", `${cwd} $ ${trimmed}`);
      setCommandHistory((prev) => [...prev, trimmed]);
      setHistoryIndex(-1);

      const parts = trimmed.split(/\s+/);
      const command = parts[0];
      const args = parts.slice(1);

      switch (command) {
        case "help":
          addLine(
            "output",
            `Available commands:
  help          - Show this help message
  echo <text>   - Print text
  pwd           - Print working directory
  ls [path]     - List directory contents
  cd <dir>      - Change directory
  mkdir <dir>   - Create directory
  touch <file>  - Create empty file
  cat <file>    - Show file contents
  rm <file>     - Remove file
  cp <src> <dst>- Copy file
  mv <src> <dst>- Move/rename file
  whoami        - Show current user
  date          - Show current date
  clear         - Clear terminal
  history       - Show command history
  uname -a      - System information
  which <cmd>   - Show command location
  grep <pattern> <file> - Search in file
  chmod <mode> <file> - Change permissions
  nano <file>   - Edit file (simulated)
  python3 -c <code> - Run Python code
  git <cmd>     - Git commands (simulated)
  docker <cmd>  - Docker commands (simulated)
  curl <url>    - HTTP request (simulated)
  ssh-keygen    - Generate SSH key (simulated)
  nslookup <d>  - DNS lookup (simulated)`
          );
          break;

        case "echo":
          const echoArgs = trimmed.slice(5);
          // Handle redirect
          if (echoArgs.includes(">")) {
            const [text, file] = echoArgs.split(">").map((s) => s.trim().replace(/['"]/g, ""));
            const filePath = resolvePath(file);
            setFileSystem((prev) => ({ ...prev, [filePath]: text }));
            addLine("system", `Written to ${file}`);
          } else {
            addLine("output", echoArgs.replace(/['"]/g, ""));
          }
          break;

        case "pwd":
          addLine("output", cwd);
          break;

        case "ls": {
          const showAll = args.includes("-la") || args.includes("-a") || args.includes("-al");
          const pathArg = args.filter((a) => !a.startsWith("-"))[0];
          const targetPath = pathArg ? resolvePath(pathArg) : cwd;
          const files = listFiles(targetPath, showAll);
          if (files.length === 0) {
            addLine("output", "(empty directory)");
          } else if (showAll) {
            addLine("output", "total " + files.length);
            files.forEach((f) => {
              const isDir = f.endsWith("/");
              addLine(
                "output",
                `${isDir ? "drwxr-xr-x" : "-rw-r--r--"}  1 learner learner  4096  Feb  8 12:00 ${f}`
              );
            });
          } else {
            addLine("output", files.join("  "));
          }
          break;
        }

        case "cd": {
          if (!args[0] || args[0] === "~") {
            setCwd("/home/learner");
          } else {
            const newPath = resolvePath(args[0]);
            // Check if directory exists
            const dirPath = newPath.endsWith("/") ? newPath : newPath + "/";
            const exists = Object.keys(fileSystem).some(
              (fp) => fp.startsWith(dirPath) || fp === newPath
            );
            if (exists || newPath === "/home/learner" || newPath === "/home" || newPath === "/") {
              setCwd(newPath);
            } else {
              addLine("error", `cd: no such file or directory: ${args[0]}`);
            }
          }
          break;
        }

        case "mkdir": {
          if (!args[0]) {
            addLine("error", "mkdir: missing operand");
            break;
          }
          const mkdirFlags = args.includes("-p");
          const dirName = args.filter((a) => !a.startsWith("-"))[0];
          const dirPath = resolvePath(dirName) + "/";
          setFileSystem((prev) => ({ ...prev, [dirPath]: "" }));
          addLine("system", `Directory created: ${dirName}`);
          break;
        }

        case "touch": {
          if (!args[0]) {
            addLine("error", "touch: missing file operand");
            break;
          }
          const touchPath = resolvePath(args[0]);
          setFileSystem((prev) => ({ ...prev, [touchPath]: prev[touchPath] || "" }));
          break;
        }

        case "cat": {
          if (!args[0]) {
            addLine("error", "cat: missing file operand");
            break;
          }
          const catPath = resolvePath(args[0]);
          if (fileSystem[catPath] !== undefined) {
            addLine("output", fileSystem[catPath] || "(empty file)");
          } else {
            addLine("error", `cat: ${args[0]}: No such file or directory`);
          }
          break;
        }

        case "rm": {
          if (!args[0]) {
            addLine("error", "rm: missing operand");
            break;
          }
          const rmPath = resolvePath(args[0]);
          if (fileSystem[rmPath] !== undefined) {
            setFileSystem((prev) => {
              const next = { ...prev };
              delete next[rmPath];
              return next;
            });
          } else {
            addLine("error", `rm: cannot remove '${args[0]}': No such file or directory`);
          }
          break;
        }

        case "cp": {
          if (args.length < 2) {
            addLine("error", "cp: missing destination file operand");
            break;
          }
          const cpSrc = resolvePath(args[0]);
          const cpDst = resolvePath(args[1]);
          if (fileSystem[cpSrc] !== undefined) {
            setFileSystem((prev) => ({ ...prev, [cpDst]: prev[cpSrc] }));
          } else {
            addLine("error", `cp: cannot stat '${args[0]}': No such file or directory`);
          }
          break;
        }

        case "mv": {
          if (args.length < 2) {
            addLine("error", "mv: missing destination file operand");
            break;
          }
          const mvSrc = resolvePath(args[0]);
          const mvDst = resolvePath(args[1]);
          if (fileSystem[mvSrc] !== undefined) {
            setFileSystem((prev) => {
              const next = { ...prev, [mvDst]: prev[mvSrc] };
              delete next[mvSrc];
              return next;
            });
          } else {
            addLine("error", `mv: cannot stat '${args[0]}': No such file or directory`);
          }
          break;
        }

        case "whoami":
          addLine("output", "learner");
          break;

        case "date":
          addLine("output", new Date().toString());
          break;

        case "clear":
          setLines([]);
          break;

        case "history":
          commandHistory.forEach((cmd, i) => {
            addLine("output", `  ${i + 1}  ${cmd}`);
          });
          break;

        case "uname":
          addLine("output", "Linux devops-learner 5.15.0 #1 SMP x86_64 GNU/Linux");
          break;

        case "which":
          if (args[0]) {
            const knownCmds = ["git", "docker", "python3", "node", "npm", "curl", "ssh", "nano", "vim"];
            if (knownCmds.includes(args[0])) {
              addLine("output", `/usr/bin/${args[0]}`);
            } else {
              addLine("error", `${args[0]} not found`);
            }
          }
          break;

        case "chmod": {
          if (args.length < 2) {
            addLine("error", "chmod: missing operand");
            break;
          }
          const chmodPath = resolvePath(args[args.length - 1]);
          if (fileSystem[chmodPath] !== undefined) {
            addLine("system", `Permissions changed for ${args[args.length - 1]}`);
          } else {
            addLine("error", `chmod: cannot access '${args[args.length - 1]}': No such file or directory`);
          }
          break;
        }

        case "nano": {
          if (!args[0]) {
            addLine("error", "nano: missing filename");
            break;
          }
          const nanoPath = resolvePath(args[0]);
          addLine("system", `[nano editor simulation for ${args[0]}]`);
          addLine("system", "Use 'echo \"content\" > filename' to write to files in this terminal.");
          if (fileSystem[nanoPath] === undefined) {
            setFileSystem((prev) => ({ ...prev, [nanoPath]: "" }));
          }
          break;
        }

        case "grep": {
          if (args.length < 2) {
            addLine("error", "grep: missing pattern or file");
            break;
          }
          const pattern = args[0].replace(/['"]/g, "");
          const grepFile = resolvePath(args[1]);
          if (fileSystem[grepFile] !== undefined) {
            const matches = fileSystem[grepFile]
              .split("\n")
              .filter((line) => line.toLowerCase().includes(pattern.toLowerCase()));
            if (matches.length > 0) {
              matches.forEach((m) => addLine("output", m));
            } else {
              addLine("output", "(no matches)");
            }
          } else {
            addLine("error", `grep: ${args[1]}: No such file or directory`);
          }
          break;
        }

        case "python3": {
          if (args[0] === "-c" && args.length > 1) {
            const code = trimmed.slice(trimmed.indexOf("-c") + 3).replace(/['"]/g, "");
            addLine("system", `[Python simulation]`);
            if (code.includes("print")) {
              const match = code.match(/print\((.+)\)/);
              if (match) {
                addLine("output", match[1].replace(/['"f{}]/g, "").replace(/\\n/g, "\n"));
              }
            } else {
              addLine("output", code);
            }
          } else if (args[0]) {
            addLine("system", `[Would run: python3 ${args.join(" ")}]`);
            addLine("output", "Python script executed successfully.");
          } else {
            addLine("system", "Python 3.11.0 (simulated)");
            addLine("system", 'Type python3 -c "print(\'hello\')" to run code');
          }
          break;
        }

        case "git": {
          const gitCmd = args[0];
          switch (gitCmd) {
            case "init":
              const initDir = args[1] || ".";
              addLine("output", `Initialized empty Git repository in ${resolvePath(initDir)}/.git/`);
              break;
            case "add":
              addLine("output", `Added ${args[1] || "all files"} to staging area`);
              break;
            case "commit":
              const msg = trimmed.includes("-m") ? trimmed.split("-m")[1].trim().replace(/['"]/g, "") : "commit";
              addLine("output", `[main abc1234] ${msg}`);
              addLine("output", " 1 file changed, 1 insertion(+)");
              break;
            case "status":
              addLine("output", "On branch main\nnothing to commit, working tree clean");
              break;
            case "log":
              addLine("output", "abc1234 (HEAD -> main) Initial commit");
              break;
            case "branch":
              addLine("output", "* main");
              break;
            case "checkout":
              if (args[1] === "-b") {
                addLine("output", `Switched to a new branch '${args[2] || "new-branch"}'`);
              } else {
                addLine("output", `Switched to branch '${args[1] || "main"}'`);
              }
              break;
            case "merge":
              addLine("output", `Merge made by the 'ort' strategy.\n 1 file changed, 1 insertion(+)`);
              break;
            case "remote":
              addLine("output", `origin added: ${args[2] || "https://github.com/user/repo.git"}`);
              break;
            case "push":
              addLine("output", `Enumerating objects: 3, done.\nCounting objects: 100% (3/3), done.\nTo ${args[1] || "origin"}\n   abc1234..def5678  main -> main`);
              break;
            default:
              addLine("output", `git: '${gitCmd}' simulated successfully`);
          }
          break;
        }

        case "docker": {
          const dockerCmd = args[0];
          switch (dockerCmd) {
            case "--version":
              addLine("output", "Docker version 24.0.7, build afdd53b");
              break;
            case "pull":
              addLine("output", `Using default tag: latest\nPulling ${args[1] || "image"}...\nDigest: sha256:abc123...\nStatus: Downloaded newer image`);
              break;
            case "run":
              addLine("output", `Container started: ${args[args.length - 1] || "container"}`);
              if (args.includes("hello-world")) {
                addLine("output", "\nHello from Docker!\nThis message shows that your installation appears to be working correctly.");
              }
              break;
            case "ps":
              addLine("output", "CONTAINER ID   IMAGE   COMMAND   CREATED   STATUS   PORTS   NAMES");
              break;
            case "images":
              addLine("output", "REPOSITORY   TAG       IMAGE ID       CREATED        SIZE\nhello-world  latest    feb5d9fea6a5   18 months ago  13.3kB");
              break;
            case "build":
              addLine("output", `Building image...\nStep 1/3 : FROM nginx:alpine\nStep 2/3 : COPY . /usr/share/nginx/html\nStep 3/3 : EXPOSE 80\nSuccessfully built abc123def456`);
              break;
            case "compose":
              addLine("output", `Docker Compose: ${args[1] || "command"} executed successfully`);
              break;
            case "network":
              addLine("output", `Network ${args[1] || "command"}: done`);
              break;
            case "volume":
              addLine("output", `Volume ${args[1] || "command"}: done`);
              break;
            default:
              addLine("output", `docker: '${dockerCmd}' simulated successfully`);
          }
          break;
        }

        case "curl": {
          const url = args.filter((a) => !a.startsWith("-"))[0] || "example.com";
          if (args.includes("-I") || args.includes("-i")) {
            addLine("output", `HTTP/2 200\ncontent-type: text/html; charset=UTF-8\ndate: ${new Date().toUTCString()}\nserver: nginx/1.24.0`);
          } else if (args.includes("-v")) {
            addLine("output", `* Trying ${url}...\n* Connected to ${url}\n> GET / HTTP/2\n< HTTP/2 200\n< content-type: text/html\n\n{"status": "ok", "message": "Hello from ${url}"}`);
          } else {
            addLine("output", `{"status": "ok", "url": "${url}"}`);
          }
          break;
        }

        case "ssh-keygen": {
          addLine("output", `Generating public/private ed25519 key pair.\nYour identification has been saved in /home/learner/.ssh/id_ed25519\nYour public key has been saved in /home/learner/.ssh/id_ed25519.pub\nThe key fingerprint is:\nSHA256:abcdefg12345 devops@learn`);
          setFileSystem((prev) => ({
            ...prev,
            "/home/learner/.ssh/id_ed25519": "-----BEGIN OPENSSH PRIVATE KEY-----\n(private key content)\n-----END OPENSSH PRIVATE KEY-----",
            "/home/learner/.ssh/id_ed25519.pub": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI... devops@learn",
          }));
          break;
        }

        case "nslookup": {
          const domain = args[0] || "example.com";
          addLine("output", `Server:\t\t8.8.8.8\nAddress:\t8.8.8.8#53\n\nNon-authoritative answer:\nName:\t${domain}\nAddress: 93.184.216.34`);
          break;
        }

        case "dig": {
          const digDomain = args[0] || "example.com";
          addLine("output", `;; ANSWER SECTION:\n${digDomain}.\t\t300\tIN\tA\t93.184.216.34\n\n;; Query time: 24 msec\n;; SERVER: 8.8.8.8#53(8.8.8.8)`);
          break;
        }

        case "terraform": {
          addLine("output", `Terraform v1.6.0 (simulated)\n${args[0] ? `terraform ${args.join(" ")} completed successfully` : "Usage: terraform <command> [args]"}`);
          break;
        }

        case "ansible": {
          addLine("output", `ansible [core 2.16.0] (simulated)\n${args[0] ? `ansible ${args.join(" ")} executed` : "Usage: ansible <host-pattern> [options]"}`);
          break;
        }

        case "dvc": {
          addLine("output", `DVC version 3.30.0 (simulated)\n${args[0] ? `dvc ${args.join(" ")} completed` : "Usage: dvc <command> [args]"}`);
          break;
        }

        case "pip":
        case "pip3": {
          if (args[0] === "install") {
            addLine("output", `Successfully installed ${args.slice(1).join(" ")}`);
          } else {
            addLine("output", `pip ${args.join(" ")} executed`);
          }
          break;
        }

        case "npm": {
          if (args[0] === "install") {
            addLine("output", `added ${Math.floor(Math.random() * 100) + 50} packages in ${(Math.random() * 5 + 1).toFixed(1)}s`);
          } else if (args[0] === "test") {
            addLine("output", "Test Suites: 3 passed, 3 total\nTests:       12 passed, 12 total");
          } else {
            addLine("output", `npm ${args.join(" ")} executed`);
          }
          break;
        }

        case "node": {
          addLine("output", args[0] === "-v" ? "v20.10.0" : "Node.js REPL (simulated)");
          break;
        }

        default:
          addLine("error", `${command}: command not found. Type 'help' for available commands.`);
      }
    },
    [addLine, cwd, fileSystem, commandHistory, listFiles, resolvePath]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(currentInput);
      setCurrentInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput("");
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      // Simple tab completion for files
      if (currentInput) {
        const parts = currentInput.split(/\s+/);
        const lastPart = parts[parts.length - 1];
        const targetPath = resolvePath(lastPart || ".");
        const dir = targetPath.substring(0, targetPath.lastIndexOf("/") + 1) || cwd + "/";
        const prefix = lastPart.split("/").pop() || "";
        const files = listFiles(dir, true);
        const matches = files.filter((f) => f.startsWith(prefix));
        if (matches.length === 1) {
          parts[parts.length - 1] = lastPart.substring(0, lastPart.lastIndexOf("/") + 1) + matches[0];
          setCurrentInput(parts.join(" "));
        } else if (matches.length > 1) {
          addLine("output", matches.join("  "));
        }
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  const handleReset = () => {
    setLines([
      { type: "system", content: "Terminal reset. 🔄" },
      { type: "system", content: 'Type "help" to see available commands.\n' },
    ]);
    setCwd("/home/learner");
    setCommandHistory([]);
    setHistoryIndex(-1);
    setFileSystem({
      "/home/learner/README.md": "# Welcome to DevOps Learning\nStart practicing commands!",
      "/home/learner/hello.txt": "Hello, World!",
      "/home/learner/projects/": "",
      "/home/learner/.bashrc": "# Bash config\nexport PS1='$ '",
    });
  };

  const handleCopy = () => {
    const text = lines.map((l) => l.content).join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="bg-zinc-950 text-zinc-100 font-mono text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Toolbar */}
      <div className="flex items-center justify-end gap-1 px-3 py-1 border-b border-zinc-800">
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 text-zinc-400 hover:text-zinc-100"
          onClick={handleCopy}
        >
          {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 text-zinc-400 hover:text-zinc-100"
          onClick={handleReset}
        >
          <RotateCcw className="h-3 w-3" />
        </Button>
      </div>

      {/* Terminal output */}
      <div
        ref={terminalRef}
        className="h-80 overflow-y-auto px-4 py-3 space-y-0.5 scroll-smooth"
      >
        {lines.map((line, i) => (
          <div
            key={i}
            className={`whitespace-pre-wrap break-words leading-relaxed ${
              line.type === "input"
                ? "text-green-400"
                : line.type === "error"
                ? "text-red-400"
                : line.type === "system"
                ? "text-yellow-400/80"
                : "text-zinc-300"
            }`}
          >
            {line.content}
          </div>
        ))}

        {/* Input line */}
        <div className="flex items-center gap-2 text-green-400">
          <span className="text-blue-400 shrink-0">
            {cwd.replace("/home/learner", "~")} $
          </span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-zinc-100 caret-green-400"
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
          />
        </div>
      </div>
    </div>
  );
}
