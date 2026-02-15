import { useEffect, useRef } from "react"
import Tilt from "./Tilt.jsx"
import MagneticButton from "./MagneticButton.jsx"
import { useMouseParallaxVars, useScrollProgressVars } from "../lib/motion.js"

export default function Hero() {
  const headerRef = useRef(null)
  const videoRef = useRef(null)
  useScrollProgressVars(headerRef, { rootOffset: 0 })
  useMouseParallaxVars(headerRef, { damp: 0.10 })

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.play().catch(() => {})
  }, [])

  return (
    <header ref={headerRef} id="top" className="relative min-h-[100svh] overflow-hidden bg-[linear-gradient(135deg,#0B1020,#0E1630)] pt-[84px]" style={{ "--sp": 0, "--mx": 0, "--my": 0 }}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center brightness-[.62] contrast-105 saturate-110 will-change-transform" style={{ backgroundImage: "url(/dezignx-hero-poster.png)", transform: "scale(calc(1.05 + (var(--sp) * 0.06))) translate3d(calc(var(--mx) * 10px), calc(var(--my) * 8px), 0)" }} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,16,32,.35)_0%,rgba(11,16,32,.72)_55%,rgba(11,16,32,.92)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,.02)_2px,rgba(255,255,255,.02)_4px)]" />
        <div className="pointer-events-none absolute -inset-40 opacity-90 blur-2xl will-change-transform" style={{ transform: "translate3d(calc(var(--mx)*26px),calc(var(--my)*18px),0) scale(calc(1 + (var(--sp)*0.10)))", background: "radial-gradient(circle_at_30%_20%,rgba(34,211,238,.25),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(124,58,237,.20),transparent_55%),radial-gradient(circle_at_50%_80%,rgba(37,99,235,.25),transparent_55%)" }} />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-9 py-9 md:gap-8 md:py-12 md:grid-cols-[1.05fr_.95fr]">
          <div className="animate-heroIn [animation-delay:60ms]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[12px] uppercase tracking-[.14em] text-white/90 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyanAccent shadow-[0_0_0_4px_rgba(34,211,238,.12)]" />
              Premium • Performance • Datenbasiert
            </div>

            <h1 className="font-archivo mt-5 text-[clamp(1.9rem,6.6vw,2.85rem)] sm:text-[clamp(2.1rem,5.4vw,3.35rem)] md:text-[clamp(2.35rem,3.7vw,4.15rem)] font-black leading-[1.05] tracking-[-.03em] text-white will-change-transform" style={{ transform: "translate3d(0, calc(var(--sp) * -18px), 0)" }}>
              Wir gestalten digitale{" "}
              <span className="bg-gradient-to-br from-cyanAccent via-blueAccent to-purpleAccent bg-clip-text text-transparent">Erlebnisse</span>
              , die Marken wachsen lassen.
            </h1>

            <p className="mt-4 max-w-[60ch] text-base leading-[1.85] text-white/85 md:text-[1.06rem] will-change-transform" style={{ transform: "translate3d(0, calc(var(--sp) * -10px), 0)" }}>
              DEZIGNX bietet mit über 15 Jahren Erfahrung und einem 30-köpfigen Expertenteam integrierte Marketinglösungen in den Bereichen digitale Werbung, Social Media, Webentwicklung und CRM.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 animate-heroIn [animation-delay:180ms]">
              <MagneticButton as="a" strength={16} className="group relative rounded-xl bg-gradient-to-br from-blueAccent to-purpleAccent px-5 py-3 font-extrabold text-white shadow-[0_18px_60px_rgba(37,99,235,.25)] transition hover:-translate-y-0.5" href="#kontakt">
                <span className="relative z-10">Strategiegespräch buchen</span>
                <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(circle_at_30%_20%,rgba(255,255,255,.25),transparent_60%)" }} />
              </MagneticButton>
              <MagneticButton as="a" strength={12} className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-extrabold text-white/95 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10" href="#projekte">
                Projekte ansehen
              </MagneticButton>
            </div>

            <div className="mt-6 animate-heroIn [animation-delay:240ms]">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-white/80 backdrop-blur">
                <span className="mr-1 font-extrabold text-white/85">Vertrauen von wachstumsorientierten Marken.</span>
                {[{ v: "120+", l: "Projekte" }, { v: "8+", l: "Jahre" }, { v: "98%", l: "Zufriedenheit" }].map((m) => (
                  <span key={m.l} className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[13px] font-semibold text-white/85">
                    <span className="font-black text-white">{m.v}</span>
                    <span className="text-white/70">{m.l}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 animate-heroIn [animation-delay:300ms]">
              {[
                { icon: "✓", title: "Klare Meilensteine", sub: "Fixe Timelines" },
                { icon: "⚡", title: "Schneller Start", sub: "Kickoff in 48h" },
                { icon: "🛡", title: "Saubere Umsetzung", sub: "Daten & Performance" },
              ].map((t) => (
                <div key={t.title} className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white/90 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10">
                  <div className="grid h-8 w-8 place-items-center rounded-xl border border-cyanAccent/25 bg-cyanAccent/15 font-black text-white/95">{t.icon}</div>
                  <div><div className="font-extrabold leading-tight">{t.title}</div><div className="-mt-0.5 text-[12px] text-white/70">{t.sub}</div></div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center mt-10 md:mt-0">
            <div className="absolute -inset-24 opacity-95 blur-xl [background:radial-gradient(circle_at_30%_20%,rgba(34,211,238,.25),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(124,58,237,.20),transparent_55%),radial-gradient(circle_at_50%_80%,rgba(37,99,235,.25),transparent_55%)]" style={{ transform: "translate3d(calc(var(--mx)*18px),calc(var(--my)*14px),0)" }} />
            <div className="will-change-transform" style={{ transform: "translate3d(0,calc(var(--sp)*-22px),0) scale(calc(1 - (var(--sp)*0.06)))" }}>
              <Tilt className="group" max={12}>
                <div className="iphone w-[min(300px,76vw)] md:w-[min(320px,90vw)]">
                  <div className="iphone-notch" />
                  <div className="iphone-side top-[110px] h-12" /><div className="iphone-side top-[170px] h-10" /><div className="iphone-side top-[218px] h-10" />
                  <div className="iphone-power top-[140px] h-14" />
                  <div className="iphone-screen">
                    <video ref={videoRef} muted loop playsInline preload="metadata" poster="/dezignx-hero-poster.png" className="h-full w-full object-cover">
                      <source src="/dezignx-hero.mp4" type="video/mp4" />
                    </video>
                    <div className="iphone-badge"><span className="iphone-badge-dot" />Werbung</div>
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
        </div>

        <div className="pb-10 animate-heroIn [animation-delay:440ms]">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-5 py-4 text-white/80 backdrop-blur">
            <span className="mr-1 font-extrabold text-white/80">Fokus:</span>
            {["Digitale Werbung", "Social Media", "Web & Mobile", "Produktion", "CRM & Analytics"].map((c) => (
              <span key={c} className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[13px] font-semibold text-white/85">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
