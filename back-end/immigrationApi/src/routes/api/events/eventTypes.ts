import { Hono } from 'hono'
import { Env } from '../../../env';
import { drizzle } from 'drizzle-orm/d1';
import { eq, lt, gte, ne } from 'drizzle-orm';
import { eventType } from '../../../db/schema';

export const eventTypesRoutes = new Hono<{ Bindings: Env }>()

eventTypesRoutes.get('/', async (c) => {
    let db = drizzle(c.env.DB);
    
    try {
        const result = await db.select().from(eventType).all()
        return c.json(result);
      } catch (e: any) {
        return c.json({ error: e.message });
      }
}
)

eventTypesRoutes.post('/', async (c) => {
  let db = drizzle(c.env.DB);
  const { eventName, defaultTimeInHours} = await c.req.json();
  try {
      const result = await db
      .insert(eventType).values({
        eventName,
        defaultTimeInHours
      }).returning();
      return c.json(result);
    } catch (e: any) {
      return c.json({ error: e.message });
    }}
);

eventTypesRoutes.get('/:eventTypeId', async (c) => {
    let db = drizzle(c.env.DB);
    const eventTypeId = c.req.param("eventTypeId");
    try {
        const result = await db.select().from(eventType).where(eq(eventType.id , Number(eventTypeId))).all()
        return c.json(result);
      } catch (e: any) {
        return c.json({ error: e.message });
      }}
);

//#endregion