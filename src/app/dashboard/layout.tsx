"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Logo } from "@/components/logo";
import { UserNav } from "@/components/user-nav";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  GraduationCap,
  BookOpenCheck,
  BarChart3,
  Users,
  Settings,
  Menu,
  FileText,
  PenSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const facultyNav = [
  { href: "/dashboard/faculty", icon: <LayoutDashboard />, label: "Dashboard" },
  { href: "/dashboard/faculty/tests", icon: <FileText />, label: "Tests" },
  { href: "/dashboard/faculty/analytics", icon: <BarChart3 />, label: "Analytics" },
  { href: "/dashboard/faculty/students", icon: <Users />, label: "Students" },
];

const studentNav = [
  { href: "/dashboard/student", icon: <LayoutDashboard />, label: "Dashboard" },
  { href: "/dashboard/student/tests", icon: <PenSquare />, label: "Take Test" },
  { href: "/dashboard/student/results", icon: <BookOpenCheck />, label: "My Results" },
];

const adminNav = [
  { href: "/dashboard/admin", icon: <LayoutDashboard />, label: "Dashboard" },
  { href: "/dashboard/admin/users", icon: <Users />, label: "User Management" },
  { href: "/dashboard/admin/settings", icon: <Settings />, label: "System Settings" },
];

function DashboardSidebar() {
  const { user } = useAuth();
  const pathname = usePathname();

  const getNavItems = () => {
    switch (user?.role) {
      case "faculty":
        return facultyNav;
      case "student":
        return studentNav;
      case "admin":
        return adminNav;
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
                <Link href={item.href} passHref legacyBehavior>
                    <SidebarMenuButton isActive={pathname.startsWith(item.href)}>
                        {item.icon}
                        <span>{item.label}</span>
                    </SidebarMenuButton>
                </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="text-xs text-sidebar-foreground/50 p-2">
            <p>&copy; {new Date().getFullYear()} AssessAI</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}


function MobileMenu() {
    const { setOpenMobile } = useSidebar();
    return (
        <Button variant="ghost" size="icon" onClick={() => setOpenMobile(true)}>
            <Menu />
        </Button>
    )
}

function LoadingSkeleton() {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <div className="w-full max-w-md space-y-4 p-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-8 w-1/2" />
            </div>
        </div>
    )
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/signin");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <LoadingSkeleton />;
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm md:justify-end">
            <div className="md:hidden">
              <MobileMenu/>
            </div>
            <UserNav />
          </header>
          <main className="flex-1 overflow-y-auto bg-secondary/50 p-4 md:p-8">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
