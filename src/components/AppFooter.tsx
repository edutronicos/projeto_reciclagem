import { Github } from "lucide-react";

export function AppFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="sobre" className="bg-secondary text-secondary-foreground py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="mb-2">Por: Elys Bianca Guimarães Pereira RA 24203955</p>
        <p className="mb-2">Plataformas: Firebase, Google AI (API), Next.js, Tailwind CSS</p>
        <p className="text-sm">&copy; {currentYear} Recile+ Brasil. Todos os direitos reservados. || Desenvolmento: <a href="https://github.com/edutronicos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
        <Github className="inline-block h-4 w-4 mr-1" />Edutronicos</a></p>
      </div>
    </footer>
  );
}