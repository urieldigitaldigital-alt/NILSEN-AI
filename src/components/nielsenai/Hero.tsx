import { DownloadBox } from "./DownloadBox";
import { Badges } from "./Badges";

export function Hero() {
  return (
    <section id="inicio" className="px-6 pb-20 pt-20 sm:pt-28">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-[2.6rem] font-semibold leading-[1.08] tracking-tight sm:text-6xl">
          Descarga videos de TikTok
          <br />
          <span className="nai-gradient-text">en segundos</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--nai-text-soft)]">
          Pegá el enlace del video y descargalo en máxima calidad, sin marca de agua y sin
          registrarte.
        </p>

        <div className="mt-10">
          <DownloadBox />
          <Badges />
        </div>
      </div>
    </section>
  );
}
