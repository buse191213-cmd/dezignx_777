import { useEffect, useRef, useState } from "react"

const bars = [
  { name: "Designqualität", value: 98 },
  { name: "Termintreue", value: 96 },
  { name: "Kommunikation", value: 97 },
  { name: "Preis-Leistung", value: 94 },
  { name: "Weiterempfehlung", value: 99 },
]
const breakdown = [
  { name: "Sehr zufrieden", value: 78, dot: "bg-cyanAccent" },
  { name: "Zufrieden", value: 18, dot: "bg-blueAccent" },
  { name: "Neutral", value: 4, dot: "bg-purpleAccent" },
]
// const testimonials = [
//   { name: "Stefan Müller", role: "CEO, TechVentures GmbH", text: "DEZIGNX hat unsere Marke komplett transformiert. 40% mehr Conversions in nur 3 Monaten — die Ergebnisse haben unsere Erwartungen weit übertroffen." },
//   { name: "Anna Schneider", role: "Marketing-Leiterin, BioNova", text: "Professionell, kreativ und extrem zuverlässig. Unser neuer Webauftritt generiert seitdem dreimal so viele qualifizierte Leads." },
//   { name: "Markus Weber", role: "Gründer, UrbanStyle", text: "Von der Strategie bis zur Umsetzung — alles aus einem Guss. DEZIGNX versteht es, Design mit messbaren Geschäftsergebnissen zu verbinden." },
// ]

const testimonials = [
  {
    name: "Frau M.",
    role: "Geschäftsführerin eines mittelständischen Unternehmens",
    text: "Die Zusammenarbeit mit Dezignx war äußerst professionell. Unser neuer Markenauftritt wirkt deutlich moderner und hochwertiger.",
  },
  {
    name: "Herr K.",
    role: "Marketing Leiter, E-Commerce Branche",
    text: "Klare Prozesse, schnelle Umsetzung und eine Kommunikation auf Augenhöhe. Wir würden Dezignx jederzeit weiterempfehlen.",
  },
  {
    name: "Frau L.",
    role: "Gründerin, SaaS Startup",
    text: "Von der Strategie bis zur Umsetzung fühlten wir uns bestens betreut. Besonders überzeugt hat uns das Gespür für Design und Markenwirkung.",
  },
]


export default function Satisfaction() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(false)
  const [counts, setCounts] = useState(() => ({ bars: bars.map(() => 1), breakdown: breakdown.map(() => 1) }))

  useEffect(() => {
    const el = sectionRef.current; if (!el || active) return
    const io = new IntersectionObserver((entries) => { if (entries.some(e => e.isIntersecting)) setActive(true) }, { threshold: 0.25 })
    io.observe(el); return () => io.disconnect()
  }, [active])

  useEffect(() => {
    if (!active) return
    const duration = 650, start = performance.now()
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration), ease = 1 - Math.pow(1 - t, 3)
      setCounts({ bars: bars.map(b => Math.max(1, Math.floor(1 + (b.value - 1) * ease))), breakdown: breakdown.map(b => Math.max(1, Math.floor(1 + (b.value - 1) * ease))) })
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[linear-gradient(135deg,#0B1020,#0E1630)] py-20 text-white">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-70 blur-3xl [background:radial-gradient(circle_at_30%_30%,rgba(34,211,238,.22),transparent_55%),radial-gradient(circle_at_70%_40%,rgba(37,99,235,.18),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="text-[12px] font-extrabold uppercase tracking-[.14em] text-white/70">Kundenzufriedenheit</div>
          <h2 className="font-archivo mt-3 text-3xl font-black tracking-[-.02em] md:text-4xl">
            Unsere Kunden{" "}<span className="bg-gradient-to-br from-cyanAccent via-blueAccent to-purpleAccent bg-clip-text text-transparent">sprechen</span>{" "}für uns
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-white/80">98% Kundenzufriedenheit — Zahlen, die für sich sprechen.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/12 bg-white/5 p-7 backdrop-blur shadow-soft transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/10">
            <h3 className="font-archivo text-lg font-black">Bewertungen nach Kategorie</h3>
            <div className="mt-6 grid gap-4">
              {bars.map((b, idx) => (
                <div key={b.name}>
                  <div className="flex items-center justify-between text-sm"><span className="font-semibold text-white/85">{b.name}</span><span className="font-black text-white">{active ? counts.bars[idx] : 1}%</span></div>
                  <div className="mt-2 h-3 rounded-full bg-white/10"><div className="h-3 rounded-full bg-gradient-to-r from-cyanAccent via-blueAccent to-purpleAccent transition-[width] duration-700" style={{ width: `${active ? b.value : 0}%` }} /></div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/12 bg-white/5 p-7 backdrop-blur shadow-soft transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/10">
            <h3 className="font-archivo text-lg font-black">Gesamtzufriedenheit</h3>
            <div className="mt-6 grid gap-4">
              {breakdown.map((b, idx) => (
                <div key={b.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:-translate-y-0.5 hover:bg-white/10">
                  <div className="flex items-center gap-3"><span className={`h-3 w-3 rounded-full ${b.dot}`} /><span className="font-semibold text-white/85">{b.name}</span></div>
                  <span className="font-black text-white">{active ? counts.breakdown[idx] : 1}%</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,.14),rgba(37,99,235,.12),rgba(124,58,237,.12))] p-5">
              <div className="text-sm font-extrabold uppercase tracking-[.14em] text-white/75">Kurzfazit</div>
              <p className="mt-2 text-white/85 leading-relaxed">Hohe Weiterempfehlung, starke Kommunikation und konsistente Qualität — genau die Mischung, die Projekte planbar macht.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-3xl border border-white/12 bg-white/5 p-7 backdrop-blur shadow-soft transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/10">
              <div className="mb-4 flex gap-1 text-sm text-cyanAccent">{"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}</div>
              <p className="text-white/80 leading-relaxed italic">„{t.text}"</p>
              <div className="mt-6"><div className="font-archivo font-black">{t.name}</div><div className="text-sm text-white/70">{t.role}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
