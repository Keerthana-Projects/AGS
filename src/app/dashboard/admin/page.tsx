import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Settings, Building } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Admin Dashboard
        </h1>
        <p className="text-muted-foreground">
          System-wide management and configuration.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Overview</CardTitle>
          <CardDescription>
            High-level statistics and management tools.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-3">
          <div className="flex items-center gap-4 rounded-lg border p-4">
            <Users className="h-8 w-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">1,254</p>
              <p className="text-sm text-muted-foreground">Total Users</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg border p-4">
            <Building className="h-8 w-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">42</p>
              <p className="text-sm text-muted-foreground">Faculty Members</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg border p-4">
            <Settings className="h-8 w-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">v1.0.0</p>
              <p className="text-sm text-muted-foreground">System Version</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>
                This section is a placeholder for user management functionality.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">Admin controls for adding, removing, and modifying user roles and permissions would be available here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
