// src/ai/flows/suggest-alternative-recycling.ts
'use server';
/**
 * @fileOverview A flow to suggest alternative disposal methods if an item is not recyclable.
 *
 * - suggestAlternativeDisposal - A function that suggests alternative disposal methods.
 * - SuggestAlternativeDisposalInput - The input type for the suggestAlternativeDisposal function.
 * - SuggestAlternativeDisposalOutput - The return type for the suggestAlternativeDisposal function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestAlternativeDisposalInputSchema = z.object({
  productName: z.string().describe('The name of the product or material.'),
});
export type SuggestAlternativeDisposalInput = z.infer<typeof SuggestAlternativeDisposalInputSchema>;

const SuggestAlternativeDisposalOutputSchema = z.object({
  isRecyclable: z.boolean().describe('Whether or not the item is recyclable.'),
  explanation: z.string().describe('Why the item is not recyclable.'),
  alternativeDisposalMethods: z.string().describe('Alternative eco-friendly disposal methods.'),
});
export type SuggestAlternativeDisposalOutput = z.infer<typeof SuggestAlternativeDisposalOutputSchema>;

export async function suggestAlternativeDisposal(input: SuggestAlternativeDisposalInput): Promise<SuggestAlternativeDisposalOutput> {
  return suggestAlternativeDisposalFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestAlternativeDisposalPrompt',
  input: {schema: SuggestAlternativeDisposalInputSchema},
  output: {schema: SuggestAlternativeDisposalOutputSchema},
  prompt: `You are an expert in waste management and recycling practices in Brazil.

  The user will provide the name of a product or material. You must determine if it is recyclable in Brazil.

  If the item is recyclable, set isRecyclable to true, provide an empty explanation and alternativeDisposalMethods with recycling information for the product in Brazil.
  If it is not recyclable, set isRecyclable to false and:
  - Explain why the product is not recyclable in the 'explanation' field.
  - Suggest alternative eco-friendly disposal methods in the 'alternativeDisposalMethods' field.
  - Keep the response concise and clear, and only focus on the requested item.
  Product Name: {{{productName}}}
  `,
});

const suggestAlternativeDisposalFlow = ai.defineFlow(
  {
    name: 'suggestAlternativeDisposalFlow',
    inputSchema: SuggestAlternativeDisposalInputSchema,
    outputSchema: SuggestAlternativeDisposalOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
