import Link from "next/link";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#api", label: "API" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

function LogoMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
      <rect width="32" height="32" rx="9" fill="url(#nai-logo-grad)" />
      <path
        d="M11 9v14l11-7-11-7z"
        fill="white"
        fillOpacity="0.95"
      />
      <defs>
        <linearGradient id="nai-logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--nai-border)] bg-[color:var(--nai-bg)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#inicio" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="text-[15px] font-semibold tracking-tight text-[color:var(--nai-text)]">
            NilsenAI
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-[color:var(--nai-text-soft)] md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-[color:var(--nai-text)]">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#descargar"
          className="nai-btn-glow rounded-full px-4 py-2 text-sm font-medium text-white transition"
        >
          Descargar ahora
        </a>
      </div>
    </header>
  );
}
