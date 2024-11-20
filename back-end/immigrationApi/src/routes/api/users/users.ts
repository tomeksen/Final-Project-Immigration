import { Hono } from 'hono'
import { z } from '@hono/zod-openapi'
import { createRoute } from '@hono/zod-openapi'
import { ParamsByIdSchema, UserSchema } from '../../../types/demoDocs'

export const userRoutes = new Hono()

userRoutes.get('/', async (c) => {
  return c.json({ users: [{ id: 1, name: 'John Doe' }] })
})

userRoutes.get('/:id', async (c) => {
  const id = c.req.param('id')
  return c.json({ user: { id, name: 'John Doe' } })
})

userRoutes.post('/', async (c) => {
  const body = await c.req.json()
  return c.json({ message: `User ${body.name} created!` })
})

export const getUserRoute = createRoute({
    method: 'get',
    path: '/users/:id',
    request: {
      params: ParamsByIdSchema,
    },
    responses: {
      200: {
        content: {
          'application/json': {
            schema: UserSchema,
          },
        },
        description: 'Retrieve the user',
      },
    },
  })
  
export const getUsersRoute = createRoute({
    method: 'get',
    path: '/api/users',
    responses: {
      200: {
        content: {
          'application/json': {
            schema: z.array(UserSchema),
          },
        },
        description: 'Retrieve the users',
      },
    },
  })
