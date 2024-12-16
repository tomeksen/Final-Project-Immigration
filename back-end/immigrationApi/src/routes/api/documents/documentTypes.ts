import { Hono } from 'hono'
import { Env } from '../../../env';
import { drizzle } from 'drizzle-orm/d1';
import { eq, lt, gte, ne } from 'drizzle-orm';
import { documentType } from '../../../db/schema';

export const documentTypesRoutes = new Hono<{ Bindings: Env }>()

documentTypesRoutes.get('/', async (c) => {
    let db = drizzle(c.env.DB);
    
    try {
        const result = await db.select().from(documentType).all()
        return c.json(result);
      } catch (e: any) {
        return c.json({ error: e.message });
      }
}
)

documentTypesRoutes.post('/', async (c) => {
  let db = drizzle(c.env.DB);
  const { typeName, hasExpiration} = await c.req.json();
  try {
      const result = await db
      .insert(documentType).values({
        typeName,
        hasExpiration,
      }).returning();
      return c.json(result);
    } catch (e: any) {
      return c.json({ error: e.message });
    }}
);

documentTypesRoutes.get('/:documentTypeId', async (c) => {
    let db = drizzle(c.env.DB);
    const documentTypeId = c.req.param("documentTypeId");
    try {
        const result = await db.select().from(documentType).where(eq(documentType.id, Number(documentTypeId) )).all()
        return c.json(result);
      } catch (e: any) {
        return c.json({ error: e.message });
      }}
);

