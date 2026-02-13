"use client";

import { useSetLearningContext, type LearningContextData } from "@/lib/learning-context";

/**
 * Invisible client component that sets the LearningContext.
 * Used on server-rendered pages (e.g. module page) so the
 * AI tutor can access curriculum data without importing it client-side.
 */
export function LearningContextSetter({ data }: { data: LearningContextData }) {
  useSetLearningContext(data);
  return null;
}
