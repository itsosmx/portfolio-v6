"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import skills from "@/constants/skills";
import Link from "next/link";
import { Zap } from "lucide-react";

export default function SkillsSection() {
  const visibleSkills = skills.filter((x) => !x.hidden);
  const frontendSkills = visibleSkills.filter((skill) => skill.section === "front end").slice(0, 6);
  const backendSkills = visibleSkills.filter((skill) => skill.section === "back end").slice(0, 6);
  const toolSkills = visibleSkills.filter((skill) => skill.section === "tools").slice(0, 6);

  const SkillCard = ({ skill, index }: { skill: any; index: number }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          ease: "easeOut",
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        className="relative group">
        {" "}
        <div className="relative bg-card/80 backdrop-blur-sm rounded-xl p-6 hover:bg-card transition-all duration-300 border border-border hover:border-accent/50">
          <div className="flex items-center gap-4">
            <motion.div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300" whileHover={{ rotate: 5 }}>
              <Image src={skill.image} className="object-contain" fill alt={skill.name} />
            </motion.div>
            <div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{skill.name}</h3>
              <p className="text-sm text-muted-foreground capitalize">{skill.section}</p>
            </div>
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/0 via-accent/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </motion.div>
    );
  };

  const SkillSection = ({ title, skills, delay = 0 }: { title: string; skills: any[]; delay?: number }) => {
    return (
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }} className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="flex items-center gap-3">
          {" "}
          <div className="w-8 h-0.5 bg-gradient-to-r from-accent to-primary" />
          <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-accent/20 rounded-full text-primary font-medium">
            Technical Skills
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground">
            Technologies I Work With
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-16">
          <SkillSection title="Frontend Development" skills={frontendSkills} delay={0} />
          <SkillSection title="Backend Development" skills={backendSkills} delay={0.2} />
          <SkillSection title="Tools & Technologies" skills={toolSkills} delay={0.4} />
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Years Experience", value: "9+" },
            { label: "Technologies", value: `${visibleSkills.length}+` },
            { label: "Featured Skills", value: visibleSkills.filter((s) => s.featured).length },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="text-center p-6 bg-card/60 rounded-xl backdrop-blur-sm border border-border">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-10">
          <Link
            href="/skills"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-primary text-white font-semibold rounded-xl hover:from-accent/90 hover:to-primary/90 transition-all duration-300 group">
            <span>View All Skills</span>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Zap className="w-5 h-5 group-hover:text-yellow-300 transition-colors duration-300" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
