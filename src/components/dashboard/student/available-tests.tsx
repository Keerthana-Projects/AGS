import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mockTests } from "@/lib/placeholder-data";
import { Clock, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export function AvailableTests() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Tests</CardTitle>
        <CardDescription>
          Tests that are currently available for you to take.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockTests.map((test) => (
            <div
              key={test.id}
              className="flex flex-col gap-4 rounded-md border p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{test.title}</p>
                  <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{test.course}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{test.duration} min</span>
                  </div>
                </div>
              </div>
              <Button asChild className="shrink-0">
                <Link href={`/dashboard/student/test/${test.id}`}>
                  Start Test <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
