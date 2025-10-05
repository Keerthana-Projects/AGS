"use client";

import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { explainFeedback } from "@/ai/flows/explain-feedback";
import { Bot, Loader2, Send, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { ChatMessage } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/context/AuthContext';

export function FeedbackChatbot({ initialFeedback }: { initialFeedback: string }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'assistant', content: "Hello! I can help you understand your feedback. Ask me anything about it, or ask me to explain a specific part." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const prompt = `Here is the original feedback for context: "${initialFeedback}". The user has a question about it. Their question is: "${input}". Please provide a simple, helpful explanation.`;
      const result = await explainFeedback({ feedback: prompt });
      const assistantMessage: ChatMessage = { id: (Date.now() + 1).toString(), role: 'assistant', content: result.simplifiedExplanation };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error explaining feedback:", error);
      toast({
        title: "Error",
        description: "Sorry, I couldn't process your request. Please try again.",
        variant: "destructive",
      });
       const errorMessage: ChatMessage = { id: (Date.now() + 1).toString(), role: 'assistant', content: "I'm having trouble connecting right now. Please try again in a moment." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({
            top: scrollAreaRef.current.scrollHeight,
            behavior: 'smooth'
        })
    }
  }, [messages]);
  

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-6 w-6" />
          Feedback Helper
        </CardTitle>
        <CardDescription>Ask questions to better understand your results.</CardDescription>
      </CardHeader>
      <CardContent className="flex h-[500px] flex-col">
        <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn("flex items-start gap-3", {
                  'justify-end': message.role === 'user',
                })}
              >
                {message.role === 'assistant' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback><Bot className="h-4 w-4"/></AvatarFallback>
                  </Avatar>
                )}
                 <div className={cn("max-w-[75%] rounded-lg p-3 text-sm", {
                    'bg-primary text-primary-foreground': message.role === 'user',
                    'bg-muted': message.role === 'assistant',
                 })}>
                    {message.content}
                 </div>
                {message.role === 'user' && user && (
                  <Avatar className="h-8 w-8">
                     <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
                 <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                        <AvatarFallback><Bot className="h-4 w-4"/></AvatarFallback>
                    </Avatar>
                    <div className="bg-muted rounded-lg p-3 flex items-center">
                        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                    </div>
                 </div>
            )}
          </div>
        </ScrollArea>
        <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2 border-t pt-4">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., Explain what 'edge case' means..."
            disabled={isLoading}
            autoComplete="off"
          />
          <Button type="submit" disabled={isLoading || !input.trim()}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
