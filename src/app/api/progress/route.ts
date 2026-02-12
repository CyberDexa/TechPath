import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET /api/progress — Fetch all lesson progress for the current user
export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const progress = await prisma.lessonProgress.findMany({
      where: { userId: session.user.id },
    });

    const streak = await prisma.learningStreak.findUnique({
      where: { userId: session.user.id },
    });

    const badges = await prisma.userBadge.findMany({
      where: { userId: session.user.id },
    });

    return NextResponse.json({
      progress,
      streak: streak ?? { currentStreak: 0, longestStreak: 0 },
      badges,
    });
  } catch (error) {
    console.error("Error fetching progress:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/progress — Update lesson progress
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { lessonId, moduleId, trackId, completed, videoWatched, terminalDone, projectDone } = body;

    if (!lessonId || !moduleId || !trackId) {
      return NextResponse.json(
        { error: "Missing required fields: lessonId, moduleId, trackId" },
        { status: 400 }
      );
    }

    // Upsert lesson progress
    const progress = await prisma.lessonProgress.upsert({
      where: {
        userId_lessonId: {
          userId: session.user.id,
          lessonId,
        },
      },
      update: {
        ...(completed !== undefined && { completed }),
        ...(videoWatched !== undefined && { videoWatched }),
        ...(terminalDone !== undefined && { terminalDone }),
        ...(projectDone !== undefined && { projectDone }),
      },
      create: {
        userId: session.user.id,
        lessonId,
        moduleId,
        trackId,
        completed: completed ?? false,
        videoWatched: videoWatched ?? false,
        terminalDone: terminalDone ?? false,
        projectDone: projectDone ?? false,
      },
    });

    // Update learning streak
    await updateStreak(session.user.id);

    // Check for badge achievements
    await checkBadges(session.user.id);

    return NextResponse.json({ progress });
  } catch (error) {
    console.error("Error updating progress:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

async function updateStreak(userId: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const streak = await prisma.learningStreak.findUnique({
    where: { userId },
  });

  if (!streak) {
    await prisma.learningStreak.create({
      data: {
        userId,
        currentStreak: 1,
        longestStreak: 1,
        lastActiveAt: new Date(),
      },
    });
    return;
  }

  const lastActive = new Date(streak.lastActiveAt);
  lastActive.setHours(0, 0, 0, 0);

  const diffDays = Math.floor(
    (today.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24)
  );

  let newCurrent = streak.currentStreak;
  if (diffDays === 0) {
    // Already active today, no change
    return;
  } else if (diffDays === 1) {
    // Consecutive day
    newCurrent = streak.currentStreak + 1;
  } else {
    // Streak broken
    newCurrent = 1;
  }

  await prisma.learningStreak.update({
    where: { userId },
    data: {
      currentStreak: newCurrent,
      longestStreak: Math.max(newCurrent, streak.longestStreak),
      lastActiveAt: new Date(),
    },
  });
}

async function checkBadges(userId: string) {
  const completedLessons = await prisma.lessonProgress.count({
    where: { userId, completed: true },
  });

  const existingBadges = await prisma.userBadge.findMany({
    where: { userId },
    select: { badgeId: true },
  });
  const earnedIds = new Set(existingBadges.map((b) => b.badgeId));

  const badgeRules: { id: string; name: string; threshold: number }[] = [
    { id: "first-lesson", name: "First Steps", threshold: 1 },
    { id: "five-lessons", name: "Getting Started", threshold: 5 },
    { id: "ten-lessons", name: "On a Roll", threshold: 10 },
    { id: "twenty-five-lessons", name: "Quarter Century", threshold: 25 },
    { id: "fifty-lessons", name: "Halfway Hero", threshold: 50 },
    { id: "all-lessons", name: "DevOps Master", threshold: 70 },
  ];

  for (const rule of badgeRules) {
    if (completedLessons >= rule.threshold && !earnedIds.has(rule.id)) {
      await prisma.userBadge.create({
        data: {
          userId,
          badgeId: rule.id,
          name: rule.name,
        },
      });
    }
  }
}
