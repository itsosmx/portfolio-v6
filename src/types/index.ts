export interface IProjectProps {
  title: string;
  thumbnail: {
    url: string;
  };
  github: string;
  createdAt: string;
  description: {
    html: string;
    text: string;
  };
  headline: string;
  id: string;
  developedAt: string;
  technologies: string[];
  slug: string;
  demo: string;
  toolset: string[];
  updatedAt: string;
  operated: string;
  image: { url: string }[];
}