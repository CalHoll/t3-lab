import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import {
  createTRPCRouter,
  // privateProcedure,
  publicProcedure,
} from '~/server/api/trpc';

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
        userId: z.string(),
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

  create: publicProcedure // privateProcedure
    .input(
      z.object({
        workType: z.string().min(1).max(255),
        interiorWork: z.array(z.string().min(1).max(255)),
        exteriorWork: z.array(z.string().min(1).max(255)),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // This is currently mocked, but could be a private procedure where userId is added in the middleware.
      const userId = 'Fakey_McFakeson'; // ctx.userId;

      // TODO: Possible improvement - rate limit requests

      // TODO: one gotcha would be ensuring that if worktype is interior exterior work is an empty string and vice-versa

      const workSelections = await ctx.prisma.workSelection.create({
        data: {
          userId,
          workType: input.workType,
          interiorWork: input.interiorWork,
          exteriorWork: input.exteriorWork,
        },
      });

      return workSelections;
    }),
});
