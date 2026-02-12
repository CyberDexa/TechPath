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
    />
  );
}
