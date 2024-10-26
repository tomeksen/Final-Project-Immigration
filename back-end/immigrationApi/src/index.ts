import { Hono } from 'hono'
import { routes } from './routes/routes'
import { Env } from './env'
import docApp from './utils/openApi/openApi'

const app = new Hono<{ Bindings: Env }>()

// Use the OpenAPI app
if (process.env.NODE_ENV === 'development') {
  app.route('/reference', docApp)
}

// Define other routes
app.route('/api', routes)

app.get('/', (c) => c.text('Welcome to Hono on Cloudflare Workers!'))

export default app