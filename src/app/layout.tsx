import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { generateMetadata, generatePersonJsonLd, generateWebsiteJsonLd } from "@/lib/seo";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = generatePersonJsonLd();
  const websiteJsonLd = generateWebsiteJsonLd();

  return (
    <html lang="en" className="scroll-smooth">
      <Script type="application/ld+json">{JSON.stringify(personJsonLd)}</Script>
      <Script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</Script>

      {/* Preconnect to external domains for better performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* DNS prefetch for better performance */}
      <link rel="dns-prefetch" href="https://skillicons.dev" />
      <link rel="dns-prefetch" href="https://media.graphassets.com" />

      {/* Favicon and app icons */}
      <link rel="icon" href="/icon.ico" sizes="32x32" />
      <link rel="apple-touch-icon" href="/icon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <GoogleAnalytics gaId="G-3TDB6CY5ZL" />
      <body className={`${roboto.variable} antialiased dark`}>{children}</body>
    </html>
  );
}

// Enhanced metadata with comprehensive SEO
export const metadata: Metadata = generateMetadata({
  title: "",
  description:
    "Full-stack developer passionate about creating innovative web applications and user experiences. Explore my portfolio showcasing modern web development projects.",
  keywords: ["portfolio", "web development", "react", "next.js", "typescript", "full-stack", "frontend", "backend", "UI/UX", "responsive design"],
});

// Viewport configuration for mobile optimization
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};
