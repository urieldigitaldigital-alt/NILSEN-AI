export function ApiTeaser() {
  return (
    <section id="api" className="mx-auto max-w-6xl px-6 py-24">
      <div className="nai-glass rounded-3xl px-8 py-16 text-center sm:px-16">
        <span className="nai-mono text-[color:var(--nai-text-faint)]">API para desarrolladores</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Integrá NilsenAI en tu propia app.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[color:var(--nai-text-soft)]">
          Muy pronto vas a poder acceder a una API para descargar videos de TikTok
          programáticamente, con la misma velocidad y calidad.
        </p>
        <a
          href="#contacto"
          className="mt-8 inline-block rounded-full border border-[color:var(--nai-border-strong)] px-6 py-3 text-sm font-semibold text-[color:var(--nai-text)] transition hover:bg-[color:var(--nai-surface)]"
        >
          Avisame cuando esté lista
        </a>
      </div>
    </section>
  );
}
