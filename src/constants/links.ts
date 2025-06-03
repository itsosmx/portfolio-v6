import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";

const links = {
  routes: [
    {
      "slug": "/about",
      "name": "About",
      "description": "Who is OSMX!?"
    },
    {
      "slug": "/projects",
      "name": "Projects",
      "description": "Sample projects"
    },
    {
      "slug": "/skills",
      "name": "Skills",
      "description": "What is included in my brain!"
    },
    {
      "slug": "/contact",
      "name": "Contact",
      "description": "Lets Talk!"
    },
  ],
  social: [
    {
      icon: GithubIcon,
      href: "https://github.com/itsosmx",
    },
    {
      icon: MailIcon,
      href: "mailto:itsosmx@gmail.com",
    },
    {
      icon: TwitterIcon,
      href: "https://twitter.com/itsosmx",
    },
    {
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/itsosmx",
    },
  ]
}
export default links;