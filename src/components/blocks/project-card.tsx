import { IProjectProps } from "@/types";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Calendar, Code, ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ index, ...project }: IProjectProps & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ y: -8 }}
      className="group relative">
      {" "}
      <div className="bg-card/80 backdrop-blur-sm rounded-2xl flex flex-col overflow-hidden border border-border hover:border-accent/50 transition-all duration-500 h-full">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="relative w-full h-full">
            <Image src={project.thumbnail?.url || "/placeholder-project.jpg"} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          </motion.div>

          {/* Project Links Overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                className="p-3 bg-accent/90 rounded-full hover:bg-accent transition-all duration-300 hover:scale-110">
                <ExternalLink className="w-5 h-5 text-white" />
              </Link>
            )}{" "}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="p-3 bg-muted/90 rounded-full hover:bg-muted transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5 text-white" />
              </Link>
            )}
            <Link
              href={`/projects/${project.slug}`}
              className="p-3 bg-primary/90 rounded-full hover:bg-primary transition-all duration-300 hover:scale-110">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </Link>
          </div>

          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <div
              className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                project.operated === "true"
                  ? "bg-green-500/20 border border-green-500/30 text-green-400"
                  : "bg-blue-500/20 border border-blue-500/30 text-blue-400"
              }`}>
              {project.operated === "true" ? "Live" : "Completed"}
            </div>
          </div>
        </div>
        {/* Project Content */}
        <div className="p-6 space-y-4 flex flex-col flex-1 relative">
          {/* Header */}{" "}
          <div className="space-y-2 flex-1 ">
            <Link href={`/projects/${project.slug}`}>
              <h3 className="text-xl font-bold text-foreground transition-colors duration-300 cursor-pointer">
                {project.title}
              </h3>
            </Link>
            <p className="text-muted-foreground text-sm font-medium line-clamp-3">{project.headline}</p>
          </div>
          {/* Technologies */}{" "}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-muted-foreground text-xs">
              <Code className="w-3 h-3" />
              <span>Technologies</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.slice(0, 5).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-muted/50 rounded-md text-xs text-muted-foreground border border-border hover:border-accent/30 transition-colors duration-200">
                  {tech}
                </span>
              ))}
              {project.technologies?.length > 5 && (
                <span className="px-2 py-1 bg-accent rounded-md text-xs text-accent-foreground border border-accent/30">
                  +{project.technologies.length - 5} more
                </span>
              )}
            </div>
          </div>{" "}
          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-muted-foreground text-xs">
              <Calendar className="w-3 h-3" />
              <span>{new Date(project.developedAt).getFullYear()}</span>
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="text-xs text-accent hover:text-primary transition-colors duration-300 flex items-center gap-1">
              View Details
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>{" "}
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/0 via-accent/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
}
