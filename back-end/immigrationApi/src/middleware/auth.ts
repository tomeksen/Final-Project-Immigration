import { Context, Next } from 'hono'

export async function authMiddleware(c: Context, next: Next) {
  const token = c.req.header('Authorization')
  if (!token || token !== 'Bearer my_secret_token') {
    return c.json({ error: 'Unauthorized' }, 401)
  }
  await next()
}
