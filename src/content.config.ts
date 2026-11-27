import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const articles = defineCollection({loader:glob({pattern:'**/*.mdx',base:'./src/content/articles'}),schema:z.object({title:z.string(),description:z.string(),category:z.string(),tags:z.array(z.string()),date:z.coerce.date()})});
export const collections={articles};