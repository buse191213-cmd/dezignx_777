/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1020",
        navy2: "#0E1630",
        blueAccent: "#2563EB",
        purpleAccent: "#7C3AED",
        cyanAccent: "#22D3EE",
        brand: { purple: "#6c5ce7", violet: "#a855f7", lilac: "#c084fc" },
      },
      fontFamily: {
        archivo: ['"Archivo"', "system-ui", "sans-serif"],
        inter: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0,0,0,.25)",
        soft2: "0 14px 40px rgba(0,0,0,.18)",
      },
      keyframes: {
        heroIn: { "0%": { opacity: 0, transform: "translate3d(0,18px,0)" }, "100%": { opacity: 1, transform: "translate3d(0,0,0)" } },
        float: { "0%,100%": { transform: "translate3d(0,0,0) scale(1)" }, "50%": { transform: "translate3d(30px,-20px,0) scale(1.05)" } },
        float2: { "0%,100%": { transform: "translate3d(0,0,0) scale(1)" }, "50%": { transform: "translate3d(-26px,18px,0) scale(1.04)" } },
        marquee: { "0%": { transform: "translateX(0%)" }, "100%": { transform: "translateX(-50%)" } },
        shimmer: { "0%": { transform: "translateX(-60%)" }, "100%": { transform: "translateX(60%)" } },
        "bounce-x": { "0%,100%": { transform: "translateX(0)" }, "50%": { transform: "translateX(5px)" } },
        "rdot-pulse": { "0%,100%": { boxShadow: "0 0 0 0 rgba(108,92,231,0.5)" }, "50%": { boxShadow: "0 0 0 10px rgba(108,92,231,0)" } },
        beacon: { "0%,100%": { opacity: ".35", transform: "scale(.9)" }, "50%": { opacity: "1", transform: "scale(1.15)" } },
        beaconRing: { "0%": { opacity: "0", transform: "scale(.6)" }, "45%": { opacity: ".55", transform: "scale(1)" }, "100%": { opacity: "0", transform: "scale(1.6)" } },
        spot: { "0%,100%": { opacity: ".45" }, "50%": { opacity: ".9" } },
      },
      animation: {
        heroIn: "heroIn 800ms cubic-bezier(.2,.8,.2,1) both",
        float: "float 10s ease-in-out infinite",
        float2: "float2 12s ease-in-out infinite",
        marquee: "marquee 26s linear infinite",
        shimmer: "shimmer 5s ease-in-out infinite",
        "bounce-x": "bounce-x 2s ease infinite",
        "rdot-pulse": "rdot-pulse 2s ease infinite",
      },
    },
  },
  plugins: [],
}
