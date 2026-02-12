import { notFound } from "next/navigation";
import { getLesson } from "@/lib/curriculum";
import { LessonClient } from "@/components/lesson-client";
import type { Metadata } from "next";

interface LessonPageProps {
  params: Promise<{ trackId: string; moduleId: string; lessonId: string }>;
}

// Generate metadata on the server
export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const { lessonId } = await params;
  const result = getLesson(lessonId);
  if (!result) return { title: "Lesson Not Found" };

  return {
    title: `${result.lesson.title} | ${result.track.title} | TechPath`,
    description: result.lesson.description,
  };
}

// Server component — curriculum data is resolved on the server,
// only the single lesson/module/track is sent to the client.
export default async function LessonPage({ params }: LessonPageProps) {
  const { trackId, moduleId, lessonId } = await params;
  const result = getLesson(lessonId);

  if (!result) return notFound();
  const { lesson, module: mod, track } = result;

  const lessonIndex = mod.lessons.findIndex((l) => l.id === lessonId);
  const prevLesson = lessonIndex > 0 ? mod.lessons[lessonIndex - 1] : null;
  const nextLesson =
    lessonIndex < mod.lessons.length - 1
      ? mod.lessons[lessonIndex + 1]
      : null;

  // Cross-module navigation: when at edges, link to adjacent module's lessons
  const modIndex = track.modules.findIndex((m) => m.id === moduleId);
  let prevModuleLastLesson: { lesson: { id: string; title: string }; moduleId: string } | null = null;
  let nextModuleFirstLesson: { lesson: { id: string; title: string }; moduleId: string } | null = null;

  if (!prevLesson && modIndex > 0) {
    const prevMod = track.modules[modIndex - 1];
    const lastLesson = prevMod.lessons[prevMod.lessons.length - 1];
    if (lastLesson) {
      prevModuleLastLesson = {
        lesson: { id: lastLesson.id, title: lastLesson.title },
        moduleId: prevMod.id,
      };
    }
  }

  if (!nextLesson && modIndex < track.modules.length - 1) {
    const nextMod = track.modules[modIndex + 1];
    const firstLesson = nextMod.lessons[0];
    if (firstLesson) {
      nextModuleFirstLesson = {
        lesson: { id: firstLesson.id, title: firstLesson.title },
        moduleId: nextMod.id,
      };
    }
  }

  return (
    <LessonClient
      lesson={lesson}
      mod={mod}
      track={track}
      trackId={trackId}
      moduleId={moduleId}
      lessonId={lessonId}
      prevLesson={prevLesson}
      nextLesson={nextLesson}
      lessonIndex={lessonIndex}
      prevModuleLastLesson={prevModuleLastLesson}
      nextModuleFirstLesson={nextModuleFirstLesson}
    />
  );
}
