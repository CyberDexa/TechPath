"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import {
  curriculum,
  getTotalLessons,
  getTotalModules,
  trackCategories,
  getTrackLessonCount,
} from "@/lib/curriculum";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  CheckCircle,
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
  const [search, setSearch] = useState("");

  const totalLessons = getTotalLessons();
  const totalModules = getTotalModules();

  // Find first incomplete module for "Continue Learning"
  const nextModule = curriculum[0].modules[0];

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
                <p className="text-2xl font-bold">0/{totalLessons}</p>
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
                <p className="text-2xl font-bold">0/{totalModules}</p>
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
                <p className="text-2xl font-bold">0</p>
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
                <p className="text-2xl font-bold">0</p>
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
                Continue Learning
              </Badge>
              <h2 className="text-xl font-bold">{nextModule.title}</h2>
              <p className="text-sm text-muted-foreground">
                {nextModule.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5" />
                  {nextModule.lessons.length} lessons
                </span>
                <span className="flex items-center gap-1">
                  <Terminal className="h-3.5 w-3.5" />
                  {nextModule.lessons.filter((l) => l.hasTerminal).length}{" "}
                  exercises
                </span>
              </div>
            </div>
            <Link
              href={`/learn/${nextModule.trackId}/${nextModule.id}/${nextModule.lessons[0].id}`}
            >
              <Button size="lg" className="gap-2">
                <Play className="h-4 w-4" />
                Start Lesson
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
                    0%
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <Progress value={0} className="h-2" />
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
      <h2 className="text-xl font-bold mb-4">Badges</h2>
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-8 text-muted-foreground">
            <Trophy className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p className="font-medium">No badges yet</p>
            <p className="text-sm">
              Complete lessons and modules to earn badges!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
