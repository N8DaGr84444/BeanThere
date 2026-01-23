import { CoffeeEntry } from "./entries.types";
import { v4 as uuidv4 } from "uuid";

// Web setup for dev since sqlite doesn't work on web

const STORAGE_KEY = "beanthere_entries";

function load(): CoffeeEntry[] {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

function save(entries: CoffeeEntry[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export async function addEntry(entry: CoffeeEntry): Promise<CoffeeEntry> {
  const entries = load();

  const newEntry: CoffeeEntry = {
    ...entry,
    id: uuidv4(),
    created_at: Date.now(),
  };

  entries.unshift(newEntry);
  save(entries);

  return newEntry;
}

export async function getEntries(): Promise<CoffeeEntry[]> {
  return load();
}
