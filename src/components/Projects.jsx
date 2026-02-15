import { useState, useEffect, useRef } from "react"
import portfolio1 from "../assets/portfolio-1.png";
import portfolio2 from "../assets/portfolio-2.png";
import portfolio3 from "../assets/portfolio-3.png";



const projects = [
  { img: portfolio1, tag: "", title: "", brand: "Markenidentität & Kommunikationssystem" },
  { img: portfolio2, tag: "", title: "", brand: "Webentwicklung & Digitales Erlebnis" },
  { img: portfolio3, tag: "", title: "", brand: "Individuelle Markenlösung & Entwicklung" },
 ]

function getState(i, current) {
  const d = i - current
  if (d === 0) return "active"
  if (d === 1) return "next"
  if (d === 2) return "queue"
  if (d < 0) return "prev"
  return "hidden"
}

export default function Projects() {
  const [current, setCurrent] = useState(0)
  const wrapRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const w = wrapRef.current; if (!w) return
      const rect = w.getBoundingClientRect()
      const range = w.offsetHeight - window.innerHeight
      if (range <= 0) return
      const p = Math.max(0, Math.min(1, -rect.top / range))
      setCurrent(Math.min(projects.length - 1, Math.floor(p * projects.length)))
    }
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section id="projekte" className="relative" style={{ background: "linear-gradient(135deg,#0B1020,#0E1630)" }}>
      <div ref={wrapRef} className="h-[300vh] relative max-sm:h-[250vh]">
        <div className="sticky top-0 h-screen flex flex-col items-center overflow-hidden pt-20">
          <div className="text-center z-10 shrink-0 mb-10 px-5">
            <div className="text-[12px] font-extrabold uppercase tracking-[.14em] text-white/70">Projekte</div>
            <h2 className="font-archivo mt-3 text-3xl font-black tracking-[-.02em] md:text-4xl">
              Marken, deren kreative Prozesse wir{" "}
              <span className="bg-gradient-to-br from-cyanAccent via-blueAccent to-purpleAccent bg-clip-text text-transparent">gestalten</span>
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-white/75">
              Mit Strategie, Kreativität und datenbasierten Ansätzen begleiten wir zahlreiche Marken auf ihrem Wachstumskurs.
            </p>
          </div>

          <div className="relative w-[min(85vw,800px)] aspect-[16/10] shrink-0 max-sm:w-[92vw]" style={{ perspective: "1200px" }}>
            {projects.map((p, i) => (
              <div key={i} className="proj-card" data-state={getState(i, current)}>
                <img src={p.img} alt={p.title} className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.background = "linear-gradient(135deg,#1a1a2e,#111)"; e.target.style.minHeight = "100%" }} />
                <div className="absolute inset-0 flex flex-col justify-end p-10 max-sm:p-6" style={{ background: "linear-gradient(180deg,transparent 30%,rgba(0,0,0,.85) 100%)" }}>
                  <div className="text-[13px] text-white/50 mb-1 tracking-wide">{p.tag}</div>
                  <h3 className="font-archivo text-[clamp(1.3rem,2.5vw,2rem)] font-black">{p.title}</h3>
                  <div className="text-sm font-semibold mt-1.5 bg-gradient-to-r from-cyanAccent to-purpleAccent bg-clip-text text-transparent">{p.brand}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="shrink-0 mt-6 z-10 flex gap-2.5 items-center">
            {projects.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-400 border-none cursor-pointer ${i === current ? "w-7 bg-gradient-to-r from-cyanAccent to-purpleAccent shadow-[0_0_12px_rgba(34,211,238,.4)]" : "w-2.5 bg-white/15"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
