import { Hono } from 'hono'
import { Env } from '../../../env';
import { drizzle } from 'drizzle-orm/d1';
import { eq, lt, gte, ne } from 'drizzle-orm';
import {  documents } from '../../../db/schema';

export const documentsRoutes = new Hono<{ Bindings: Env }>()

documentsRoutes.get('/', async (c) => {
    let db = drizzle(c.env.DB);
    try {
        const result = await db.select().from(documents).all()
        return c.json(result);
      } catch (e: any) {
        return c.json({ error: e.message });
      }
}
)

documentsRoutes.post('/', async (c) => {
  let db = drizzle(c.env.DB);
  const { documentTypeId,
    documentFile,
    userId,
    applicationTaskId,
    isChecked,
    title,
    expirationDate} = await c.req.json();
  try {
      const result = await db
      .insert(documents).values({
        documentTypeId,
        documentFile,
        userId,
        applicationTaskId,
        expirationDate,
        title,
        isChecked
      }).returning();
      return c.json(result);
    } catch (e: any) {
      return c.json({ error: e.message });
    }}
);

documentsRoutes.get('/documentByUserId/:userId', async (c) => {
  let db = drizzle(c.env.DB);
  const userId = c.req.param("userId");
  try {
      const result = await db.select().from(documents).where(eq(documents.userId, userId )).all()
      return c.json(result);
    } catch (e: any) {
      return c.json({ error: e.message });
    }}
);

documentsRoutes.get('/:applicationTaskId', async (c) => {
    let db = drizzle(c.env.DB);
    const applicationTaskId = c.req.param("applicationTaskId");
    try {
        const result = await db.select().from(documents).where(eq(documents.applicationTaskId, Number(applicationTaskId) )).all()
        return c.json(result);
      } catch (e: any) {
        return c.json({ error: e.message });
      }}
);

//#endregion