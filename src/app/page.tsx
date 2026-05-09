import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CredibilitySignals from '@/components/CredibilitySignals';
import ForNotFor from '@/components/ForNotFor';
import HowItWorks from '@/components/HowItWorks';
import AuditSection from '@/components/AuditSection';
import WhatHappensNext from '@/components/WhatHappensNext';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-white">
      <Navbar />
      <Hero />
      <CredibilitySignals />
      <ForNotFor />
      <HowItWorks />
      <AuditSection />
      <WhatHappensNext />
      <FinalCTA />
      <Footer />
    </main>
  );
}
