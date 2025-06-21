import Link from 'next/link';
import Image from 'next/image';

export function AppHeader() {
  return (
    <header className="bg-background/80 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          <Image src={'/images/recicla_logo.png'} alt="Curitiba Recicla Logo" className="h-12 w-12" width={48} height={48} /> {/* Replace Recycle icon with Image tag */}
          <span>Curitiba Recicla</span>
        </Link>
        <nav>
          <ul className="flex items-center gap-6 text-foreground">
            <li>
              <Link href="#como-funciona" className="hover:text-primary transition-colors">
                Como Funciona
              </Link>
            </li>
            <li>
              <Link href="#beneficios" className="hover:text-primary transition-colors">
                Benefícios
              </Link>
            </li>
            <li>
              <Link href="#sobre" className="hover:text-primary transition-colors">
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
