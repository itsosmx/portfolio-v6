import { TextHoverEffect } from "@/components/aceternity/text-hover-effect";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function IntroductionSection({ className }: { className: string }) {
  return (
    <section className={className}>
      <div className="lg:absolute lg:size-full h-screen-1/2 -z-10">
        <TextHoverEffect text="OSMX" />
      </div>
      <div className="text-center flex flex-col gap-4">
        <p className="text-2xl uppercase font-bold">
          Hello iam <span className="text-primary"> Osama</span>,
        </p>
        <h1 className="lg:text-7xl text-5xl font-bold max-w-screen-md">
          <span className="text-primary">A</span> Software Developer
        </h1>
        <p className="section-subtitle">
          also <span className="text-primary font-semibold underline">Unity Game Developer</span> and{" "}
          <span className="text-primary font-semibold underline">Mobile Developer</span>.{" "}
          <span className="font-bold">Got a project or an idea? I can help you with that.</span>
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
  );
}
