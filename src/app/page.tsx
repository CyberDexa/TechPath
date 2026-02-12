import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  curriculum,
  trackCategories,
  getTotalLessons,
  getTotalModules,
  getTrackLessonCount,
} from "@/lib/curriculum";
import {
  Terminal,
  Play,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Flame,
  Server,
  Brain,
  Shield,
  Globe,
  Smartphone,
  Palette,
  Gamepad2,
  Users,
} from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  Globe,
  Brain,
  Shield,
  Smartphone,
  Server,
  Palette,
  Gamepad2,
  Users,
};

const trackColorMap: Record<string, string> = {
  blue: "text-blue-500 bg-blue-500/10",
  purple: "text-purple-500 bg-purple-500/10",
  cyan: "text-cyan-500 bg-cyan-500/10",
  green: "text-green-500 bg-green-500/10",
  red: "text-red-500 bg-red-500/10",
  orange: "text-orange-500 bg-orange-500/10",
  yellow: "text-yellow-500 bg-yellow-500/10",
  pink: "text-pink-500 bg-pink-500/10",
  violet: "text-violet-500 bg-violet-500/10",
  emerald: "text-emerald-500 bg-emerald-500/10",
  amber: "text-amber-500 bg-amber-500/10",
  fuchsia: "text-fuchsia-500 bg-fuchsia-500/10",
  lime: "text-lime-500 bg-lime-500/10",
  teal: "text-teal-500 bg-teal-500/10",
  indigo: "text-indigo-500 bg-indigo-500/10",
  sky: "text-sky-500 bg-sky-500/10",
  rose: "text-rose-500 bg-rose-500/10",
  slate: "text-slate-500 bg-slate-500/10",
};

function getColorClasses(color: string) {
  return trackColorMap[color] ?? "text-primary bg-primary/10";
}

const features = [
  {
    icon: Terminal,
    title: "Interactive Terminal",
    description: "Practice commands right in your browser — no setup needed.",
  },
  {
    icon: Play,
    title: "Video Lessons",
    description: "Curated YouTube tutorials from the best educators.",
  },
  {
    icon: BookOpen,
    title: "26 Learning Tracks",
    description:
      "Every role from roadmap.sh — DevOps, Frontend, AI, Mobile, and more.",
  },
  {
    icon: Flame,
    title: "Progress Tracking",
    description: "Track your learning streak, earn badges, and stay motivated.",
  },
];

export default function Home() {
  const totalLessons = getTotalLessons();
  const totalModules = getTotalModules();
  const totalTracks = curriculum.length;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="text-sm py-1.5 px-4">
              Free &amp; Open Source &middot; {totalTracks} Tracks
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Master Any{" "}
              <span className="text-blue-500">Tech Role</span>
              <br />
              <span className="text-muted-foreground">Zero to Hero</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {totalTracks} structured learning tracks covering every role on{" "}
              <a
                href="https://roadmap.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                roadmap.sh
              </a>
              . Interactive terminal exercises, curated video tutorials, and
              hands-on projects — all free, all in your browser.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signin">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-base h-12 px-8"
                >
                  Start Learning Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/learn">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base h-12 px-8"
                >
                  Browse {totalTracks} Tracks
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-4">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-500" />
                {totalTracks} Tracks
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-500" />
                {totalModules}+ Modules
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-500" />
                {totalLessons}+ Lessons
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-500" />
                In-Browser Terminal
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Everything You Need to Learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <Card key={f.title} className="border-0 shadow-none bg-muted/50">
              <CardContent className="pt-6 space-y-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* All Tracks by Category */}
      <section className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-4">
            {totalTracks} Learning Tracks
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
            Structured curricula inspired by{" "}
            <a
              href="https://roadmap.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              roadmap.sh
            </a>
            , designed for complete beginners and experienced engineers alike.
          </p>

          <div className="space-y-12 max-w-6xl mx-auto">
            {trackCategories.map((cat) => {
              const Icon = categoryIcons[cat.icon] ?? BookOpen;
              const tracksInCat = curriculum.filter(
                (t) => t.category === cat.id
              );
              if (tracksInCat.length === 0) return null;

              return (
                <div key={cat.id}>
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                    <h3 className="text-xl font-bold">{cat.label}</h3>
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {tracksInCat.length}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tracksInCat.map((track) => {
                      const colors = getColorClasses(track.color);
                      const [textColor, bgColor] = colors.split(" ");
                      const lessonCount = getTrackLessonCount(track);

                      return (
                        <Link key={track.id} href={`/learn?track=${track.id}`}>
                          <Card className="h-full hover:border-primary/30 transition-colors cursor-pointer">
                            <CardContent className="pt-6 space-y-3">
                              <div className="flex items-center gap-3">
                                <div
                                  className={`h-10 w-10 rounded-lg flex items-center justify-center ${bgColor}`}
                                >
                                  <BookOpen
                                    className={`h-5 w-5 ${textColor}`}
                                  />
                                </div>
                                <div className="min-w-0">
                                  <h4 className="font-semibold truncate">
                                    {track.title}
                                  </h4>
                                  <p className="text-xs text-muted-foreground">
                                    {track.modules.length} modules &middot;{" "}
                                    {lessonCount} lessons
                                  </p>
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {track.description}
                              </p>
                            </CardContent>
                          </Card>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t">
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Join learners mastering {totalTracks} tech roles from scratch.
            It&apos;s completely free.
          </p>
          <Link href="/auth/signin">
            <Button size="lg" className="text-base h-12 px-8">
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>TechPath Learning Platform</p>
          <div className="flex gap-6">
            <a
              href="https://roadmap.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              roadmap.sh
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
