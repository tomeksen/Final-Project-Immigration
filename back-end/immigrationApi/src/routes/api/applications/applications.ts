import { Hono } from 'hono'
import { Env } from '../../../env';
import { drizzle } from 'drizzle-orm/d1';
import { eq, lt, gte, ne } from 'drizzle-orm';
import { applications } from '../../../db/schema';

export const applicationRoutes = new Hono<{ Bindings: Env }>()

applicationRoutes.get('/', async (c) => {
    let db = drizzle(c.env.DB);
    
    try {
        const result = await db.select().from(applications).all()
        return c.json(result);
      } catch (e: any) {
        return c.json({ error: e.message });
      }
}
)

applicationRoutes.post('/', async (c) => {
  let db = drizzle(c.env.DB);
  const { userId, applicationName, applicationDate, applicationType, applicationStatus} = await c.req.json();
  try {
      const result = await db
      .insert(applications).values({
          userId: userId,
          applicationName: applicationName,
          applicationDate: applicationDate,
          applicationType: applicationType,
          applicationStatus: applicationStatus
      }).returning();
      return c.json(result);
    } catch (e: any) {
      return c.json({ error: e.message });
    }}
);

applicationRoutes.get('/:userId', async (c) => {
    let db = drizzle(c.env.DB);
    const userId = c.req.param("userId");
    try {
        const result = await db.select().from(applications).where(eq(applications.userId , userId)).all()
        return c.json(result);
      } catch (e: any) {
        return c.json({ error: e.message });
      }}
);

//#endregion