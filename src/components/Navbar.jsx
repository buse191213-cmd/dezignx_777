import { useEffect, useMemo, useState } from "react"
import logo from "../assets/logo.png"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => open && setOpen(false)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [open])

  const links = useMemo(() => ([
    { href: "#leistungen", label: "Leistungen" },
    { href: "#workflow", label: "Workflow" },
    { href: "#projekte", label: "Projekte" },
    { href: "#ueber-uns", label: "Über uns" },
    { href: "#kontakt", label: "Kontakt" },
  ]), [])

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#070B18]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 md:px-6 py-0.5">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex items-center"><img src={logo} alt="DEZIGNX" className="w-28 h-auto object-contain" /></div>
        </a>
        <ul className="hidden items-center gap-5 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a className="group relative text-[14px] font-semibold text-white/70 hover:text-white transition" href={l.href}>
                {l.label}
                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-gradient-to-r from-cyanAccent to-purpleAccent transition-all duration-200 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a className="hidden md:inline-flex rounded-xl bg-gradient-to-br from-blueAccent to-purpleAccent px-4 py-2.5 text-[14px] font-bold text-white shadow-soft2 transition hover:-translate-y-0.5" href="#kontakt">
            Strategiegespräch buchen
          </a>
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:hidden" onClick={() => setOpen(v => !v)}>
            <div className="relative h-4 w-5">
              <span className={"absolute left-0 top-0 h-0.5 w-5 bg-white/80 transition " + (open ? "translate-y-[7px] rotate-45" : "")} />
              <span className={"absolute left-0 top-[7px] h-0.5 w-5 bg-white/80 transition " + (open ? "opacity-0" : "")} />
              <span className={"absolute left-0 top-[14px] h-0.5 w-5 bg-white/80 transition " + (open ? "-translate-y-[7px] -rotate-45" : "")} />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/8 bg-[#070B18]/95 backdrop-blur md:hidden">
          <div className="mx-auto max-w-6xl px-6 py-4 grid gap-2">
            {links.map((l) => (
              <a key={l.href} className="block rounded-xl bg-white/5 px-4 py-2.5 font-semibold text-white/90" href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a className="rounded-xl bg-gradient-to-br from-blueAccent to-purpleAccent px-4 py-2.5 text-center font-bold text-white" href="#kontakt" onClick={() => setOpen(false)}>Strategiegespräch buchen</a>
          </div>
        </div>
      )}
    </nav>
  )
}
