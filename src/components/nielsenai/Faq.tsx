const FAQS = [
  {
    q: "¿Es realmente gratis descargar videos de TikTok?",
    a: "Sí. Pegás el enlace, procesamos el video y lo descargás sin costo y sin necesidad de crear una cuenta.",
  },
  {
    q: "¿Los videos se descargan sin marca de agua?",
    a: "Sí, NilsenAI procesa el video original para entregarlo limpio, sin el logo ni la marca de agua de TikTok.",
  },
  {
    q: "¿Qué calidad tienen los videos descargados?",
    a: "Descargamos siempre en la mejor calidad disponible del video original, incluyendo formatos HD cuando el archivo fuente lo permite.",
  },
  {
    q: "¿Necesito instalar alguna aplicación?",
    a: "No. NilsenAI funciona completamente desde el navegador, tanto en celular como en computadora.",
  },
  {
    q: "¿Es legal usar este servicio?",
    a: "El servicio está pensado para descargar contenido propio o de uso permitido. Sos responsable de respetar los derechos de autor y los términos de la plataforma de origen.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <div className="text-center">
        <span className="nai-mono text-[color:var(--nai-text-faint)]">Preguntas frecuentes</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          ¿Tenés dudas? Te las resolvemos.
        </h2>
      </div>

      <div className="mt-12 flex flex-col gap-3">
        {FAQS.map((item) => (
          <details key={item.q} className="nai-glass nai-faq-item group rounded-xl px-5 py-1 open:pb-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-medium text-[color:var(--nai-text)]">
              {item.q}
              <svg
                viewBox="0 0 24 24"
                className="nai-faq-chevron h-4 w-4 shrink-0 text-[color:var(--nai-text-faint)] transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <p className="pr-8 text-sm leading-relaxed text-[color:var(--nai-text-soft)]">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
