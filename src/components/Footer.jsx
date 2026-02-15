import { FaInstagram, FaLinkedinIn, FaYoutube, FaFacebookF, FaWhatsapp, FaPhone } from "react-icons/fa6"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[linear-gradient(135deg,#0B1020,#0E1630)] py-14 text-white border-t border-white/8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="font-archivo text-xl font-black">DEZIGNX</div>
            <p className="mt-2 text-white/70">Datenbasiertes, kreatives und umsatzorientiertes digitales Marketing — alles aus einer Hand.</p>
            <div className="flex gap-2.5 mt-4">
              {[
                { href: "https://www.instagram.com/dezignx.de/", icon: FaInstagram },
                { href: "https://www.linkedin.com/company/dezignx", icon: FaLinkedinIn },
                { href: "https://www.youtube.com/@dezignx", icon: FaYoutube },
                { href: "https://www.facebook.com/dezignx", icon: FaFacebookF },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg border border-white/10 grid place-items-center text-white/40 text-sm hover:border-white/25 hover:text-cyanAccent transition">
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-archivo text-sm font-black uppercase tracking-wider text-white/85">Leistungen</div>
            <ul className="mt-3 grid gap-2 text-white/70">
              {["Digitale Werbung", "Social Media", "Web & Mobile", "Produktion", "CRM & Analytics"].map(t => (
                <li key={t}><a className="hover:text-white transition" href="#leistungen">{t}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-archivo text-sm font-black uppercase tracking-wider text-white/85">Unternehmen</div>
            <ul className="mt-3 grid gap-2 text-white/70">
              <li><a className="hover:text-white transition" href="#projekte">Projekte</a></li>
              <li><a className="hover:text-white transition" href="#ueber-uns">Über uns</a></li>
              <li><a className="hover:text-white transition" href="#kontakt">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <div className="font-archivo text-sm font-black uppercase tracking-wider text-white/85">Kontakt</div>
            <ul className="mt-3 grid gap-2 text-white/70">
              <li><a className="hover:text-white transition" href="mailto:info@dezignx.de">info@dezignx.de</a></li>
              <li><a className="hover:text-white transition" href="tel:+491606767001">+49 160 6767001</a></li>
              <li><a className="hover:text-white transition" href="tel:++491606767001">+49 160 6767001</a></li>
              <li className="text-white/50 text-sm mt-1">Essen</li>
              <li className="text-white/50 text-sm">📍 Deutschland</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
          <div className="text-white/50 text-sm">© {year} DEZIGNX. Alle Rechte vorbehalten.</div>
          <div className="flex gap-2.5">
            <a href="https://wa.me/+491606767001" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 bg-[#25d366] text-white px-5 py-2 rounded-full text-xs font-semibold transition hover:opacity-90"><FaWhatsapp /> WhatsApp</a>
            <a href="tel:+491606767001" className="flex items-center gap-1.5 bg-white/5 text-white border border-white/10 px-5 py-2 rounded-full text-xs font-semibold transition hover:bg-white/10"><FaPhone /> Anrufen</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
