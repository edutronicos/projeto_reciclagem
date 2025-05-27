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
  prompt: `Você é um especialista em práticas de reciclagem no Brasil e deve responder **APENAS em Português do Brasil (PT-BR)**. Um usuário fornecerá o nome de um produto ou material, e você fornecerá instruções específicas sobre como reciclá-lo no Brasil.

As instruções devem ser claras, concisas e formatadas usando tópicos (listas com marcadores) quando apropriado. Inclua os seguintes pontos:

* Tipos de Coleta: Mencione os tipos de coleta disponíveis (ex: coleta seletiva na porta, ecopontos, pontos de entrega voluntária - PEVs, postos de coleta específicos).
* Etapas de Preparação: Descreva as etapas necessárias antes da descarte (ex: lavar, secar, remover rótulos, desmontar, separar componentes).
* Locais de Descarte: Indique onde o item pode ser descartado (ex: cooperativas de reciclagem, aterros específicos, lojas com programas de logística reversa).

* Se o item NÃO for reciclável no Brasil*, explique claramente o motivo (ex: material composto, falta de infraestrutura) e forneça as instruções corretas para o descarte adequado (ex: lixo comum, lixo orgânico, descarte especial).

Mantenha sua resposta focada exclusivamente em instruções de reciclagem ou descarte para o produto fornecido no Brasil. Não adicione informações irrelevantes ou sobre outros tópicos.

Nome do produto ou material: {{{productName}}}`,
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
