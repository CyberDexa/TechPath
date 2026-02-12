"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { useSession } from "next-auth/react";
import {
  curriculum,
  getTotalLessons,
  getTotalModules,
  trackCategories,
  getTrackLessonCount,
} from "@/lib/curriculum";
import { useProgress } from "@/hooks/use-progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  BookOpen,
  CheckCircle,
  Clock,
  Flame,
  Trophy,
  ArrowRight,
  Play,
  Terminal,
  Search,
} from "lucide-react";

const trackColorMap: Record<string, { text: string; bg: string }> = {
  blue: { text: "text-blue-500", bg: "bg-blue-500/10" },
  purple: { text: "text-purple-500", bg: "bg-purple-500/10" },
  cyan: { text: "text-cyan-500", bg: "bg-cyan-500/10" },
  green: { text: "text-green-500", bg: "bg-green-500/10" },
  red: { text: "text-red-500", bg: "bg-red-500/10" },
  orange: { text: "text-orange-500", bg: "bg-orange-500/10" },
  yellow: { text: "text-yellow-500", bg: "bg-yellow-500/10" },
  pink: { text: "text-pink-500", bg: "bg-pink-500/10" },
  violet: { text: "text-violet-500", bg: "bg-violet-500/10" },
  emerald: { text: "text-emerald-500", bg: "bg-emerald-500/10" },
  amber: { text: "text-amber-500", bg: "bg-amber-500/10" },
  fuchsia: { text: "text-fuchsia-500", bg: "bg-fuchsia-500/10" },
  lime: { text: "text-lime-500", bg: "bg-lime-500/10" },
  teal: { text: "text-teal-500", bg: "bg-teal-500/10" },
  indigo: { text: "text-indigo-500", bg: "bg-indigo-500/10" },
  sky: { text: "text-sky-500", bg: "bg-sky-500/10" },
  rose: { text: "text-rose-500", bg: "bg-rose-500/10" },
  slate: { text: "text-slate-500", bg: "bg-slate-500/10" },
};

function getColors(color: string) {
  return trackColorMap[color] ?? { text: "text-primary", bg: "bg-primary/10" };
}

export default function DashboardPage() {
  const { data: session } = useSession();
  const { progress, stats, loading, getModuleCompletedCount } = useProgress();
  const [search, setSearch] = useState("");

  const totalLessons = getTotalLessons();
  const totalModules = getTotalModules();

  // Calculate per-track progress
  const trackProgress = useMemo(() => {
    const map: Record<string, number> = {};
    for (const p of progress) {
      if (p.completed) {
        map[p.trackId] = (map[p.trackId] ?? 0) + 1;
      }
    }
    return map;
  }, [progress]);

  // Count completed modules (all lessons in module done)
  const completedModulesCount = useMemo(() => {
    let count = 0;
    for (const track of curriculum) {
      for (const mod of track.modules) {
        const done = getModuleCompletedCount(mod.id);
        if (done >= mod.lessons.length && mod.lessons.length > 0) count++;
      }
    }
    return count;
  }, [getModuleCompletedCount]);

  // Smart "Continue Learning" — find first incomplete lesson
  const nextLessonInfo = useMemo(() => {
    // First try to find a track the user has started but not finished
    for (const track of curriculum) {
      const trackDone = trackProgress[track.id] ?? 0;
      const trackTotal = getTrackLessonCount(track);
      if (trackDone > 0 && trackDone < trackTotal) {
        // Find first incomplete lesson in this track
        for (const mod of track.modules) {
          for (const lesson of mod.lessons) {
            if (!progress.some((p) => p.lessonId === lesson.id && p.completed)) {
              return { lesson, module: mod, track };
            }
          }
        }
      }
    }
    // If no started track, default to first track's first lesson
    const firstTrack = curriculum[0];
    const firstMod = firstTrack.modules[0];
    return { lesson: firstMod.lessons[0], module: firstMod, track: firstTrack };
  }, [progress, trackProgress]);

  const completedLessons = stats?.completedLessons ?? 0;
  const currentStreak = stats?.currentStreak ?? 0;
  const badgeCount = stats?.badges?.length ?? 0;

  const filteredTracks = search
    ? curriculum.filter((t) =>
        t.title.toLowerCase().includes(search.toLowerCase())
      )
    : curriculum;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back
          {session?.user?.name
            ? `, ${session.user.name.split(" ")[0]}`
            : ""}
          !
        </h1>
        <p className="text-muted-foreground">
          Continue your learning journey across {curriculum.length} tracks.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{completedLessons}/{totalLessons}</p>
                <p className="text-xs text-muted-foreground">Lessons Done</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{completedModulesCount}/{totalModules}</p>
                <p className="text-xs text-muted-foreground">Modules Done</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <Flame className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{currentStreak}</p>
                <p className="text-xs text-muted-foreground">Day Streak</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                <Trophy className="h-5 w-5 text-yellow-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{badgeCount}</p>
                <p className="text-xs text-muted-foreground">Badges Earned</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Continue Learning */}
      <Card className="mb-8 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-1">
                Continue Learning &middot; {nextLessonInfo.track.title}
              </Badge>
              <h2 className="text-xl font-bold">{nextLessonInfo.lesson.title}</h2>
              <p className="text-sm text-muted-foreground">
                {nextLessonInfo.lesson.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5" />
                  {nextLessonInfo.module.title}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {nextLessonInfo.lesson.duration}
                </span>
              </div>
            </div>
            <Link
              href={`/learn/${nextLessonInfo.track.id}/${nextLessonInfo.module.id}/${nextLessonInfo.lesson.id}`}
            >
              <Button size="lg" className="gap-2">
                <Play className="h-4 w-4" />
                {completedLessons > 0 ? "Continue" : "Start Lesson"}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Track Progress */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <h2 className="text-xl font-bold">
          Your Learning Tracks ({curriculum.length})
        </h2>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search tracks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {filteredTracks.map((track) => {
          const { text, bg } = getColors(track.color);
          const lessonCount = getTrackLessonCount(track);

          return (
            <Card
              key={track.id}
              className="hover:border-primary/30 transition-colors"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-10 w-10 rounded-lg ${bg} flex items-center justify-center`}
                    >
                      <BookOpen className={`h-5 w-5 ${text}`} />
                    </div>
                    <div className="min-w-0">
                      <CardTitle className="text-base truncate">
                        {track.title}
                      </CardTitle>
                      <p className="text-xs text-muted-foreground">
                        {track.modules.length} modules &middot; {lessonCount}{" "}
                        lessons
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {lessonCount > 0
                      ? Math.round(
                          ((trackProgress[track.id] ?? 0) / lessonCount) * 100
                        )
                      : 0}
                    %
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <Progress
                  value={
                    lessonCount > 0
                      ? ((trackProgress[track.id] ?? 0) / lessonCount) * 100
                      : 0
                  }
                  className="h-2"
                />
                <div className="space-y-1">
                  {track.modules.slice(0, 4).map((mod) => (
                    <Link
                      key={mod.id}
                      href={`/learn/${track.id}/${mod.id}`}
                      className="flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-muted/50 transition-colors group text-sm"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/20 flex items-center justify-center text-[10px] text-muted-foreground shrink-0">
                          {mod.order}
                        </div>
                        <span className="truncate">{mod.title}</span>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </Link>
                  ))}
                  {track.modules.length > 4 && (
                    <Link
                      href={`/learn?track=${track.id}`}
                      className="block text-xs text-muted-foreground hover:text-foreground px-2 py-1"
                    >
                      + {track.modules.length - 4} more modules
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Badges */}
      <h2 className="text-xl font-bold mb-4">Badges ({badgeCount})</h2>
      <Card>
        <CardContent className="pt-6">
          {stats?.badges && stats.badges.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {stats.badges.map((badge) => (
                <div
                  key={badge.id}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50 text-center"
                >
                  <Trophy className="h-8 w-8 text-yellow-500" />
                  <p className="text-sm font-medium">{badge.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(badge.earnedAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Trophy className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p className="font-medium">No badges yet</p>
              <p className="text-sm">
                Complete lessons and modules to earn badges!
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
