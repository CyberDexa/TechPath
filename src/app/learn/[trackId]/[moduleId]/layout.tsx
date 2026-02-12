import type { Metadata } from "next";
import { getModule, getTrack } from "@/lib/curriculum";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ trackId: string; moduleId: string }>;
}): Promise<Metadata> {
  const { trackId, moduleId } = await params;
  const track = getTrack(trackId);
  const mod = getModule(moduleId);

  if (!track || !mod) {
    return { title: "Module Not Found | DevOps & MLOps Learning" };
  }

  return {
    title: `${mod.title} — ${track.title} | DevOps & MLOps Learning`,
    description: mod.description,
    openGraph: {
      title: `${mod.title} — ${track.title}`,
      description: `${mod.lessons.length} lessons. ${mod.description}`,
    },
  };
}

export default function ModuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
