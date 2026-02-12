"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
import { useProgress } from "@/hooks/use-progress";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Circle,
  Clock,
  ExternalLink,
  Loader2,
  Play,
  Terminal,
} from "lucide-react";
import type { Lesson, Module, Track } from "@/lib/curriculum/types";

// Lazy-load heavy components — only loaded when their tab is active
const VideoPlayer = dynamic(
  () => import("@/components/video-player").then((m) => m.VideoPlayer),
  {
    loading: () => (
      <div className="space-y-4">
        <Skeleton className="w-full aspect-video rounded-lg" />
        <Skeleton className="h-6 w-48" />
      </div>
    ),
    ssr: false,
  }
);

const TerminalComponent = dynamic(
  () => import("@/components/terminal").then((m) => m.TerminalComponent),
  {
    loading: () => <Skeleton className="w-full h-80 rounded-lg" />,
    ssr: false,
  }
);

interface LessonClientProps {
  lesson: Lesson;
  mod: Module;
  track: Track;
  trackId: string;
  moduleId: string;
  lessonId: string;
  prevLesson: Lesson | null;
  nextLesson: Lesson | null;
  lessonIndex: number;
  prevModuleLastLesson?: { lesson: { id: string; title: string }; moduleId: string } | null;
  nextModuleFirstLesson?: { lesson: { id: string; title: string }; moduleId: string } | null;
}

export function LessonClient({
  lesson,
  mod,
  track,
  trackId,
  moduleId,
  lessonId,
  prevLesson,
  nextLesson,
  lessonIndex,
  prevModuleLastLesson,
  nextModuleFirstLesson,
}: LessonClientProps) {
  const router = useRouter();
  const { data: session } = useSession();
  const { progress, loading, updateProgress, isLessonCompleted } =
    useProgress();
  const [saving, setSaving] = useState(false);

  const completed = isLessonCompleted(lessonId);
  const lessonProgress = progress.find((p) => p.lessonId === lessonId);

  // Default tab
  const defaultTab = lesson.videoId
    ? "watch"
    : lesson.hasTerminal
      ? "practice"
      : "read";

  const handleMarkComplete = async () => {
    if (!session) return;
    setSaving(true);
    await updateProgress(lessonId, moduleId, trackId, {
      completed: !completed,
    });
    setSaving(false);
  };

  const handleVideoWatched = async () => {
    if (!session || lessonProgress?.videoWatched) return;
    await updateProgress(lessonId, moduleId, trackId, { videoWatched: true });
  };

  const handleTerminalDone = async () => {
    if (!session || lessonProgress?.terminalDone) return;
    await updateProgress(lessonId, moduleId, trackId, { terminalDone: true });
  };

  // Compute resolved prev/next URLs for navigation + keyboard shortcuts
  const prevUrl = prevLesson
    ? `/learn/${trackId}/${moduleId}/${prevLesson.id}`
    : prevModuleLastLesson
      ? `/learn/${trackId}/${prevModuleLastLesson.moduleId}/${prevModuleLastLesson.lesson.id}`
      : null;

  const nextUrl = nextLesson
    ? `/learn/${trackId}/${moduleId}/${nextLesson.id}`
    : nextModuleFirstLesson
      ? `/learn/${trackId}/${nextModuleFirstLesson.moduleId}/${nextModuleFirstLesson.lesson.id}`
      : null;

  const prevLabel = prevLesson?.title
    ?? prevModuleLastLesson?.lesson.title
    ?? null;

  const nextLabel = nextLesson?.title
    ?? nextModuleFirstLesson?.lesson.title
    ?? null;

  // Keyboard shortcuts: ← prev, → next, Enter mark complete
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore when typing in inputs/textareas
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      if (e.key === "ArrowLeft" && prevUrl) {
        e.preventDefault();
        router.push(prevUrl);
      } else if (e.key === "ArrowRight" && nextUrl) {
        e.preventDefault();
        router.push(nextUrl);
      } else if (e.key === "Enter" && !e.metaKey && !e.ctrlKey && session) {
        e.preventDefault();
        handleMarkComplete();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevUrl, nextUrl, router, session, completed]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
        <Link href="/learn" className="hover:text-foreground">
          Curriculum
        </Link>
        <span>/</span>
        <Link
          href={`/learn/${trackId}/${moduleId}`}
          className="hover:text-foreground"
        >
          {mod.title}
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">{lesson.title}</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline" className="text-xs">
            Lesson {lessonIndex + 1} of {mod.lessons.length}
          </Badge>
          <Badge variant="secondary" className="text-xs gap-1">
            <Clock className="h-3 w-3" />
            {lesson.duration}
          </Badge>
          {completed && (
            <Badge className="text-xs gap-1 bg-green-500/10 text-green-500 border-green-500/30">
              <CheckCircle className="h-3 w-3" />
              Completed
            </Badge>
          )}
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{lesson.title}</h1>
        <p className="text-muted-foreground">{lesson.description}</p>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue={defaultTab} className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="read" className="gap-1.5">
            <BookOpen className="h-4 w-4" />
            Read
          </TabsTrigger>
          {lesson.videoId && (
            <TabsTrigger value="watch" className="gap-1.5">
              <Play className="h-4 w-4" />
              Watch
            </TabsTrigger>
          )}
          {lesson.hasTerminal && (
            <TabsTrigger value="practice" className="gap-1.5">
              <Terminal className="h-4 w-4" />
              Practice
            </TabsTrigger>
          )}
        </TabsList>

        {/* Read Tab */}
        <TabsContent value="read">
          <Card>
            <CardContent className="pt-6 prose prose-neutral dark:prose-invert max-w-none">
              <h2>{lesson.title}</h2>
              <p>{lesson.description}</p>

              {lesson.videoId && (
                <div className="not-prose my-4 p-4 rounded-lg bg-muted/50 border">
                  <p className="text-sm text-muted-foreground mb-2">
                    📺 This lesson has a video tutorial:
                  </p>
                  <p className="font-medium">{lesson.videoTitle}</p>
                  <p className="text-xs text-muted-foreground">
                    by {lesson.videoChannel}
                  </p>
                  <a
                    href={`https://www.youtube.com/watch?v=${lesson.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary mt-2 hover:underline"
                  >
                    Watch on YouTube
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              )}

              {lesson.hasTerminal && lesson.terminalExercise && (
                <div className="not-prose my-4 p-4 rounded-lg bg-muted/50 border">
                  <p className="text-sm font-medium mb-2">
                    💻 Terminal Exercise:
                  </p>
                  <pre className="text-sm whitespace-pre-wrap bg-background p-4 rounded-md border">
                    {lesson.terminalExercise.instructions}
                  </pre>
                </div>
              )}

              <div className="not-prose mt-6">
                <h3 className="text-lg font-semibold mb-3">Key Takeaways</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    Understanding the core concepts of {lesson.title.toLowerCase()}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    Hands-on practice with real-world tools
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    Building confidence for the next lesson
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Watch Tab */}
        {lesson.videoId && (
          <TabsContent value="watch">
            <Card>
              <CardContent className="pt-6">
                <VideoPlayer
                  videoId={lesson.videoId}
                  title={lesson.videoTitle ?? lesson.title}
                  channel={lesson.videoChannel ?? ""}
                />
                {session && (
                  <div className="mt-4 pt-4 border-t flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {lessonProgress?.videoWatched
                        ? "Video marked as watched"
                        : "Done watching? Mark it!"}
                    </span>
                    <Button
                      size="sm"
                      variant={lessonProgress?.videoWatched ? "secondary" : "outline"}
                      className="gap-1.5"
                      disabled={lessonProgress?.videoWatched}
                      onClick={handleVideoWatched}
                    >
                      {lessonProgress?.videoWatched ? (
                        <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                      ) : (
                        <Circle className="h-3.5 w-3.5" />
                      )}
                      {lessonProgress?.videoWatched ? "Watched" : "Mark Watched"}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        )}

        {/* Practice Tab */}
        {lesson.hasTerminal && (
          <TabsContent value="practice">
            <div className="space-y-4">
              {/* Instructions */}
              {lesson.terminalExercise && (
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Terminal className="h-4 w-4" />
                      Exercise Instructions
                    </h3>
                    <pre className="text-sm whitespace-pre-wrap bg-muted p-4 rounded-lg leading-relaxed">
                      {lesson.terminalExercise.instructions}
                    </pre>
                  </CardContent>
                </Card>
              )}

              {/* Terminal */}
              <Card className="overflow-hidden">
                <div className="bg-zinc-900 px-4 py-2 flex items-center gap-2 border-b border-zinc-800">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-zinc-400 ml-2">Terminal</span>
                </div>
                <TerminalComponent />
              </Card>

              {session && (
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border">
                  <span className="text-sm text-muted-foreground">
                    {lessonProgress?.terminalDone
                      ? "Exercise completed!"
                      : "Finished the exercise?"}
                  </span>
                  <Button
                    size="sm"
                    variant={lessonProgress?.terminalDone ? "secondary" : "outline"}
                    className="gap-1.5"
                    disabled={lessonProgress?.terminalDone}
                    onClick={handleTerminalDone}
                  >
                    {lessonProgress?.terminalDone ? (
                      <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                    ) : (
                      <Circle className="h-3.5 w-3.5" />
                    )}
                    {lessonProgress?.terminalDone ? "Done" : "Mark Exercise Done"}
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
        )}
      </Tabs>

      {/* Mark Complete */}
      <div className="flex justify-center mb-8">
        {session ? (
          <Button
            size="lg"
            className="gap-2"
            variant={completed ? "secondary" : "default"}
            onClick={handleMarkComplete}
            disabled={saving}
          >
            {saving ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <CheckCircle className="h-4 w-4" />
            )}
            {completed ? "Completed ✓" : "Mark as Complete"}
          </Button>
        ) : (
          <Link href="/auth/signin">
            <Button size="lg" className="gap-2">
              Sign in to track progress
            </Button>
          </Link>
        )}
      </div>

      {/* Keyboard hints */}
      <div className="flex justify-center mb-4">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span><kbd className="px-1.5 py-0.5 rounded bg-muted border text-[10px] font-mono">←</kbd> Previous</span>
          <span><kbd className="px-1.5 py-0.5 rounded bg-muted border text-[10px] font-mono">→</kbd> Next</span>
          {session && <span><kbd className="px-1.5 py-0.5 rounded bg-muted border text-[10px] font-mono">Enter</kbd> Mark Complete</span>}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 border-t">
        {prevUrl ? (
          <Link href={prevUrl}>
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{prevLabel}</span>
              <span className="sm:hidden">Previous</span>
            </Button>
          </Link>
        ) : (
          <Link href={`/learn/${trackId}/${moduleId}`}>
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Module Overview
            </Button>
          </Link>
        )}
        {nextUrl ? (
          <Link href={nextUrl}>
            <Button variant="ghost" size="sm" className="gap-2">
              <span className="hidden sm:inline">{nextLabel}</span>
              <span className="sm:hidden">Next</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <Link href={`/learn/${trackId}/${moduleId}`}>
            <Button variant="ghost" size="sm" className="gap-2">
              Back to Module
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
