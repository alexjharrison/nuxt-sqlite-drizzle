import { ErrorCodes } from "vue";
import { db } from "../../sqlite-service";
import { occasionsTable } from "~/db/schema";
import { eq } from "drizzle-orm";

export default defineEventHandler((event) => {
  const id = parseInt(event.context.params!.id);
  if (!Number.isInteger(id))
    throw createError({ statusCode: 404, message: "id not found" });
  try {
    return db.delete(occasionsTable).where(eq(occasionsTable.id, id));
  } catch (e: any) {
    throw createError({ statusCode: 400, message: e.message });
  }
});
