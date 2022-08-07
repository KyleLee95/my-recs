import { createRouter } from './context'
import { z } from 'zod'

export const placesRouter = createRouter()
  .query('getUserById', {
    input: z.object({
      id: z.number()
    }),
    // output: z.object({ greeting: z.string() }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.user.findUnique({
        where: {
          id: input.id
        }
      })
    }
  })
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.user.findMany()
    }
  })
