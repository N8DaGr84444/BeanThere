import { Capacitor } from "@capacitor/core";
import {
  CapacitorSQLite,
  SQLiteDBConnection,
} from "@capacitor-community/sqlite";

let db: SQLiteDBConnection | null = null;

export async function getDb() {
  if (db) return db;

  // Web: do not use SQLite, use mock data instead
  if (Capacitor.getPlatform() === "web") {
    throw new Error("SQLite is not supported on web in this app");
  }

  db = await CapacitorSQLite.createConnection({
    database: "beanthere",
    version: 1,
  });

  await db.open();

  await db.execute(`
    CREATE TABLE IF NOT EXISTS entries (
      id TEXT PRIMARY KEY,
      shop_name TEXT NOT NULL,
      shop_location TEXT NOT NULL,
      cost_level INTEGER,
      vibe INTEGER,
      wifi INTEGER,
      seating INTEGER,
      drink TEXT,
      food_level TEXT,
      rating INTEGER NOT NULL,
      notes TEXT,
      created_at INTEGER NOT NULL
    );
  `);

  return db;
}
