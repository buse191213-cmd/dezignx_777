import useInViewOnce from "../hooks/useInViewOnce"

const items = [
  { no: "01", title: "Alles aus einer Hand", desc: "Website, Ads & Print ohne Abstimmungsstress — ein Ansprechpartner, ein Plan." },
  { no: "02", title: "Conversion-First", desc: "Struktur, Copy, CTAs — optimiert auf Leads, Anfragen und Buchungen." },
  { no: "03", title: "Qualität & Performance", desc: "Mobile UX, schnelle Ladezeiten, saubere Basics. Damit der erste Eindruck sitzt." },
  { no: "04", title: "Transparente Angebote", desc: "Klare Deliverables und realistische Timelines. Keine Überraschungen." },
  { no: "05", title: "DSGVO-Basics", desc: "Consent/Tracking nach Best Practices. Für rechtliche Abnahmen empfehlen wir juristische Prüfung." },
  { no: "06", title: "Partnerschaft", desc: "Nach dem Launch bleiben wir dran: Optimierung, Updates, Kampagnen — langfristig." },
]

export default function Why() {
  const { ref, visible } = useInViewOnce()
  return (
    <section className="bg-[linear-gradient(135deg,#0B1020,#0E1630)] py-20 text-white">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="text-[12px] font-extrabold uppercase tracking-[.14em] text-white/65">Warum DEZIGNX</div>
          <h2 className="font-archivo mt-3 text-3xl font-black tracking-[-.02em] md:text-4xl">Premium Look — klare Prozesse — messbare Wirkung.</h2>
          <p className="mx-auto mt-3 max-w-3xl text-white/75">Sie bekommen nicht nur „schön", sondern „wirksam": Design, Technik und Marketing greifen ineinander.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <div key={item.no} className={`rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 shadow-soft ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: `${i * 80}ms`, transitionDuration: "700ms" }}>
              <div className="flex items-center gap-3">
                <div className="font-archivo grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-blueAccent to-purpleAccent text-sm font-black">{item.no}</div>
                <h3 className="font-archivo text-lg font-black">{item.title}</h3>
              </div>
              <p className="mt-3 text-white/75">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
