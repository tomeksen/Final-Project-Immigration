import { Hono } from 'hono'
import { Env } from '../../../env';
import { drizzle } from 'drizzle-orm/d1';
import { eq, lt, gte, ne } from 'drizzle-orm';
import {  userEvents } from '../../../db/schema';

export const eventsRoutes = new Hono<{ Bindings: Env }>()

eventsRoutes.get('/', async (c) => {
    let db = drizzle(c.env.DB);
    
    try {
        const result = await db.select().from(userEvents).all()
        return c.json(result);
      } catch (e: any) {
        return c.json({ error: e.message });
      }
}
)

eventsRoutes.post('/', async (c) => {
  let db = drizzle(c.env.DB);
  const { userId, eventDateFinish, eventDateStart,eventTypeId} = await c.req.json();
  try {
      const result = await db
      .insert(userEvents).values({
        userId,
        eventTypeId,
        eventDateFinish,
        eventDateStart
      }).returning();
      return c.json(result);
    } catch (e: any) {
      return c.json({ error: e.message });
    }}
);

eventsRoutes.get('/:userId', async (c) => {
    let db = drizzle(c.env.DB);
    const userId = c.req.param("userId");
    try {
        const result = await db.select().from(userEvents).where(eq(userEvents.userId, userId )).all()
        return c.json(result);
      } catch (e: any) {
        return c.json({ error: e.message });
      }}
);

//#endregion