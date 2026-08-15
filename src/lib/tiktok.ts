import "server-only";

// tikwm.com's free public endpoint — no key required, ~10k requests per reset window per IP.
// A paid tier exists at api.tikwmapi.com (TIKWM_API_KEY in env) but its exact auth header
// isn't confirmed yet — see .env.local.example. Falls back to the free endpoint until then.
const TIKWM_ENDPOINT = "https://www.tikwm.com/api/";

export type TikTokInfo = {
  id: string;
  desc: string;
  durationMs: number;
  cover: string;
  authorNickname: string;
  authorAvatar: string;
  downloadUrl: string;
  downloadUrlHd: string;
};

type TikwmResponse = {
  code: number;
  msg?: string;
  data?: {
    id?: string;
    title?: string;
    duration?: number;
    cover?: string;
    play?: string;
    hdplay?: string;
    images?: string[];
    author?: {
      nickname?: string;
      avatar?: string;
    };
  };
};

const TIKTOK_URL_PATTERN = /https?:\/\/(?:www\.|vt\.|vm\.|m\.)?tiktok\.com\/\S+/i;

/**
 * TikTok's native "Share" button copies text like
 * "1.2M Likes... - TikTok video from x : ... https://vt.tiktok.com/xxx",
 * not a bare URL, so we pull the link out of whatever was pasted.
 */
export function extractTikTokUrl(value: string): string | null {
  const match = value.match(TIKTOK_URL_PATTERN);
  if (!match) return null;
  return match[0].replace(/[)\]}>,.!?"']+$/, "");
}

export function isTikTokUrl(value: string): boolean {
  try {
    const { hostname, protocol } = new URL(value);
    return protocol === "https:" && (hostname === "tiktok.com" || hostname.endsWith(".tiktok.com"));
  } catch {
    return false;
  }
}

export async function fetchTikTokInfo(tiktokUrl: string): Promise<TikTokInfo> {
  const endpoint = `${TIKWM_ENDPOINT}?url=${encodeURIComponent(tiktokUrl)}&hd=1`;
  const res = await fetch(endpoint, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`La API de descarga respondió con un error (${res.status}).`);
  }

  const json = (await res.json()) as TikwmResponse;
  const data = json.data;
  const downloadUrl = data?.play;

  if (json.code !== 0 || !data || !downloadUrl) {
    if (data?.images?.length) {
      throw new Error("Ese enlace es una publicación de fotos, no un video — todavía no lo soportamos.");
    }
    throw new Error(json.msg || "No se pudo obtener el video. Verificá que el enlace sea correcto y público.");
  }

  return {
    id: data.id ?? "video",
    desc: data.title ?? "",
    durationMs: (data.duration ?? 0) * 1000,
    cover: data.cover ?? "",
    authorNickname: data.author?.nickname ?? "",
    authorAvatar: data.author?.avatar ?? "",
    downloadUrl,
    downloadUrlHd: data.hdplay ?? downloadUrl,
  };
}

const ALLOWED_CDN_SUFFIXES = [
  "tiktokcdn.com",
  "tiktokcdn-us.com",
  "tiktokcdn-eu.com",
  "tiktokv.com",
  "muscdn.com",
];

export function isAllowedCdnUrl(value: string): boolean {
  try {
    const { hostname, protocol } = new URL(value);
    return protocol === "https:" && ALLOWED_CDN_SUFFIXES.some((suffix) => hostname.endsWith(suffix));
  } catch {
    return false;
  }
}
