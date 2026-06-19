/*
 * Copyright (c) 2026 by Christian Kellner.
 * Licensed under Apache-2.0 with Commons Clause and Attribution/Naming Clause
 */

/**
 * Adds an `image_urls` JSON column to the listings table.
 * Stores an array of image URLs, e.g. ["https://...", "https://..."].
 * The existing `image_url` column remains as the primary/first image for backwards compatibility.
 * @param {import('better-sqlite3').Database} db
 */
export function up(db) {
  db.exec(`ALTER TABLE listings ADD COLUMN image_urls TEXT;`);
}
