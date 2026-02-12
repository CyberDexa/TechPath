import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET /api/progress/stats — Summary stats for the dashboard
export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    const [totalCompleted, streak, badges, moduleProgress] = await Promise.all([
      prisma.lessonProgress.count({
        where: { userId, completed: true },
      }),
      prisma.learningStreak.findUnique({
        where: { userId },
      }),
      prisma.userBadge.findMany({
        where: { userId },
      }),
      prisma.lessonProgress.groupBy({
        by: ["moduleId", "trackId"],
        where: { userId, completed: true },
        _count: { _all: true },
      }),
    ]);

    // Build a map of completed lessons per module
    const moduleCompletionMap: Record<string, number> = {};
    for (const entry of moduleProgress) {
      moduleCompletionMap[entry.moduleId] = entry._count._all;
    }

    return NextResponse.json({
      completedLessons: totalCompleted,
      currentStreak: streak?.currentStreak ?? 0,
      longestStreak: streak?.longestStreak ?? 0,
      badges: badges.map((b) => ({ id: b.badgeId, name: b.name, earnedAt: b.earnedAt })),
      moduleCompletion: moduleCompletionMap,
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
