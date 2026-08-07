import { z } from "zod";

export const hobbySchema = z.object({
  name: z.string(),
  tagline: z.string(),
  description: z.string(),
  icon: z.string().optional(),
  skills: z.array(z.string()),
  featured: z.boolean().default(false),
  links: z
    .array(
      z.object({
        url: z.url(),
        label: z.string(),
      }),
    )
    .optional(),
});

export type Hobby = z.infer<typeof hobbySchema>;
