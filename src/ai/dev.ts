import { config } from 'dotenv';
config();

import '@/ai/flows/generate-test-from-prompt.ts';
import '@/ai/flows/summarize-student-feedback.ts';
import '@/ai/flows/explain-feedback.ts';