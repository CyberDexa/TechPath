import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum | DevOps & MLOps Learning",
  description:
    "Browse all learning tracks — DevOps, MLOps, Frontend, Backend, Full Stack, and more. Structured modules with videos, exercises, and projects.",
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
