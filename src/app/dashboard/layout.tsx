import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | DevOps & MLOps Learning",
  description:
    "Track your learning progress across all DevOps and MLOps tracks.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
