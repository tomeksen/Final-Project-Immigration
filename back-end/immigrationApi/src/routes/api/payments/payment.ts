import { Hono } from 'hono'
import { Env } from '../../../env';
import { drizzle } from 'drizzle-orm/d1';
import { eq, lt, gte, ne, asc,desc } from 'drizzle-orm';
import { applications, payments } from '../../../db/schema';
import { getAuth } from '@hono/clerk-auth';

export const paymentRoutes = new Hono<{ Bindings: Env }>()

paymentRoutes.get('/', async (c) => {
    let db = drizzle(c.env.DB);
    
    try {
        const result = await db.select().from(payments).orderBy(desc(payments.applicationId)).all()
        return c.json(result);
      } catch (e: any) {
        return c.json({ error: e.message });
      }
}
)

paymentRoutes.put('/:paymentId', async (c) => {
  let db = drizzle(c.env.DB);
  const paymentId = c.req.param("paymentId");
  const {amount , paymentDate ,limitDate, title, applicationId, isCompleted} = await c.req.json();
  try {
      const result = await db.update(payments).set({
        amount , paymentDate ,limitDate,applicationId,title,isCompleted
      }).where(eq(payments.id , Number(paymentId))).returning();
      return c.json(result);
    } catch (e: any) {
      return c.json({ error: e.message });
    }}
);

paymentRoutes.post('/', async (c) => {
  let db = drizzle(c.env.DB);
  const {amount , paymentDate ,limitDate, title, applicationId, isCompleted} = await c.req.json();
  try {
      const result = await db
      .insert(payments).values({
        amount , paymentDate ,limitDate,applicationId,title,isCompleted
      }).returning();
      return c.json(result);
    } catch (e: any) {
      return c.json({ error: e.message });
    }}
);

paymentRoutes.get('/getPaymentsByUser/:userId', async (c) => {
  let db = drizzle(c.env.DB);
  const userId = c.req.param("userId");
  try {
      const result = await db.select().from(payments).where(eq(payments.userId , userId)).all()
      return c.json(result);
    } catch (e: any) {
      return c.json({ error: e.message });
    }}
);

paymentRoutes.get('/getPaymentUser/:userId', async (c) => {
  let db = drizzle(c.env.DB);
  const userId = c.req.param("userId");
  try {
      const result = await db.select().from(payments).where(eq(payments.userId , userId)).all()
      return c.json(result);
    } catch (e: any) {
      return c.json({ error: e.message });
    }}
);

paymentRoutes.get('/getCompletedPayment', async (c) => {
  let db = drizzle(c.env.DB);
  try {
      const result = await db.select().from(payments).where(eq(payments.isCompleted , true)).all()
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