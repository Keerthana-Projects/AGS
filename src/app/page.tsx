import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { ArrowRight, Bot, PenSquare, BarChart3 } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero");

  const features = [
    {
      icon: <PenSquare className="h-8 w-8 text-primary" />,
      title: "AI-Powered Grading",
      description: "Automate grading for essays, code, and more with cutting-edge AI, providing instant, detailed feedback.",
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "Chatbot Assistance",
      description: "An AI assistant helps students understand feedback, clarify concepts, and get study suggestions.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Real-Time Analytics",
      description: "Faculty get actionable insights on student performance and topic mastery through visual dashboards.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="container mx-auto h-20 shrink-0">
        <div className="flex h-full items-center justify-between">
          <Logo />
          <Button asChild>
            <Link href="/auth/signin">Login <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container mx-auto py-16 text-center md:py-24 lg:py-32">
          <h1 className="font-headline text-4xl font-bold tracking-tighter md:text-6xl lg:text-7xl">
            The Future of Assessment is Here
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            AssessAI leverages artificial intelligence to provide fair, fast, and
            formative feedback, empowering both educators and learners.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/auth/signin">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </section>

        {heroImage && (
          <section className="container mx-auto">
            <div className="relative aspect-[3/2] max-h-[600px] w-full overflow-hidden rounded-2xl shadow-2xl md:aspect-[2/1]">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </section>
        )}

        <section className="container mx-auto py-16 md:py-24 lg:py-32">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl">
              A Smarter Way to Evaluate
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Discover how our core features transform the educational landscape.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="rounded-xl border bg-card p-8 text-center shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {feature.icon}
                </div>
                <h3 className="mt-6 font-headline text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="container mx-auto border-t">
        <div className="flex h-20 items-center justify-between text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AssessAI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
