import type { Metadata } from "next";
import { getTrack } from "@/lib/curriculum";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ trackId: string }>;
}): Promise<Metadata> {
  const { trackId } = await params;
  const track = getTrack(trackId);

  if (!track) {
    return { title: "Track Not Found | DevOps & MLOps Learning" };
  }

  return {
    title: `${track.title} | DevOps & MLOps Learning`,
    description: track.description,
    openGraph: {
      title: `${track.title} — Learn ${track.title}`,
      description: `${track.modules.length} modules, ${track.modules.reduce((s, m) => s + m.lessons.length, 0)} lessons. ${track.description}`,
    },
  };
}

export default function TrackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
