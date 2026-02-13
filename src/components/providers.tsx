"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { LearningContextProvider } from "@/lib/learning-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <LearningContextProvider>
          {children}
        </LearningContextProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
