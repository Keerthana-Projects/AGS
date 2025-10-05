import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Overview } from "@/components/dashboard/overview";
import { RecentTests } from "@/components/dashboard/faculty/recent-tests";
import { useAuth } from "@/context/AuthContext";

export default function FacultyDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight">
            Faculty Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your tests and view student analytics.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create New Test
        </Button>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Tests</CardTitle>
            <CardDescription>Number of tests created</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">12</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Avg. Score</CardTitle>
            <CardDescription>Across all student submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">82%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Submissions</CardTitle>
            <CardDescription>Received across all tests</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">452</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
            <Overview />
        </div>
        <div>
            <RecentTests />
        </div>
      </div>
    </div>
  );
}
