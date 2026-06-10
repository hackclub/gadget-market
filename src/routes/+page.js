// src/routes/+page.js
import { fetchTable } from '$lib/airtable';

export async function load() {
  const [listings] = await Promise.all([
    fetchTable('Listings'),
  ]);
  return { listings };
}