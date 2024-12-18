import { Hono } from "hono";
import { Env } from "../../../env";
import { drizzle } from "drizzle-orm/d1";
import { eq, lt, gte, ne } from "drizzle-orm";
import { applicationTasks } from "../../../db/schema";

export const taskRoutes = new Hono<{ Bindings: Env }>();

taskRoutes.get("/", async (c) => {
  let db = drizzle(c.env.DB);

  try {
    const result = await db.select().from(applicationTasks).all();
    return c.json(result);
  } catch (e: any) {
    return c.json({ error: e.message });
  }
});

taskRoutes.post("/", async (c) => {
  let db = drizzle(c.env.DB);
  const {
    title,
    categoryId,
    isComplete,
    isRevised,
    dueDate,
    description,
    steps,
    instructions,
    notes,
    timestamp,
  } = await c.req.json();
  try {
    const result = await db
      .insert(applicationTasks)
      .values({
        title,
        categoryId: Number(categoryId),
        isComplete,
        isRevised,
        dueDate,
        description,
        steps,
        instructions,
        notes,
        timestamp,
      })
      .returning();
    return c.json(result);
  } catch (e: any) {
    return c.json({ error: e.message });
  }
});

taskRoutes.get("/:categoryId", async (c) => {
  let db = drizzle(c.env.DB);
  const categoryId = c.req.param("categoryId");
  try {
    const result = await db
      .select()
      .from(applicationTasks)
      .where(eq(applicationTasks.categoryId, Number(categoryId)))
      .all();
    return c.json(result);
  } catch (e: any) {
    return c.json({ error: e.message });
  }
});

taskRoutes.get("/getByApplicationTaskId/:applicationTaskId", async (c) => {
  let db = drizzle(c.env.DB);
  const applicationTaskId = c.req.param("applicationTaskId");
  try {
    const result = await db
      .select()
      .from(applicationTasks)
      .where(eq(applicationTasks.id, Number(applicationTaskId)))
      .all();
    return c.json(result);
  } catch (e: any) {
    return c.json({ error: e.message });
  }
});

//#endregion
