import { occasionsTable } from "~/db/schema";
import { db } from "../sqlite-service";

export default defineEventHandler(async () => {
  try {
    const occasions = db.select().from(occasionsTable).all();
    return occasions;
  } catch (e: any) {
    throw createError({ statusCode: 400, statusMessage: e.message });
  }
});
