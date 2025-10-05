import { TestTube2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <TestTube2 className="h-6 w-6 text-primary" />
      <h1 className="font-headline text-xl font-bold tracking-tighter">
        AssessAI
      </h1>
    </div>
  );
}
