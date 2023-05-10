import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";

export const postRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.wp_posts.findMany();
  }),
  /* byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.wp_posts.findFirst({ where: { id: input } });
  }),
  create: publicProcedure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.wp_posts.create({ data: input });
    }), */
});
