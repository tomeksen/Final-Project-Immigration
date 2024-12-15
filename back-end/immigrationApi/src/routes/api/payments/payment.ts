import { Hono } from 'hono'
import { Env } from '../../../env';
import { drizzle } from 'drizzle-orm/d1';
import { eq, lt, gte, ne } from 'drizzle-orm';
import { payments } from '../../../db/schema';

export const paymentRoutes = new Hono<{ Bindings: Env }>()

paymentRoutes.get('/', async (c) => {
    let db = drizzle(c.env.DB);
    
    try {
        const result = await db.select().from(payments).all()
        return c.json(result);
      } catch (e: any) {
        return c.json({ error: e.message });
      }
}
)

paymentRoutes.post('/', async (c) => {
  let db = drizzle(c.env.DB);
  const {amount , paymentDate ,limitDate} = await c.req.json();
  try {
      const result = await db
      .insert(payments).values({
        amount , paymentDate ,limitDate
      }).returning();
      return c.json(result);
    } catch (e: any) {
      return c.json({ error: e.message });
    }}
);

paymentRoutes.get('/:paymentId', async (c) => {
    let db = drizzle(c.env.DB);
    const paymentId = c.req.param("paymentId");
    try {
        const result = await db.select().from(payments).where(eq(payments.id , Number(paymentId))).all()
        return c.json(result);
      } catch (e: any) {
        return c.json({ error: e.message });
      }}
);

//#endregion