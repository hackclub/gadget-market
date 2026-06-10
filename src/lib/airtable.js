const BASE_URL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}`;
const HEADERS = {
  Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`,
};

export async function fetchTable(tableName) {
  const records = [];
  let offset = null;

  do {
    let url = `${BASE_URL}/${encodeURIComponent(tableName)}`;
    if (offset) url += `?offset=${offset}`;

    const res = await fetch(url, { headers: HEADERS });
    const data = await res.json();

    if (!data.records) throw new Error(`Airtable error: ${JSON.stringify(data)}`);

    records.push(...data.records);
    offset = data.offset ?? null;
  } while (offset);

  return records.map(r => ({ id: r.id, ...r.fields }));
}