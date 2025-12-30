import { Capacitor } from "@capacitor/core";
import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection,
} from "@capacitor-community/sqlite";

let sqlite: SQLiteConnection | null = null;
let db: SQLiteDBConnection | null = null;

export const getDb = async (): Promise<SQLiteDBConnection> => {
  if (db) {
    const isOpen = await db.isDBOpen();
    if (isOpen) {
      return db;
    }
  }

  sqlite = new SQLiteConnection(CapacitorSQLite);

  // WEB ONLY SETUP
  if (!Capacitor.isNativePlatform()) {
    await customElements.whenDefined("jeep-sqlite");
    await sqlite.initWebStore();
  }

  db = await sqlite.createConnection(
    "beanthere",
    false,
    "no-encryption",
    1,
    false,
  );

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
};
