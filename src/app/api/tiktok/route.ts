import { NextResponse } from "next/server";
import { extractTikTokUrl, fetchTikTokInfo, isTikTokUrl } from "@/lib/tiktok";

export async function POST(request: Request) {
  let body: { url?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const url = body.url ? extractTikTokUrl(body.url) : null;
  if (!url || !isTikTokUrl(url)) {
    return NextResponse.json({ error: "Pegá un enlace válido de TikTok." }, { status: 400 });
  }

  try {
    const info = await fetchTikTokInfo(url);
    return NextResponse.json({ data: info });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo procesar el video.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
