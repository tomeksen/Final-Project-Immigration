import { OpenAPIHono } from '@hono/zod-openapi'
import { apiReference } from '@scalar/hono-api-reference'
import { Env } from 'hono'
import { getUserRoute, getUsersRoute } from '../../routes/api/users/users'
import { getUserById, getUsers } from './docs/usersDocs'

const docApp = new OpenAPIHono<{ Bindings: Env }>()

docApp.openapi(getUserRoute, (c) => getUserById(c))
docApp.openapi(getUsersRoute, (c) => getUsers(c))

docApp.get(
  '/',
  apiReference({
    spec: {
      content : docApp.getOpenAPIDocument
  }
  }),
)

export default docApp 