import { useEffect, useRef } from "react";

/**
 * Sets CSS vars on the target element:
 * --mx, --my in range [-1..1] (mouse position relative to center)
 */
export function useMouseParallaxVars(ref, { damp = 0.12 } = {}) {
  const raf = useRef(0);
  const target = useRef({ mx: 0, my: 0, tx: 0, ty: 0, damp });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;

      const mx = (e.clientX - cx) / (r.width / 2);
      const my = (e.clientY - cy) / (r.height / 2);

      target.current.mx = Math.max(-1, Math.min(1, mx));
      target.current.my = Math.max(-1, Math.min(1, my));

      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        raf.current = 0;
        // simple smoothing
        target.current.tx += (target.current.mx - target.current.tx) * target.current.damp;
        target.current.ty += (target.current.my - target.current.ty) * target.current.damp;

        el.style.setProperty("--mx", target.current.tx.toFixed(4));
        el.style.setProperty("--my", target.current.ty.toFixed(4));
      });
    };

    const onLeave = () => {
      target.current.mx = 0;
      target.current.my = 0;
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    // init
    el.style.setProperty("--mx", "0");
    el.style.setProperty("--my", "0");

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [ref, damp]);
}

/**
 * Sets CSS vars on the target element:
 * --sp in range [0..1] (scroll progress through element)
 */
export function useScrollProgressVars(ref, { rootOffset = 0 } = {}) {
  const raf = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const clamp01 = (n) => Math.max(0, Math.min(1, n));

    const update = () => {
      raf.current = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      // progress through viewport: 0 when top below bottom, 1 when bottom above top
      const p = clamp01((vh - (rect.top - rootOffset)) / (vh + rect.height));
      el.style.setProperty("--sp", p.toFixed(4));
    };

    const onScroll = () => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [ref, rootOffset]);
}
