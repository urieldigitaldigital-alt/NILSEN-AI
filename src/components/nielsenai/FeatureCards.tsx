function InstantIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none">
      <rect x="4" y="4" width="32" height="32" rx="10" fill="url(#nai-f1)" fillOpacity="0.15" />
      <path d="M22 11l-9 12h6l-1 8 9-12h-6l1-8z" fill="url(#nai-f1)" />
      <defs>
        <linearGradient id="nai-f1" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function PlatformsIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none">
      <rect x="4" y="4" width="32" height="32" rx="10" fill="url(#nai-f2)" fillOpacity="0.15" />
      <circle cx="16" cy="16" r="4.5" stroke="url(#nai-f2)" strokeWidth="1.8" />
      <circle cx="25" cy="16" r="4.5" stroke="url(#nai-f2)" strokeWidth="1.8" />
      <circle cx="20.5" cy="24" r="4.5" stroke="url(#nai-f2)" strokeWidth="1.8" />
      <defs>
        <linearGradient id="nai-f2" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none">
      <rect x="4" y="4" width="32" height="32" rx="10" fill="url(#nai-f3)" fillOpacity="0.15" />
      <path d="M12 24a8 8 0 1116 0" stroke="url(#nai-f3)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 24l4.5-6" stroke="url(#nai-f3)" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="20" cy="24" r="1.6" fill="url(#nai-f3)" />
      <defs>
        <linearGradient id="nai-f3" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const CARDS = [
  {
    icon: <InstantIcon />,
    title: "Descarga instantánea",
    body: "Pegá el enlace y en segundos tenés tu video listo para guardar, sin esperas ni pasos de más.",
  },
  {
    icon: <PlatformsIcon />,
    title: "Compatible con múltiples plataformas",
    body: "Funciona en cualquier navegador, en celular o computadora, sin instalar ninguna aplicación.",
  },
  {
    icon: <SpeedIcon />,
    title: "Máxima velocidad",
    body: "Infraestructura optimizada para procesar y entregar el archivo en la mejor calidad disponible.",
  },
];

export function FeatureCards() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-lg text-center">
        <span className="nai-mono text-[color:var(--nai-text-faint)]">Por qué NilsenAI</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Simple, rápido y sin complicaciones.
        </h2>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {CARDS.map((c) => (
          <div
            key={c.title}
            className="nai-glass nai-card-glow rounded-2xl p-7"
          >
            {c.icon}
            <h3 className="mt-6 text-lg font-semibold text-[color:var(--nai-text)]">{c.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--nai-text-soft)]">
              {c.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
