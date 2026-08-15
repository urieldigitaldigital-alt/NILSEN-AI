"use client";

import { useState, type FormEvent } from "react";

type Result = {
  id: string;
  desc: string;
  cover: string;
  authorNickname: string;
  downloadUrl: string;
  downloadUrlHd: string;
};

type Status = "idle" | "loading" | "error" | "success";

export function DownloadBox() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!url.trim() || status === "loading") return;

    setStatus("loading");
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/tiktok", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error ?? "No se pudo procesar el video.");
      }

      setResult(json.data);
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo procesar el video.");
      setStatus("error");
    }
  }

  const downloadHref = result
    ? `/api/tiktok/download?src=${encodeURIComponent(result.downloadUrlHd)}&filename=${encodeURIComponent(result.id)}`
    : "";

  return (
    <div id="descargar" className="nai-glass mx-auto w-full max-w-2xl rounded-2xl p-2.5 sm:p-3">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 sm:flex-row">
        <div className="flex flex-1 items-center gap-3 rounded-xl border border-[color:var(--nai-border)] bg-[color:var(--nai-surface)] px-4 py-3.5">
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-[color:var(--nai-text-faint)]" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M9 12.5l2 2 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="9" />
          </svg>
          <input
            type="text"
            inputMode="url"
            autoComplete="off"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              if (status !== "idle") {
                setStatus("idle");
                setResult(null);
                setError("");
              }
            }}
            placeholder="Pegá el enlace del video de TikTok aquí..."
            className="w-full bg-transparent text-[15px] text-[color:var(--nai-text)] placeholder:text-[color:var(--nai-text-faint)] focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="nai-btn-glow shrink-0 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition active:scale-[0.98] disabled:opacity-60"
        >
          {status === "loading" ? "Procesando..." : "Descargar ahora"}
        </button>
      </form>

      {status === "error" && (
        <p className="px-3 pb-1 pt-3 text-center text-xs text-red-600">{error}</p>
      )}

      {status === "success" && result && (
        <div className="mt-3 flex items-center gap-4 rounded-xl border border-[color:var(--nai-border)] bg-[color:var(--nai-surface)] p-3">
          {result.cover && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={result.cover}
              alt=""
              className="h-16 w-12 shrink-0 rounded-lg object-cover"
            />
          )}
          <div className="min-w-0 flex-1 text-left">
            {result.authorNickname && (
              <p className="text-xs font-medium text-[color:var(--nai-text-faint)]">
                @{result.authorNickname}
              </p>
            )}
            <p className="truncate text-sm text-[color:var(--nai-text)]">
              {result.desc || "Video listo para descargar"}
            </p>
          </div>
          <a
            href={downloadHref}
            className="nai-btn-glow shrink-0 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition"
          >
            Descargar
          </a>
        </div>
      )}
    </div>
  );
}
