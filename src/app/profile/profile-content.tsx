"use client";

import { useProgress } from "@/hooks/use-progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import {
  User,
  Mail,
  Award,
  Target,
  Flame,
  Trophy,
  BookOpen,
  Zap,
} from "lucide-react";

// All possible badges the system awards — matches the 12 rules in api/progress/route.ts
const ALL_BADGES = [
  { id: "first-lesson", name: "First Steps", icon: "🎯", description: "Complete 1 lesson" },
  { id: "five-lessons", name: "Getting Started", icon: "📚", description: "Complete 5 lessons" },
  { id: "ten-lessons", name: "On a Roll", icon: "🔥", description: "Complete 10 lessons" },
  { id: "twenty-five-lessons", name: "Quarter Century", icon: "💪", description: "Complete 25 lessons" },
  { id: "fifty-lessons", name: "Halfway Hero", icon: "⚡", description: "Complete 50 lessons" },
  { id: "hundred-lessons", name: "Century Club", icon: "🏆", description: "Complete 100 lessons" },
  { id: "two-fifty-lessons", name: "Knowledge Seeker", icon: "🧠", description: "Complete 250 lessons" },
  { id: "five-hundred-lessons", name: "Learning Machine", icon: "🤖", description: "Complete 500 lessons" },
  { id: "first-track-started", name: "Explorer", icon: "🧭", description: "Start your first track" },
  { id: "three-tracks", name: "Multi-Tracker", icon: "🌐", description: "Learn across 3 tracks" },
  { id: "five-tracks", name: "Polyglot", icon: "🗺️", description: "Learn across 5 tracks" },
  { id: "ten-tracks", name: "Renaissance Dev", icon: "👑", description: "Learn across 10 tracks" },
];

interface ProfileContentProps {
  user: { name: string; email: string; image: string };
}

export function ProfileContent({ user }: ProfileContentProps) {
  const { stats, loading } = useProgress();

  const earnedBadgeIds = new Set(stats?.badges.map((b) => b.id) || []);

  // Compute next milestone
  const completed = stats?.completedLessons ?? 0;
  const milestones = [1, 5, 10, 25, 50, 100, 250, 500];
  const nextMilestone = milestones.find((m) => m > completed) ?? 500;
  const prevMilestone = milestones[milestones.indexOf(nextMilestone) - 1] ?? 0;
  const milestoneProgress =
    nextMilestone > prevMilestone
      ? Math.min(((completed - prevMilestone) / (nextMilestone - prevMilestone)) * 100, 100)
      : 100;

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>

      <div className="space-y-6">
        {/* User Info */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src={user.image} />
                <AvatarFallback className="text-2xl">
                  {user.name.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {user.email}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <StatCard
            icon={<Target className="h-8 w-8 text-blue-500" />}
            value={stats?.completedLessons}
            label="Lessons Done"
            loading={loading}
          />
          <StatCard
            icon={<Flame className="h-8 w-8 text-orange-500" />}
            value={stats?.currentStreak}
            label="Day Streak"
            loading={loading}
          />
          <StatCard
            icon={<Zap className="h-8 w-8 text-purple-500" />}
            value={stats?.longestStreak}
            label="Best Streak"
            loading={loading}
          />
          <StatCard
            icon={<Award className="h-8 w-8 text-yellow-500" />}
            value={stats?.badges.length}
            label="Badges"
            loading={loading}
          />
        </div>

        {/* Next Milestone */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Trophy className="h-5 w-5 text-amber-500" />
              Next Milestone
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-6 w-full" />
            ) : (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>
                    {completed} / {nextMilestone} lessons
                  </span>
                  <span className="text-muted-foreground">
                    {nextMilestone - completed} to go
                  </span>
                </div>
                <Progress value={milestoneProgress} className="h-2" />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Badges — Earned */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Badges Earned
              {!loading && (
                <Badge variant="secondary" className="ml-auto">
                  {earnedBadgeIds.size} / {ALL_BADGES.length}
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex flex-wrap gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-10 w-32 rounded-full" />
                ))}
              </div>
            ) : earnedBadgeIds.size === 0 ? (
              <p className="text-muted-foreground text-sm">
                Complete lessons to earn your first badge!
              </p>
            ) : (
              <div className="flex flex-wrap gap-3">
                {ALL_BADGES.filter((b) => earnedBadgeIds.has(b.id)).map(
                  (badge) => (
                    <Badge
                      key={badge.id}
                      variant="default"
                      className="text-sm py-1.5 px-3"
                    >
                      {badge.icon} {badge.name}
                    </Badge>
                  )
                )}
              </div>
            )}

            {/* Locked badges */}
            {!loading && earnedBadgeIds.size < ALL_BADGES.length && (
              <>
                <Separator className="my-4" />
                <p className="text-xs text-muted-foreground mb-3">
                  Locked badges
                </p>
                <div className="flex flex-wrap gap-2">
                  {ALL_BADGES.filter((b) => !earnedBadgeIds.has(b.id)).map(
                    (badge) => (
                      <Badge
                        key={badge.id}
                        variant="outline"
                        className="text-muted-foreground/50 border-dashed text-xs"
                        title={badge.description}
                      >
                        🔒 {badge.name}
                      </Badge>
                    )
                  )}
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Track Activity */}
        {!loading && stats && Object.keys(stats.moduleCompletion).length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Module Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(stats.moduleCompletion)
                  .sort(([, a], [, b]) => b - a)
                  .slice(0, 10)
                  .map(([moduleId, count]) => (
                    <div key={moduleId} className="flex items-center justify-between text-sm">
                      <span className="truncate max-w-[70%] font-medium">
                        {formatModuleId(moduleId)}
                      </span>
                      <Badge variant="secondary">{count} lessons</Badge>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Account */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Your account is managed through your connected OAuth provider
              (GitHub or Google). Profile information is synced automatically.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  value,
  label,
  loading,
}: {
  icon: React.ReactNode;
  value: number | undefined;
  label: string;
  loading: boolean;
}) {
  return (
    <Card>
      <CardContent className="pt-6 text-center">
        <div className="mx-auto mb-2 flex justify-center">{icon}</div>
        {loading ? (
          <Skeleton className="h-8 w-12 mx-auto mb-1" />
        ) : (
          <div className="text-2xl font-bold">{value ?? 0}</div>
        )}
        <p className="text-sm text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
}

/** Converts "fe-html-css" → "HTML CSS" */
function formatModuleId(id: string): string {
  return id
    .replace(/^(fe|be|fs|do|ds|ml|qa|cs|ai)-/, "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
