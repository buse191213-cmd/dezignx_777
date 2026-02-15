import { useEffect, useMemo, useRef, useState } from "react"
import Marquee from "./Marquee.jsx"
import useScrollSpringProgress from "../hooks/useScrollSpringProgress"
import useInViewOnce from "../hooks/useInViewOnce"

function Card({ className = "", children }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current; if (!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left, y = e.clientY - r.top
    el.style.setProperty("--mouse-x", `${x}px`); el.style.setProperty("--mouse-y", `${y}px`)
    el.style.setProperty("--rx", `${((0.5 - y/r.height)*10).toFixed(3)}deg`)
    el.style.setProperty("--ry", `${((x/r.width - 0.5)*10).toFixed(3)}deg`)
  }
  const onLeave = () => { const el = ref.current; if(el){el.style.setProperty("--rx","0deg");el.style.setProperty("--ry","0deg")} }

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ "--mouse-x":"50%","--mouse-y":"50%","--rx":"0deg","--ry":"0deg" }}
      className={`relative h-full overflow-hidden rounded-2xl p-[1.5px] bg-[#2a2f49]/70 [perspective:1100px] before:absolute before:-left-40 before:-top-40 before:h-80 before:w-80 before:pointer-events-none before:rounded-full before:bg-blue-500/30 before:blur-[110px] before:opacity-0 before:transition-opacity before:duration-500 before:transform before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] after:absolute after:-left-48 after:-top-48 after:h-96 after:w-96 after:pointer-events-none after:rounded-full after:bg-purple-500/25 after:blur-[130px] after:opacity-0 after:transition-opacity after:duration-500 after:transform after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] hover:before:opacity-100 hover:after:opacity-100 ${className}`}>
      <div className="relative z-10 h-full rounded-[inherit] bg-[#0B1020] p-6 lg:p-8 xl:p-10 will-change-transform transition-transform duration-300 ease-out" style={{ transform: "rotateX(var(--rx)) rotateY(var(--ry)) translateZ(0)" }}>
        {children}
      </div>
    </div>
  )
}

export default function BentoSection() {
  const sectionRef = useRef(null), bgRef = useRef(null)
  const p = useScrollSpringProgress(sectionRef, { stiffness: 0.09, damping: 0.82 })

  useEffect(() => {
    const section = sectionRef.current; if(!section) return; let raf=0
    const update = () => { raf=0; const rect=section.getBoundingClientRect(); const vh=window.innerHeight||1; const raw=Math.max(0,Math.min(1,(vh-rect.top)/(vh+rect.height)))
      if(bgRef.current){bgRef.current.style.setProperty("--py1",`${((raw-0.5)*70).toFixed(2)}px`);bgRef.current.style.setProperty("--py2",`${((raw-0.5)*-90).toFixed(2)}px`);bgRef.current.style.setProperty("--py3",`${((raw-0.5)*60).toFixed(2)}px`)} }
    const onScroll = () => { if(raf) return; raf=requestAnimationFrame(update) }
    window.addEventListener("scroll",onScroll,{passive:true}); window.addEventListener("resize",onScroll); update()
    return () => { window.removeEventListener("scroll",onScroll); window.removeEventListener("resize",onScroll); if(raf) cancelAnimationFrame(raf) }
  }, [])
  useEffect(() => { if(bgRef.current) bgRef.current.style.setProperty("--p",String(p)) }, [p])

  const { ref: hRef, visible: hV } = useInViewOnce()
  const { ref: gRef, visible: gV } = useInViewOnce({ rootMargin: "-10% 0px -10% 0px" })
  const cd = useMemo(() => [0,90,160,230], [])

  return (
    <section ref={sectionRef} id="workflow" className="relative mx-auto mt-20 max-w-screen-2xl px-4 lg:mt-28 lg:px-8 xl:px-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[32px]">
        <div ref={bgRef} className="absolute inset-0" style={{"--py1":"0px","--py2":"0px","--py3":"0px","--p":"0"}}>
          <div className="absolute -top-52 -left-52 h-[620px] w-[620px] rounded-full bg-blue-500/18 blur-[140px] animate-float" style={{transform:"translate3d(0,var(--py1),0) scale(calc(1+(var(--p)*0.03)))"}} />
          <div className="absolute -bottom-56 -right-56 h-[760px] w-[760px] rounded-full bg-purple-500/16 blur-[160px] animate-float2" style={{transform:"translate3d(0,var(--py2),0) scale(calc(1+(var(--p)*0.02)))"}} />
          <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[170px] animate-float" style={{transform:"translate3d(-50%,calc(-50%+var(--py3)),0) scale(calc(1+(var(--p)*0.015)))"}} />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(255,255,255,.02)_3px,rgba(255,255,255,.02)_6px)]" />
        </div>
      </div>

      <div ref={hRef} className={`relative mx-auto mb-10 max-w-5xl text-center transition-all duration-700 ease-out ${hV?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}>
        <div className="text-[12px] font-extrabold uppercase tracking-[.14em] text-white/70">Workflow</div>
        <h2 className="font-archivo mt-3 text-3xl font-black tracking-[-.02em] md:text-4xl text-white">
          Mehr Leads. Mehr Vertrauen.{" "}<span className="bg-gradient-to-br from-cyanAccent via-blueAccent to-purpleAccent bg-clip-text text-transparent">Mehr Umsatz.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm text-white/75 sm:text-base md:text-lg">
          DEZIGNX entwickelt moderne Websites, performante Kampagnen und starke Brand-Assets — datenbasiert, schnell und messbar. Alles aus einer Hand.
        </p>
      </div>

      <div ref={gRef} className="relative grid grid-cols-6 gap-6 lg:gap-9" style={{transform:`translate3d(0,${(p-0.5)*-14}px,0)`}}>
        <div className={`col-span-6 md:col-span-3 xl:col-span-2 transition-all duration-700 ease-out ${gV?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`} style={{transitionDelay:`${cd[0]}ms`}}>
          <Card className="group">
            <div className="relative aspect-[2/1] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-white/0 to-purple-500/10">
              <img src="https://www.smartmetrics.com.tr/assets/theme/media/radar.png" alt="Radar" className="absolute inset-0 h-full w-full object-contain opacity-95" loading="lazy" />
              <div className="absolute inset-0">
                {[{label:"Web",x:"18%",y:"34%",d:"0s"},{label:"Ads",x:"62%",y:"26%",d:".35s"},{label:"Fire",x:"44%",y:"68%",d:".7s"}].map(m=>(
                  <div key={m.label} className="absolute" style={{left:m.x,top:m.y}}>
                    <div className="flex items-center gap-2">
                      <span className="relative block h-2.5 w-2.5 rounded-full bg-cyanAccent shadow-[0_0_18px_rgba(34,211,238,.55)]" style={{animation:`beacon 1.7s ease-in-out ${m.d} infinite`}}>
                        <span className="absolute -inset-2 rounded-full border border-cyanAccent/35" style={{animation:`beaconRing 1.7s ease-in-out ${m.d} infinite`}} />
                      </span>
                      <span className="rounded-full border border-white/10 bg-black/35 px-2 py-1 text-[11px] font-medium text-white/85 backdrop-blur">{m.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <h5 className="text-lg font-semibold text-white lg:text-xl">Starke Marke, klare Strategie</h5>
              <p className="mt-2 text-sm text-white/70">Wir verbinden Positionierung, Design und Performance zu einem konsistenten Auftritt.</p>
            </div>
          </Card>
        </div>

        <div className={`col-span-6 md:col-span-3 xl:col-span-4 transition-all duration-700 ease-out ${gV?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`} style={{transitionDelay:`${cd[1]}ms`}}>
          <Card className="group">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="order-2 md:order-1 md:w-4/5">
                <h5 className="text-lg font-semibold text-white lg:text-xl">Briefing rein — Umsetzung schnell raus</h5>
                <p className="mt-2 text-sm text-white/70">Kurze Wege, klare Prozesse: Von Idee über Design bis Launch und Optimierung.</p>
              </div>
              <span className="order-1 w-fit rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 md:order-2">Rapid Delivery</span>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur xl:max-w-[520px]">
              <div className="flex items-center gap-3 text-xs text-white/75"><div className="h-7 w-7 rounded-full bg-gradient-to-br from-blueAccent to-purpleAccent" /><div className="font-medium">Kunde</div><span className="text-white/45">vor 12 Min.</span></div>
              <p className="mt-2 text-xs text-white/70">"Sieht super aus! Können wir die CTA noch stärker hervorheben?"</p>
              <div className="mt-4 flex items-center gap-3 text-xs text-white/75"><div className="h-7 w-7 rounded-full bg-[#111a3a] ring-1 ring-white/10" /><div className="font-medium">DEZIGNX</div><span className="text-white/45">vor 2 Min.</span></div>
              <p className="mt-2 text-xs text-white/70">"Erledigt. CTA optimiert, Kontrast erhöht — bitte einmal prüfen."</p>
            </div>
          </Card>
        </div>

        <div className={`col-span-6 xl:col-span-4 transition-all duration-700 ease-out ${gV?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`} style={{transitionDelay:`${cd[2]}ms`}}>
          <Card className="group">
            <h5 className="text-lg font-semibold text-white lg:text-xl">Maßgeschneiderte Entwicklung & Optimierung</h5>
            <p className="mt-2 text-sm text-white/70">Performance, SEO-Struktur und saubere Umsetzung — technisch stark und visuell premium.</p>
            <div className="mt-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4">
              <pre className="overflow-x-auto text-xs text-white/70">{`// DEZIGNX API-Integration
const campaign = await SmartAPI.create({
  name: 'Q4 Performance',
  budget: 25000,
  channels: ['google', 'meta'],
  targeting: CRMEngine.getAudience('high-value')
});`}</pre>
            </div>
          </Card>
        </div>

        <div className={`col-span-6 xl:col-span-2 transition-all duration-700 ease-out ${gV?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`} style={{transitionDelay:`${cd[3]}ms`}}>
          <Card className="group">
            <Marquee />
            <h5 className="mt-6 text-lg font-semibold text-white lg:text-xl">CRM & Lead-Flow Setup</h5>
            <p className="mt-2 text-sm text-white/70">Formulare → Tracking → CRM Übergabe. Damit aus Besuchern planbar Leads werden.</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
