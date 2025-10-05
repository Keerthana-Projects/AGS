'use server';

/**
 * @fileOverview A test generator AI agent.
 *
 * - generateTestFromPrompt - A function that handles the test generation process.
 * - GenerateTestFromPromptInput - The input type for the generateTestFromPrompt function.
 * - GenerateTestFromPromptOutput - The return type for the generateTestFromPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTestFromPromptInputSchema = z.object({
  prompt: z.string().describe('The prompt to generate the test from.'),
});
export type GenerateTestFromPromptInput = z.infer<typeof GenerateTestFromPromptInputSchema>;

const GenerateTestFromPromptOutputSchema = z.object({
  test: z.string().describe('The generated test.'),
});
export type GenerateTestFromPromptOutput = z.infer<typeof GenerateTestFromPromptOutputSchema>;

export async function generateTestFromPrompt(input: GenerateTestFromPromptInput): Promise<GenerateTestFromPromptOutput> {
  return generateTestFromPromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTestFromPromptPrompt',
  input: {schema: GenerateTestFromPromptInputSchema},
  output: {schema: GenerateTestFromPromptOutputSchema},
  prompt: `You are an expert test generator. You will generate a test from the given prompt.\n\nPrompt: {{{prompt}}}`,  
});

const generateTestFromPromptFlow = ai.defineFlow(
  {
    name: 'generateTestFromPromptFlow',
    inputSchema: GenerateTestFromPromptInputSchema,
    outputSchema: GenerateTestFromPromptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
