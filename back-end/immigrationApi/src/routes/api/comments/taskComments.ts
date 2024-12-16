import { Hono } from 'hono'
import { Env } from '../../../env';
import { drizzle } from 'drizzle-orm/d1';
import { eq, lt, gte, ne } from 'drizzle-orm';
import { taskComments } from '../../../db/schema';

export const taskCommentsRoutes = new Hono<{ Bindings: Env }>()

taskCommentsRoutes.get('/', async (c) => {
    let db = drizzle(c.env.DB);
    try {
        const result = await db.select().from(taskComments).all()
        return c.json(result);
      } catch (e: any) {
        return c.json({ error: e.message });
      }
}
)

taskCommentsRoutes.post('/', async (c) => {
  let db = drizzle(c.env.DB);
  const { isRead, taskId, commentContent} = await c.req.json();
  try {
      const result = await db
      .insert(taskComments).values({
        taskId: Number(taskId),
        isRead,
        commentContent
      }).returning();
      return c.json(result);
    } catch (e: any) {
      return c.json({ error: e.message });
    }}
);

taskCommentsRoutes.get('/:taskId', async (c) => {
    let db = drizzle(c.env.DB);
    const taskId = c.req.param("taskId");
    try {
        const result = await db.select().from(taskComments).where(eq(taskComments.taskId , Number(taskId))).all()
        return c.json(result);
      } catch (e: any) {
        return c.json({ error: e.message });
      }}
);

//#endregion