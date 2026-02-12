import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <FileQuestion className="h-16 w-16 text-muted-foreground/50 mb-6" />
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Page not found. The content you&apos;re looking for doesn&apos;t exist.
      </p>
      <div className="flex gap-3">
        <Link href="/">
          <Button variant="outline" className="gap-2">
            <Home className="h-4 w-4" />
            Home
          </Button>
        </Link>
        <Link href="/learn">
          <Button className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Browse Curriculum
          </Button>
        </Link>
      </div>
    </div>
  );
}
