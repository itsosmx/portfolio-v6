"use client";
import { buttonVariants } from "@/components/ui/button";
import links from "@/constants/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, MessageCircle, Sparkles } from "lucide-react";
import { differenceInYears } from "date-fns";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-primary/20 to-accent/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-primary font-medium backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                <span>Available for Work</span>
              </motion.div>{" "}
              <motion.div variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground">
                Hello, I'm
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}>
                  Osama Hussein
                </motion.span>
              </motion.div>{" "}
              <motion.div variants={itemVariants} className="text-2xl md:text-3xl font-medium text-muted-foreground">
                Full Stack Developer
              </motion.div>
            </motion.div>{" "}
            <motion.p variants={itemVariants} className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Crafting digital experiences through clean code and creative solutions. Specializing in web development, mobile apps, and game
              development with{" "}
              <span className="text-accent/50 underline font-semibold">
                <Tooltip>
                  <TooltipTrigger>{differenceInYears(new Date(), new Date("2016-1-1"))}+ years</TooltipTrigger>
                  <TooltipContent>
                    Professional Experience +{differenceInYears(new Date(), new Date("2024-6-1"))} Years
                    <br />
                    Coding Experience +{differenceInYears(new Date(), new Date("2016-1-1"))} Years
                  </TooltipContent>
                </Tooltip>
              </span>{" "}
              of passion-driven coding.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link className={`${buttonVariants({})} group flex items-center gap-2`} target="_blank" href="/cv.pdf">
                  <Download className="w-4 h-4 group-hover:animate-bounce" />
                  View Resume
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link className={`${buttonVariants({ variant: "outline" })} group flex items-center gap-2`} href="#contact">
                  <MessageCircle className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex gap-6 pt-4">
              {links.social.map((route, index) => (
                <motion.a
                  key={route.href}
                  href={route.href}
                  target="_blank"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    transition: { duration: 0.2 },
                  }}
                  className="text-2xl text-muted-foreground hover:text-accent transition-colors duration-300 p-2 rounded-full hover:bg-accent/10">
                  <route.icon />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Enhanced Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative h-[500px] hidden lg:block">
            {/* Floating Animation */}
            <motion.div
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative h-full">
              <Image src="/mainIconsdark.svg" alt="Osama Hussein" fill className="object-contain animate-float" priority />
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-sm"
            />

            <motion.div
              animate={{
                rotate: -360,
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
              }}
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-sm"
            />
          </motion.div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
          <div className="flex gap-8">
            {links.routes.map((route, index) => (
              <motion.div
                key={route.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}>
                <Link href={route.slug} className="group font-medium text-muted-foreground hover:text-accent transition-colors duration-300">
                  <span className="relative">
                    {route.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-8 left-8 hidden lg:block">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm font-medium rotate-90 origin-center">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
