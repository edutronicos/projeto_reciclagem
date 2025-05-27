import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Recycle, Leaf, Package, Trash2, BarChart3 } from "lucide-react";
import Image from "next/image";

const concepts = [
  {
    icon: <Recycle className="h-10 w-10 text-primary mb-4" />,
    title: "O que é Reciclagem?",
    description: "Reciclagem é o processo de conversão de resíduos em novos materiais ou produtos, reduzindo o consumo de matérias-primas, o uso de energia e a poluição.",
  },
  {
    icon: <Leaf className="h-10 w-10 text-green-600 mb-4" />,
    title: "Lixo Orgânico",
    description: "Restos de alimentos, folhas, e outros materiais de origem biológica que podem ser compostados, transformando-se em adubo.",
  },
  {
    icon: <Package className="h-10 w-10 text-blue-600 mb-4" />,
    title: "Lixo Reciclável",
    description: "Materiais como papel, plástico, vidro e metal que podem ser processados e transformados em novos produtos.",
  },
  {
    icon: <Trash2 className="h-10 w-10 text-red-600 mb-4" />,
    title: "Lixo Não Reciclável / Rejeito",
    description: "Materiais que não podem ser reciclados ou compostados, como alguns tipos de plásticos, papéis sujos e lixo sanitário. Devem ser encaminhados para aterros.",
  },
];

export function RecyclingConceptsSection() {
  return (
    <section id="conceitos" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Entendendo a Reciclagem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {concepts.map((concept, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <CardHeader>
                {concept.icon}
                <CardTitle className="text-xl text-foreground">{concept.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{concept.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="mt-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="items-center text-center">
            <BarChart3 className="h-10 w-10 text-accent mb-4" />
            <CardTitle className="text-xl text-foreground">Situação da Reciclagem no Brasil</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Gráfico ilustrativo sobre reciclagem no Brasil" 
              width={300} 
              height={200} 
              className="rounded-lg object-cover"
              data-ai-hint="recycling chart" 
            />
            <p className="text-foreground/80">
              O Brasil ainda enfrenta desafios significativos na gestão de resíduos. Embora haja potencial, as taxas de reciclagem são baixas para muitos materiais. A conscientização e a infraestrutura adequada são cruciais para melhorar este cenário e promover uma economia circular mais robusta.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
