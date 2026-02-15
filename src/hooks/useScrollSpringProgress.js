import { useEffect, useRef, useState } from "react";

/**
 * Apple-ish scroll progress with "snap" spring easing.
 * Returns a smooth progress (0..1) for a section ref.
 */
export default function useScrollSpringProgress(sectionRef, config = {}) {
  const { stiffness = 0.09, damping = 0.82 } = config;

  const [p, setP] = useState(0);
  const target = useRef(0);
  const current = useRef(0);
  const velocity = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    const el = sectionRef?.current;
    if (!el) return;

    const clamp01 = (n) => Math.max(0, Math.min(1, n));

    const updateTarget = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      target.current = clamp01((vh - rect.top) / (vh + rect.height));
    };

    const tick = () => {
      raf.current = requestAnimationFrame(() => {
        raf.current = 0;

        // spring
        const x = current.current;
        const v = velocity.current;
        const t = target.current;

        const force = (t - x) * stiffness;
        const nv = (v + force) * damping;
        const nx = x + nv;

        velocity.current = nv;
        current.current = nx;
        setP(nx);

        // keep animating while there is motion
        if (Math.abs(t - nx) > 0.0006 || Math.abs(nv) > 0.0006) {
          tick();
        }
      });
    };

    const onScroll = () => {
      updateTarget();
      if (!raf.current) tick();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = 0;
    };
  }, [sectionRef, stiffness, damping]);

  return p;
}
