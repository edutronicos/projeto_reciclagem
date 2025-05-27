"use server";

import { getProductRecyclingInfo, GetProductRecyclingInfoInput, GetProductRecyclingInfoOutput } from "@/ai/flows/get-recycling-info";
import { suggestAlternativeDisposal, SuggestAlternativeDisposalInput, SuggestAlternativeDisposalOutput } from "@/ai/flows/suggest-alternative-recycling";

interface ActionResult {
  success: boolean;
  data?: GetProductRecyclingInfoOutput | SuggestAlternativeDisposalOutput;
  error?: string;
}

export async function getRecyclingInfoAction(productName: string): Promise<ActionResult> {
  if (!productName || productName.trim() === "") {
    return { success: false, error: "Por favor, insira um nome de produto ou material." };
  }

  try {
    const input: GetProductRecyclingInfoInput = { productName };
    const result = await getProductRecyclingInfo(input);
    return { success: true, data: result };
  } catch (e) {
    console.error("Error calling getProductRecyclingInfo:", e);
    return { success: false, error: "Ocorreu um erro ao buscar informações de reciclagem. Tente novamente." };
  }
}

export async function suggestAlternativeDisposalAction(productName: string): Promise<ActionResult> {
  if (!productName || productName.trim() === "") {
    return { success: false, error: "Por favor, insira um nome de produto ou material." };
  }
  try {
    const input: SuggestAlternativeDisposalInput = { productName };
    const result = await suggestAlternativeDisposal(input);
    return { success: true, data: result };
  } catch (e) {
    console.error("Error calling suggestAlternativeDisposal:", e);
    return { success: false, error: "Ocorreu um erro ao sugerir alternativas de descarte. Tente novamente." };
  }
}
