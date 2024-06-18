import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const occasionsTable = sqliteTable("occasions", {
  id: integer("id").notNull().primaryKey(),
  timestamp: text("timestamp")
    .notNull()
    .default(sql`(CURRENT_TIMESTAMP)`),
});

export type SelectOccasion = typeof occasionsTable.$inferSelect;
export type InsertOccasion = typeof occasionsTable.$inferInsert;
