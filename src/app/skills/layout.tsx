import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Skills & Technologies",
  description:
    "Explore my technical expertise and skills as a full-stack developer. From frontend technologies like React, Next.js, and TypeScript to backend solutions, databases, and DevOps tools - discover the comprehensive skill set that drives my development capabilities.",
  url: "/skills",
  keywords: [
    "technical skills",
    "programming languages",
    "web development technologies",
    "frontend skills",
    "backend technologies",
    "react developer skills",
    "nextjs developer",
    "typescript programming",
    "javascript developer",
    "html css skills",
    "tailwind css",
    "nodejs backend",
    "database management",
    "devops tools",
    "git version control",
    "developer expertise",
    "software engineering skills",
    "full stack capabilities",
    "modern web technologies",
    "responsive design",
    "api development",
    "cloud technologies",
    "development tools"
  ],
});

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}