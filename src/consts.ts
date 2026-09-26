export const SITE_TITLE = "Francisco Javier De Freitas";
export const SITE_DESCRIPTION =
  "Senior Full Stack Engineer with 9+ years building scalable distributed systems, cloud-native applications and machine learning services with Node.js, TypeScript, React and Python.";

export const NAME = "Francisco Javier De Freitas";
export const SHORT_NAME = "Francisco J. De Freitas";
export const ROLE = "Senior Full Stack Engineer";
export const LOCATION = "Lima, Peru";
export const YEARS_OF_EXPERIENCE = "9+";

export const CV_URL = "/cv/francisco-de-freitas-cv.pdf";

export const LANGUAGES = [
  { name: "Spanish", flag: "🇪🇸", level: "Native" },
  { name: "English", flag: "🇬🇧", level: "B2" },
  { name: "Portuguese", flag: "🇵🇹", level: "European · B2" },
] as const;

export const LINKEDIN_URL = "https://www.linkedin.com/in/fjavier-de-freitas";

export const SOCIAL_LINKS = [
  {
    url: "https://github.com/scorcherfjk",
    label: "GitHub",
    icon: "github",
  },
  {
    url: LINKEDIN_URL,
    label: "LinkedIn",
    icon: "linkedin",
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
    "Redux",
    "Tanstack",
    "Tailwind CSS",
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
  databases: [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "DynamoDB",
    "Aurora",
    "Couchbase",
  ],
  aiMl: ["scikit-learn", "NLTK", "NLP", "Claude Code", "OpenCode", "Cursor"],
  content: ["Strapi", "Supabase", "Cloudinary", "Headless CMS", "SEO"],
  cloud: [
    "AWS",
    "GCP",
    "Azure",
    "Netlify",
    "Kafka",
    "RabbitMQ",
    "CloudWatch",
    "AWS IoT",
  ],
  engineering: [
    "Microservices",
    "Microfrontends",
    "Event-Driven Architecture",
    "Hexagonal Architecture",
    "Backend-for-Frontend",
    "Docker",
  ],
} as const;
