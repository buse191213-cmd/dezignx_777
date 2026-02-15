import React, { useRef } from "react";

/**
 * Magnetic hover interaction (works for <a> and <button>).
 * Usage:
 *   <MagneticButton as="a" href="#kontakt" className="...">...</MagneticButton>
 *   <MagneticButton onClick={...} className="...">...</MagneticButton>
 */
export default function MagneticButton({
  as = "button",
  strength = 18,
  className = "",
  children,
  ...props
}) {
  const ref = useRef(null);
  const Comp = as;

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);

    const dx = Math.max(-1, Math.min(1, x / (r.width / 2)));
    const dy = Math.max(-1, Math.min(1, y / (r.height / 2)));

    el.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate3d(0,0,0)";
  };

  return (
    <Comp
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={[
        "inline-flex items-center justify-center will-change-transform",
        "transition-transform duration-200 ease-out",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </Comp>
  );
}
