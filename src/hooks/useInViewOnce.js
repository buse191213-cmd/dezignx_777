import { useEffect, useRef, useState } from "react"

export default function useInViewOnce({ rootMargin = "-15% 0px -20% 0px" } = {}) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return
    const io = new IntersectionObserver(
      (entries) => { if (entries[0]?.isIntersecting) { setVisible(true); io.disconnect() } },
      { root: null, threshold: 0.15, rootMargin }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin, visible])

  return { ref, visible }
}
