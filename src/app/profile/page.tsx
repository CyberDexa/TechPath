import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ProfileContent } from "./profile-content";

export const metadata = {
  title: "Profile | TechPath",
  description: "View your learning stats, badges, and progress.",
};

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/signin");
  }

  return (
    <ProfileContent
      user={{
        name: session.user.name || "Learner",
        email: session.user.email || "",
        image: session.user.image || "",
      }}
    />
  );
}
