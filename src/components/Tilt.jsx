import { useEffect, useRef } from "react";

export default function Tilt({ className = "", children, max = 10, glare = true }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let tx = 0, ty = 0;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;   // 0..1
      const py = (e.clientY - r.top) / r.height;  // 0..1
      const rx = (0.5 - py) * max;
      const ry = (px - 0.5) * max;

      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        tx = rx; ty = ry;
        el.style.setProperty("--rx", tx.toFixed(3));
        el.style.setProperty("--ry", ty.toFixed(3));
        el.style.setProperty("--gx", (px * 100).toFixed(2) + "%");
        el.style.setProperty("--gy", (py * 100).toFixed(2) + "%");
      });
    };

    const onLeave = () => {
      el.style.setProperty("--rx", "0");
      el.style.setProperty("--ry", "0");
      el.style.setProperty("--gx", "50%");
      el.style.setProperty("--gy", "50%");
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    onLeave();

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [max]);

  return (
    <div
      ref={ref}
      className={[
        "relative [perspective:1100px]",
        className,
      ].join(" ")}
      style={{ "--rx": 0, "--ry": 0, "--gx": "50%", "--gy": "50%" }}
    >
      <div
        className="relative will-change-transform transition-transform duration-300 ease-out"
        style={{ transform: "rotateX(calc(var(--rx) * 1deg)) rotateY(calc(var(--ry) * 1deg))" }}
      >
        {children}

        {glare ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at var(--gx) var(--gy), rgba(255,255,255,.20), transparent 55%)",
              mixBlendMode: "overlay",
            }}
          />
        ) : null}
      </div>
    </div>
  );
}
