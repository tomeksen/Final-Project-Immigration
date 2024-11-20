import { Hono } from "hono"

export const authRoutes = new Hono()

authRoutes.post('/', async (c) => {
    const webhook = process.env.CLERK_WEBHOOK_SECRET
    //return c.json({ message: `Post titled "${body.title}" created!` })
  })
  