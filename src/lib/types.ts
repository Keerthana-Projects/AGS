export type Role = "student" | "faculty" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
}

export type QuestionType = "multiple-choice" | "multiple-select" | "essay" | "coding";

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  options?: string[];
  points: number;
}

export interface Test {
  id: string;
  title: string;
  course: string;
  duration: number; // in minutes
  questions: Question[];
  totalPoints: number;
}

export interface StudentResponse {
  id: string;
  testId: string;
  studentId: string;
  studentName: string;
  submittedAt: Date;
  score: number;
  totalPoints: number;
  overallFeedback: string;
}

export type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};
