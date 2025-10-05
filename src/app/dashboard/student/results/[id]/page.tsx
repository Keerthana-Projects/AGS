import { mockStudentOwnResponses, mockTests } from "@/lib/placeholder-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, MessageCircleQuestion } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FeedbackChatbot } from "@/components/dashboard/student/feedback-chatbot";

export default function ResultDetailsPage({ params }: { params: { id: string } }) {
  const response = mockStudentOwnResponses.find((r) => r.id === params.id);
  
  if (!response) {
    return (
      <div className="flex h-full items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Result Not Found</CardTitle>
            <CardDescription>The requested test result could not be found.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
                <Link href="/dashboard/student">
                    <ArrowLeft className="mr-2 h-4 w-4"/>
                    Back to Dashboard
                </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  const test = mockTests.find((t) => t.id === response.testId);
  const percentage = (response.score / response.totalPoints) * 100;

  return (
    <div className="space-y-8">
      <div>
        <Button variant="ghost" asChild className="-ml-4">
            <Link href="/dashboard/student">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
            </Link>
        </Button>
        <h1 className="mt-2 font-headline text-3xl font-bold tracking-tight">
          Results for: {test?.title}
        </h1>
        <p className="text-muted-foreground">{test?.course}</p>
      </div>
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Your Score</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-baseline gap-2">
                        <p className="text-6xl font-bold text-primary">{response.score}</p>
                        <p className="text-2xl text-muted-foreground">/ {response.totalPoints}</p>
                    </div>
                    <Progress value={percentage} aria-label={`${percentage.toFixed(0)}% score`} />
                    <p className="text-center text-lg font-medium">{percentage.toFixed(1)}%</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Overall Feedback</CardTitle>
                    <CardDescription>AI-generated summary of your performance.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{response.overallFeedback}</p>
                </CardContent>
            </Card>
        </div>
        <div className="lg:row-span-2">
            <FeedbackChatbot initialFeedback={response.overallFeedback} />
        </div>
      </div>
    </div>
  );
}
