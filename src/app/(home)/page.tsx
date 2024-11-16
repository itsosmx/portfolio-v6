import { TextHoverEffect } from "@/components/aceternity/text-hover-effect";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import ContactSection from "./components/contact-section";

export default function Home() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto">
        <section className="h-screen flex items-center justify-center flex-col">
          <div className="lg:absolute lg:size-full h-screen-1/2 -z-10">
            <TextHoverEffect text="OSMX" />
          </div>
          <div className="text-center flex flex-col gap-4">
            <p className="text-2xl uppercase font-bold">
              Hello, iam <span className="text-primary"> Osama</span>
            </p>
            <h1 className="lg:text-7xl text-5xl font-bold max-w-screen-md">
              <span className="text-primary">A</span> Software Developer
            </h1>
            <p className="section-subtitle">
              I am a software developer with a passion for building web applications, games and mobile application. I am a self-taught developer who
              loves to learn new technologies and build projects.
            </p>
          </div>

          <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex gap-4 items-center">
            <Link className={buttonVariants({ variant: "secondary" })} href="#about">
              About
            </Link>
            <Link className={buttonVariants({ variant: "secondary" })} href="#featured-projects">
              Featured Projects
            </Link>
            <Link className={buttonVariants({ variant: "secondary" })} href="#skills">
              Skills
            </Link>
            <Link className={buttonVariants({ variant: "secondary" })} href="#contact">
              Contact
            </Link>
          </div>
        </section>
        <Separator />
        <section id="about" className="lg:h-screen flex flex-col items-center gap-4 p-10 justify-center">
          <h2 className="section-title">About</h2>
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
