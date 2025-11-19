import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    prepTime: z.number(),
    cookTime: z.number(),
    servings: z.number(),
    difficulty: z.enum(['fácil', 'medio', 'difícil']),
    category: z.enum(['hamburguesas', 'pollo', 'acompañamientos', 'bebidas', 'postres']),
    calories: z.number().optional(),
    video: z.string().optional(),
    ingredients: z.array(z.object({
      name: z.string(),
      quantity: z.number(),
      unit: z.string(),
      package: z.string(),
      price: z.number()
    })),
    steps: z.array(z.string()),
    image: z.object({
      src: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string())
  })
});

export const collections = { recipes };