import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { StagesSection } from "@/components/stages-section";
import { JourneySection } from "@/components/journey-section";
import { ScoringSection } from "@/components/scoring-section";
import { CertificatesSection } from "@/components/certificates-section";
import { SponsorshipSection } from "@/components/sponsorship-section";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <StagesSection />
      <JourneySection />
      <ScoringSection />
      <CertificatesSection />
      <SponsorshipSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
