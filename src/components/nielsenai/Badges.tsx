const BADGES = [
  { icon: "shield", label: "Sin marca de agua" },
  { icon: "hd", label: "Calidad HD" },
  { icon: "bolt", label: "Descarga rápida" },
];

function BadgeIcon({ kind }: { kind: string }) {
  if (kind === "shield") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === "hd") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="6" width="18" height="12" rx="2.5" />
        <path d="M7.5 9.5v5M11 9.5v5M7.5 12H11M14 9.5h2.2c.7 0 1.3.6 1.3 1.3v2.4c0 .7-.6 1.3-1.3 1.3H14v-5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Badges() {
  return (
    <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-3">
      {BADGES.map((b) => (
        <span
          key={b.label}
          className="nai-glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-[color:var(--nai-text-soft)]"
        >
          <span className="text-[color:var(--nai-blue-bright)]">
            <BadgeIcon kind={b.icon} />
          </span>
          {b.label}
        </span>
      ))}
    </div>
  );
}
