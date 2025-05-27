export function AppFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="sobre" className="bg-secondary text-secondary-foreground py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="mb-2">Projeto desenvolvido por: Equipe Firebase Studio & GenAI</p>
        <p className="mb-2">Plataformas: Firebase, Google AI (Gemini), Next.js, ShadCN/UI, Tailwind CSS</p>
        <p>&copy; {currentYear} RecycleAI Brasil. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
