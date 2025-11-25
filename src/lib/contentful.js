import { createClient } from "contentful";

export const client = createClient({
  space: import.meta.env.CONTENTFUL_SPACE,
  accessToken: import.meta.env.CONTENTFUL_TOKEN
});

export async function getProductVanDeMaand() {
  const res = await client.getEntries({
    content_type: "productVanDeMaand", // check dit
    "fields.actief": true,
    limit: 1
  });

  const entry = res.items[0];

  return entry.fields; // <-- BELANGRIJK


}

export async function getLeveranciers() {
  const res = await client.getEntries({
    content_type: "leveranciers",
    "fields.actief": true,
  });

  return res.items.map((item) => item.fields);
}


