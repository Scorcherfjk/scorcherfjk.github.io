import { z } from "zod";

export const courseSchema = z.object({
  title: z.string(),
  provider: z.string(),
  type: z.enum(["Specialization", "Course"]).default("Course"),
  date: z.string().optional(),
  credentialUrl: z.url().optional(),
  pdf: z.string().optional(),
  skills: z.array(z.string()).optional(),
});

export type Course = z.infer<typeof courseSchema>;
