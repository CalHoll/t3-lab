import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const todoRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const todo = await ctx.prisma.todo.findUnique({
        where: { id: input.id },
      });

      if (!todo) throw new TRPCError({ code: 'NOT_FOUND' });

      return todo;
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const todos = await ctx.prisma.todo.findMany({
      take: 100,
      orderBy: [{ createdAt: 'desc' }],
    });

    return { todos };
  }),

  create: publicProcedure
    .input(
      z.object({
        description: z.string().min(1).max(280),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.userId;
      const todo = await ctx.prisma.todo.create({
        data: {
          authorId,
          description: input.description,
        },
      });

      return todo;
    }),

  delete: publicProcedure
    .input(
      z.object({
        id: z.string().min(1).max(280),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const TodoResult = await ctx.prisma.todo.delete({
        where: {
          id: input.id,
        },
      });

      console.log(`Deleted result: `, TodoResult);
      return TodoResult;
    }),
});
