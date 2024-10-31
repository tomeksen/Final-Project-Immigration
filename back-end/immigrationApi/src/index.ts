import { Hono } from 'hono'
import { routes } from './routes/routes'
import { Env } from './env'
import docApp from './utils/openApi/openApi'
import { clerkMiddleware, getAuth } from '@hono/clerk-auth'

const app = new Hono<{ Bindings: Env }>()
app.use('*', clerkMiddleware())

// Use the OpenAPI app
if (process.env.NODE_ENV === 'development') {
  app.route('/reference', docApp)
}

app.route('/api', routes)

app.get('/', async (c) => {
  const clerkClient = c.get('clerk')

  try {
    const user = await clerkClient.users.getUser('user_id_....')

    return c.json({
      user,
    })
  } catch (e) {
    return c.json({
      message: 'User not found.'
    }, 404)
  }
})

export default app