import { Hono } from 'hono'


export const userInvitationRoutes = new Hono()

userInvitationRoutes.delete('/:id', async (c) => {
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

userInvitationRoutes.get('/', async (c) => {
  const clerkClient = c.get('clerk')

  try {
    const invitation = await clerkClient.invitations.getInvitationList()
    return c.json({
      invitation
    })
  } catch (e) {
    return c.json({
      message: 'Invitation not found.'
    }, 404)
  }
})

userInvitationRoutes.post('/', async (c) => {
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