// src/routes/index.ts
import { Hono } from 'hono'
import { userRoutes } from './api/users/users'
import { postRoutes } from './api/posts/posts'
import { userInvitationRoutes } from './api/users/invitations'

export const routes = new Hono()

// Mounting routes under `/api`
routes.route('/users', userRoutes)
routes.route('/posts', postRoutes)
routes.route('/invitations', userInvitationRoutes)