import { TextHoverEffect } from "@/components/aceternity/text-hover-effect";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import ContactSection from "./components/contact-section";
import IntroductionSection from "./components/introduction-section";
import AboutSection from "./components/about-section";

export default function Home() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto">
        <IntroductionSection className="h-screen flex items-center justify-center flex-col" />
        <Separator />
        <section id="about" className="lg:h-screen flex flex-col items-center gap-4 p-10 justify-center">
          <h2 className="section-title">About</h2>
          <AboutSection />
        </section>
        <section id="featured-projects" className="lg:h-screen flex flex-col items-center gap-4 p-10 justify-center">
          <h2 className="section-title">Featured Projects</h2>
        </section>
        <section id="skills" className="lg:h-screen flex flex-col items-center gap-4 p-10 justify-center">
          <h2 className="section-title">Skills</h2>
        </section>
        <section id="contact" className="lg:h-screen flex flex-col items-center gap-4 p-10 justify-center">
          <h2 className="section-title">Contact</h2>
          <ContactSection />
        </section>
      </div>
    </main>
  );
}
