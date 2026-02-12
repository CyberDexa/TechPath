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

  // Count distinct completed tracks (all lessons in track done)
  const trackProgress = await prisma.lessonProgress.groupBy({
    by: ["trackId"],
    where: { userId, completed: true },
    _count: { _all: true },
  });

  const existingBadges = await prisma.userBadge.findMany({
    where: { userId },
    select: { badgeId: true },
  });
  const earnedIds = new Set(existingBadges.map((b) => b.badgeId));

  const badgeRules: { id: string; name: string; check: () => boolean }[] = [
    // Lesson milestones
    { id: "first-lesson", name: "First Steps", check: () => completedLessons >= 1 },
    { id: "five-lessons", name: "Getting Started", check: () => completedLessons >= 5 },
    { id: "ten-lessons", name: "On a Roll", check: () => completedLessons >= 10 },
    { id: "twenty-five-lessons", name: "Quarter Century", check: () => completedLessons >= 25 },
    { id: "fifty-lessons", name: "Halfway Hero", check: () => completedLessons >= 50 },
    { id: "hundred-lessons", name: "Century Club", check: () => completedLessons >= 100 },
    { id: "two-fifty-lessons", name: "Knowledge Seeker", check: () => completedLessons >= 250 },
    { id: "five-hundred-lessons", name: "Learning Machine", check: () => completedLessons >= 500 },
    // Track milestones
    { id: "first-track-started", name: "Explorer", check: () => trackProgress.length >= 1 },
    { id: "three-tracks", name: "Multi-Tracker", check: () => trackProgress.length >= 3 },
    { id: "five-tracks", name: "Polyglot", check: () => trackProgress.length >= 5 },
    { id: "ten-tracks", name: "Renaissance Dev", check: () => trackProgress.length >= 10 },
  ];

  for (const rule of badgeRules) {
    if (rule.check() && !earnedIds.has(rule.id)) {
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
