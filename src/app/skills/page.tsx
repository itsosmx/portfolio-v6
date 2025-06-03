"use client";
import React, { useState } from "react";
import skills from "@/constants/skills";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const SkillCard = ({ skill, index }: { skill: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.05,
        rotate: 2,
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer">
      {/* Glow effect background */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl"
        animate={{
          opacity: isHovered ? 0.8 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Main card */}
      <motion.div
        className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 overflow-hidden"
        animate={{
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.05)",
        }}
        transition={{ duration: 0.3 }}>
        {/* Fire indicator */}
        {skill?.featured && (
          <motion.div
            title="Featured Skill"
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              y: isHovered ? -2 : 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
            className="absolute top-2 right-2 z-20 size-8 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="size-5">
              <Image src="/images/rocket.gif" className="object-contain" fill alt="Featured skill" />
            </motion.div>
          </motion.div>
        )}

        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10 flex flex-col items-center text-center space-y-4">
          {/* Icon container with animated border */}
          <motion.div
            className="relative"
            animate={{
              rotate: isHovered ? 360 : 0,
            }}
            transition={{ duration: 0.8 }}>
            <motion.div
              className="relative size-16 p-3 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20"
              animate={{
                boxShadow: isHovered ? "0 0 30px rgba(59, 130, 246, 0.5)" : "0 0 0px rgba(59, 130, 246, 0)",
              }}
              transition={{ duration: 0.3 }}>
              <motion.div
                className="size-full"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}>
                <Image src={skill.image} className="object-contain" fill alt={skill.name} />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <div className="space-y-2">
            <motion.h3
              className="text-lg font-bold text-white"
              animate={{
                color: isHovered ? "#60a5fa" : "#ffffff",
              }}
              transition={{ duration: 0.3 }}>
              {skill.name}
            </motion.h3>
            <motion.p
              className="text-sm text-gray-400 capitalize font-medium"
              animate={{
                opacity: isHovered ? 1 : 0.7,
              }}
              transition={{ duration: 0.3 }}>
              {skill.section}
            </motion.p>
          </div>

          {/* Hover indicator */}
          <motion.div
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            animate={{
              opacity: isHovered ? 1 : 0,
              width: isHovered ? 32 : 8,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkillSection = ({ title, skills, sectionIndex }: { title: string; skills: any[]; sectionIndex: number }) => {
  const [filter, setFilter] = useState<"all" | "fire">("all");
  const filteredSkills = filter === "fire" ? skills.filter((skill) => skill.featured) : skills;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: sectionIndex * 0.2,
        type: "spring",
        stiffness: 80,
      }}
      className="space-y-8">
      {/* Section header with filter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
          className="space-y-2">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">{title}</h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: sectionIndex * 0.1 + 0.3 }}
          />
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.2 }}
          className="flex gap-2">
          <motion.button
            onClick={() => setFilter("all")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-xl transition-all duration-300 ${
              filter === "all" ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30" : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}>
            All ({skills.length})
          </motion.button>
          <motion.button
            onClick={() => setFilter("fire")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 ${
              filter === "fire" ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30" : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}>
            🔥 Featured ({skills.filter((s) => s.featured).length})
          </motion.button>
        </motion.div>
      </div>

      {/* Skills grid */}
      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredSkills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center text-gray-400 text-sm">
        Showing {filteredSkills.length} of {skills.length} skills
      </motion.div>
    </motion.div>
  );
};

export default function Skills() {
  const visibleSkills = skills.filter((x) => !x.hidden);
  const frontendSkills = visibleSkills.filter((skill) => skill.section === "front end");
  const backendSkills = visibleSkills.filter((skill) => skill.section === "back end");
  const toolSkills = visibleSkills.filter((skill) => skill.section === "tools");

  const totalSkills = visibleSkills.length;
  const featuredSkills = visibleSkills.filter((skill) => skill.featured).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 space-y-20">
        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="text-center space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              Technical Skills
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "12rem" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="mx-auto h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and tools I use to bring ideas to life
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 pt-8">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 min-w-[150px]">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 200 }}
                className="text-3xl font-bold text-blue-400 mb-2">
                {totalSkills}
              </motion.div>
              <div className="text-gray-400 text-sm">Total Skills</div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 min-w-[150px]">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 200 }}
                className="text-3xl font-bold text-orange-400 mb-2 flex items-center justify-center gap-2">
                🔥 {featuredSkills}
              </motion.div>
              <div className="text-gray-400 text-sm">Featured Skills</div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 min-w-[150px]">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2, type: "spring", stiffness: 200 }}
                className="text-3xl font-bold text-purple-400 mb-2">
                3
              </motion.div>
              <div className="text-gray-400 text-sm">Categories</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Skills sections */}
        <div className="space-y-20">
          <SkillSection title="Frontend Development" skills={frontendSkills} sectionIndex={0} />
          <SkillSection title="Backend Development" skills={backendSkills} sectionIndex={1} />
          <SkillSection title="Tools & Technologies" skills={toolSkills} sectionIndex={2} />
        </div>

        {/* Footer call to action */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center py-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-3xl shadow-2xl shadow-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to build something amazing?</h3>
            <p className="text-blue-100 mb-6">Let's combine these skills to create your next project</p>
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Get in Touch
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
