"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { curriculum, getLesson } from "@/lib/curriculum";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoPlayer } from "@/components/video-player";
import { TerminalComponent } from "@/components/terminal";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock,
  ExternalLink,
  Play,
  Terminal,
} from "lucide-react";

export default function LessonPage({
  params,
}: {
  params: Promise<{ trackId: string; moduleId: string; lessonId: string }>;
}) {
  const { trackId, moduleId, lessonId } = use(params);
  const result = getLesson(lessonId);
  const [completed, setCompleted] = useState(false);

  if (!result) return notFound();
  const { lesson, module: mod, track } = result;

  // Find lesson navigation
  const lessonIndex = mod.lessons.findIndex((l) => l.id === lessonId);
  const prevLesson = lessonIndex > 0 ? mod.lessons[lessonIndex - 1] : null;
  const nextLesson =
    lessonIndex < mod.lessons.length - 1
      ? mod.lessons[lessonIndex + 1]
      : null;

  // Default tab
  const defaultTab = lesson.videoId ? "watch" : lesson.hasTerminal ? "practice" : "read";

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
            </div>
          </TabsContent>
        )}
      </Tabs>

      {/* Mark Complete */}
      <div className="flex justify-center mb-8">
        <Button
          size="lg"
          className="gap-2"
          variant={completed ? "secondary" : "default"}
          onClick={() => setCompleted(!completed)}
        >
          <CheckCircle className="h-4 w-4" />
          {completed ? "Completed ✓" : "Mark as Complete"}
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 border-t">
        {prevLesson ? (
          <Link href={`/learn/${trackId}/${moduleId}/${prevLesson.id}`}>
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{prevLesson.title}</span>
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
        {nextLesson ? (
          <Link href={`/learn/${trackId}/${moduleId}/${nextLesson.id}`}>
            <Button variant="ghost" size="sm" className="gap-2">
              <span className="hidden sm:inline">{nextLesson.title}</span>
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
