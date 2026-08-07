import { z } from "zod";

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  year: z.number().int(),
  stack: z.array(z.string()),
  featured: z.boolean().default(false),
  status: z.enum(["active", "maintained", "archived"]).default("archived"),
  links: z
    .object({
      demo: z.url().optional(),
      repo: z.url().optional(),
      caseStudy: z.string().optional(),
    })
    .optional(),
});

export type Project = z.infer<typeof projectSchema>;
