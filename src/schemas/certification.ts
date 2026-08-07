import { z } from "zod";

export const certificationSchema = z.object({
  title: z.string(),
  issuer: z.string(),
  date: z.string(),
  category: z.string(),
  pdf: z.string(),
  credentialUrl: z.url().optional(),
  skills: z.array(z.string()).optional(),
});

export type Certification = z.infer<typeof certificationSchema>;
