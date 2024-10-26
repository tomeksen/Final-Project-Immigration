// src/routes/index.ts
import { Hono } from 'hono'
import { userRoutes } from './api/users'
import { postRoutes } from './api/posts'

export const routes = new Hono()

// Mounting routes under `/api`
routes.route('/users', userRoutes)
routes.route('/posts', postRoutes)
