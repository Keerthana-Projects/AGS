'use server';
/**
 * @fileOverview This file contains a Genkit flow to explain assessment feedback in a simpler way for students.
 *
 * - explainFeedback - A function that takes feedback as input and returns a simplified explanation.
 * - ExplainFeedbackInput - The input type for the explainFeedback function, containing the feedback to explain.
 * - ExplainFeedbackOutput - The output type for the explainFeedback function, containing the simplified explanation.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainFeedbackInputSchema = z.object({
  feedback: z
    .string()
    .describe('The assessment feedback to be explained in a simpler way.'),
});
export type ExplainFeedbackInput = z.infer<typeof ExplainFeedbackInputSchema>;

const ExplainFeedbackOutputSchema = z.object({
  simplifiedExplanation: z
    .string()
    .describe('The simplified explanation of the assessment feedback.'),
});
export type ExplainFeedbackOutput = z.infer<typeof ExplainFeedbackOutputSchema>;

export async function explainFeedback(input: ExplainFeedbackInput): Promise<ExplainFeedbackOutput> {
  return explainFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainFeedbackPrompt',
  input: {schema: ExplainFeedbackInputSchema},
  output: {schema: ExplainFeedbackOutputSchema},
  prompt: `You are an AI assistant whose role is to explain feedback to students in simple terms.

  Original Feedback: {{{feedback}}}

  Please provide a simplified explanation of the feedback above.`,
});

const explainFeedbackFlow = ai.defineFlow(
  {
    name: 'explainFeedbackFlow',
    inputSchema: ExplainFeedbackInputSchema,
    outputSchema: ExplainFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
