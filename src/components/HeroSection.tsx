import { RecyclingInfoForm } from './RecyclingInfoForm';

export function HeroSection() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 text-center bg-gradient-to-br from-background to-secondary/30 rounded-xl shadow-lg">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
          Transforme o Futuro: Recicle com Inteligência no Brasil!
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-3xl mx-auto">
          Descubra como descartar seus resíduos corretamente. Insira o nome do produto ou material abaixo e nossa IA fornecerá informações detalhadas sobre como reciclá-lo no Brasil.
        </p>
        <RecyclingInfoForm />
      </div>
    </section>
  );
}
