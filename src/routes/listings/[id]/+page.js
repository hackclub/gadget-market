import { fetchTable } from '$lib/airtable';

export async function load({ params }) {
  const listings = await fetchTable('Listings');
  const listing = listings.find(l => l.id === params.id);
  return { listing };
}