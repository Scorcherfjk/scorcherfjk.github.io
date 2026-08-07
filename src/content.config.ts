import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import {
  caseStudySchema,
  certificationSchema,
  experienceSchema,
  hobbySchema,
  projectSchema,
} from "./schemas";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: projectSchema,
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: experienceSchema,
});

const certifications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/certifications" }),
  schema: certificationSchema,
});

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/case-studies" }),
  schema: caseStudySchema,
});

const hobbies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/hobbies" }),
  schema: hobbySchema,
});

export const collections = {
  projects,
  experience,
  certifications,
  caseStudies,
  hobbies,
};
