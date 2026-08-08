import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import {
  caseStudySchema,
  certificationSchema,
  courseSchema,
  educationSchema,
  experienceSchema,
  hobbySchema,
  projectSchema,
} from "./schemas";

const projects = defineCollection({
  loader: file("src/content/projects/projects.json"),
  schema: projectSchema,
});

const experience = defineCollection({
  loader: file("src/content/experience/experience.json"),
  schema: experienceSchema,
});

const certifications = defineCollection({
  loader: file("src/content/certifications/certifications.json"),
  schema: certificationSchema,
});

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/case-studies" }),
  schema: caseStudySchema,
});

const hobbies = defineCollection({
  loader: file("src/content/hobbies/hobbies.json"),
  schema: hobbySchema,
});

const courses = defineCollection({
  loader: file("src/content/courses/courses.json"),
  schema: courseSchema,
});

const education = defineCollection({
  loader: file("src/content/education/education.json"),
  schema: educationSchema,
});

export const collections = {
  projects,
  experience,
  certifications,
  caseStudies,
  hobbies,
  courses,
  education,
};
