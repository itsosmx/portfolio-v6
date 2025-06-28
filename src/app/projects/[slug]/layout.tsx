import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjects } from "@/data/projects";
import { generateMetadata as gebMeta } from "@/lib/seo";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const projects = await getProjects();
  const aParams = await params;
  const project = projects?.find((project) => project.slug === aParams.slug);

  if (!project) {
    notFound();
  }

  return gebMeta({
    title: project.title!,
    description: project.headline || `Discover ${project.title}, a web development project showcasing modern technologies and innovative solutions.`,
    url: `/projects/${project.slug}`,
    image: project.thumbnail.url || "/images/og-image.jpg",
    keywords: [project.title.toLowerCase(), ...(project.technologies || []), "web development project", "portfolio project"],
  });
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
