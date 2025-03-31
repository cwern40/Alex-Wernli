import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    albums: defineCollection({
      type: 'data',
      source: 'albums/**.json',
      schema: z.object({
        title: z.string(),
        url: z.string(),
        photos: z.array(z.string()),
      }),
    }),
  },
});
