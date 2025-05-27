import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, Users, DollarSign } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    icon: <Sprout className="h-10 w-10 text-primary mb-4" />,
    title: "Benefícios Ambientais",
    description: "Reduz a quantidade de lixo em aterros, economiza recursos naturais, diminui a poluição do ar, água e solo, e ajuda a combater as mudanças climáticas.",
    imageSrc: "/images/reciclagem2.jpg",
    imageAlt: "Paisagem natural preservada",
    aiHint: "nature landscape"
  },
  {
    icon: <Users className="h-10 w-10 text-accent mb-4" />,
    title: "Benefícios Sociais",
    description: "Gera empregos e renda para catadores e trabalhadores da indústria de reciclagem, promove a conscientização ambiental e fortalece a cidadania.",
    imageSrc: "/images/reciclagem3.jpg",
    imageAlt: "Pessoas trabalhando em cooperativa de reciclagem",
    aiHint: "community recycling"
  },
  {
    icon: <DollarSign className="h-10 w-10 text-yellow-500 mb-4" />,
    title: "Benefícios Econômicos",
    description: "Reduz custos com a extração de novas matérias-primas, impulsiona a indústria da reciclagem, gera valor para materiais descartados e fomenta a inovação.",
    imageSrc: "/images/reciclagem4.jpg",
    imageAlt: "Moedas e gráficos de crescimento",
    aiHint: "economic growth"
  },
];

export function RecyclingBenefitsSection() {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Vantagens de Reciclar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
              <Image 
                src={benefit.imageSrc} 
                alt={benefit.imageAlt} 
                width={600} 
                height={400} 
                className="w-full h-48 object-cover"
                data-ai-hint={benefit.aiHint}
              />
              <CardHeader className="items-center text-center">
                {benefit.icon}
                <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow">
                <p className="text-foreground/80">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
