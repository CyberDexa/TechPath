"use client";

import { createContext, useContext, useState, useEffect } from "react";

/**
 * Rich learning context passed to the AI tutor.
 * Set by lesson-client and module pages so the AI has full awareness
 * of what the learner is currently studying.
 */
export interface LearningContextData {
  trackId: string;
  trackTitle: string;
  trackCategory: string;
  moduleId: string;
  moduleTitle: string;
  moduleDescription: string;
  lessonTitles: string[];
  projectTitle: string;
  projectDescription: string;
  // Only set on lesson pages
  lessonId?: string;
  lessonTitle?: string;
  lessonDescription?: string;
}

interface LearningContextValue {
  context: LearningContextData | null;
  setContext: (ctx: LearningContextData | null) => void;
}

const LearningContext = createContext<LearningContextValue>({
  context: null,
  setContext: () => {},
});

export function LearningContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [context, setContext] = useState<LearningContextData | null>(null);

  return (
    <LearningContext.Provider value={{ context, setContext }}>
      {children}
    </LearningContext.Provider>
  );
}

/**
 * Hook for reading current learning context (used by AIChatPanel).
 */
export function useLearningContext() {
  return useContext(LearningContext).context;
}

/**
 * Hook for setting learning context from page components.
 * Cleans up (sets null) on unmount so the AI tutor hides
 * when navigating away from learn pages.
 */
export function useSetLearningContext(data: LearningContextData | null) {
  const { setContext } = useContext(LearningContext);

  useEffect(() => {
    setContext(data);
    return () => setContext(null);
    // Only re-set when the identifying fields change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.trackId, data?.moduleId, data?.lessonId, setContext]);
}
