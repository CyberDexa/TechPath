"use client";

import { useProgress } from "@/hooks/use-progress";
import { Progress } from "@/components/ui/progress";
import { CheckCircle } from "lucide-react";

interface ModuleProgressBarProps {
  moduleId: string;
  lessonCount: number;
}

export function ModuleProgressBar({ moduleId, lessonCount }: ModuleProgressBarProps) {
  const { getModuleCompletedCount } = useProgress();
  const completed = getModuleCompletedCount(moduleId);

  if (completed === 0) return null;

  const pct = lessonCount > 0 ? Math.round((completed / lessonCount) * 100) : 0;

  return (
    <div className="flex items-center gap-3 mt-4 p-3 rounded-lg bg-muted/50 border">
      <CheckCircle className={`h-5 w-5 shrink-0 ${pct === 100 ? "text-green-500" : "text-muted-foreground"}`} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium">
            {pct === 100 ? "Module Complete!" : "Progress"}
          </span>
          <span className="text-xs text-muted-foreground">
            {completed}/{lessonCount} lessons
          </span>
        </div>
        <Progress value={pct} className="h-2" />
      </div>
    </div>
  );
}

interface LessonCheckProps {
  lessonId: string;
  index: number;
}

export function LessonCheck({ lessonId, index }: LessonCheckProps) {
  const { isLessonCompleted } = useProgress();
  const done = isLessonCompleted(lessonId);

  if (done) {
    return (
      <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
        <CheckCircle className="h-5 w-5 text-green-500" />
      </div>
    );
  }

  return (
    <div className="h-10 w-10 rounded-full border-2 border-muted-foreground/20 flex items-center justify-center text-sm font-medium shrink-0">
      {index + 1}
    </div>
  );
}
