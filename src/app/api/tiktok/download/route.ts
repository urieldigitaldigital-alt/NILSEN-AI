import { isAllowedCdnUrl } from "@/lib/tiktok";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const src = searchParams.get("src");
  const filename = (searchParams.get("filename") ?? "nielsenai-video").replace(/[^a-zA-Z0-9_-]/g, "");

  if (!src || !isAllowedCdnUrl(src)) {
    return new Response("Enlace no permitido.", { status: 400 });
  }

  const upstream = await fetch(src, { cache: "no-store" });
  if (!upstream.ok || !upstream.body) {
    return new Response("No se pudo descargar el video.", { status: 502 });
  }

  return new Response(upstream.body, {
    headers: {
      "Content-Type": upstream.headers.get("content-type") ?? "video/mp4",
      "Content-Disposition": `attachment; filename="${filename || "nielsenai-video"}.mp4"`,
      "Cache-Control": "no-store",
    },
  });
}
