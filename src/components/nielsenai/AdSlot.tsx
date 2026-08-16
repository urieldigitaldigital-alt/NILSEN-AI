"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

type AdSlotProps = {
  slot: string;
  format?: string;
  fullWidthResponsive?: boolean;
  className?: string;
};

export function AdSlot({ slot, format = "auto", fullWidthResponsive, className = "" }: AdSlotProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense script may not have loaded yet (e.g. ad blockers) — ignore.
    }
  }, []);

  return (
    <div className={`mx-auto max-w-4xl px-6 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9128555071862812"
        data-ad-slot={slot}
        data-ad-format={format}
        {...(fullWidthResponsive ? { "data-full-width-responsive": "true" } : {})}
      />
    </div>
  );
}
