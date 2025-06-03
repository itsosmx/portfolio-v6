import React from "react";
import HeroSection from "./_sections/hero";
import AboutSection from "./_sections/about";
import SkillsSection from "./_sections/skills";
import ExperienceSection from "./_sections/experience";
import ProjectsSection from "./_sections/projects";
import ContactSection from "./_sections/contact";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
