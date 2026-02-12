"use client";

import Link from "next/link";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  curriculum,
  trackCategories,
  getTracksByCategory,
  getTrackLessonCount,
} from "@/lib/curriculum";
import type { TrackCategory } from "@/lib/curriculum";
import { useProgress } from "@/hooks/use-progress";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Terminal,
  ArrowRight,
  CheckCircle,
  Play,
  FolderGit2,
  Search,
  Globe,
  Brain,
  Shield,
  Smartphone,
  Server,
  Palette,
  Gamepad2,
  Users,
  LayoutGrid,
} from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  Globe,
  Brain,
  Shield,
  Smartphone,
  Server,
  Palette,
  Gamepad2,
  Users,
};

const trackColorMap: Record<string, { text: string; bg: string; border: string }> = {
  blue: { text: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/30" },
  purple: { text: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/30" },
  cyan: { text: "text-cyan-500", bg: "bg-cyan-500/10", border: "border-cyan-500/30" },
  green: { text: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/30" },
  red: { text: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/30" },
  orange: { text: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/30" },
  yellow: { text: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/30" },
  pink: { text: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/30" },
  violet: { text: "text-violet-500", bg: "bg-violet-500/10", border: "border-violet-500/30" },
  emerald: { text: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
  amber: { text: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/30" },
  fuchsia: { text: "text-fuchsia-500", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/30" },
  lime: { text: "text-lime-500", bg: "bg-lime-500/10", border: "border-lime-500/30" },
  teal: { text: "text-teal-500", bg: "bg-teal-500/10", border: "border-teal-500/30" },
  indigo: { text: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/30" },
  sky: { text: "text-sky-500", bg: "bg-sky-500/10", border: "border-sky-500/30" },
  rose: { text: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/30" },
  slate: { text: "text-slate-500", bg: "bg-slate-500/10", border: "border-slate-500/30" },
};

function getColors(color: string) {
  return (
    trackColorMap[color] ?? {
      text: "text-primary",
      bg: "bg-primary/10",
      border: "border-primary/30",
    }
  );
}

export default function LearnPage() {
  return (
    <Suspense fallback={<LearnPageSkeleton />}>
      <LearnPageContent />
    </Suspense>
  );
}

function LearnPageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Curriculum</h1>
        <p className="text-muted-foreground">Loading tracks...</p>
      </div>
    </div>
  );
}

function LearnPageContent() {
  const searchParams = useSearchParams();
  const trackParam = searchParams.get("track");
  const { isLessonCompleted, getModuleCompletedCount } = useProgress();

  const [activeCategory, setActiveCategory] = useState<
    TrackCategory | "all"
  >("all");
  const [search, setSearch] = useState("");

  // If ?track=xxx is in URL, find that track's category
  const selectedTrack = trackParam
    ? curriculum.find((t) => t.id === trackParam)
    : null;

  // Filter tracks
  let filteredTracks = curriculum;

  if (selectedTrack) {
    filteredTracks = [selectedTrack];
  } else {
    if (activeCategory !== "all") {
      filteredTracks = getTracksByCategory(activeCategory);
    }
    if (search) {
      const q = search.toLowerCase();
      filteredTracks = filteredTracks.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q)
      );
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Curriculum</h1>
        <p className="text-muted-foreground">
          {curriculum.length} structured learning tracks. Each module includes
          lessons, videos, terminal exercises, and a hands-on project.
        </p>
      </div>

      {/* Search & Filters */}
      {!selectedTrack && (
        <div className="mb-8 space-y-4">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tracks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant={activeCategory === "all" ? "default" : "outline"}
              onClick={() => setActiveCategory("all")}
              className="gap-1.5"
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              All ({curriculum.length})
            </Button>
            {trackCategories.map((cat) => {
              const Icon = categoryIcons[cat.icon] ?? BookOpen;
              const count = getTracksByCategory(cat.id as TrackCategory).length;
              if (count === 0) return null;

              return (
                <Button
                  key={cat.id}
                  size="sm"
                  variant={
                    activeCategory === cat.id ? "default" : "outline"
                  }
                  onClick={() =>
                    setActiveCategory(cat.id as TrackCategory)
                  }
                  className="gap-1.5"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {cat.label} ({count})
                </Button>
              );
            })}
          </div>
        </div>
      )}

      {/* Back link when viewing single track */}
      {selectedTrack && (
        <Link href="/learn">
          <Button variant="ghost" size="sm" className="mb-4 gap-1.5">
            <ArrowRight className="h-3.5 w-3.5 rotate-180" />
            Back to all tracks
          </Button>
        </Link>
      )}

      {/* Tracks */}
      {filteredTracks.map((track) => {
        const { text, bg, border } = getColors(track.color);

        return (
          <div key={track.id} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`h-10 w-10 rounded-lg flex items-center justify-center ${bg}`}
              >
                <BookOpen className={`h-5 w-5 ${text}`} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{track.title}</h2>
                <p className="text-sm text-muted-foreground">
                  {track.description}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {track.modules.map((mod) => {
                const terminalCount = mod.lessons.filter(
                  (l) => l.hasTerminal
                ).length;
                const videoCount = mod.lessons.filter(
                  (l) => l.videoId
                ).length;
                const completedCount = getModuleCompletedCount(mod.id);
                const modProgress =
                  mod.lessons.length > 0
                    ? (completedCount / mod.lessons.length) * 100
                    : 0;

                return (
                  <Card
                    key={mod.id}
                    className="group hover:border-primary/30 transition-colors"
                  >
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        {/* Module number */}
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${bg} ${text}`}
                        >
                          {completedCount >= mod.lessons.length &&
                          mod.lessons.length > 0 ? (
                            <CheckCircle className="h-6 w-6" />
                          ) : (
                            mod.order
                          )}
                        </div>

                        {/* Module info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold">
                              {mod.title}
                            </h3>
                            {completedCount > 0 && (
                              <span className="text-xs text-muted-foreground">
                                {completedCount}/{mod.lessons.length}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {mod.description}
                          </p>
                          {completedCount > 0 && (
                            <Progress
                              value={modProgress}
                              className="h-1.5 mb-2"
                            />
                          )}
                          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <BookOpen className="h-3.5 w-3.5" />
                              {mod.lessons.length} lessons
                            </span>
                            {videoCount > 0 && (
                              <span className="flex items-center gap-1">
                                <Play className="h-3.5 w-3.5" />
                                {videoCount} videos
                              </span>
                            )}
                            {terminalCount > 0 && (
                              <span className="flex items-center gap-1">
                                <Terminal className="h-3.5 w-3.5" />
                                {terminalCount} exercises
                              </span>
                            )}
                            <span className="flex items-center gap-1">
                              <FolderGit2 className="h-3.5 w-3.5" />
                              1 project
                            </span>
                          </div>
                        </div>

                        {/* Action */}
                        <Link
                          href={`/learn/${track.id}/${mod.id}`}
                          className="shrink-0"
                        >
                          <Button variant="outline" className="gap-2">
                            View Module
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>

                      {/* Lessons preview */}
                      <div className="mt-4 pt-4 border-t">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                          {mod.lessons.map((lesson, li) => (
                            <Link
                              key={lesson.id}
                              href={`/learn/${track.id}/${mod.id}/${lesson.id}`}
                              className="flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-muted/50 transition-colors text-sm"
                            >
                              {isLessonCompleted(lesson.id) ? (
                                <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                              ) : (
                                <div className="h-5 w-5 rounded-full border flex items-center justify-center text-[10px] text-muted-foreground shrink-0">
                                  {li + 1}
                                </div>
                              )}
                              <span className={`truncate ${isLessonCompleted(lesson.id) ? "text-muted-foreground line-through" : ""}`}>
                                {lesson.title}
                              </span>
                              {lesson.hasTerminal && (
                                <Terminal className="h-3 w-3 text-muted-foreground shrink-0 ml-auto" />
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Project badge */}
                      <div className="mt-3 pt-3 border-t">
                        <div className="flex items-center gap-2 text-sm">
                          <Badge
                            variant="outline"
                            className={`${border} ${text}`}
                          >
                            Project
                          </Badge>
                          <span className="text-muted-foreground">
                            {mod.project.title}
                          </span>
                          <Badge
                            variant="secondary"
                            className="ml-auto text-xs"
                          >
                            {mod.project.difficulty}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        );
      })}

      {filteredTracks.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <BookOpen className="h-12 w-12 mx-auto mb-3 opacity-50" />
          <p className="font-medium">No tracks found</p>
          <p className="text-sm">Try a different search or category.</p>
        </div>
      )}
    </div>
  );
}
