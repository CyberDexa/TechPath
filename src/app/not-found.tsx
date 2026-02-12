import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-muted mb-6">
        <span className="text-4xl">🔍</span>
      </div>
      <h1 className="text-5xl font-bold mb-3">404</h1>
      <p className="text-xl text-muted-foreground mb-2">
        Page not found
      </p>
      <p className="text-sm text-muted-foreground mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        Try browsing our learning tracks instead.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/">
          <Button variant="outline" className="gap-2 w-full sm:w-auto">
            <Home className="h-4 w-4" />
            Home
          </Button>
        </Link>
        <Link href="/learn">
          <Button className="gap-2 w-full sm:w-auto">
            <BookOpen className="h-4 w-4" />
            Browse Tracks
          </Button>
        </Link>
      </div>
    </div>
  );
}
