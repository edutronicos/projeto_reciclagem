import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

const geminiApiKey = process.env.REACT_APP_GEMINI_API_KEY; // Mantenha assim por enquanto para depurar

console.log('Valor da GEMINI_API_KEY:', geminiApiKey); // Adicione esta linha para depurar

if (!geminiApiKey) {
  console.error('ERRO: GEMINI_API_KEY não está definida nas variáveis de ambiente!');
};

export const ai = genkit({
  plugins: [googleAI({ apiKey: geminiApiKey })], // Use a variável local
  model: 'googleai/gemini-2.0-flash',
});
