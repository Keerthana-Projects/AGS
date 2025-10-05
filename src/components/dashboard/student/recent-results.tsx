import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { mockStudentOwnResponses } from "@/lib/placeholder-data";
import { mockTests } from "@/lib/placeholder-data";
import { format } from 'date-fns';
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function RecentResults() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Results</CardTitle>
        <CardDescription>
          Summary of your most recently submitted tests.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {mockStudentOwnResponses.map((response) => {
          const test = mockTests.find((t) => t.id === response.testId);
          if (!test) return null;

          const percentage = (response.score / response.totalPoints) * 100;

          return (
            <Link href={`/dashboard/student/results/${response.id}`} key={response.id} className="block rounded-lg transition-colors hover:bg-accent">
              <div className="p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-medium">{test.title}</p>
                        <p className="text-sm text-muted-foreground">
                            Submitted on {format(response.submittedAt, 'MMMM d, yyyy')}
                        </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="mt-4 flex items-center gap-4">
                    <p className="text-xl font-bold text-primary">{response.score}<span className="text-sm font-normal text-muted-foreground">/{response.totalPoints}</span></p>
                    <Progress value={percentage} className="flex-1" />
                </div>
              </div>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}
