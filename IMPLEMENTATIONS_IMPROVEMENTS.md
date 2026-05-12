# Frontend improvements — implementation plan

This document turns the prior frontend brainstorm into a **trackable implementation plan**. Check boxes as work completes. No backend scope unless noted as optional static content.

---

## How to use

- Work **top to bottom** within a phase, or parallelize by assignee where dependencies are low.
- Mark an item `[x]` when it is **merged and verified** (desktop + mobile smoke test).
- Add a short note or PR link in the **Notes** column at the bottom if helpful.

---

## Phase 1 — Navigation, mobile UX, and anchors

**Goal:** No dead ends on small screens; deep links match real sections.

| # | Task | Done |
|---|------|------|
| 1.1 | Add **mobile navigation** (e.g. hamburger + sheet/drawer, or equivalent) exposing the same links as desktop: Home / How It Works / Audit CTA (and any new section links you add). | [x] |
| 1.2 | Ensure a **persistent primary CTA** on mobile (e.g. sticky “Free audit” pill or prominent item in the mobile menu footer). | [x] |
| 1.3 | Audit every in-page target: add stable **`id` attributes** to major sections (e.g. ROI, live preview, security, testimonials, founders, audit, what’s next) so anchors are not brittle. | [x] |
| 1.4 | Update **Navbar** links to match those `id`s; keep labels short and scannable. | [x] |
| 1.5 | Optional: **Sticky sub-navigation** or compact “Jump to” for long-scroll pages (only if it does not clutter mobile). | [ ] |

**Verification checklist**

- [x] iPhone-sized viewport: all primary destinations reachable without guessing scroll position.
- [x] Keyboard: menu open/close trap focus appropriately; Esc closes overlay if applicable.
- [x] No broken `href="#..."` after renames.

---

## Phase 2 — Motion, accessibility, and comfort

**Goal:** Respect system preferences; reduce distraction; keep essential meaning out of motion-only channels.

| # | Task | Done |
|---|------|------|
| 2.1 | Implement **`prefers-reduced-motion`**: disable or simplify infinite loops (hero floats, orbit decor, marquee, parallax-heavy motion) per a documented rule set. | [ ] |
| 2.2 | **Credibility marquee:** slower default speed; **pause on hover** (and pause on focus within the strip if interactive); consider **static layout on small breakpoints** or single row without infinite scroll. | [ ] |
| 2.3 | Review **LiveAgentPreview** and other “demo” UIs: add appropriate **ARIA live regions** or sr-only summaries so updates are not silent for assistive tech (without over-announcing). | [ ] |
| 2.4 | **Focus visibility:** global focus ring styles for `a`, `button`, `input`, `textarea`, `select`, and menu items; ensure contrast on glass and dark backgrounds. | [ ] |
| 2.5 | Spot-check **color contrast** for `text-muted`, disabled states, and subtle borders (WCAG AA target for body copy where feasible). | [ ] |

**Verification checklist**

- [ ] macOS / Windows: enable “Reduce motion” — page remains usable and calm.
- [ ] Tab through navbar, mobile menu, forms, and footer links — focus always visible.
- [ ] Screen reader smoke test on hero + one interactive block + audit section.

---

## Phase 3 — Trust, credibility, and footer polish

**Goal:** Replace placeholder feel with intentional trust signals; footer reflects reality.

| # | Task | Done |
|---|------|------|
| 3.1 | **Credibility band:** replace or supplement word-only ticker with one of: logo grid, “works with” icons, client **types** (e.g. SaaS, agencies), or **static metric chips** (only claims you can defend). | [ ] |
| 3.2 | Align **gradient / edge fades** in the marquee (or successor component) with the actual page background token so seams are invisible. | [ ] |
| 3.3 | **Footer:** update copyright year; replace `href="#"` with real URLs or remove/hide **Privacy**, **Terms**, **LinkedIn** until URLs exist (avoid dead links). | [ ] |
| 3.4 | Copy pass: add **qualifiers** or **example outcomes** near bold claims (e.g. “50% of operations,” “zero human”) — static copy and layout only. | [ ] |

**Verification checklist**

- [ ] No obvious placeholder links in footer or nav.
- [ ] Credibility section reads as deliberate, not stock.

---

## Phase 4 — Layout rhythm, consistency, and CTAs

**Goal:** Clear visual hierarchy down the page; consistent widths; stronger conversion path.

| # | Task | Done |
|---|------|------|
| 4.1 | Standardize **max width** utilities (`max-w-7xl` vs `container`) across sections for consistent alignment. | [ ] |
| 4.2 | Introduce **1–2 intentional layout breaks** (e.g. full-bleed band, asymmetric split, or single high-contrast strip) to break monotony without a full rebrand. | [ ] |
| 4.3 | **Hero:** add optional **secondary CTA** (text or ghost button) scrolling to `HowItWorks` or `LiveAgentPreview` for users not ready to audit. | [ ] |
| 4.4 | **Final CTA:** add **micro-copy** under the button (e.g. what happens next, typical response window) — static text. | [ ] |

**Verification checklist**

- [ ] Scroll the full page: rhythm feels varied, not “same section repeated.”
- [ ] Linter / design pass: no accidental horizontal overflow at common breakpoints.

---

## Phase 5 — SEO, sharing, and performance hygiene (frontend-only)

**Goal:** Better discoverability and share cards; fewer layout surprises.

| # | Task | Done |
|---|------|------|
| 5.1 | Expand **`metadata`** (title, description, canonical if applicable) and add **Open Graph** + **Twitter** card fields (`openGraph`, `twitter`). | [ ] |
| 5.2 | Add or commission a default **`og:image`** (static asset, correct dimensions). | [ ] |
| 5.3 | Add **JSON-LD** (`Organization` and/or `ProfessionalService`) in layout or page — static, valid JSON. | [ ] |
| 5.4 | **Font / CLS:** confirm heading and body sizes do not jump after font load; adjust with font `display`, size fallbacks, or min-heights where needed. | [ ] |
| 5.5 | Optional: **lazy-load** or defer heavy below-the-fold client sections if bundle or TTI warrants it (measure first). | [ ] |

**Verification checklist**

- [ ] [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) or equivalent: OG fields resolve (when deployed).
- [ ] Lighthouse (or similar): no regressions on CLS; document before/after if optimizing.

---

## Phase 6 — Final QA pass

**Cross-cutting checklist**

- [ ] All phases above: spot-check **375 / 768 / 1280** px widths.
- [ ] **Reduced motion** + default motion both acceptable.
- [ ] No console errors in dev for happy-path navigation.
- [ ] Quick **accessibility** pass: headings in logical order, one `h1` per page, labels on form controls in `AuditSection` / any forms.

---

## Progress summary

| Phase | Description | Status |
|-------|-------------|--------|
| 1 | Navigation, mobile UX, anchors | [ ] Not started / [ ] In progress / [x] Done |
| 2 | Motion, a11y, comfort | [ ] |
| 3 | Trust, credibility, footer | [ ] |
| 4 | Layout rhythm, CTAs | [ ] |
| 5 | SEO, OG, JSON-LD, CLS | [ ] |
| 6 | Final QA | [ ] |

---

## Notes (optional)

| Date | Note |
|------|------|
| | |

---

*End of plan.*
