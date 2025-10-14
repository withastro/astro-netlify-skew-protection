import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  greet: defineAction({
    input: z.object({
      name: z.string(),
    }),
    handler: async ({ name }) => {
      return { message: `Hello, ${name}!`, timestamp: new Date().toISOString() };
    },
  }),

  getDeployInfo: defineAction({
    handler: async () => {
      // This would only be available on Netlify during actual deployment
      const deployId = process.env.DEPLOY_ID || 'local-development';
      return {
        deployId,
        environment: process.env.CONTEXT || 'development',
      };
    },
  }),
};
