# Smartmetrics Premium — React + Tailwind CSS

İzmir merkezli dijital pazarlama ajansı. İki tasarım sisteminin en iyi özelliklerini birleştiren premium kurumsal site.

## Kurulum

```bash
npm install
npm run dev
```

## Özellikler

**Dezignx Premium'dan:**
- Mouse parallax & scroll progress hero efektleri
- 3D tilt kartlar (Bento Grid)
- Magnetic butonlar
- Parallax background orbs (float animasyonları)
- iPhone mockup with video
- Animated satisfaction bars
- Premium glassmorphism card design

**Smartmetrics'ten:**
- 3D kart fan (hover ile açılan hizmetler)
- Scroll-driven stacked project kartları
- Animated chart bars (dashboard)
- Turkish content & Smartmetrics branding
- WhatsApp & telefon integration

## Teknolojiler

- React 18 + Vite 6
- Tailwind CSS 3
- React Icons (FontAwesome 6)
- Custom hooks: useScrollSpringProgress, useInViewOnce
- Custom motion lib: mouse parallax, scroll progress CSS vars
- Archivo + Inter fonts

## Yapı

```
src/
├── App.jsx
├── index.css
├── main.jsx
├── assets/          # Logo, portfolio images
├── hooks/           # useScrollSpringProgress, useInViewOnce
├── lib/             # motion.js (parallax + scroll)
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx           # Parallax hero + iPhone mock
    ├── CardFan.jsx        # 3D perspective kart fan
    ├── Process.jsx        # 3 adım süreç kartları
    ├── BentoSection.jsx   # Premium bento grid workflow
    ├── Dashboard.jsx      # Metrik kartlar + chart
    ├── Projects.jsx       # Scroll-driven stacked cards
    ├── Satisfaction.jsx   # Animated bar charts + testimonials
    ├── About.jsx          # İstatistik kartları
    ├── Why.jsx            # 6 neden kartı
    ├── Contact.jsx        # İletişim formu
    ├── Footer.jsx         # Footer + sosyal medya
    ├── Tilt.jsx           # 3D tilt wrapper
    ├── MagneticButton.jsx # Magnetic hover effect
    └── Marquee.jsx        # Auto-scroll marquee
```
