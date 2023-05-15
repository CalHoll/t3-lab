import { createTRPCRouter } from '~/server/api/trpc';
import { permitsRouter } from './routers/permits';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  permits: permitsRouter,
});

export type AppRouter = typeof appRouter;
