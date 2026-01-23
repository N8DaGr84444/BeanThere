import { getDb } from "@/db";
import { CoffeeEntry } from "./entries.types";
import { v4 as uuidv4 } from "uuid";

// Native only, not web

export async function addEntry(entry: CoffeeEntry): Promise<CoffeeEntry> {
  const db = await getDb();

  const id = uuidv4();
  const created_at = Date.now();

  await db.run(
    `
    INSERT INTO entries (
      id, shop_name, shop_location, cost_level, vibe, wifi, seating,
      drink, food_level, rating, notes, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      id,
      entry.shop_name,
      entry.shop_location,
      entry.cost_level ?? null,
      entry.vibe ?? null,
      entry.wifi ? 1 : 0,
      entry.seating ? 1 : 0,
      entry.drink ?? null,
      entry.food_level?.join(",") ?? null,
      entry.rating,
      entry.notes ?? null,
      created_at,
    ],
  );

  return { ...entry, id, created_at };
}

export async function getEntries(): Promise<CoffeeEntry[]> {
  const db = await getDb();
  const res = await db.query("SELECT * FROM entries ORDER BY created_at DESC");

  return (res.values ?? []).map((row: any) => ({
    ...row,
    wifi: !!row.wifi,
    seating: !!row.seating,
    food_level: row.food_level ? row.food_level.split(",") : [],
  }));
}
