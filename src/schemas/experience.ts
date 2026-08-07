import { z } from "zod";

export const experienceSchema = z.object({
  role: z.string(),
  company: z.string(),
  location: z.string().optional(),
  startDate: z.string(),
  endDate: z.string().nullable(),
  current: z.boolean().default(false),
  summary: z.string().optional(),
  highlights: z.array(z.string()).optional(),
  stack: z.array(z.string()).optional(),
});

export type Experience = z.infer<typeof experienceSchema>;
