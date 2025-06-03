"use client";

import React from "react";
import { motion } from "framer-motion";
import skills from "@/constants/skills";
import { Metadata } from "next";

// Note: Since this is a client component, metadata should be moved to a parent server component
// or add a separate metadata export in a layout.tsx file for this route

// For now, we'll add the metadata export (though it won't work in client components)
// You should consider making this a server component or moving metadata to layout
export const metadata: Metadata = {
  title: "About Me | Your Portfolio",
  description: "Learn more about my journey as a full-stack developer, my passion for technology, and the experiences that shaped my career in web development.",
  keywords: "about me, developer story, career journey, professional background, web developer experience, technology passion",
  openGraph: {
    title: "About Me | Your Portfolio",
    description: "Learn more about my journey as a full-stack developer, my passion for technology, and the experiences that shaped my career in web development.",
    url: "https://osmx.me/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Me | Your Portfolio",
    description: "Learn more about my journey as a full-stack developer, my passion for technology, and the experiences that shaped my career in web development.",
  },
};

export default function AboutPage() {
  function GetMyAge() {
    const today = new Date();
    const birthDate = new Date("2000-12-20");
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const journeyCards = [
    {
      title: "The Beginning (2015)",
      content:
        "My journey began with Blogger, where I shared my passion for technology through technical articles. This led me to discover the world of web development, where I learned",
      technologies: ["HTML", "CSS", "JavaScript"],
      icon: "🚀",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "The Evolution",
      content: "My curiosity led me to explore APIs, particularly the Discord API. This opened doors to creating Discord Applications (Bots) using",
      technologies: ["Node.js"],
      achievement: "300,000 users",
      icon: "⚡",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "The Growth",
      content:
        "I expanded my skillset to include various technologies. Each new technology added to my toolbox, helping me create more sophisticated and impactful solutions.",
      technologies: ["Mongoose", "React.js", "React Native", "Python", "Kotlin"],
      icon: "📈",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "The Future",
      content:
        "I believe in lifelong learning and am constantly seeking new challenges. My passion lies in using technology to make a positive impact and create innovative solutions that enhance people's lives.",
      icon: "🌟",
      gradient: "from-orange-500/20 to-red-500/20",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      {/* Hero Section */}
      <motion.section
        className="min-h-[50vh] flex flex-col items-center justify-center gap-8 py-16 relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}>
        <motion.div className="font-bold lg:text-7xl text-5xl text-center relative" variants={itemVariants}>
          <span className="relative">
            Hi, I'm{" "}
            <span className="text-gradient-white relative inline-block">
              OSMX
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
          </span>
        </motion.div>

        <motion.div className="text-muted-foreground lg:text-2xl text-xl text-center max-w-3xl leading-relaxed" variants={itemVariants}>
          Software Developer crafting <span className="text-primary font-semibold">digital experiences</span> through websites, applications, and
          games
        </motion.div>

        <motion.div className="flex gap-4 mt-4" variants={itemVariants}>
          {["💻", "📱", "🎮"].map((emoji, index) => (
            <motion.div
              key={emoji}
              className="text-4xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}>
              {emoji}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>{" "}
      {/* About Section */}
      <motion.section
        className="max-w-5xl mx-auto px-4 space-y-16 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}>
        <motion.div className="space-y-8" variants={itemVariants}>
          <div className="text-center space-y-4">
            <motion.h2
              className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              variants={itemVariants}>
              Who is OSMX?
            </motion.h2>
            <motion.div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
          </div>

          <motion.div
            className="text-lg leading-relaxed max-w-4xl mx-auto bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-lg"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)",
            }}
            transition={{ duration: 0.3 }}>
            I'm{" "}
            <motion.span className="font-semibold text-primary" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              Osama Hussein
            </motion.span>
            , a {GetMyAge()}-year-old Computer Science Engineer at{" "}
            <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <a
                target="_blank"
                href="https://www.nub.edu.eg/"
                className="hover:text-primary transition-colors duration-300 font-medium relative group">
                Nahda University
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.span>{" "}
            in Egypt, graduating in 2024. As a self-taught developer, I specialize in web apps, mobile applications, and games. When I'm not coding,
            you'll find me immersed in MMORPGs and exploring new gaming experiences.
          </motion.div>
        </motion.div>

        {/* Journey Section */}
        <motion.div className="space-y-12" variants={containerVariants}>
          <motion.div className="text-center space-y-4" variants={itemVariants}>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">My Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto" />
          </motion.div>

          <motion.div className="grid gap-8 md:gap-12" variants={containerVariants}>
            {journeyCards.map((card, index) => (
              <motion.div
                key={index}
                className={`relative group ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}
                variants={cardVariants}
                whileHover="hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2 }}>
                {/* Timeline connector */}
                <div
                  className="hidden md:block absolute top-8 w-full h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50"
                  style={{
                    left: index % 2 === 0 ? "100%" : "-100%",
                    width: "6rem",
                  }}
                />

                {/* Card */}
                <div
                  className={`relative bg-gradient-to-br ${card.gradient} backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-primary/30`}>
                  {/* Icon */}
                  <motion.div
                    className="text-4xl mb-6 inline-block"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                    }}
                    transition={{ duration: 0.5 }}>
                    {card.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors duration-300">{card.title}</h3>

                  {/* Content */}
                  <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                    {card.content}
                    {card.technologies && (
                      <>
                        {" "}
                        {card.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mx-1 my-1 border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}>
                            {tech}
                          </motion.span>
                        ))}
                        {card.content.includes("using") && "."}
                      </>
                    )}
                  </p>

                  {/* Achievement */}
                  {card.achievement && (
                    <motion.div
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-2 rounded-full font-semibold text-sm"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}>
                      🎉 {card.achievement}
                    </motion.div>
                  )}

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-secondary/30 rounded-full animate-pulse delay-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Interactive Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          {[
            { number: "9+", label: "Years Coding", icon: "💻" },
            { number: `${skills.length}+`, label: "Technologies", icon: "🛠️" },
            { number: "∞", label: "Learning", icon: "📚" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 10px 25px -3px rgb(0 0 0 / 0.1)",
              }}
              transition={{ delay: index * 0.1 }}>
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
