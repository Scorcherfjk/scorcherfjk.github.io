import { z } from "zod";

export const educationSchema = z.object({
  degree: z.string(),
  institution: z.string(),
  location: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().nullable().optional(),
  summary: z.string().optional(),
  pdf: z.string().optional(),
  skills: z.array(z.string()).optional(),
});

export type Education = z.infer<typeof educationSchema>;
