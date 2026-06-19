/*
 * Copyright (c) 2026 by Christian Kellner.
 * Licensed under Apache-2.0 with Commons Clause and Attribution/Naming Clause
 */

/**
 * Adds an `address_accuracy` TEXT column to the listings table.
 * Stores the geocoding accuracy from the provider (e.g. 'HIGH', 'MEDIUM', 'LOW').
 * Used to show an approximate-address warning in the UI when the street is not known.
 * @param {import('better-sqlite3').Database} db
 */
export function up(db) {
  db.exec(`ALTER TABLE listings ADD COLUMN address_accuracy TEXT;`);
}
