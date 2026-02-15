import { useMemo, useState } from "react"

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const options = useMemo(() => ([
    "High-Performance Website",
    "Landingpage (Paid Ads)",
    "Brand Identity",
    "Conversion & CRO",
    "Tracking & Analytics",
    "Noch unsicher / Beratung",
  ]), [])

  return (
    <section id="kontakt" className="bg-[linear-gradient(135deg,#0B1020,#0E1630)] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="text-[12px] font-extrabold uppercase tracking-[.14em] text-white/65">Kontakt</div>
          <h2 className="font-archivo mt-3 text-3xl font-black tracking-[-.02em] md:text-4xl">
            Strategiegespräch — klar, fokussiert, umsetzbar.
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-white/75">
            In 15–20 Minuten klären wir Ziel, Umfang und den schnellsten Weg zu Ergebnissen.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-white/12 bg-white/5 p-7 backdrop-blur">
            <h3 className="font-archivo text-xl font-black">DEZIGNX — Premium Partner</h3>
            <p className="mt-2 text-white/75">Wir liefern Ergebnisse statt Agentur-BlaBla. Sagen Sie uns, was Sie vorhaben — wir machen daraus einen klaren Plan.</p>
            <ul className="mt-5 grid gap-3">
              <li><a className="block rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition" href="mailto:info@dezignx.de"><div className="font-bold">E-Mail</div><div className="text-white/70">info@dezignx.de</div></a></li>
              <li><a className="block rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition" href="tel:++491606767001"><div className="font-bold">Telefon</div><div className="text-white/70">+49 160 6767001</div></a></li>
              <li><a className="block rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition" href="https://wa.me/+491606767001" target="_blank" rel="noreferrer"><div className="font-bold">WhatsApp</div><div className="text-white/70">Schnelle Nachricht senden</div></a></li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <a className="flex-1 rounded-xl bg-gradient-to-br from-blueAccent to-purpleAccent px-5 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5" href="#leadForm">Formular ausfüllen</a>
              <a className="flex-1 rounded-xl border border-white/18 bg-transparent px-5 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10" href="#leistungen">Leistungen</a>
            </div>
          </div>

          <div id="leadForm" className="rounded-3xl border border-white/12 bg-white/5 p-7 backdrop-blur">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="font-archivo text-xl font-black text-white/95">Angebotsanfrage</div>
                <div className="mt-1 text-white/70">Antwort in 24h • DSGVO-konform</div>
              </div>
              <a className="rounded-xl border border-white/18 bg-transparent px-4 py-2 text-sm font-bold text-white hover:bg-white/10" href="mailto:info@dezignx.de">Direkt per E-Mail</a>
            </div>

            {sent && !error && <div className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm text-emerald-100">✅ Gesendet! Wir melden uns schnell.</div>}
            {!!error && <div className="mt-5 rounded-2xl border border-red-300/20 bg-red-300/10 p-4 text-sm text-red-100">❌ Senden fehlgeschlagen. Bitte direkt an <span className="font-semibold">info@dezignx.de</span> schreiben.</div>}

            <form className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  const formData = new FormData(e.target);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Mail konnte nicht gesendet werden.");
    }

    setSent(true);
    e.target.reset();

  } catch (err) {
    setError("Beim Senden ist ein Fehler aufgetreten.");
  } finally {
    setLoading(false);
  }
}}>
              <div>
                <label className="text-sm font-semibold text-white/85">Name</label>
                <input name="name" required className="mt-2 w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyanAccent/50" placeholder="Max Mustermann" />
              </div>
              <div>
                <label className="text-sm font-semibold text-white/85">E-Mail</label>
                <input name="email" type="email" required className="mt-2 w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyanAccent/50" placeholder="max@firma.de" />
              </div>
              <div>
                <label className="text-sm font-semibold text-white/85">Leistung</label>
                <select name="service" className="mt-2 w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyanAccent/50">
                  {options.map(o => <option key={o} value={o} className="text-black">{o}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-white/85">Budget</label>
                <select name="budget" className="mt-2 w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyanAccent/50">
                  {["< 1.000€", "1.000–3.000€", "3.000–8.000€", "8.000€+", "Noch offen"].map(b => <option key={b} value={b} className="text-black">{b}</option>)}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-semibold text-white/85">Nachricht</label>
                <textarea name="message" required rows={5} className="mt-2 w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyanAccent/50" placeholder="Kurz beschreiben: Ziel, Branche, Deadline, Wunschseiten..." />
              </div>
              <div className="md:col-span-2">
                <button type="submit" disabled={loading} className="w-full rounded-2xl bg-gradient-to-br from-blueAccent to-purpleAccent px-6 py-4 text-center text-sm font-extrabold text-white transition hover:-translate-y-0.5 disabled:opacity-60">
                  {loading ? "Sende..." : "Anfrage senden"}
                </button>
                <div className="mt-3 text-xs text-white/60">Durch das Absenden erklären Sie sich mit der Verarbeitung Ihrer Daten zur Kontaktaufnahme einverstanden.</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
