import { FaBullhorn, FaShareNodes, FaCode, FaClapperboard, FaChartPie, FaHandPointer } from "react-icons/fa6"
import useInViewOnce from "../hooks/useInViewOnce"

const cards = [
  { icon: FaBullhorn, label: "Digitale Werbung", cls: "fc1" },
  { icon: FaShareNodes, label: "Social Media", cls: "fc2" },
  { icon: FaCode, label: "Web & Mobile", cls: "fc3", center: true },
  { icon: FaClapperboard, label: "Produktion", cls: "fc4" },
  { icon: FaChartPie, label: "CRM & Analytics", cls: "fc5" },
]

export default function CardFan() {
  const { ref: hRef, visible: hV } = useInViewOnce()
  const { ref: fRef, visible: fV } = useInViewOnce({ rootMargin: "-5% 0px -5% 0px" })

  return (
    <section id="leistungen" className="relative overflow-hidden bg-[linear-gradient(135deg,#0B1020,#0E1630)] py-20">
      <div className="pointer-events-none absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-70 blur-3xl [background:radial-gradient(circle_at_30%_30%,rgba(34,211,238,.18),transparent_55%),radial-gradient(circle_at_70%_35%,rgba(37,99,235,.16),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(255,255,255,.02)_3px,rgba(255,255,255,.02)_6px)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div ref={hRef} className={`text-center transition-all duration-700 ease-out ${hV ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="text-[12px] font-extrabold uppercase tracking-[.14em] text-white/70">Leistungen</div>
          <h2 className="font-archivo mt-3 text-3xl font-black tracking-[-.02em] md:text-4xl">
            Integrierte{" "}<span className="bg-gradient-to-br from-cyanAccent via-blueAccent to-purpleAccent bg-clip-text text-transparent">Marketing</span>-Lösungen
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-white/80">Von digitaler Werbung bis CRM, von Produktion bis Datenanalyse — wir sind in allen Bereichen an Ihrer Seite.</p>
        </div>

        <div ref={fRef} className={`flex justify-center mt-14 transition-opacity duration-700 ${fV ? "opacity-100" : "opacity-0"}`}>
          <div className="card-fan">
            {cards.map((c, i) => (
              <div key={i} className={`fc ${c.cls}`}>
                {c.center && (
                  <div className="fc-cover"><span>Entdecken</span><FaHandPointer className="animate-bounce-x" /></div>
                )}
                <c.icon className="text-[34px] text-cyanAccent drop-shadow-[0_0_8px_rgba(34,211,238,.4)] transition-all duration-300 max-sm:text-[20px] max-md:text-[26px]" />
                <div className="fc-label">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
