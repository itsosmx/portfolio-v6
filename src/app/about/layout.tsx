import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "About Me",
  description:
    "Learn more about my journey as a full-stack developer, my passion for technology, and the experiences that shaped my career in web development.",
  url: "/about",
  keywords: ["about me", "developer story", "career journey", "professional background", "web developer experience", "technology passion"],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
