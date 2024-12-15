import { Hono } from 'hono'
import { Env } from '../../../env';
import { drizzle } from 'drizzle-orm/d1';
import { eq, lt, gte, ne } from 'drizzle-orm';
import { applicationCategory } from '../../../db/schema';

export const categoryRoutes = new Hono<{ Bindings: Env }>()

categoryRoutes.get('/', async (c) => {
    let db = drizzle(c.env.DB);
    
    try {
        const result = await db.select().from(applicationCategory).all()
        return c.json(result);
      } catch (e: any) {
        return c.json({ error: e.message });
      }
}
)

categoryRoutes.post('/', async (c) => {
  let db = drizzle(c.env.DB);
  const { applicationId, categoryName, order} = await c.req.json();
  try {
      const result = await db
      .insert(applicationCategory).values({
        applicationId: Number(applicationId),
        categoryName: categoryName,
        order: order,
      }).returning();
      return c.json(result);
    } catch (e: any) {
      return c.json({ error: e.message });
    }}
);

categoryRoutes.get('/:applicationId', async (c) => {
    let db = drizzle(c.env.DB);
    const applicationId = c.req.param("applicationId");
    try {
        const result = await db.select().from(applicationCategory).where(eq(applicationCategory.applicationId , Number(applicationId))).all()
        return c.json(result);
      } catch (e: any) {
        return c.json({ error: e.message });
      }}
);

//#endregion