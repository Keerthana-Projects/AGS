"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function DashboardRedirectPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      const { role } = user;
      if (role === 'student') {
        router.replace('/dashboard/student');
      } else if (role === 'faculty') {
        router.replace('/dashboard/faculty');
      } else if (role === 'admin') {
        router.replace('/dashboard/admin');
      }
    }
  }, [user, loading, router]);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-muted-foreground">Redirecting to your dashboard...</p>
      </div>
    </div>
  );
}
