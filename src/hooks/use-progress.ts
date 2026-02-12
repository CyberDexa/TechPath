"use client";

import { useState, useEffect, useCallback } from "react";

interface LessonProgressData {
  lessonId: string;
  moduleId: string;
  trackId: string;
  completed: boolean;
  videoWatched: boolean;
  terminalDone: boolean;
  projectDone: boolean;
}

interface ProgressStats {
  completedLessons: number;
  currentStreak: number;
  longestStreak: number;
  badges: { id: string; name: string; earnedAt: string }[];
  moduleCompletion: Record<string, number>;
}

export function useProgress() {
  const [progress, setProgress] = useState<LessonProgressData[]>([]);
  const [stats, setStats] = useState<ProgressStats | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProgress = useCallback(async () => {
    try {
      const res = await fetch("/api/progress");
      if (res.ok) {
        const data = await res.json();
        setProgress(data.progress || []);
      }
    } catch (err) {
      console.error("Failed to fetch progress:", err);
    }
  }, []);

  const fetchStats = useCallback(async () => {
    try {
      const res = await fetch("/api/progress/stats");
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch (err) {
      console.error("Failed to fetch stats:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProgress();
    fetchStats();
  }, [fetchProgress, fetchStats]);

  const updateProgress = useCallback(
    async (
      lessonId: string,
      moduleId: string,
      trackId: string,
      updates: Partial<Pick<LessonProgressData, "completed" | "videoWatched" | "terminalDone" | "projectDone">>
    ) => {
      try {
        const res = await fetch("/api/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ lessonId, moduleId, trackId, ...updates }),
        });
        if (res.ok) {
          // Refresh all data
          await Promise.all([fetchProgress(), fetchStats()]);
        }
        return res.ok;
      } catch (err) {
        console.error("Failed to update progress:", err);
        return false;
      }
    },
    [fetchProgress, fetchStats]
  );

  const isLessonCompleted = useCallback(
    (lessonId: string) => {
      return progress.some((p) => p.lessonId === lessonId && p.completed);
    },
    [progress]
  );

  const getModuleCompletedCount = useCallback(
    (moduleId: string) => {
      return progress.filter((p) => p.moduleId === moduleId && p.completed).length;
    },
    [progress]
  );

  return {
    progress,
    stats,
    loading,
    updateProgress,
    isLessonCompleted,
    getModuleCompletedCount,
    refetch: () => Promise.all([fetchProgress(), fetchStats()]),
  };
}
