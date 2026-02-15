import { useState, useEffect } from "react"

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [prefs, setPrefs] = useState({ analyse: true, marketing: true })

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(t)
  }, [])

  const accept = () => setVisible(false)
  const reject = () => { setPrefs({ analyse: false, marketing: false }); setVisible(false) }
  const saveSettings = () => setVisible(false)

  if (!visible) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[998] bg-black/40 backdrop-blur-sm transition-opacity duration-500" onClick={accept} />

      {/* Banner */}
      <div className="fixed bottom-0 inset-x-0 z-[999] px-4 pb-4 animate-[slideUp_.5s_ease-out]">
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/12 bg-[#0C1430]/95 p-6 backdrop-blur-xl shadow-[0_-20px_80px_rgba(0,0,0,.5)]">

          {/* Main view */}
          {!showSettings && (
            <>
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-0.5 text-2xl">🍪</div>
                <div>
                  <h3 className="font-archivo text-base font-bold text-white">Akzeptieren Sie Cookies?</h3>
                  <p className="mt-1.5 text-sm text-white/55 leading-relaxed">
                    Wir verwenden notwendige sowie — mit Ihrer Einwilligung — Analyse- und Marketing-Cookies, um Ihr Nutzungserlebnis zu verbessern. Details:{" "}
                    <a href="#datenschutz" className="underline underline-offset-2 text-white/70 hover:text-white transition">Datenschutzerklärung</a>,{" "}
                    <a href="#impressum" className="underline underline-offset-2 text-white/70 hover:text-white transition">Impressum</a>.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <button onClick={accept}
                  className="rounded-xl bg-gradient-to-br from-blueAccent to-purpleAccent px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,99,235,.3)]">
                  Akzeptieren
                </button>
                <button onClick={reject}
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold text-white/80 transition hover:-translate-y-0.5 hover:bg-white/10">
                  Ablehnen
                </button>
                <button onClick={() => setShowSettings(true)}
                  className="rounded-xl border border-white/10 bg-transparent px-5 py-2.5 text-sm font-semibold text-white/50 transition hover:text-white/80 hover:border-white/20">
                  Einstellungen
                </button>
              </div>
            </>
          )}

          {/* Settings view */}
          {showSettings && (
            <>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-archivo text-base font-bold text-white">Cookie-Einstellungen</h3>
                <button onClick={() => setShowSettings(false)} className="text-white/40 hover:text-white transition text-lg">✕</button>
              </div>

              <div className="grid gap-3">
                {/* Necessary - always on */}
                <div className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3">
                  <div>
                    <div className="text-sm font-semibold text-white/90">Notwendig</div>
                    <div className="text-xs text-white/40 mt-0.5">Für den Betrieb der Website erforderlich</div>
                  </div>
                  <div className="w-11 h-6 rounded-full bg-emerald-500/30 flex items-center justify-end px-0.5 cursor-not-allowed">
                    <div className="w-5 h-5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.4)]" />
                  </div>
                </div>

                {/* Analyse */}
                <div className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3">
                  <div>
                    <div className="text-sm font-semibold text-white/90">Analyse</div>
                    <div className="text-xs text-white/40 mt-0.5">Hilft uns, die Nutzung zu verstehen</div>
                  </div>
                  <button
                    onClick={() => setPrefs(p => ({ ...p, analyse: !p.analyse }))}
                    className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-all duration-300 cursor-pointer ${prefs.analyse ? "bg-blueAccent/40 justify-end" : "bg-white/10 justify-start"}`}>
                    <div className={`w-5 h-5 rounded-full transition-all duration-300 ${prefs.analyse ? "bg-blueAccent shadow-[0_0_8px_rgba(37,99,235,.4)]" : "bg-white/30"}`} />
                  </button>
                </div>

                {/* Marketing */}
                <div className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3">
                  <div>
                    <div className="text-sm font-semibold text-white/90">Marketing</div>
                    <div className="text-xs text-white/40 mt-0.5">Ermöglicht personalisierte Werbung</div>
                  </div>
                  <button
                    onClick={() => setPrefs(p => ({ ...p, marketing: !p.marketing }))}
                    className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-all duration-300 cursor-pointer ${prefs.marketing ? "bg-purpleAccent/40 justify-end" : "bg-white/10 justify-start"}`}>
                    <div className={`w-5 h-5 rounded-full transition-all duration-300 ${prefs.marketing ? "bg-purpleAccent shadow-[0_0_8px_rgba(124,58,237,.4)]" : "bg-white/30"}`} />
                  </button>
                </div>
              </div>

              <div className="mt-4 flex gap-2.5">
                <button onClick={saveSettings}
                  className="flex-1 rounded-xl bg-gradient-to-br from-blueAccent to-purpleAccent px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5">
                  Einstellungen speichern
                </button>
                <button onClick={accept}
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold text-white/80 transition hover:-translate-y-0.5 hover:bg-white/10">
                  Alle akzeptieren
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
