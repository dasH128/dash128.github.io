---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Surface brief: index (home / portfolio)

Scope: single-page personal portfolio (`src/pages/index.astro`), the whole site for now.
Visitor mode: Persuade — a recruiter, hiring manager, or prospective client decides Jordy is worth contacting and acts (email/LinkedIn).

Audience: recruiters and hiring managers screening fullstack/mobile engineers; secondary audience is prospective freelance clients.
Job: judge, in under a minute, whether Jordy is credible for a fullstack/mobile role, then find proof (real projects, real experience) and a way to reach him.
Action/task: read the headline claim, scan 1-2 real project cards and the experience timeline, click email or LinkedIn.
Proof/content: real CV facts only — 8+ years, Motorline/ITData/Holinsys/Clínica Climper roles, the Flutter production-monitoring app (20% fewer operational errors) and the native-widgets mobile app, real stack list, real education/certs. No invented employers, metrics, or testimonials.
Constraints: static Astro site, no CMS/backend, no UI framework installed. No image generation available in this session — code-led build, no comp round.

## Direction contract

THESIS: Treat "considering Jordy" like a product decision backed by evidence, not a portfolio to browse — the confident, data-forward, hand-illustrated SaaS-landing register (borrowed explicitly from the user-pinned reference, rothfinder.com) applied to a person instead of a product, refusing the category default of a muted dark-mode grid of project cards.

OWN-WORLD: Off-white/cream base (~#F7F3EC) with near-black ink (~#14120F). Oversized bold grotesk sans display type (e.g. Space Grotesk or similar geometric grotesk), small-caps tracked eyebrow labels, pill-shaped kelly-green primary CTA (~#3FA92E) with black outline, four saturated flat accent colors carried from the reference — forest green, burgundy, cornflower/periwinkle blue, burnt orange — each used as a full-bleed card background with a ~2px black outline, ~20px rounded corners, and one sparse hand-drawn squiggle-doodle accent (thin single-stroke SVG, not a photo). Data callouts styled as a ledger/scoreboard block (bold stat, small caption, black outline).

STORY: A recruiter lands, immediately reads Jordy as a fullstack/mobile engineer with 8+ years shipping production systems for real companies across 3 countries, sees two concrete real projects with real outcomes, scans a compact reverse-chronological experience/skills strip, and leaves via one clear contact action (email or LinkedIn), never wondering "is this a template."

FIRST VIEWPORT: Off-white ground. Slim top nav: wordmark/initials mark top-left; two pill links (e.g. "Work" / "Contact") plus a menu affordance top-right, echoing the reference's nav. Center: one large, confident, benefit-forward black headline about Jordy (not "Hi, I'm Jordy" — a claim, in the reference's register). One-line subhead, a green pill primary CTA (email/contact) plus a secondary text link ("View my work"). Sparse thin hand-drawn squiggle doodles scattered at low density in the empty space, never crowding the type. Bottom-right: a compact real-stat ledger card (years of experience, companies, the 20%-fewer-errors outcome) styled in the accent-color/black-outline language.

FORM: Direct pinned-world commitment — the user explicitly named https://rothfinder.com/ as the visual reference, so this skips the open-ended world-selection roll (concept-seed) that new-work.md reserves for undecided worlds. No seed key. Built as an Astro page composed from small components under `src/components/`, plain CSS (no framework dependency needed at this scale).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved decisions

- Exact two projects: mobile app (Motorline native Android/iOS widget integration) and production-monitoring / quality-control platform (Motorline Flutter desktop app, 20% fewer operational errors) — confirmed by user request.
- Contact surface: email (rojas71421@gmail.com, from CV) + LinkedIn (linkedin.com/in/dash128). Phone number withheld from public display by default (recruiters can request it) unless the user says otherwise.
- No plates/imagery beyond authored SVG squiggle doodles and icon glyphs; no photography implied by the reference's hero (this reference's early card visual was color-blocked stat data, not a photo).
