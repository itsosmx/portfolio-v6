import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Contact Me",
  description:
    "Get in touch with me! Whether you have questions about my work, want to collaborate, or just want to say hello, feel free to reach out through the contact form or connect with me on social media.",
  url: "/contact",
  keywords: ["contact me", "get in touch", "developer contact", "web developer communication", "collaboration opportunities", "social media links"],
  noIndex: true,
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
