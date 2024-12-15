import { Hono } from 'hono'
import { routes } from './routes/routes'
import { Env } from './env'
import docApp from './utils/openApi/openApi'
import { clerkMiddleware, getAuth } from '@hono/clerk-auth'
import { cors } from 'hono/cors'
import { prettyJSON } from 'hono/pretty-json'

const app = new Hono<{ Bindings: Env }>()
app.use('*', clerkMiddleware())
app.use('*', cors())
app.use(prettyJSON())
// Use the OpenAPI app
if (process.env.NODE_ENV === 'development') {
  app.route('/reference', docApp)
}

app.route('/api', routes)

app.get('/', (c) => {
  const auth = getAuth(c)

  if (!auth?.userId) {
    return c.json({
      message: 'You are not logged in.'
    })
  }

  return c.json({
    message: 'You are logged in!',
    userId: auth.userId
  })
})

export default app