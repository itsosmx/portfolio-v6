import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Projects",
  description:
    "Explore my portfolio of web development projects. From full-stack applications to frontend showcases, discover the technologies and solutions I've built.",
  url: "/projects",
  keywords: [
    "projects",
    "portfolio",
    "web development projects",
    "full-stack applications",
    "react projects",
    "next.js projects",
    "typescript projects",
  ],
});

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
