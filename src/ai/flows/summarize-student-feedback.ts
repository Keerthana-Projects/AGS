'use server';
/**
 * @fileOverview Summarizes student feedback trends to identify areas for curriculum improvement.
 *
 * - summarizeStudentFeedback - A function that summarizes student feedback.
 * - SummarizeStudentFeedbackInput - The input type for the summarizeStudentFeedback function.
 * - SummarizeStudentFeedbackOutput - The return type for the summarizeStudentFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeStudentFeedbackInputSchema = z.object({
  feedback: z.array(z.string()).describe('An array of student feedback strings.'),
});
export type SummarizeStudentFeedbackInput = z.infer<typeof SummarizeStudentFeedbackInputSchema>;

const SummarizeStudentFeedbackOutputSchema = z.object({
  summary: z.string().describe('A summary of the trends in student feedback.'),
});
export type SummarizeStudentFeedbackOutput = z.infer<typeof SummarizeStudentFeedbackOutputSchema>;

export async function summarizeStudentFeedback(input: SummarizeStudentFeedbackInput): Promise<SummarizeStudentFeedbackOutput> {
  return summarizeStudentFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeStudentFeedbackPrompt',
  input: {schema: SummarizeStudentFeedbackInputSchema},
  output: {schema: SummarizeStudentFeedbackOutputSchema},
  prompt: `You are an expert in analyzing student feedback. Please provide a concise summary of the following feedback, highlighting key trends and areas for curriculum improvement:\n\nFeedback: {{{feedback}}}`,
});

const summarizeStudentFeedbackFlow = ai.defineFlow(
  {
    name: 'summarizeStudentFeedbackFlow',
    inputSchema: SummarizeStudentFeedbackInputSchema,
    outputSchema: SummarizeStudentFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
