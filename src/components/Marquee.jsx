import React from "react";

export default function Marquee() {
  const images = [
    "https://r.resimlink.com/UNKIR.png",
    "https://r.resimlink.com/UNKIR.png",
    "https://r.resimlink.com/UNKIR.png",
    "https://r.resimlink.com/UNKIR.png",
  ];

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2">
      {/* edge fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#0B1020] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#0B1020] to-transparent" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...images, ...images].map((src, i) => (
          <div key={i} className="w-64 shrink-0 p-2">
            <img
              src={src}
              alt=""
              className="w-full rounded-lg border border-white/10 shadow-2xl transition duration-500 hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
