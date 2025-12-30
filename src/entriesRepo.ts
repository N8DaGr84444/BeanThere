import { getDb } from "./db";
import { v4 as uuidv4 } from "uuid";

export interface CoffeeEntry {
  id?: string;
  shop_name: string;
  shop_location: string;
  cost_level?: number;
  vibe?: number;
  wifi?: boolean;
  seating?: boolean;
  drink?: string;
  food_level?: string[];
  rating: number;
  notes?: string;
  created_at?: number;
}

export async function addEntry(entry: CoffeeEntry) {
  const db = await getDb();

  const id = uuidv4();
  const created_at = Date.now();

  await db.run(
    `
      INSERT INTO entries (
        id, shop_name, shop_location, cost_level, vibe, wifi, seating, drink, food_level, rating, notes, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `,
    [
      id,
      entry.shop_name,
      entry.shop_location,
      entry.cost_level ?? null,
      entry.vibe ?? null,
      entry.wifi ? 1 : null,
      entry.seating ? 1 : null,
      entry.drink ?? null,
      entry.food_level?.join(",") ?? null,
      entry.rating,
      entry.notes ?? null,
      created_at,
    ],
  );

  return { ...entry, id, created_at };
}

export async function getEntries() {
  const db = await getDb();
  const res = await db.query("SELECT * FROM entries ORDER BY created_at DESC;");
  return res.values as CoffeeEntry[];
}
