"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Calendar, Code, Zap } from "lucide-react";
import { IProjectProps } from "@/types";
import { useEffect, useState } from "react";
import { getProjects } from "@/data/projects";
import ProjectCard from "@/components/blocks/project-card";

export default function ProjectsSection() {
  const [projects, setProjects] = useState<IProjectProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data?.slice(0, 6) || []); // Show only first 6 projects
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const LoadingCard = ({ index }: { index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/30 overflow-hidden">
      <div className="h-48 bg-slate-700/30 animate-pulse" />
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="h-6 bg-slate-700/50 rounded animate-pulse" />
          <div className="h-4 bg-slate-700/30 rounded w-2/3 animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-slate-700/30 rounded animate-pulse" />
          <div className="h-4 bg-slate-700/30 rounded w-4/5 animate-pulse" />
        </div>
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-6 w-16 bg-slate-700/30 rounded animate-pulse" />
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
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
            Featured Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-200">
            Recent Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 max-w-2xl mx-auto text-lg">
            A showcase of my recent work, featuring web applications, mobile apps, and creative solutions
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {loading
            ? Array(6)
                .fill(0)
                .map((_, index) => <LoadingCard key={index} index={index} />)
            : projects?.map((project, index) => <ProjectCard key={project.id} {...project} index={index} />)}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-white font-semibold rounded-xl hover:from-accent/90 hover:to-purple-500/90 transition-all duration-300 group">
            <span>View All Projects</span>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Zap className="w-5 h-5 group-hover:text-yellow-300 transition-colors duration-300" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
