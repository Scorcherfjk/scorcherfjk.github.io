import { z } from "zod";

export const caseStudySchema = z.object({
  title: z.string(),
  project: z.string(),
  summary: z.string(),
  role: z.string().optional(),
  timeline: z.string().optional(),
  year: z.number().int(),
  stack: z.array(z.string()),
  highlights: z.array(z.string()).optional(),
  metrics: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
      }),
    )
    .optional(),
  links: z
    .object({
      demo: z.url().optional(),
      repo: z.url().optional(),
      repos: z
        .array(
          z.object({
            label: z.string(),
            url: z.url(),
          }),
        )
        .optional(),
    })
    .optional(),
});

export type CaseStudy = z.infer<typeof caseStudySchema>;
