import { useEffect, useRef, useState } from "react"

const features = [
  {
    title: "Online-Transaktionen & Zahlungen",
    desc: "Neben Ihrem vereinbarten Zahlungsanbieter können Sie mit Google Pay oder Apple Pay Ihren Nutzern noch mehr Optionen bieten.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 22 22" fill="none"><path d="M1 9.889H7.667M12.111 11l1.211 1.389 2.123-2.778M2.111 5.444H7.667v11.112H2.111A1.111 1.111 0 011 15.444V6.556c0-.295.117-.577.325-.786a1.11 1.11 0 01.786-.326z" stroke="#969AB0" strokeOpacity=".6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 19.889V2.111C21 1.498 20.498 1 19.889 1H8.778C8.164 1 7.667 1.498 7.667 2.111v17.778c0 .614.497 1.111 1.111 1.111h11.111c.614 0 1.111-.497 1.111-1.111zM12.667 3.222H16l.556-2.222h-4.445l.556 2.222z" stroke="#969AB0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: "Professionelles Interface-Design",
    desc: "Moderne und intuitive Oberflächen, die das Nutzererlebnis maximieren und den Markenwert Ihrer App steigern.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 24" fill="none"><path d="M18.725 20.209c-2.038-2.035-3.443-3.155-4.322-3.76-.71-.49-1.586-.41-2.248.145-.771.646-2.015 1.765-3.905 3.656a84 84 0 01-2.109 2.172M4.5 8.5h11M4.5 5.25h6M7 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" stroke="#969AB0" strokeOpacity=".6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 12c0-3.686-.119-6.262-.232-7.876C18.68 2.849 17.728 1.855 16.455 1.743 15.06 1.62 12.943 1.5 10 1.5S4.94 1.62 3.545 1.743C2.272 1.855 1.32 2.849 1.232 4.124 1.119 5.738 1 8.314 1 12s.119 6.262.232 7.876c.088 1.275 1.04 2.27 2.313 2.381C4.94 22.38 7.058 22.5 10 22.5s5.06-.12 6.455-.243c1.273-.112 2.225-1.106 2.313-2.381C18.881 18.262 19 15.686 19 12zM19 12H1" stroke="#969AB0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: "Nutzerzentrierte Anwendungen",
    desc: "Mit nutzerzentriertem Ansatz entwickelte Apps sorgen für hohe Interaktion, Geschwindigkeit und Zufriedenheit.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 22 22" fill="none"><path d="M9.948 13.633H5.211a4.211 4.211 0 00-4.211 4.211v2.105" stroke="#969AB0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M21.002 13.764c0 .593-.236 1.162-.655 1.581l-4.224 4.22a2.234 2.234 0 01-.9.533l-3.02.881a.56.56 0 01-.702-.697l.881-3.022c.1-.34.283-.649.533-.9l4.221-4.223a2.234 2.234 0 013.166 0c.419.42.655.988.655 1.581v.046z" stroke="#969AB0" strokeOpacity=".6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.369 9.422a4.211 4.211 0 100-8.422 4.211 4.211 0 000 8.422z" stroke="#969AB0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: "Mobiles CRM-Management",
    desc: "Maßgeschneiderte CRM-Systeme ermöglichen Ihnen, Kundendaten effektiv zu verwalten und Vertriebsprozesse zu optimieren.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 22 22" fill="none"><path d="M20.231 10.231h-6.154a.77.77 0 00-.77.769v9.231c0 .425.345.769.77.769h6.154a.77.77 0 00.769-.77V11a.77.77 0 00-.77-.769zM7.923 1H1.77A.77.77 0 001 1.77V11c0 .425.345.769.77.769h6.153A.77.77 0 008.692 11V1.77A.77.77 0 007.923 1z" stroke="#969AB0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.077 1h6.154c.425 0 .769.345.769.77v3.092a.77.77 0 01-.77.769h-6.153a.77.77 0 01-.77-.77V1.77c0-.425.345-.769.77-.769z" stroke="#969AB0" strokeOpacity=".6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M1.77 16.369h6.153a.77.77 0 01.769.77v3.092a.77.77 0 01-.77.769H1.77A.77.77 0 011 20.231v-3.093c0-.425.345-.769.77-.769z" stroke="#969AB0" strokeOpacity=".6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
]

/* Animated SVG icon border used by the original site */
function IconBox({ children }) {
  return (
    <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
      <svg className="w-full h-full absolute inset-0 animate-pulse opacity-50" viewBox="0 0 56 56" fill="none">
        <rect x="0.5" y="0.5" width="55" height="55" rx="13.5" stroke="white" strokeOpacity="0.16"/>
        <path d="M28.5 55.5L14.5 55.5C6.768 55.5.5 49.232.5 41.5L.5 27.5" stroke="url(#pA)" strokeOpacity="0.32"/>
        <path d="M27.5.5H41.5C49.232.5 55.5 6.768 55.5 14.5V28.5" stroke="url(#pB)" strokeOpacity="0.32"/>
        <defs>
          <linearGradient id="pA" x1="0" y1="28" x2="29" y2="56" gradientUnits="userSpaceOnUse"><stop stopColor="white" stopOpacity="0"/><stop offset=".5" stopColor="white"/><stop offset="1" stopColor="white" stopOpacity="0"/></linearGradient>
          <linearGradient id="pB" x1="28" y1="1" x2="56" y2="29" gradientUnits="userSpaceOnUse"><stop stopColor="white" stopOpacity="0"/><stop offset=".5" stopColor="white"/><stop offset="1" stopColor="white" stopOpacity="0"/></linearGradient>
        </defs>
      </svg>
      <div className="w-11 h-11 rounded-lg bg-[radial-gradient(circle,rgba(255,255,255,.16),rgba(255,255,255,.08))] flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}

/* Feature card with mouse-follow glow */
function FeatureCard({ feature, style, className = "" }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current; if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty("--mouse-x", `${e.clientX - r.left}px`)
    el.style.setProperty("--mouse-y", `${e.clientY - r.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`group relative overflow-hidden rounded-2xl bg-[#282D46] p-[1.5px] will-change-transform
        before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-blue-500/40 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:blur-[100px] before:z-10
        hover:before:opacity-100 ${className}`}
      style={{ "--mouse-x": "50%", "--mouse-y": "50%", ...style }}
    >
      <div className="p-6 lg:p-7 relative h-full bg-[#0C1430] rounded-[inherit] z-20 overflow-hidden">
        {/* Corner accent lines */}
        <div className="absolute top-[56px] left-[86px] w-2/3 h-px bg-gradient-to-r from-white/[0.16]" />
        <div className="absolute left-[28px] top-0 w-px h-7 bg-gradient-to-t from-white/[0.16]" />
        <div className="absolute left-0 top-[56px] w-7 h-px bg-gradient-to-l from-white/[0.16]" />

        <div className="flex items-center gap-3">
          <IconBox>{feature.icon}</IconBox>
          <span className="text-base font-semibold text-white/90">{feature.title}</span>
        </div>
        <p className="mt-3 text-sm text-white/50 leading-relaxed">{feature.desc}</p>
      </div>
    </div>
  )
}

/* Clamp helper */
function clamp(v, min = 0, max = 1) { return Math.max(min, Math.min(max, v)) }
/* Map a value from one range to 0..1 */
function remap(v, inMin, inMax) { return clamp((v - inMin) / (inMax - inMin)) }

export default function MobileApp() {
  const wrapRef = useRef(null)
  const videoRef = useRef(null)
  const bgVideoRef = useRef(null)
  const [s, setS] = useState({
    // Phase progress values (0..1)
    phoneFan: 1,     // 1 = fanned out, 0 = stacked behind center
    cardReveal: 0,   // 0 = hidden, 1 = fully visible
    titleOp: 1,      // title opacity
    phoneScale: 1,   // center phone scale
  })

  useEffect(() => {
    const v = videoRef.current; if (v) v.play().catch(() => {})
    const bv = bgVideoRef.current; if (bv) bv.play().catch(() => {})
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const w = wrapRef.current; if (!w) return
      const rect = w.getBoundingClientRect()
      const totalScroll = w.offsetHeight - window.innerHeight
      if (totalScroll <= 0) return
      const rawP = clamp(-rect.top / totalScroll)

      // Timeline:
      // 0.00 - 0.15 : phones fanned, title visible (initial view)
      // 0.15 - 0.40 : side phones retract, title fades, center phone scales up
      // 0.40 - 0.70 : cards slide in from sides
      // 0.70 - 1.00 : hold / scroll out

      setS({
        phoneFan: 1 - remap(rawP, 0.10, 0.40),
        cardReveal: remap(rawP, 0.30, 0.60),
        titleOp: 1 - remap(rawP, 0.05, 0.25),
        phoneScale: 1 + remap(rawP, 0.15, 0.45) * 0.08,
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Derived values for side phones
  const leftRotate = -15 * s.phoneFan
  const rightRotate = 15 * s.phoneFan
  const sideTranslateX = 160 * s.phoneFan  // px
  const sideScale = 0.9
  const sideOpacity = 0.3 + 0.7 * s.phoneFan

  // Derived values for cards
  const cardLeftX = -80 * (1 - s.cardReveal)     // slides from left
  const cardRightX = 80 * (1 - s.cardReveal)     // slides from right
  const cardOp = s.cardReveal

  return (
    <section className="relative" style={{ background: "linear-gradient(135deg,#0B1020,#0E1630)" }}>
      <div ref={wrapRef} className="h-[280vh] relative max-sm:h-[220vh]">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

          {/* Background video (radial masked) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] lg:w-[1200px] -z-10 opacity-60 pointer-events-none"
            style={{ maskImage: "radial-gradient(50% 50%, black 30%, transparent 70%)" }}>
            <video ref={bgVideoRef} muted playsInline loop preload="auto" className="w-full h-full opacity-80">
              <source src="https://www.smartmetrics.com.tr/assets/theme/media/output.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Ambient glow */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blueAccent/10 blur-[180px] -z-10" />
          {/* Scanlines */}
          <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(255,255,255,.02)_3px,rgba(255,255,255,.02)_6px)] -z-10" />

          {/* Title - fades out on scroll */}
          <div className="text-center mb-8 px-6 z-10" style={{ opacity: s.titleOp, transform: `translateY(${(1 - s.titleOp) * -30}px)` }}>
            <h2 className="font-archivo text-2xl md:text-4xl font-black tracking-[-.02em] text-white">
              Marketing-Metriken für{" "}
              <span className="bg-gradient-to-br from-cyanAccent via-blueAccent to-purpleAccent bg-clip-text text-transparent">qualifiziertere Leads</span>
              {" "}optimieren.
            </h2>
          </div>

          {/* Phone + Cards container */}
          <div className="relative flex items-center justify-center w-full max-w-6xl px-6">

            {/* Left cards column */}
            <div className="hidden md:flex flex-col gap-4 w-[340px] lg:w-[380px] shrink-0 z-20"
              style={{ opacity: cardOp, transform: `translateX(${cardLeftX}px)` }}>
              <FeatureCard feature={features[0]} />
              <FeatureCard feature={features[1]} />
            </div>

            {/* Phones group */}
            <div className="relative mx-4 lg:mx-8 shrink-0" style={{ width: "260px" }}>

              {/* Left phone */}
              <div className="absolute -z-10 bottom-0 left-1/2 will-change-transform"
                style={{
                  transform: `translateX(calc(-50% - ${sideTranslateX}px)) rotate(${leftRotate}deg) scale(${sideScale})`,
                  opacity: sideOpacity,
                  transformOrigin: "bottom right",
                  transition: "none",
                }}>
                <div className="relative w-[220px]">
                  <img src="https://www.smartmetrics.com.tr/assets/theme/media/iphone.png" className="w-full" alt="" />
                  <img src="https://r.resimlink.com/k2V7Xt.png" className="absolute inset-0 w-full h-full object-cover object-top -z-10 rounded-[40px] px-4 py-3" alt="" />
                </div>
              </div>

              {/* Right phone */}
              <div className="absolute -z-10 bottom-0 left-1/2 will-change-transform"
                style={{
                  transform: `translateX(calc(-50% + ${sideTranslateX}px)) rotate(${rightRotate}deg) scale(${sideScale})`,
                  opacity: sideOpacity,
                  transformOrigin: "bottom left",
                  transition: "none",
                }}>
                <div className="relative w-[220px]">
                  <img src="https://www.smartmetrics.com.tr/assets/theme/media/iphone.png" className="w-full" alt="" />
                  <img src="https://r.resimlink.com/03Otfa.png" className="absolute inset-0 w-full h-full object-cover object-top -z-10 rounded-[40px] px-4 py-3" alt="" />
                </div>
              </div>

              {/* Center phone */}
              <div className="relative z-10 will-change-transform"
                style={{ transform: `scale(${s.phoneScale})` }}>
                <img src="https://www.smartmetrics.com.tr/assets/theme/media/iphone.png" className="w-full" alt="" />
                <video ref={videoRef} autoPlay muted playsInline loop
                  src="https://www.smartmetrics.com.tr/assets/mobile-app-video.mp4"
                  className="absolute inset-0 w-full h-full object-cover -z-10 rounded-[40px] p-2" />
              </div>
            </div>

            {/* Right cards column */}
            <div className="hidden md:flex flex-col gap-4 w-[340px] lg:w-[380px] shrink-0 z-20"
              style={{ opacity: cardOp, transform: `translateX(${cardRightX}px)` }}>
              <FeatureCard feature={features[2]} />
              <FeatureCard feature={features[3]} />
            </div>
          </div>

          {/* Mobile cards (stacked below on small screens) */}
          <div className="md:hidden grid grid-cols-1 gap-4 mt-8 px-6 w-full max-w-md"
            style={{ opacity: cardOp, transform: `translateY(${40 * (1 - s.cardReveal)}px)` }}>
            {features.map((f, i) => <FeatureCard key={i} feature={f} />)}
          </div>

        </div>
      </div>
    </section>
  )
}
