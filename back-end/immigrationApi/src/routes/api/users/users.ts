import { Hono } from 'hono'
import { z } from '@hono/zod-openapi'
import { createRoute } from '@hono/zod-openapi'
import { ParamsByIdSchema, UserSchema } from '../../../types/demoDocs'

export const userRoutes = new Hono()

userRoutes.get('/', async (c) => {
  const clerkClient = c.get('clerk')

  try {
    const users = await clerkClient.users.getUserList()

    return c.json({
      users
    })
  } catch (e) {
    return c.json({
      message: 'User not found.'
    }, 404)
  }
})

userRoutes.get('/:id', async (c) => {
  const clerkClient = c.get('clerk')
  const id = c.req.param('id')

try {
  const user = await clerkClient.users.getUser(id)

    return c.json({
      user,
    })
  } catch (e) {
    return c.json({
      message: 'User not found.'
    }, 404)
  }
})

userRoutes.delete('/:id', async (c) => {
  const clerkClient = c.get('clerk')
  const id = c.req.param('id')
  try {
    const user = await clerkClient.users.deleteUser(id)
    return c.json({
      user,
    })
  } catch (e) {
    return c.json({
      message: 'User not found.'
    }, 404)
  }
})
//#region invitations
userRoutes.delete('/invitations/:id', async (c) => {
  const clerkClient = c.get('clerk')
  const id = c.req.param('id')
  try {
    const invitation = await clerkClient.invitations.revokeInvitation(id)
    return c.json({
      invitation,
    })
  } catch (e) {
    
  }
})
userRoutes.get('/invitations', async (c) => {
  const clerkClient = c.get('clerk')
  try {
    const invitation = await clerkClient.invitations.getInvitationList()
    return c.json({
      invitation,
    })
  } catch (e) {
    
  }
})
userRoutes.post('/invitations', async (c) => {
  const clerkClient = c.get('clerk')
  const email = await c.req.param('email')
  try {
    if (!email) {
      return c.json({
        message: 'Invalid email.'
      }, 400)
    }
    const invitation = await clerkClient.invitations.createInvitation({emailAddress: email})
    return c.json({
      invitation,
    })
  } catch (e) {

    
  }
  
})
userRoutes.post('/', async (c) => {
  const body = await c.req.json()
  
  return c.json({ message: `User ${body.name} created!` })
})
//#endregion
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
