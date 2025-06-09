import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

const geminiApiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!geminiApiKey) {
  console.error('ERRO: GEMINI_API_KEY não está definida nas variáveis de ambiente!');
};

export const ai = genkit({
  plugins: [googleAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY })],
  model: 'googleai/gemini-2.0-flash',
});
