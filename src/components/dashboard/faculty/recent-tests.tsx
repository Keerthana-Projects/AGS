import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mockTests } from "@/lib/placeholder-data";
import { FileText, MoreVertical, View } from "lucide-react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

export function RecentTests() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Tests</CardTitle>
        <CardDescription>
          A list of tests you have recently created or managed.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockTests.slice(0, 4).map((test) => (
            <div
              key={test.id}
              className="flex items-center justify-between rounded-md border p-4"
            >
              <div className="flex items-center gap-4">
                <FileText className="h-6 w-6 text-muted-foreground" />
                <div>
                  <p className="font-medium">{test.title}</p>
                  <p className="text-sm text-muted-foreground">{test.course}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" asChild>
                    <Link href={`/dashboard/faculty/test/${test.id}`}>
                        <View className="mr-2 h-4 w-4"/>
                        View
                    </Link>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Submissions</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
