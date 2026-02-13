"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useChat } from "@ai-sdk/react";
import { useLearningContext } from "@/lib/learning-context";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  X,
  Send,
  Loader2,
  Sparkles,
  Trash2,
  Minimize2,
  Maximize2,
} from "lucide-react";

// Simple markdown-ish rendering for chat messages
function formatMessage(content: string) {
  // Split into blocks for code blocks vs text
  const parts = content.split(/(```[\s\S]*?```)/g);

  return parts.map((part, i) => {
    // Code block
    if (part.startsWith("```")) {
      const lines = part.split("\n");
      const lang = lines[0].replace("```", "").trim();
      const code = lines.slice(1, -1).join("\n");
      return (
        <div key={i} className="my-2">
          {lang && (
            <div className="text-[10px] text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-t border border-b-0 border-zinc-700 w-fit">
              {lang}
            </div>
          )}
          <pre className="text-xs bg-zinc-900 text-zinc-200 p-3 rounded-lg border border-zinc-700 overflow-x-auto whitespace-pre-wrap">
            <code>{code}</code>
          </pre>
        </div>
      );
    }

    // Inline formatting
    const formatted = part
      .split("\n")
      .map((line, j) => {
        // Bold
        let processed = line.replace(
          /\*\*(.+?)\*\*/g,
          '<strong class="font-semibold">$1</strong>'
        );
        // Inline code
        processed = processed.replace(
          /`([^`]+)`/g,
          '<code class="bg-muted px-1 py-0.5 rounded text-xs font-mono">$1</code>'
        );
        // Headers
        if (processed.startsWith("### "))
          return (
            <h4 key={j} className="font-semibold text-sm mt-2 mb-1">
              {processed.slice(4)}
            </h4>
          );
        if (processed.startsWith("## "))
          return (
            <h3 key={j} className="font-semibold text-sm mt-2 mb-1">
              {processed.slice(3)}
            </h3>
          );
        // List items
        if (processed.startsWith("- ") || processed.startsWith("* "))
          return (
            <li
              key={j}
              className="ml-4 list-disc text-sm"
              dangerouslySetInnerHTML={{ __html: processed.slice(2) }}
            />
          );
        // Numbered list
        if (/^\d+\.\s/.test(processed))
          return (
            <li
              key={j}
              className="ml-4 list-decimal text-sm"
              dangerouslySetInnerHTML={{
                __html: processed.replace(/^\d+\.\s/, ""),
              }}
            />
          );
        // Empty line
        if (!processed.trim()) return <br key={j} />;
        // Normal text
        return (
          <p
            key={j}
            className="text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: processed }}
          />
        );
      });

    return <div key={i}>{formatted}</div>;
  });
}

const SUGGESTED_QUESTIONS = [
  "Explain this concept simply",
  "Give me a code example",
  "What should I learn next?",
  "Quiz me on this topic",
];

/** Extract text content from a v6 UIMessage (parts-based) */
function getMessageText(message: { parts?: Array<{ type: string; text?: string }>; content?: string }): string {
  // v6: use parts array
  if (message.parts) {
    return message.parts
      .filter((p) => p.type === "text" && p.text)
      .map((p) => p.text)
      .join("");
  }
  // fallback: content string (v5 compat)
  if (typeof message.content === "string") return message.content;
  return "";
}

export function AIChatPanel() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const context = useLearningContext();

  const { messages, sendMessage, status, setMessages, stop } = useChat();

  const isLoading = status === "streaming" || status === "submitted";

  // Build rich context body for the API
  const requestBody = context
    ? {
        context: {
          trackId: context.trackId,
          trackTitle: context.trackTitle,
          trackCategory: context.trackCategory,
          moduleId: context.moduleId,
          moduleTitle: context.moduleTitle,
          moduleDescription: context.moduleDescription,
          lessonTitles: context.lessonTitles,
          projectTitle: context.projectTitle,
          projectDescription: context.projectDescription,
          lessonId: context.lessonId,
          lessonTitle: context.lessonTitle,
          lessonDescription: context.lessonDescription,
        },
      }
    : undefined;

  // Auto-scroll on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Mark as mounted after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSend = useCallback(
    (text?: string) => {
      const msg = text ?? input.trim();
      if (!msg || isLoading) return;
      sendMessage({ text: msg }, { body: requestBody });
      setInput("");
      // Reset textarea height
      if (inputRef.current) {
        inputRef.current.style.height = "auto";
      }
    },
    [input, isLoading, sendMessage, requestBody]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClear = () => {
    setMessages([]);
  };

  // Don't render until after hydration to avoid mismatch
  if (!mounted) return null;

  // Only show on module/lesson pages (when learning context is set)
  if (!context) return null;

  return (
    <>
      {/* Floating trigger button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
          aria-label="Open AI Tutor"
        >
          <Sparkles className="h-5 w-5" />
          <span className="text-sm font-medium hidden sm:inline">AI Tutor</span>
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 ease-in-out ${
            isExpanded
              ? "inset-4 md:inset-8"
              : "bottom-4 right-4 w-[calc(100vw-2rem)] sm:w-[400px] h-[min(600px,calc(100vh-2rem))]"
          }`}
        >
          <Card className="flex flex-col h-full shadow-2xl border-border/50 overflow-hidden bg-background/95 backdrop-blur-sm">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/30">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">TechPath AI</h3>
                  <p className="text-[10px] text-muted-foreground">
                    Learning assistant
                  </p>
                </div>
                {context?.trackId && (
                  <Badge variant="secondary" className="text-[10px] ml-1">
                    {context.trackTitle ?? context.trackId}
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-muted-foreground"
                    onClick={handleClear}
                    title="Clear chat"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-muted-foreground hidden sm:flex"
                  onClick={() => setIsExpanded(!isExpanded)}
                  title={isExpanded ? "Minimize" : "Maximize"}
                >
                  {isExpanded ? (
                    <Minimize2 className="h-3.5 w-3.5" />
                  ) : (
                    <Maximize2 className="h-3.5 w-3.5" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-muted-foreground"
                  onClick={() => {
                    setIsOpen(false);
                    setIsExpanded(false);
                  }}
                  title="Close"
                >
                  <X className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full px-6 py-8 text-center">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-1">Hi! I&apos;m TechPath AI</h4>
                  <p className="text-sm text-muted-foreground mb-6 max-w-[260px]">
                    Your personal learning assistant. Ask me anything about your
                    current lesson or any tech topic.
                  </p>
                  <div className="grid grid-cols-1 gap-2 w-full max-w-[280px]">
                    {SUGGESTED_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => handleSend(q)}
                        className="text-left text-xs px-3 py-2 rounded-lg border hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="px-4 py-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-2.5 ${
                        message.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {message.role === "assistant" && (
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Bot className="h-3 w-3 text-primary" />
                        </div>
                      )}
                      <div
                        className={`max-w-[85%] rounded-xl px-3.5 py-2.5 ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted/60 border"
                        }`}
                      >
                        {message.role === "user" ? (
                          <p className="text-sm">{getMessageText(message)}</p>
                        ) : (
                          <div className="prose-sm">
                            {formatMessage(getMessageText(message))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-2.5">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Bot className="h-3 w-3 text-primary" />
                      </div>
                      <div className="bg-muted/60 border rounded-xl px-3.5 py-2.5">
                        <div className="flex items-center gap-1">
                          <div className="h-1.5 w-1.5 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:0ms]" />
                          <div className="h-1.5 w-1.5 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:150ms]" />
                          <div className="h-1.5 w-1.5 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:300ms]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t p-3 bg-background">
              <div className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask anything..."
                  rows={1}
                  className="flex-1 resize-none bg-muted/50 border rounded-xl px-3 py-2 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 max-h-32"
                  style={{
                    height: "auto",
                    minHeight: "36px",
                  }}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = "auto";
                    target.style.height =
                      Math.min(target.scrollHeight, 128) + "px";
                  }}
                />
                <Button
                  type="button"
                  size="icon"
                  className="h-9 w-9 rounded-xl shrink-0"
                  disabled={isLoading || !input.trim()}
                  onClick={() => handleSend()}
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <p className="text-[10px] text-muted-foreground/50 text-center mt-1.5">
                AI can make mistakes. Verify important information.
              </p>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}
