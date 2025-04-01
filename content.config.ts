import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    albums: defineCollection({
      type: 'data',
      source: 'albums/**.json',
      schema: z.object({
        title: z.string(),
        url: z.string(),
        order: z.number(),
        photos: z.array(z.string()),
      }),
    }),
    memories: defineCollection({
      type: 'data',
      source: 'memories/**.json',
      schema: z.object({
        author: z.string(),
        relationship: z.string(),
        order: z.number(),
        paragraphs: z.array(z.string()),
      }),
    }),
  },
});
