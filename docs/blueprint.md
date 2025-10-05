# **App Name**: AssessAI

## Core Features:

- User Authentication: Secure role-based login using Firebase Authentication with email/password and Google OAuth. Roles: Admin, Faculty, Student.
- AI-Powered Grading: Automated grading for MCQ, MSQ, essay, and coding questions using the Gemini API tool and NLP techniques to provide detailed feedback. Modular AI adapter layer for future integration with OpenAI or Vertex AI.
- Chatbot Assistance: AI Chatbot powered by Gemini API or Dialogflow, integrated with Firestore. Helps students understand grading and feedback. Provides concept explanations and study suggestions.
- Test Management (Faculty Dashboard): Create and manage tests across all question types. Upload answer keys and scoring rubrics. View real-time grading progress and student analytics.
- Student Dashboard: Attempt mock tests and coding tasks. Upload essay/code files (stored in Firebase Cloud Storage). View AI-generated feedback, score, and improvement tips.
- Real-Time Analytics: Faculty dashboard displays visual analytics from Firestore data. Metrics include student performance, topic accuracy, and feedback trends.
- Database Integration: Use Firebase Firestore with collections: users, tests, responses, and chatLogs. Use Cloud Storage for essay/code file uploads.
- AI & Backend: AI Tools: Gemini API, Genkit, and NLP pipeline for grading logic. Backend: Firebase Functions (Node.js, TypeScript) for grading automation and feedback generation.
- Open-Source & License: Project released under the MIT License. Includes README, LICENSE, CONTRIBUTING, and CITATION files for academic reproducibility.
- Reproducibility Dataset: Includes anonymized student responses and grading samples for benchmarking and validation.

## Style Guidelines:

- Clean, academic, and accessible color palette (light neutral base, accent blue/purple for focus).
- Modular, intuitive dashboards for all roles.
- Headlines - Space Grotesk (sans-serif); Body - Inter (sans-serif); Code - Source Code Pro (monospace)
- Minimal, modern icons (Lucide / Heroicons).
- Subtle transitions, micro-interactions for feedback states (submission, evaluation, chatbot reply).