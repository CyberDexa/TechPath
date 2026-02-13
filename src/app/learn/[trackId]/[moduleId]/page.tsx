import { notFound } from "next/navigation";
import Link from "next/link";
import { curriculum, getModule } from "@/lib/curriculum";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ModuleProgressBar, LessonCheck } from "@/components/module-progress";
import { LearningContextSetter } from "@/components/learning-context-setter";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  FolderGit2,
  Play,
  Terminal,
} from "lucide-react";
import type { Metadata } from "next";

interface ModulePageProps {
  params: Promise<{ trackId: string; moduleId: string }>;
}

export async function generateMetadata({
  params,
}: ModulePageProps): Promise<Metadata> {
  const { trackId, moduleId } = await params;
  const track = curriculum.find((t) => t.id === trackId);
  const mod = getModule(moduleId);
  if (!track || !mod) return { title: "Module Not Found" };

  return {
    title: `${mod.title} | ${track.title} | TechPath`,
    description: mod.description,
  };
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { trackId, moduleId } = await params;
  const track = curriculum.find((t) => t.id === trackId);
  const mod = getModule(moduleId);

  if (!track || !mod) return notFound();

  const modIndex = track.modules.findIndex((m) => m.id === moduleId);
  const prevModule = modIndex > 0 ? track.modules[modIndex - 1] : null;
  const nextModule =
    modIndex < track.modules.length - 1 ? track.modules[modIndex + 1] : null;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Set learning context for the AI tutor */}
      <LearningContextSetter
        data={{
          trackId,
          trackTitle: track.title,
          trackCategory: track.category,
          moduleId,
          moduleTitle: mod.title,
          moduleDescription: mod.description,
          lessonTitles: mod.lessons.map((l) => l.title),
          projectTitle: mod.project.title,
          projectDescription: mod.project.description,
        }}
      />

      {/* Back link */}
      <Link
        href="/learn"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Curriculum
      </Link>

      {/* Module Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline">
            {track.title} · Module {mod.order}
          </Badge>
        </div>
        <h1 className="text-3xl font-bold mb-2">{mod.title}</h1>
        <p className="text-muted-foreground">{mod.description}</p>
        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <BookOpen className="h-4 w-4" />
            {mod.lessons.length} lessons
          </span>
          <span className="flex items-center gap-1.5">
            <Play className="h-4 w-4" />
            {mod.lessons.filter((l) => l.videoId).length} videos
          </span>
          <span className="flex items-center gap-1.5">
            <Terminal className="h-4 w-4" />
            {mod.lessons.filter((l) => l.hasTerminal).length} exercises
          </span>
          <span className="flex items-center gap-1.5">
            <FolderGit2 className="h-4 w-4" />1 project
          </span>
        </div>
        <ModuleProgressBar moduleId={moduleId} lessonCount={mod.lessons.length} />
      </div>

      {/* Lessons List */}
      <h2 className="text-xl font-bold mb-4">Lessons</h2>
      <div className="space-y-3 mb-10">
        {mod.lessons.map((lesson, idx) => (
          <Link
            key={lesson.id}
            href={`/learn/${trackId}/${moduleId}/${lesson.id}`}
          >
            <Card className="group hover:border-primary/30 transition-colors cursor-pointer">
              <CardContent className="py-4">
                <div className="flex items-center gap-4">
                  <LessonCheck lessonId={lesson.id} index={idx} />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium mb-0.5">{lesson.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {lesson.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {lesson.videoId && (
                      <Badge variant="secondary" className="text-xs gap-1">
                        <Play className="h-3 w-3" />
                        Video
                      </Badge>
                    )}
                    {lesson.hasTerminal && (
                      <Badge variant="secondary" className="text-xs gap-1">
                        <Terminal className="h-3 w-3" />
                        Exercise
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {lesson.duration}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Project Section */}
      <h2 className="text-xl font-bold mb-4">🔨 Module Project</h2>
      <Card className="mb-10 border-primary/20">
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-2">{mod.project.title}</h3>
          <p className="text-muted-foreground mb-4">
            {mod.project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {mod.project.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Badge
              variant="outline"
              className={
                mod.project.difficulty === "beginner"
                  ? "text-green-500 border-green-500/30"
                  : mod.project.difficulty === "intermediate"
                  ? "text-yellow-500 border-yellow-500/30"
                  : "text-red-500 border-red-500/30"
              }
            >
              {mod.project.difficulty}
            </Badge>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />~{mod.project.estimatedHours}{" "}
              hours
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 border-t">
        {prevModule ? (
          <Link href={`/learn/${trackId}/${prevModule.id}`}>
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              {prevModule.title}
            </Button>
          </Link>
        ) : (
          <div />
        )}
        {nextModule ? (
          <Link href={`/learn/${trackId}/${nextModule.id}`}>
            <Button variant="ghost" className="gap-2">
              {nextModule.title}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
