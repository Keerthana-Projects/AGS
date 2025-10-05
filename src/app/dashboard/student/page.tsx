"use client";

import { useAuth } from "@/context/AuthContext";
import { AvailableTests } from "@/components/dashboard/student/available-tests";
import { RecentResults } from "@/components/dashboard/student/recent-results";

export default function StudentDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Welcome back, {user?.name.split(" ")[0]}!
        </h1>
        <p className="text-muted-foreground">
          Here&apos;s your learning dashboard for today.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <AvailableTests />
        <RecentResults />
      </div>
    </div>
  );
}
