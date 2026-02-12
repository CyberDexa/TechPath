import type { Metadata } from "next";
import { getLesson } from "@/lib/curriculum";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ trackId: string; moduleId: string; lessonId: string }>;
}): Promise<Metadata> {
  const { lessonId } = await params;
  const result = getLesson(lessonId);

  if (!result) {
    return { title: "Lesson Not Found | DevOps & MLOps Learning" };
  }

  const { lesson, module: mod, track } = result;

  return {
    title: `${lesson.title} — ${mod.title} | DevOps & MLOps Learning`,
    description: lesson.description,
    openGraph: {
      title: `${lesson.title} — ${track.title}`,
      description: lesson.description,
    },
  };
}

export default function LessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
