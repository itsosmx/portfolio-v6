"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Github, Calendar, Code, ArrowLeft, Globe, Zap, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { IProjectProps } from "@/types";
import { cloneElement, use, useEffect, useState } from "react";
import { getProjects } from "@/data/projects";

export default function ProjectPage({ params }: any) {
  const [project, setProject] = useState<IProjectProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const paramsSlug = use(params) as any;

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projects = await getProjects();
        const data = projects?.find((project) => project.slug === paramsSlug.slug);

        if (!data) {
          notFound();
        }

        setProject(data);
      } catch (error) {
        console.error("Error fetching project:", error);
        notFound();
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [paramsSlug]);

  if (loading) {
    return <LoadingPage />;
  }

  if (!project) {
    notFound();
  }

  const projectImages = project.image || [];
  const hasMultipleImages = projectImages.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      {/* Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed bottom-1/3 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        {" "}
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </Link>
        </motion.div>
        {/* Project Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Project Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent-foreground font-medium">
                  Project Details
                </motion.div>{" "}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-foreground">
                  {project.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-accent-foreground text-lg font-medium">
                  {project.headline}
                </motion.p>
              </div>

              {/* Project Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: <Calendar />, label: "Year", value: new Date(project.developedAt).getFullYear() },
                  { icon: <Code />, label: "Tech", value: project.technologies?.length || 0 },
                  { icon: <Globe />, label: "Status", value: project.operated === "true" ? "Live" : "Completed" },
                  { icon: <Zap />, label: "Tools", value: project.toolset?.length || 0 },
                ].map((stat, indx) => (
                  <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border">
                    <div className="flex items-center gap-2 text-accent-foreground mb-2">
                      {cloneElement(stat.icon, { className: "w-4 h-4" })}
                      <span className="text-xs font-medium ">{stat.label.toUpperCase()}</span>
                    </div>
                    <div className="text-foreground font-semibold">{stat.value}</div>
                  </div>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-4">
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent to-primary text-white font-semibold rounded-lg hover:from-accent/90 hover:to-primary/90 transition-all duration-300 group">
                    <Globe className="w-5 h-5" />
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>
                )}

                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-card/70 border border-border text-foreground font-semibold rounded-lg hover:bg-card/90 hover:border-border/70 transition-all duration-300 group">
                    <Github className="w-5 h-5" />
                    <span>Source Code</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>
                )}
              </motion.div>
            </div>

            {/* Project Image Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative">
              {" "}
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden border border-border bg-card/30">
                {projectImages.length > 0 ? (
                  <>
                    <Image
                      src={projectImages[currentImageIndex]?.url || project.thumbnail?.url}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      fill
                      className="object-contain"
                    />

                    {/* Image Navigation */}
                    {hasMultipleImages && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-background/80 hover:bg-card/80 rounded-full transition-colors duration-300 group">
                          <ChevronLeft className="w-5 h-5 text-foreground group-hover:scale-110 transition-transform duration-200" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-background/80 hover:bg-card/80 rounded-full transition-colors duration-300 group">
                          <ChevronRight className="w-5 h-5 text-foreground group-hover:scale-110 transition-transform duration-200" />
                        </button>

                        {/* Image Indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                          {projectImages.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                index === currentImageIndex ? "bg-accent" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-muted-foreground">No images available</div>
                  </div>
                )}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
              </div>
              {/* Image Counter */}
              {hasMultipleImages && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 rounded-full text-foreground text-sm font-medium">
                  {currentImageIndex + 1} / {projectImages.length}
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}{" "}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-accent" />
                Project Overview
              </h2>
              <div
                className="prose prose-slate prose-invert max-w-none text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: project.description?.html || project.description?.text || "No description available." }}
              />
            </motion.div>
            {/* Technologies Section */}{" "}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-accent" />
                Technologies Used
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {project.technologies?.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    className="bg-muted/50 cursor-pointer hover:scale-110 border border-border rounded-lg p-4 text-center transition-all duration-300 group">
                    <div className="text-foreground font-medium transition-colors duration-300">{tech}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Tools Section */}
            {project.toolset && project.toolset.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-accent" />
                  Tools & Services
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.toolset.map((tool, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                      className="px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent-foreground font-medium hover:bg-accent/30 transition-colors duration-300">
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Meta */}{" "}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border sticky top-24">
              <h3 className="text-lg font-bold text-foreground mb-4">Project Info</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Created</span>
                  <span className="text-foreground">{new Date(project.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Developed</span>
                  <span className="text-foreground">{new Date(project.developedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Last Updated</span>
                  <span className="text-foreground">{new Date(project.updatedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-muted-foreground">Status</span>
                  <span className={`font-medium ${project.operated === "true" ? "text-green-400" : "text-blue-400"}`}>
                    {project.operated === "true" ? "Live & Operational" : "Completed"}
                  </span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 space-y-3">
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-accent hover:bg-accent/90 text-white font-medium rounded-lg transition-colors duration-300">
                    <Globe className="w-4 h-4" />
                    View Live Demo
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-muted/50 hover:bg-muted/70 text-foreground font-medium rounded-lg border border-border hover:border-border/70 transition-all duration-300">
                    <Github className="w-4 h-4" />
                    Source Code
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoadingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <div className="container mx-auto px-4 pt-20 pb-12">
        {/* Back Button Skeleton */}
        <div className="mb-8">
          <div className="h-5 w-32 bg-muted/30 rounded animate-pulse" />
        </div>

        {/* Header Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="h-8 w-32 bg-muted/30 rounded-full animate-pulse" />
              <div className="h-12 w-3/4 bg-muted/50 rounded animate-pulse" />
              <div className="h-6 w-1/2 bg-muted/30 rounded animate-pulse" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-card/30 rounded-lg p-4 border border-border">
                  <div className="h-4 w-12 bg-muted/30 rounded animate-pulse mb-2" />
                  <div className="h-6 w-8 bg-muted/50 rounded animate-pulse" />
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <div className="h-12 w-32 bg-accent/30 rounded-lg animate-pulse" />
              <div className="h-12 w-32 bg-muted/30 rounded-lg animate-pulse" />
            </div>
          </div>

          <div className="h-96 lg:h-[500px] bg-muted/30 rounded-2xl animate-pulse" />
        </div>

        {/* Content Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card/30 rounded-2xl p-8 border border-border">
              <div className="h-8 w-48 bg-muted/50 rounded animate-pulse mb-6" />
              <div className="space-y-3">
                <div className="h-4 bg-muted/30 rounded animate-pulse" />
                <div className="h-4 bg-muted/30 rounded animate-pulse w-5/6" />
                <div className="h-4 bg-muted/30 rounded animate-pulse w-4/6" />
              </div>
            </div>

            <div className="bg-card/30 rounded-2xl p-8 border border-border">
              <div className="h-8 w-48 bg-muted/50 rounded animate-pulse mb-6" />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="h-16 bg-muted/30 rounded-lg animate-pulse" />
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-card/30 rounded-2xl p-6 border border-border">
              <div className="h-6 w-32 bg-muted/50 rounded animate-pulse mb-4" />
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex justify-between py-2">
                    <div className="h-4 w-20 bg-muted/30 rounded animate-pulse" />
                    <div className="h-4 w-24 bg-muted/30 rounded animate-pulse" />
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                <div className="h-12 bg-accent/30 rounded-lg animate-pulse" />
                <div className="h-12 bg-muted/30 rounded-lg animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
