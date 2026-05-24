import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ProjectsSection } from "@/sections/Projects";
import { SkillsSection } from "@/sections/Skills";
import { ExperienceSection } from "@/sections/Experience";
import { CertificationsSection } from "@/sections/Certifications";
import { AchievementsSection } from "@/sections/Achievements";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TapeSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <CertificationsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
