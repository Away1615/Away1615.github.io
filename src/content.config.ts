import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projectDetails = defineCollection({
  loader: glob({
    base: "./src/content/project-details",
    pattern: "**/*.md"
  }),
  schema: z.object({
    projectId: z.string(),
    language: z.enum(["en", "zh"])
  })
});

export const collections = {
  projectDetails
};
