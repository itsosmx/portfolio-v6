import React from "react";
import { Metadata } from "next";
import HeroSection from "./_sections/hero";
import AboutSection from "./_sections/about";
import SkillsSection from "./_sections/skills";
import ExperienceSection from "./_sections/experience";
import ProjectsSection from "./_sections/projects";
import ContactSection from "./_sections/contact";
import { generateMetadata as generateSEOMetadata, generatePortfolioJsonLd } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Home",
  description:
    "Welcome to my portfolio! I'm a full-stack developer passionate about creating innovative web applications and exceptional user experiences. Explore my projects, skills, and experience.",
  keywords: ["home", "portfolio homepage", "developer introduction", "web developer portfolio", "full-stack projects"],
});

export default function HomePage() {
  const portfolioJsonLd = generatePortfolioJsonLd();

  return (
    <>
      {/* Structured Data for Portfolio */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioJsonLd),
        }}
      />

      <div className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </>
  );
}
