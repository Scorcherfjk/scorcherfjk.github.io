export const SITE_TITLE = "FJavier De Freitas";
export const SITE_DESCRIPTION =
  "Full-stack developer and programming teacher. I build reliable web products, teach, and keep learning in public.";

export const NAME = "FJavier De Freitas";
export const ROLE = "Full-Stack Developer & Programming Teacher";
export const LOCATION = "Caracas, Venezuela";
export const EMAIL = "fjavier.defreitas@gmail.com";

export const SOCIAL_LINKS = [
  {
    url: "https://github.com/scorcherfjk",
    label: "GitHub",
    icon: "github",
  },
  {
    url: "https://www.linkedin.com/in/fjavierdefreitas",
    label: "LinkedIn",
    icon: "linkedin",
  },
  {
    url: "https://twitter.com/fjdfreitas",
    label: "Twitter / X",
    icon: "twitter",
  },
  {
    url: `mailto:${EMAIL}`,
    label: "Email",
    icon: "mail",
  },
] as const;

export const NAV_LINKS = [
  { url: "/", text: "Home" },
  { url: "/projects", text: "Projects" },
  { url: "/experience", text: "Experience" },
  { url: "/certifications", text: "Certifications" },
  { url: "/about", text: "About" },
] as const;

export const FOOTER_LINKS = [
  {
    title: "Explore",
    children: [
      { url: "/projects", label: "Projects" },
      { url: "/experience", label: "Experience" },
      { url: "/certifications", label: "Certifications" },
      { url: "/about", label: "About me" },
    ],
  },
] as const;

export const SKILLS = {
  languages: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Swift",
    "Dart",
    "SQL",
  ],
  frontend: [
    "React",
    "Vue.js",
    "Redux",
    "GraphQL",
    "Tailwind CSS",
    "Sass",
    "Webpack",
    "Figma",
  ],
  backend: [
    "Node.js",
    "Django",
    "REST APIs",
    "GraphQL",
    "Docker",
    "Kubernetes",
    "Firebase",
    "TensorFlow",
  ],
  databases: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "SQL Server"],
  cloud: ["Google Cloud Platform", "GitHub Actions", "Netlify"],
  tools: ["Git", "JWT", "Google Analytics", "Google Tag Manager"],
} as const;
