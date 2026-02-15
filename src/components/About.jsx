import useInViewOnce from "../hooks/useInViewOnce"

const stats = [
  { value: "120+", label: "Abgeschlossene Projekte" },
  { value: "8+", label: "Jahre Erfahrung" },
  { value: "98%", label: "Kundenzufriedenheit" },
  { value: "3x", label: "Mehr Conversions" },
]

export default function About() {
  const { ref, visible } = useInViewOnce()
  return (
    <section id="ueber-uns" className="relative py-20">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0B1020,#0E1630)]" />
      <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_20%_20%,rgba(34,211,238,.18),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(37,99,235,.14),transparent_55%),radial-gradient(circle_at_50%_85%,rgba(124,58,237,.14),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(255,255,255,.02)_3px,rgba(255,255,255,.02)_6px)]" />

      <div ref={ref} className="relative mx-auto max-w-6xl px-6 text-white">
        <div className={`grid items-center gap-10 lg:grid-cols-2 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div>
            <div className="text-[12px] font-extrabold uppercase tracking-[.14em] text-white/70">Über uns</div>
            <h2 className="font-archivo mt-3 text-3xl font-black tracking-[-.02em] md:text-4xl">
              Kreativität liegt in{" "}<span className="bg-gradient-to-br from-cyanAccent via-blueAccent to-purpleAccent bg-clip-text text-transparent">unserer DNA</span>
            </h2>
            <p className="mt-4 max-w-[65ch] text-white/85 leading-relaxed">
              Bei DEZIGNX verbinden wir Strategie, Design und Technologie zu messbaren Ergebnissen. Unser Team arbeitet eng mit Ihnen zusammen, damit aus Ideen klare, performante Lösungen werden.
            </p>
            <p className="mt-4 max-w-[65ch] text-white/75 leading-relaxed">
              Jedes Projekt sehen wir als Chance, einen Auftritt zu bauen, der nicht nur gut aussieht — sondern Vertrauen schafft und Anfragen bringt.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#kontakt" className="rounded-xl bg-gradient-to-br from-blueAccent to-purpleAccent px-5 py-3 font-bold text-white shadow-[0_18px_60px_rgba(37,99,235,.25)] transition hover:-translate-y-0.5">Jetzt Projekt starten</a>
              <a href="#projekte" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-bold text-white/95 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10">Projekte ansehen</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-3xl border border-white/12 bg-white/5 p-6 text-center backdrop-blur shadow-soft transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/10">
                <div className="font-archivo text-3xl font-black"><span className="bg-gradient-to-br from-cyanAccent via-blueAccent to-purpleAccent bg-clip-text text-transparent">{s.value}</span></div>
                <div className="mt-2 text-sm text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
