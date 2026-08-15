export function AdSlot({ label = "Espacio publicitario", className = "" }: { label?: string; className?: string }) {
  return (
    <div className={`mx-auto max-w-4xl px-6 ${className}`}>
      {/* Reserved slot for Google AdSense. Swap this div's contents for the <ins class="adsbygoogle"> unit. */}
      <div className="nai-ad-slot flex h-24 items-center justify-center rounded-xl sm:h-28">
        <span className="nai-mono text-[color:var(--nai-text-faint)]">{label}</span>
      </div>
    </div>
  );
}
