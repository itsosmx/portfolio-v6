import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  return [
    {
      url: `https://osmx.me/about`,
    },
    {
      url: `https://osmx.me/contact`,
    },

    {
      url: `https://osmx.me/projects`,
    },
    {
      url: `https://osmx.me/skills`,
    },
  ]
}