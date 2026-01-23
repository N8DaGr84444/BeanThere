import { Capacitor } from "@capacitor/core";

let repo: any = null;

export async function getEntriesRepo() {
  if (repo) return repo;

  try {
    if (Capacitor.getPlatform() === "web") {
      repo = await import("./entries.mock");
    } else {
      repo = await import("./entries.sqlite");
    }
  } catch (err) {
    console.error("Failed to load entries repo", err);
    throw err;
  }

  return repo;
}
