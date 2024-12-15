// src/routes/index.ts
import { Hono } from 'hono'
import { userRoutes } from './api/users/users'
import { postRoutes } from './api/posts/posts'
import { userInvitationRoutes } from './api/users/invitations'
import { applicationRoutes } from './api/applications/applications'
import { categoryRoutes } from './api/applications/categories'
import { taskRoutes } from './api/applications/tasks'
import { paymentRoutes } from './api/payments/payment'

export const routes = new Hono()

// Mounting routes under `/api`
routes.route('/users', userRoutes)
routes.route('/posts', postRoutes)
routes.route('/invitations', userInvitationRoutes)
routes.route('/applications', applicationRoutes)
routes.route('/categories', categoryRoutes)
routes.route('/tasks', taskRoutes)
routes.route('/payments',paymentRoutes)