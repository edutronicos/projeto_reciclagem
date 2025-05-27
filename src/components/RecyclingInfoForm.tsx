"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, AlertTriangle, Info } from 'lucide-react';
import { getRecyclingInfoAction } from '@/app/actions';
import type { GetProductRecyclingInfoOutput } from '@/ai/flows/get-recycling-info';

const formSchema = z.object({
  productName: z.string().min(1, { message: "Por favor, insira o nome do produto ou material." }),
});

type FormData = z.infer<typeof formSchema>;

export function RecyclingInfoForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<GetProductRecyclingInfoOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [productName, setProductName] = useState<string>('');

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setAiResponse(null);
    setError(null);
    setProductName(data.productName);

    const result = await getRecyclingInfoAction(data.productName);

    if (result.success && result.data) {
      setAiResponse(result.data as GetProductRecyclingInfoOutput);
    } else {
      setError(result.error || "Ocorreu um erro desconhecido.");
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            {...register("productName")}
            placeholder="Digite o nome do produto ou material..."
            className="flex-grow text-lg p-4 rounded-lg shadow-sm focus:ring-accent focus:border-accent"
            aria-label="Nome do produto ou material"
          />
          <Button type="submit" disabled={isLoading} className="text-lg p-4 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground shadow-sm transition-colors">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Verificando...
              </>
            ) : (
              "Verificar Reciclagem"
            )}
          </Button>
        </div>
        {errors.productName && <p className="text-destructive text-sm mt-1">{errors.productName.message}</p>}
      </form>

      <div className="mt-8">
        {error && (
          <Alert variant="destructive" className="shadow-lg">
            <AlertTriangle className="h-5 w-5" />
            <AlertTitle>Erro!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {aiResponse && (
          <Card className="shadow-xl animate-in fade-in-50 duration-500">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary flex items-center">
                <Info className="mr-2 h-6 w-6" /> Informações de Reciclagem
              </CardTitle>
              <CardDescription>Resultado para: <i>{ productName }</i></CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground whitespace-pre-wrap leading-relaxed">
                {aiResponse.recyclingInstructions.split('\n').map((line, index) => (
                  <span key={index} className="block text-left">{line}</span>
                ))}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
