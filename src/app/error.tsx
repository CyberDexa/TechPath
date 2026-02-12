"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw, Home } from "lucide-react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-destructive/10 mb-6">
        <span className="text-4xl">⚠️</span>
      </div>
      <h1 className="text-3xl font-bold mb-2">Something went wrong</h1>
      <p className="text-muted-foreground mb-2 max-w-md">
        An unexpected error occurred. This has been logged and we&apos;ll look into it.
      </p>
      {error.digest && (
        <p className="text-xs text-muted-foreground mb-6 font-mono">Error ID: {error.digest}</p>
      )}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button onClick={reset} variant="outline" className="gap-2">
          <RotateCcw className="h-4 w-4" />
          Try Again
        </Button>
        <Link href="/">
          <Button className="gap-2 w-full">
            <Home className="h-4 w-4" />
            Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
