import useInViewOnce from "../hooks/useInViewOnce"

const steps = [
  { no: "01", title: "Strategie", desc: "Wir klären Ziel, Zielgruppe und Positionierung — damit Design nicht nur schön, sondern wirksam ist.", bullets: ["Workshop & Zieldefinition", "Wettbewerb & Messaging", "Sitemap & Conversion-Flow"] },
  { no: "02", title: "Design & Entwicklung", desc: "Premium Look trifft klare Struktur. Wir gestalten Interfaces, die Vertrauen aufbauen und Nutzer führen.", bullets: ["UX & Wireframes", "UI Design System", "Entwicklung & Integration"] },
  { no: "03", title: "Launch & Wachstum", desc: "Launch ist der Startpunkt. Wir liefern saubere Umsetzung, Tracking und schnelle Iterationen für Ergebnisse.", bullets: ["Performance-Optimierung", "Tracking & Analytics", "Datenbasierte Optimierung"] },
]

export default function Process() {
  const { ref, visible } = useInViewOnce()
  return (
    <section id="prozess" className="relative overflow-hidden bg-[linear-gradient(135deg,#0B1020,#0E1630)] py-20 text-white">
      <div className="pointer-events-none absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-70 blur-3xl [background:radial-gradient(circle_at_30%_30%,rgba(34,211,238,.18),transparent_55%),radial-gradient(circle_at_70%_35%,rgba(37,99,235,.16),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(255,255,255,.02)_3px,rgba(255,255,255,.02)_6px)]" />
      <div ref={ref} className="relative mx-auto max-w-6xl px-6">
        <div className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="text-[12px] font-extrabold uppercase tracking-[.14em] text-white/70">Prozess</div>
          <h2 className="font-archivo mt-3 text-3xl font-black tracking-[-.02em] md:text-4xl">Planbar. Schnell.{" "}<span className="bg-gradient-to-br from-cyanAccent via-blueAccent to-purpleAccent bg-clip-text text-transparent">Ergebnisorientiert.</span></h2>
          <p className="mx-auto mt-3 max-w-3xl text-white/80">Keine Agentur-Floskeln. Ein klarer Ablauf, der Entscheidungen beschleunigt — und am Ende messbar liefert.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.no} className={`rounded-3xl border border-white/12 bg-white/5 p-7 backdrop-blur shadow-soft transition duration-200 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: `${i * 100}ms`, transitionDuration: "700ms" }}>
              <div className="inline-flex h-11 items-center rounded-2xl border border-white/12 bg-white/5 px-4">
                <span className="font-archivo text-sm font-black tracking-[.12em] bg-gradient-to-br from-cyanAccent via-blueAccent to-purpleAccent bg-clip-text text-transparent">{s.no}</span>
              </div>
              <h3 className="font-archivo mt-4 text-2xl font-black tracking-[-.02em]">{s.title}</h3>
              <p className="mt-2 text-white/80 leading-relaxed">{s.desc}</p>
              <ul className="mt-4 grid gap-2 text-white/80">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-gradient-to-br from-cyanAccent via-blueAccent to-purpleAccent" /><span>{b}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
