import { AudienceSection } from "@/components/AudienceSection";
import { CourseContent } from "@/components/CourseContent";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProblemSection } from "@/components/ProblemSection";
import { SocialProof } from "@/components/SocialProof";
import { SolutionSection } from "@/components/SolutionSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <AudienceSection />
        <CourseContent />
        <SocialProof />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
