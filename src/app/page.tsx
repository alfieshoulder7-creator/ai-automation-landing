import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CredibilitySignals from '@/components/CredibilitySignals';
import ForNotFor from '@/components/ForNotFor';
import HowItWorks from '@/components/HowItWorks';
import AuditSection from '@/components/AuditSection';
import WhatHappensNext from '@/components/WhatHappensNext';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import { BackgroundLayer } from '@/components/BackgroundLayer';
import { Testimonials } from '@/components/Testimonials';
import { ROICalculator } from '@/components/ROICalculator';
import { LiveAgentPreview } from '@/components/LiveAgentPreview';
import { SecurityGrid } from '@/components/SecurityGrid';
import { FoundersSection } from '@/components/FoundersSection';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundLayer />
      <Navbar />
      <Hero />
      <CredibilitySignals />
      <ROICalculator />
      <LiveAgentPreview />
      <ForNotFor />
      <HowItWorks />
      <SecurityGrid />
      <FoundersSection />
      <Testimonials />
      <AuditSection />
      <WhatHappensNext />
      <FinalCTA />
      <Footer />
    </main>
  );
}


