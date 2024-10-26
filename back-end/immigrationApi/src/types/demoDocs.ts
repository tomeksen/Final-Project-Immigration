import { z } from '@hono/zod-openapi'

export const ParamsByIdSchema = z.object({
    id: z
      .string()
      .openapi({
        param: {
          name: 'id',
          in: 'path',
        },
        example: '1212121',
      }),
  })

export const UserSchema = z
  .object({
    id: z.string().openapi({
      example: '123',
    }),
    name: z.string().openapi({
      example: 'John Doe',
    }),
    age: z.number().openapi({
      example: 42,
    }),
  })
  .openapi('User')