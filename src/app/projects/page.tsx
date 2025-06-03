"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Calendar, Filter, Search, Grid, List, ArrowUpRight } from "lucide-react";
import { IProjectProps } from "@/types";
import { useEffect, useState } from "react";
import { getProjects } from "@/data/projects";
import ProjectCard from "@/components/blocks/project-card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<IProjectProps[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<IProjectProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"recent" | "name" | "tech">("recent");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data || []);
        setFilteredProjects(data || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Get all unique technologies for filter
  const allTechnologies = projects
    .reduce((acc, project) => {
      project.technologies?.forEach((tech) => {
        if (!acc.includes(tech)) acc.push(tech);
      });
      return acc;
    }, [] as string[])
    .sort();

  // Filter and sort projects
  useEffect(() => {
    let filtered = projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description?.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies?.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTech = selectedTech === "all" || project.technologies?.includes(selectedTech);

      return matchesSearch && matchesTech;
    });

    // Sort projects
    switch (sortBy) {
      case "recent":
        filtered.sort((a, b) => new Date(b.developedAt).getTime() - new Date(a.developedAt).getTime());
        break;
      case "name":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "tech":
        filtered.sort((a, b) => (a.technologies?.length || 0) - (b.technologies?.length || 0));
        break;
    }

    setFilteredProjects(filtered);
  }, [projects, searchQuery, selectedTech, sortBy]);

  const ProjectListItem = ({ project, index }: { project: IProjectProps; index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="group relative">
      {" "}
      <div className="bg-card backdrop-blur-sm rounded-xl border border-border hover:border-accent/50 transition-all duration-300 p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="relative w-full lg:w-48 h-32 lg:h-auto overflow-hidden rounded-lg flex-shrink-0">
            <Image
              src={project.thumbnail?.url || "/placeholder-project.jpg"}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-2 right-2">
              <div
                className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                  project.operated === "true"
                    ? "bg-green-500/20 border border-green-500/30 text-green-400"
                    : "bg-blue-500/20 border border-blue-500/30 text-blue-400"
                }`}>
                {project.operated === "true" ? "Live" : "Completed"}
              </div>
            </div>
          </div>

          {/* Project Content */}
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <Link href={`/projects/${project.slug}`}>
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 cursor-pointer">
                  {project.title}
                </h3>
              </Link>
              <p className="text-accent text-sm font-medium">{project.headline}</p>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">{project.description?.text}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-muted/50 rounded-md text-xs text-muted-foreground border border-border">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground text-xs">
                <Calendar className="w-3 h-3" />
                <span>{new Date(project.developedAt).getFullYear()}</span>
              </div>

              <div className="flex items-center gap-3">
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="text-xs text-accent hover:text-primary transition-colors duration-300 flex items-center gap-1">
                    Live Demo
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-1">
                    GitHub
                    <Github className="w-3 h-3" />
                  </Link>
                )}
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-xs text-accent hover:text-primary transition-colors duration-300 flex items-center gap-1">
                  View Details
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
  const LoadingSkeleton = ({ index, isListView = false }: { index: number; isListView?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`bg-card/30 backdrop-blur-sm rounded-xl border border-border ${isListView ? "p-6" : "overflow-hidden"}`}>
      {isListView ? (
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-48 h-32 bg-muted/30 rounded-lg animate-pulse" />
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <div className="h-6 bg-muted/50 rounded animate-pulse w-3/4" />
              <div className="h-4 bg-muted/30 rounded animate-pulse w-1/2" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-muted/30 rounded animate-pulse" />
              <div className="h-4 bg-muted/30 rounded animate-pulse w-4/5" />
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-6 w-16 bg-muted/30 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="h-48 bg-muted/30 animate-pulse" />
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <div className="h-6 bg-muted/50 rounded animate-pulse" />
              <div className="h-4 bg-muted/30 rounded w-2/3 animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-muted/30 rounded animate-pulse" />
              <div className="h-4 bg-muted/30 rounded w-4/5 animate-pulse" />
            </div>
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-6 w-16 bg-muted/30 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
  return (
    <div className="min-h-screen">
      {/* Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-12">
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent-foreground font-medium">
              Back Home
            </motion.div>
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-foreground mt-10">
            All Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore my complete collection of projects, featuring web applications, mobile apps, and innovative solutions
          </motion.p>
        </motion.div>

        {/* Filters and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 space-y-4">
          {/* Search and View Controls */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {" "}
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-card/50 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-accent/50 focus:outline-none transition-colors duration-300"
              />
            </div>
            {/* View Mode and Sort Controls */}
            <div className="flex items-center gap-4">
              {" "}
              {/* Sort Dropdown */}
              <Select value={sortBy} onValueChange={(value) => setSortBy(value as any)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="tech">Tech Count</SelectItem>
                </SelectContent>
              </Select>
              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 p-1 bg-card/50 rounded-lg border border-border">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors duration-300 ${
                    viewMode === "grid" ? "bg-accent text-white" : "text-muted-foreground hover:text-foreground"
                  }`}>
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-colors duration-300 ${
                    viewMode === "list" ? "bg-accent text-white" : "text-muted-foreground hover:text-foreground"
                  }`}>
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>{" "}
          {/* Technology Filter */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filter by technology:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTech("all")}
                className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
                  selectedTech === "all" ? "bg-accent text-white" : "bg-muted/50 text-muted-foreground hover:bg-muted/70"
                }`}>
                All
              </button>
              {allTechnologies.slice(0, 10).map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
                    selectedTech === tech ? "bg-accent text-white" : "bg-muted/50 text-muted-foreground hover:bg-muted/70"
                  }`}>
                  {tech}
                </button>
              ))}
            </div>
          </div>
          {/* Results Count */}
          <div className="text-muted-foreground text-sm">
            {loading ? "Loading projects..." : `Showing ${filteredProjects.length} of ${projects.length} projects`}
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
          {loading ? (
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <LoadingSkeleton key={index} index={index} isListView={viewMode === "list"} />
                ))}
            </div>
          ) : filteredProjects.length === 0 ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
              <div className="text-muted-foreground text-lg mb-4">No projects found</div>
              <div className="text-muted-foreground/70 text-sm">Try adjusting your search query or filters</div>
            </motion.div>
          ) : (
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
              {filteredProjects.map((project, index) =>
                viewMode === "grid" ? (
                  <ProjectCard key={project.id} {...project} index={index} />
                ) : (
                  <ProjectListItem key={project.id} project={project} index={index} />
                )
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
