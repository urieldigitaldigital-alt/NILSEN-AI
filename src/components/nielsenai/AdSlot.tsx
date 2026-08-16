"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export function AdSlot({ className = "" }: { className?: string }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense script may not have loaded yet (e.g. ad blockers) — ignore.
    }
  }, []);

  return (
    <div className={`mx-auto max-w-4xl px-6 ${className}`}>
      {/* Multiplex Horizontal Adaptable — Publicidad Nativa — Contenido Web */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9128555071862812"
        data-ad-slot="3166936960"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
