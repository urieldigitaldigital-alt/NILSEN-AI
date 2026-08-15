const LEGAL_LINKS = [
  { href: "#", label: "Política de privacidad" },
  { href: "#", label: "Términos de uso" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-[color:var(--nai-border)]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <span className="text-sm font-semibold tracking-tight text-[color:var(--nai-text)]">
            NilsenAI
          </span>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[color:var(--nai-text-soft)]">
            {LEGAL_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="transition hover:text-[color:var(--nai-text)]">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-8 text-center text-xs leading-relaxed text-[color:var(--nai-text-faint)] sm:text-left">
          NilsenAI no está afiliado a TikTok. El servicio está pensado para descargar contenido
          propio o de uso permitido — sos responsable de respetar los derechos de autor y los
          términos de la plataforma de origen.
        </p>

        <p className="mt-6 text-center text-xs text-[color:var(--nai-text-faint)] sm:text-left">
          © {new Date().getFullYear()} NilsenAI. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
