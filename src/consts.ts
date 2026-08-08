export const SITE_TITLE = "Francisco Javier De Freitas";
export const SITE_DESCRIPTION =
  "Senior Backend Engineer with 9+ years building scalable distributed systems and cloud-native applications with Node.js and TypeScript.";

export const NAME = "Francisco Javier De Freitas";
export const SHORT_NAME = "Francisco J. De Freitas";
export const ROLE = "Senior Backend Engineer";
export const LOCATION = "Lima, Peru";
export const EMAIL = "fjaviercale@gmail.com";
export const YEARS_OF_EXPERIENCE = "9+";

export const CV_URL = "/cv/francisco-de-freitas-cv.pdf";

export const LANGUAGES = [
  { name: "Spanish", flag: "🇪🇸", level: "Native" },
  { name: "English", flag: "🇬🇧", level: "B2" },
  { name: "Portuguese", flag: "🇵🇹", level: "European · B2" },
] as const;

export const SOCIAL_LINKS = [
  {
    url: "https://github.com/scorcherfjk",
    label: "GitHub",
    icon: "github",
  },
  {
    url: "https://www.linkedin.com/in/fjavier-de-freitas",
    label: "LinkedIn",
    icon: "linkedin",
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
  languages: ["TypeScript", "JavaScript", "Python", "SQL"],
  frontend: [
    "React",
    "Vue.js",
    "Astro",
    "SolidJS",
    "Redux",
    "Tailwind CSS",
    "Webpack",
    "Leaflet",
  ],
  backend: [
    "Node.js",
    "NestJS",
    "Express",
    "FastAPI",
    "REST APIs",
    "GraphQL",
    "Serverless",
    "Discord.js",
  ],
  databases: ["PostgreSQL", "MongoDB", "Redis"],
  aiMl: ["scikit-learn", "NLTK", "spaCy", "NLP"],
  content: ["Strapi", "Supabase", "Cloudinary", "Headless CMS", "SEO"],
  cloud: ["AWS", "GCP", "Azure", "Netlify", "Kafka", "RabbitMQ"],
  engineering: [
    "Microservices",
    "Event-Driven Architecture",
    "Hexagonal Architecture",
    "Docker",
  ],
} as const;
