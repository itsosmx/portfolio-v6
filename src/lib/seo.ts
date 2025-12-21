import { Metadata } from "next";

export interface SEOConfig {
  title: string;
  description: string;
  url?: string;
  image?: string;
  keywords?: string[];
  type?: string;
  author?: string;
  noIndex?: boolean;
}

const defaultSEO = {
  siteName: "Osama Hussein Portfolio",
  siteUrl: "https://osmx.me",
  author: "Osama Hussein",
  twitterHandle: "@itsosmx",
  description: "Full-stack developer passionate about creating innovative web applications and user experiences.",
  keywords: [
    "full-stack developer",
    "web developer",
    "react developer",
    "next.js developer",
    "typescript developer",
    "portfolio",
    "software engineer",
  ],
};

export function generateMetadata({
  title,
  description,
  url = "",
  image = "/images/og-image.jpg",
  keywords = [],
  type = "website",
  noIndex = false,
}: SEOConfig): Metadata {
  const fullTitle = title ? `${title} | ${defaultSEO.siteName}` : defaultSEO.siteName;
  const fullUrl = `${defaultSEO.siteUrl}${url}`;
  const fullImage = image.startsWith("http") ? image : `${defaultSEO.siteUrl}${image}`;
  const allKeywords = [...defaultSEO.keywords, ...keywords];

  return {
    title: fullTitle,
    description,
    keywords: allKeywords.join(", "),
    authors: [{ name: defaultSEO.author }],
    creator: defaultSEO.author,
    publisher: defaultSEO.author,
    manifest: "/manifest.json",
    icons: {
      icon: "/icon.ico",
      apple: "/icon.ico",
      shortcut: "/icon.ico",
    },

    robots: noIndex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

    alternates: {
      canonical: fullUrl,
    },

    openGraph: {
      type: type as any,
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: defaultSEO.siteName,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title || defaultSEO.siteName,
        },
      ],
      locale: "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [fullImage],
      creator: defaultSEO.twitterHandle,
      site: defaultSEO.twitterHandle,
    },

    // Additional metadata for better SEO
    metadataBase: new URL(defaultSEO.siteUrl),

    // App-specific metadata
    applicationName: defaultSEO.siteName,

    // Verification (add your verification codes)
    verification: {
      google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
      // bing: "your-bing-verification-code",
    },

    // Additional meta tags
    other: {
      "theme-color": "#000000",
      "color-scheme": "dark light",
      "mobile-web-app-capable": "yes",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
    },
  };
}

// JSON-LD structured data generators
export function generatePersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: defaultSEO.author,
    url: defaultSEO.siteUrl,
    sameAs: [
      "https://github.com/itsosmx",
      "https://linkedin.com/in/itsosmx",
      "https://x.com/itsosmx",
    ],
    jobTitle: "Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Devlizer",
    },
    description: defaultSEO.description,
  };
}

export function generateWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: defaultSEO.siteName,
    url: defaultSEO.siteUrl,
    description: defaultSEO.description,
    author: {
      "@type": "Person",
      name: defaultSEO.author,
    },
  };
}

export function generatePortfolioJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${defaultSEO.author}'s Portfolio`,
    url: defaultSEO.siteUrl,
    description: defaultSEO.description,
    author: {
      "@type": "Person",
      name: defaultSEO.author,
    },
    dateCreated: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
  };
}
