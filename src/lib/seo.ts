import { Metadata, Viewport } from "next";

export type OGType =
  | "website"
  | "article"
  | "profile"
  | "book"
  | "music.song"
  | "music.album"
  | "music.playlist"
  | "music.radio_station"
  | "video.movie"
  | "video.episode"
  | "video.tv_show"
  | "video.other";

export interface SEOConfig {
  title: string;
  description: string;
  url?: string;
  image?: string;
  keywords?: string[];
  type?: OGType;
  author?: string;
  noIndex?: boolean;
  category?: string;
  classification?: string;
  tags?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
}

const defaultSEO = {
  siteName: "Osama Hussein Portfolio",
  siteUrl: "https://osmx.me",
  author: "Osama Hussein",
  twitterHandle: "@itsosmx",
  email: "osama@osmx.me",
  description:
    "Full-stack developer passionate about creating innovative web applications and user experiences.",
  keywords: [
    "full-stack developer",
    "web developer",
    "react developer",
    "next.js developer",
    "typescript developer",
    "frontend engineer",
    "backend developer",
    "javascript developer",
    "node.js developer",
    "tailwind css",
    "prisma",
    "mongodb",
    "postgresql",
    "graphql",
    "rest api",
    "docker",
    "git",
    "vercel",
    "aws",
    "freelance developer",
    "remote developer",
    "hire developer",
    "ui/ux developer",
    "performance optimization",
    "web accessibility",
    "responsive web design",
    "api development",
    "database design",
    "saas development",
    "modern web technologies",
    "jamstack",
    "serverless",
    "react hooks",
    "server components",
    "edge computing",
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
  category = "technology",
  classification = "portfolio",
  tags = [],
  publishedTime,
  modifiedTime,
  section,
}: SEOConfig): Metadata {
  const fullTitle = title
    ? `${title} | ${defaultSEO.siteName}`
    : defaultSEO.siteName;
  const fullUrl = `${defaultSEO.siteUrl}${url}`;
  const fullImage = image.startsWith("http")
    ? image
    : `${defaultSEO.siteUrl}${image}`;
  const allKeywords = [...new Set([...defaultSEO.keywords, ...keywords, ...tags])];

  const ogImages = [
    {
      url: fullImage,
      width: 1200,
      height: 630,
      alt: title || defaultSEO.siteName,
    },
  ];

  return {
    title: fullTitle,
    description,
    keywords: allKeywords.join(", "),
    authors: [{ name: defaultSEO.author }],
    creator: defaultSEO.author,
    publisher: defaultSEO.author,
    manifest: "/manifest.json",
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/mainIconsdark.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-touch-icon.png",
      shortcut: "/favicon-32x32.png",
    },

    robots: {
      index: !noIndex,
      follow: !noIndex,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    alternates: {
      canonical: fullUrl,
    },

    openGraph: {
      type,
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: defaultSEO.siteName,
      images: ogImages,
      locale: "en_US",
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ogImages,
      creator: defaultSEO.twitterHandle,
      site: defaultSEO.twitterHandle,
    },

    metadataBase: new URL(defaultSEO.siteUrl),
    applicationName: defaultSEO.siteName,
    category,
    classification,
    referrer: "origin-when-cross-origin",
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
    appleWebApp: {
      title: defaultSEO.siteName,
      statusBarStyle: "black-translucent",
      capable: true,
    },
    other: {
      "theme-color": "#000000",
      "color-scheme": "dark light",
      "mobile-web-app-capable": "yes",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
      "msapplication-TileColor": "#000000",
      "msapplication-config": "/browserconfig.xml",
      "og:site_name": defaultSEO.siteName,
      "og:locale": "en_US",
      "twitter:domain": "osmx.me",
      "twitter:url": fullUrl,
    },
  };
}

export const defaultViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "dark light",
};

// JSON-LD structured data generators
export function generatePersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: defaultSEO.author,
    url: defaultSEO.siteUrl,
    image: `${defaultSEO.siteUrl}/images/og-image.jpg`,
    email: `mailto:${defaultSEO.email}`,
    sameAs: [
      "https://github.com/itsosmx",
      "https://linkedin.com/in/itsosmx",
      "https://x.com/itsosmx",
    ],
    jobTitle: "Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Devlizer",
      url: "https://devlizer.com",
    },
    description: defaultSEO.description,
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Prisma",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "REST API",
      "Docker",
      "Git",
      "Vercel",
      "AWS",
      "Web Performance",
      "UI/UX Design",
      "Responsive Design",
      "Accessibility",
      "SaaS Development",
      "Serverless",
      "Jamstack",
      "Edge Computing",
    ],
  };
}

export function generateWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: defaultSEO.siteName,
    url: defaultSEO.siteUrl,
    description: defaultSEO.description,
    image: `${defaultSEO.siteUrl}/images/og-image.jpg`,
    author: {
      "@type": "Person",
      name: defaultSEO.author,
      url: defaultSEO.siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: defaultSEO.author,
      url: defaultSEO.siteUrl,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${defaultSEO.siteUrl}/projects?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generatePortfolioJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${defaultSEO.author}'s Portfolio`,
    url: defaultSEO.siteUrl,
    image: `${defaultSEO.siteUrl}/images/og-image.jpg`,
    description: defaultSEO.description,
    author: {
      "@type": "Person",
      name: defaultSEO.author,
      url: defaultSEO.siteUrl,
    },
    creator: {
      "@type": "Person",
      name: defaultSEO.author,
      url: defaultSEO.siteUrl,
    },
    isPartOf: {
      "@type": "WebSite",
      name: defaultSEO.siteName,
      url: defaultSEO.siteUrl,
    },
    keywords: defaultSEO.keywords.join(", "),
    genre: "Software Development",
    dateCreated: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    datePublished: "2024-01-01",
    inLanguage: "en",
    license: "https://creativecommons.org/licenses/by/4.0/",
  };
}

export function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${defaultSEO.siteUrl}${item.url}`,
    })),
  };
}

export function generateSoftwareApplicationJsonLd({
  name,
  description,
  url,
  image,
  technologies,
  dateCreated,
  dateModified,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
  technologies?: string[];
  dateCreated?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: url.startsWith("http") ? url : `${defaultSEO.siteUrl}${url}`,
    image: image
      ? image.startsWith("http")
        ? image
        : `${defaultSEO.siteUrl}${image}`
      : `${defaultSEO.siteUrl}/images/og-image.jpg`,
    author: {
      "@type": "Person",
      name: defaultSEO.author,
      url: defaultSEO.siteUrl,
    },
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    ...(technologies && { keywords: technologies.join(", ") }),
    ...(dateCreated && { dateCreated }),
    ...(dateModified && { dateModified }),
    inLanguage: "en",
  };
}

export function generateWebPageJsonLd({
  title,
  description,
  url,
  image,
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: url.startsWith("http") ? url : `${defaultSEO.siteUrl}${url}`,
    image: image
      ? image.startsWith("http")
        ? image
        : `${defaultSEO.siteUrl}${image}`
      : `${defaultSEO.siteUrl}/images/og-image.jpg`,
    author: {
      "@type": "Person",
      name: defaultSEO.author,
      url: defaultSEO.siteUrl,
    },
    isPartOf: {
      "@type": "WebSite",
      name: defaultSEO.siteName,
      url: defaultSEO.siteUrl,
    },
    inLanguage: "en",
    ...(publishedTime && { datePublished: publishedTime }),
    ...(modifiedTime && { dateModified: modifiedTime }),
  };
}

export function generateArticleJsonLd({
  title,
  description,
  url,
  image,
  publishedTime,
  modifiedTime,
  tags,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: url.startsWith("http") ? url : `${defaultSEO.siteUrl}${url}`,
    image: image
      ? image.startsWith("http")
        ? image
        : `${defaultSEO.siteUrl}${image}`
      : `${defaultSEO.siteUrl}/images/og-image.jpg`,
    author: {
      "@type": "Person",
      name: defaultSEO.author,
      url: defaultSEO.siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: defaultSEO.author,
      url: defaultSEO.siteUrl,
    },
    ...(publishedTime && { datePublished: publishedTime }),
    ...(modifiedTime && { dateModified: modifiedTime }),
    ...(tags && { keywords: tags.join(", ") }),
    inLanguage: "en",
    articleSection: "Technology",
    isPartOf: {
      "@type": "WebSite",
      name: defaultSEO.siteName,
      url: defaultSEO.siteUrl,
    },
  };
}
