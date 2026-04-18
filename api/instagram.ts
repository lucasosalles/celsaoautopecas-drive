import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "https://celsaoautopecas.com");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = process.env.INSTAGRAM_TOKEN;
  const accountId = process.env.INSTAGRAM_ACCOUNT_ID;

  if (!token || !accountId) {
    return res.status(500).json({ error: "Instagram credentials not configured" });
  }

  const url = `https://graph.instagram.com/v25.0/${accountId}/media?fields=id,media_url,permalink,media_type,thumbnail_url&limit=6&access_token=${token}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    return res.status(502).json({ error: "Instagram API error", details: data });
  }

  return res.status(200).json(data);
}
