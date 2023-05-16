import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const permitsRouter = createTRPCRouter({
  getWorkSelection: publicProcedure
    .input(
      z.object({
        workId: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const workSelection = await ctx.prisma.workSelection.findUnique({
        where: { id: input.workId },
      });

      if (!workSelection) throw new TRPCError({ code: 'NOT_FOUND' });
      return workSelection;
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const workSelections = await ctx.prisma.workSelection.findMany({
      take: 100,
      orderBy: [{ id: 'desc' }],
    });

    if (!workSelections) throw new TRPCError({ code: 'NOT_FOUND' });
    return workSelections;
  }),

  getWorkSelectionByUserId: publicProcedure
    .input(
      z.object({
        userId: z.number(),
      })
    )
    .query(({ ctx, input }) => {
      const workSelections = ctx.prisma.workSelection.findMany({
        where: {
          userId: input.userId,
        },
        take: 100,
        orderBy: [{ id: 'desc' }],
      });
      return workSelections;
    }),

  create: publicProcedure // privateProcedure // TODO: set up as privateProcedure with user auth
    .input(
      z.object({
        workType: z.string().min(1).max(255),
        workOptions: z.array(z.string().min(1).max(255)),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userId = 12345; // ctx.userId; // TODO: remove mock userId

      // TODO: Possible improvement - rate limit requests from the same user.

      const workSelections = await ctx.prisma.workSelection.create({
        data: {
          userId,
          workType: input.workType,
          options: input.workOptions,
          // results, etc...
        },
      });

      return workSelections;
    }),
});
