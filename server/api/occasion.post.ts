import { occasionsTable } from "~/db/schema";
import { db } from "../sqlite-service";

export default defineEventHandler(async () => {
  try {
    const occasion = db.insert(occasionsTable).values({}).run();
    return { occasion };
  } catch (e: any) {
    throw createError({ statusCode: 400, statusMessage: e.message });
  }
});
