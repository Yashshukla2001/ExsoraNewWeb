# COSMOQ — React + Vite Recreation

A premium, production-ready recreation of the COSMOQ marketing site (cosmoq.framer.website), rebuilt
with React, Vite, Tailwind CSS, Framer Motion, and React Three Fiber, based on a full analysis of the
live site and the supplied screen recording.

## Stack

- **React 18 + Vite** — fast dev server, component architecture
- **Tailwind CSS** — design tokens for color, type, spacing matching the COSMOQ palette
- **Framer Motion** — scroll reveals, tab/accordion/carousel transitions, magnetic buttons, custom cursor
- **React Three Fiber / Three.js** — lightweight particle field in the hero background
- **react-icons** — Heroicons (outline) + simple-icon style social marks

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Architecture

```
src/
  components/      Reusable UI: Navbar, Button, Reveal (scroll animation), CustomCursor,
                    ScrollToTop, GradientOrb, DashboardMock, Eyebrow
  sections/         One file per page section, composed in App.jsx
  three/            HeroParticles.jsx — R3F particle field
  index.css         Tailwind base + custom utilities (glass, gradients, scrollbar, noise overlay)
```

## Sections (in order)

1. **Navbar** — glassmorphic pill nav, condenses on scroll, mobile drawer
2. **Hero** — aurora gradient background, particle field, animated headline, dashboard mockup card
3. **Logo strip** — infinite marquee of partner wordmarks
4. **Statement** — large statement copy + rotating gradient sphere cycling industries
5. **Differentiators** — "What sets COSMOQ apart" 4-card grid (Speed, Deep capabilities, Scalability, Flexibility)
6. **Platform tabs** — "All-in-one AI for enterprise": Usage / Technology / Data tabbed panels
7. **Products** — "Multiple Products" pill tabs (Automation / Banking / Recruitment) + industries grid
8. **Steps** — "3 Steps to Kickstart" with animated progress indicator
9. **Security** — "Multi-Layer Security" feature list + visual panel
10. **Testimonials** — sliding carousel with photo + quote
11. **Pricing** — Monthly/Yearly toggle, Sonic / Supersonic / HyperSonic tiers
12. **FAQ** — two-column accordion
13. **Integration CTA** — animated connector icon grid with starburst accent
14. **Footer** — oversized gradient wordmark, 4-column nav, social links

## Notes on fidelity

- Color tokens (`#ffffff`, `#9ba9c4`, `#000000`, `#0c0f16`) and the orange→gold→blue accent gradient are
  defined as Tailwind theme extensions in `tailwind.config.js` so they're reusable across every section.
- Motion timing favors the original's smooth, premium easing (`[0.16, 1, 0.3, 1]`) with blur+fade scroll
  reveals, staggered card entrances, and spring-based magnetic buttons.
- The custom cursor only activates on fine-pointer/hover-capable devices and is fully removed on touch,
  so mobile retains native scrolling/tapping.
- All interactive sections (tabs, accordion, carousel, pricing toggle) are fully functional with keyboard-
  accessible buttons, `aria-expanded`/`aria-label` attributes, and visible focus states via Tailwind's
  default focus ring on interactive elements.
- Imagery is intentionally recreated as native CSS/SVG mockups (dashboard card, agent cards, sphere
  visuals) rather than external stock photos, so the project has zero external image dependencies and
  matches the product-illustration style of the source.

## Changelog — round 2 fixes

- **Footer**: removed the negative margin that caused the giant "COSMOQ" wordmark to overlap the
  Navigation/Documentation/Other Pages/Social Connect columns; wordmark now sits in its own scaled-in
  reveal with proper breathing room above the nav grid.
- **Hero background**: replaced the flat radial-gradient hero background with `AuroraBackground.jsx` —
  five blurred, independently-animated color beams (orange/gold/purple/cyan/blue) rising from the
  bottom edge and swaying continuously, matching the reference screenshot's aurora look, with a
  starfield dot-grid overlay.
- **Buttons**: split into a `primary` (solid orange→gold pill, used for the hero CTA) and a new `glow`
  variant (black fill with an animated multi-color gradient border, used for the nav's "Get Started"),
  matching the two distinct button styles seen in the reference.
- **Dashboard mock numbers/charts**: stat values now count up from 0 via `CountUp.jsx` when scrolled
  into view; the dual-line "Visitor Insights" chart draws itself in with an animated `pathLength`
  stroke, and the "Today's Sales" bar chart grows its bars from 0 height — nothing is a static image.
- **Statement section**: the large statement paragraph now uses a scroll-linked, per-word color/opacity
  fill (`useScroll` + `useTransform`) so text genuinely brightens from muted gray to white as you
  scroll through it, instead of a one-shot fade.
- **Platform tabs (Usage panel) & Products (automation cards)**: every progress bar (agent cards,
  "Blog generator"/"Banking Agent"/etc.) now animates its width in from 0% on scroll, staggered per
  card; checklist items slide in individually instead of appearing as static blocks.
- **3 Steps to Kickstart**: rewritten as a scroll-driven sticky section — the panel pins to the
  viewport for 300vh of scroll, and step 01 → 02 → 03 (plus each segment's progress bar) advances
  purely from scroll position, eliminating the overlapping-content bug from the click-only version.
- **Testimonials**: now autoplays every 5.5s (pauses on hover) with a visible progress bar, dot
  navigation, and uses real portrait photos (`i.pravatar.cc`, free-to-use placeholder headshots)
  instead of flat gradient blocks.
- **Scroll-to-top**: confirmed present in `App.jsx`, threshold lowered to 500px scroll for quicker
  appearance.


## Accessibility & performance

- Semantic landmarks (`header`, `main`, `section`, `footer`), heading hierarchy, and keyboard-operable
  controls throughout.
- `prefers-reduced-motion` is respected globally (animations collapse to near-instant).
- The hero particle field is lazy-loaded and capped at a modest device pixel ratio for smooth 60fps
  scroll performance.
