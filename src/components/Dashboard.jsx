import { useEffect, useState } from "react"
import useInViewOnce from "../hooks/useInViewOnce"

const metrics = [
  { label: "Leads", value: 1847, suffix: "", color: "#22D3EE", change: "+24,5%" },
  { label: "Conversion", value: 12.4, suffix: "%", color: "#2563EB", change: "+3,2%" },
  { label: "Kampagnen", value: 23, suffix: "", color: "#7C3AED", change: "+5" },
  { label: "ROAS", value: 4.8, suffix: "x", color: "#22D3EE", change: "+0,6x" },
]

const bars = [
  { h: 45, m: "Jan" }, { h: 62, m: "Feb" }, { h: 55, m: "Mär" }, { h: 78, m: "Apr" },
  { h: 68, m: "Mai" }, { h: 88, m: "Jun" }, { h: 58, m: "Jul" }, { h: 92, m: "Aug" },
  { h: 72, m: "Sep" }, { h: 82, m: "Okt" }, { h: 90, m: "Nov" }, { h: 98, m: "Dez" },
]

function useCountUp(target, active, dur = 1200) {
  const [v, setV] = useState(0)
  const isFloat = !Number.isInteger(target)
  useEffect(() => {
    if (!active) return
    const s = performance.now()
    const tick = (now) => {
      const t = Math.min(1, (now - s) / dur)
      const ease = 1 - Math.pow(1 - t, 4)
      setV(isFloat ? parseFloat((ease * target).toFixed(1)) : Math.floor(ease * target))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target, dur, isFloat])
  return isFloat ? v.toFixed(1).replace(".", ",") : v.toLocaleString("de-DE")
}

export default function Dashboard() {
  const { ref, visible } = useInViewOnce({ rootMargin: "-10% 0px -10% 0px" })
  const [hoveredBar, setHoveredBar] = useState(-1)

  // 🔧 Bar kalınlığı buradan kontrol
  const BAR_W = "w-[8px]" // 4px/6px/8px deneyebilirsin

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0B1020,#0E1630)] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(255,255,255,.02)_3px,rgba(255,255,255,.02)_6px)]" />

      <div ref={ref} className="relative mx-auto max-w-6xl px-6">
        <div className={`mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="text-[12px] font-extrabold uppercase tracking-[.14em] text-white/50">Performance</div>
          <h2 className="font-archivo mt-3 text-3xl font-black tracking-[-.02em] md:text-4xl">
            Alle Kampagnenergebnisse{" "}
            <span className="bg-gradient-to-br from-cyanAccent via-blueAccent to-purpleAccent bg-clip-text text-transparent">auf einen Blick</span>
          </h2>
        </div>

        {/* Metric row */}
        <div className="grid grid-cols-4 gap-3 mb-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {metrics.map((m, i) => {
            const count = useCountUp(m.value, visible, 1400)
            return (
              <div key={i} className="rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]">
                <div className="text-[11px] text-white/35 uppercase tracking-[.1em]">{m.label}</div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-archivo text-2xl font-black" style={{ color: m.color }}>
                    {count}{m.suffix}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-400/80">{m.change}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Chart */}
        <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="text-sm font-semibold text-white/60">Monatliche Performance</div>
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5 text-[10px] text-white/35">
                <div className="h-1.5 w-4 rounded-full bg-gradient-to-r from-cyanAccent to-blueAccent" /> Leads
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-white/35">
                <div className="h-1.5 w-4 rounded-full bg-white/10" /> Baseline
              </div>
            </div>
          </div>

          <div className="flex items-end gap-[6px] h-[180px]">
            {bars.map((b, i) => (
              <div
                key={i}
                className="flex-1 flex flex-col items-center gap-0 h-full justify-end relative"
                onMouseEnter={() => setHoveredBar(i)}
                onMouseLeave={() => setHoveredBar(-1)}
              >
                {/* Tooltip */}
                <div className={`absolute -top-1 text-[10px] font-bold text-white/80 bg-white/10 backdrop-blur rounded px-1.5 py-0.5 transition-all duration-200 ${hoveredBar === i ? "opacity-100 -translate-y-5" : "opacity-0 translate-y-0"}`}>
                  {b.h}%
                </div>

                {/* Bar (İNCELEŞTİRİLDİ) */}
                <div
                  className={`mx-auto ${BAR_W} rounded-[999px] transition-all cursor-pointer`}
                  style={{
                    height: visible ? b.h + "%" : "2px",
                    transitionDuration: "1.2s",
                    transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
                    transitionDelay: visible ? (i * 50) + "ms" : "0ms",
                    background: hoveredBar === i
                      ? "linear-gradient(180deg, #22D3EE, #2563EB)"
                      : i % 2 === 0
                        ? "linear-gradient(180deg, rgba(34,211,238,.7), rgba(37,99,235,.5))"
                        : "rgba(37,99,235,.15)",
                    boxShadow: hoveredBar === i ? "0 0 16px rgba(34,211,238,.3)" : "none",
                  }}
                />

                {/* Month */}
                <div className={`mt-2 text-[9px] transition-colors duration-200 ${hoveredBar === i ? "text-white/70" : "text-white/20"}`}>
                  {b.m}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
