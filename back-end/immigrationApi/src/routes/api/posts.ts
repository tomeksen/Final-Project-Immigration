import { OpenAPIHono } from '@hono/zod-openapi'
import { Hono } from 'hono'

export const postRoutes = new Hono()

postRoutes.get('/', async (c) => {
  return c.json({ posts: [{ id: 1, title: 'First Post' }] })
})

postRoutes.get('/:id', async (c) => {
  const id = c.req.param('id')
  return c.json({ post: { id, title: 'Sample Post' } })
})

postRoutes.post('/', async (c) => {
  const body = await c.req.json()
  return c.json({ message: `Post titled "${body.title}" created!` })
})
