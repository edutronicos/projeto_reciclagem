import { AppHeader } from '@/components/AppHeader';
import { AppFooter } from '@/components/AppFooter';
import { HeroSection } from '@/components/HeroSection';
import { RecyclingConceptsSection } from '@/components/RecyclingConceptsSection';
import { RecyclingBenefitsSection } from '@/components/RecyclingBenefitsSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-grow">
        <HeroSection />
        <RecyclingConceptsSection />
        <RecyclingBenefitsSection />
      </main>
      <AppFooter />
    </div>
  );
}
