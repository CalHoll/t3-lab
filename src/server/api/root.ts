import { createTRPCRouter } from '~/server/api/trpc';
import { postsRouter } from './routers/posts';
import { exampleRouter } from '~/server/api/routers/example';
import { todoRouter } from './routers/todo';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  posts: postsRouter,
  todo: todoRouter,
  // users: userRouter,
  // messages: messageRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;