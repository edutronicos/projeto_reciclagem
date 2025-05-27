// src/ai/flows/get-recycling-info.ts
'use server';
/**
 * @fileOverview This file defines a Genkit flow to retrieve recycling information for a given product or material in Brazil.
 *
 * - getProductRecyclingInfo - A function that takes a product name as input and returns recycling instructions.
 * - GetProductRecyclingInfoInput - The input type for the getProductRecyclingInfo function.
 * - GetProductRecyclingInfoOutput - The return type for the getProductRecyclingInfo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetProductRecyclingInfoInputSchema = z.object({
  productName: z.string().describe('The name of the product or material to recycle.'),
});
export type GetProductRecyclingInfoInput = z.infer<typeof GetProductRecyclingInfoInputSchema>;

const GetProductRecyclingInfoOutputSchema = z.object({
  recyclingInstructions: z
    .string()
    .describe(
      'Specific instructions on how to recycle the product or material in Brazil, including types of collection, preparation, and disposal locations. If not recyclable, explain why and provide correct disposal instructions.'
    ),
});
export type GetProductRecyclingInfoOutput = z.infer<typeof GetProductRecyclingInfoOutputSchema>;

export async function getProductRecyclingInfo(input: GetProductRecyclingInfoInput): Promise<GetProductRecyclingInfoOutput> {
  return getProductRecyclingInfoFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getProductRecyclingInfoPrompt',
  input: {schema: GetProductRecyclingInfoInputSchema},
  output: {schema: GetProductRecyclingInfoOutputSchema},
  prompt: `You are an expert on recycling practices in Brazil. A user will provide the name of a product or material, and you will provide specific instructions on how to recycle it in Brazil.

Instructions should include:
* Types of collection (e.g., curbside recycling, drop-off centers)
* Preparation steps (e.g., rinsing, removing labels)
* Disposal locations (e.g., specific recycling facilities, donation centers)

If the item is not recyclable, explain why and provide the correct disposal instructions.

Keep your answer concise and clear. Do not answer about any other subject than recycling instructions for the given product in Brazil.

Product or material name: {{{productName}}}`,
});

const getProductRecyclingInfoFlow = ai.defineFlow(
  {
    name: 'getProductRecyclingInfoFlow',
    inputSchema: GetProductRecyclingInfoInputSchema,
    outputSchema: GetProductRecyclingInfoOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
