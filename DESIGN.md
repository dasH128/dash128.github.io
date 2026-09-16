---
name: Jordy Rojas Aliaga — Portfolio
description: A confident, data-forward personal portfolio built in a hand-illustrated SaaS-landing register, applied to a person instead of a product.
colors:
  paper: "#f7f2e7"
  paper-dim: "#efe8d8"
  ink: "#15130f"
  ink-soft: "#4a463d"
  line: "rgba(21, 19, 15, 0.86)"
  green: "#2e7d32"
  green-ink: "#143d18"
  forest: "#2e5c43"
  forest-ink: "#eef4ee"
  burgundy: "#631f2a"
  burgundy-ink: "#f6e9ea"
  periwinkle: "#8890ee"
  periwinkle-ink: "#16123f"
  rust: "#b9481d"
  rust-ink: "#fbeee5"
  night: "#121009"
  night-ink: "#f4efe3"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, sans-serif"
    fontSize: "clamp(2.4rem, 5.2vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, sans-serif"
    fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  label:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
    letterSpacing: "0.02em"
  body:
    fontFamily: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "10px"
  md: "18px"
  lg: "28px"
  pill: "999px"
spacing:
  section: "clamp(4rem, 8vw, 7rem)"
  section-mobile: "clamp(3rem, 12vw, 4.5rem)"
  card-padding: "1.75rem"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.75em 1.5em"
  button-primary-hover:
    backgroundColor: "{colors.green}"
  card-forest:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.forest-ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-padding}"
  card-burgundy:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.burgundy-ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-padding}"
  nav-mark:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    size: "44px"
---

# Design System: Jordy Rojas Aliaga — Portfolio

## Overview

**Creative North Star: "The Evidence Ledger"**

The site treats "considering Jordy for a role" as a product decision, not a portfolio to browse. It borrows the confident, flat-color, hand-illustrated register of a SaaS landing page (the user's pinned reference, rothfinder.com) and applies it to a person: an off-white paper ground, oversized bold display type, black-outlined cards in saturated flat accent colors, and a stat ledger styled like a scoreboard. The only ornament is a set of thin, single-stroke hand-drawn squiggles that self-draw on load and on scroll — everything else is flat color, hard black-ish outlines, and rounded geometry.

The pinned reference used small-caps tracked eyebrow labels throughout; this build ships with none. That is a deliberate, reviewed craft-floor deviation (eyebrows are banned outright), not an oversight — do not reintroduce them to "match the reference" more closely.

**Key Characteristics:**
- Off-white paper ground with near-black ink and a near-black (not pure-black) outline color reused everywhere.
- Two shipped accent-card colors (forest, burgundy) out of four defined in tokens; periwinkle and rust exist as unused reserve tokens.
- One signature motion device: hand-drawn squiggle doodles that self-draw via `stroke-dasharray`/`stroke-dashoffset`.
- Scroll-triggered reveal (fade + rise) is scoped to the Hero only — not a generic section-enter treatment.
- Bricolage Grotesque for all display/heading/label text, Hanken Grotesk for body — chosen to avoid the Space Grotesk/DM Sans default pairing.

## Colors

Flat, saturated, and paired with near-black outlines rather than shadows-as-depth; light neutrals dominate, accents are used sparingly and only where evidence (projects, footer) needs to be set apart.

### Primary
- **Signal Green** (`#2e7d32`): the one primary-action color — CTA pill background, link-selection highlight, focus-ring color, and the hero ledger's outcome-stat highlight strip. Deliberately darkened from an earlier, brighter green (~`#3fa92e`) specifically to clear 4.5:1 contrast against white text; `#2e7d32` is the canonical, shipped value, not the brighter one recorded in the surface brief's original aspiration.

### Secondary
- **Deep Forest** (`#2e5c43`): background of the first project card (paired text `#eef4ee`).
- **Dark Burgundy** (`#631f2a`): background of the second project card (paired text `#f6e9ea`).

### Neutral
- **Paper** (`#f7f2e7`): page background.
- **Paper Dim** (`#efe8d8`): scrollbar track, subtle recess fill.
- **Ink** (`#15130f`): primary text and heading color.
- **Ink Soft** (`#4a463d`): secondary/supporting text (subheads, dates, captions).
- **Line** (`rgba(21, 19, 15, 0.86)`): the near-black outline used on every bordered surface — pills, cards, nav mark, table rules. Not pure black; carries a hint of warmth to sit against the paper ground.
- **Night** (`#121009`) / **Night Ink** (`#f4efe3`): the inverted footer/contact surface — the one place the page flips to a dark ground.

### Not shipped
- **Periwinkle** (`#8890ee`) and **Rust** (`#b9481d`) are defined as CSS custom properties (with paired ink tokens) but currently unused: the accent system was planned for four project-card colors, and only two real projects exist to card. Don't treat these as a mandate to invent two more project cards to "use up" the palette; they're a reserve for if a third and fourth real project are added later.

### Named Rules
**The Outline-Not-Shadow Rule.** Every bordered surface (pills, cards, tags, the nav mark) is defined primarily by a ~1.75px near-black outline (`--line`), not by shadow. Where a shadow is present (`--shadow-card`), it's a soft ambient lift under the whole card, never the thing that defines the edge.

## Typography

**Display Font:** Bricolage Grotesque (with Hanken Grotesk, sans-serif fallback)
**Body Font:** Hanken Grotesk (with system sans-serif fallback)

**Character:** A bold, slightly condensed geometric grotesk for anything that has to announce itself (headlines, stats, nav, tags, labels), paired with a warmer, more legible grotesk for anything meant to be read in paragraphs. The pairing replaced an initial Space Grotesk/DM Sans combination flagged as an overused AI-generated-site default.

### Hierarchy
- **Display** (700, `clamp(2.4rem, 5.2vw, 4.4rem)`, line-height 1.05): the hero headline only.
- **Title** (700, `clamp(1.8rem, 3.4vw, 2.6rem)`, line-height 1.15): section headings (Work, Experience, Stack).
- **Stat** (700, 2rem for the primary ledger stat / 1.4rem for the outcome highlight): the ledger and card outcome numbers, always Bricolage Grotesque even when body copy surrounds them.
- **Label** (600, 0.85–0.98rem, tracked slightly loose): nav links, pill/CTA text, card tags, section eyebrow-adjacent metadata (company/date lines) — always Bricolage Grotesque, never small-caps, never letter-spaced into an eyebrow pattern.
- **Body** (400, 17px base / 1.6 line-height, max-width 68ch): paragraph copy — subheads, project detail, experience descriptions.

### Named Rules
**The No-Eyebrow Rule.** No small-caps, letter-spaced-uppercase label sits above a heading anywhere in the build, even though the pinned visual reference uses them. This is a standing prohibition carried from the finish review, not a gap to fill in on the next surface.

## Layout

Single-column, section-stacked page (`Nav → Hero → Experience → Projects → Skills → Education → Contact`), each section wrapped in a centered `.wrap` container (`min(1180px, 100% - 3rem)`). Section vertical rhythm is generous and consistent: `padding-block: clamp(4rem, 8vw, 7rem)`, tightening to `clamp(3rem, 12vw, 4.5rem)` under 640px. Section-internal heads (title + optional subhead) cap at ~60–62ch and sit in a `flex-column` with `~0.9rem` gap, always followed by ~2.5–4rem of margin before the section body.

Hero uses a two-column grid (`minmax(0,1fr) minmax(280px,380px)`, gap `clamp(2.5rem,6vw,5rem)`) pairing copy against the stat ledger card, collapsing to one column under 880px. Experience and Skills use a repeating row list (`4.5rem`/`14rem` label column + flexible body column) with top/bottom hairline rules (`--line`, 1.75px) instead of card boundaries. Projects uses a 2-column card grid collapsing to 1 column under 780px. Education reuses the same hairline-rule row pattern as two parallel lists side by side (Education / Certifications, equal-width columns) rather than one continuous list, collapsing to stacked single columns under 780px. Contact/footer flips to a two-column grid (`minmax(0,1fr) minmax(220px,320px)`) that stacks under 720px.

## Elevation & Depth

Mostly flat with outline-as-structure; a single soft ambient shadow token (`--shadow-card: 0 14px 30px -14px rgba(21,19,15,0.35)`) lifts project cards and the hero ledger just enough to read as physical objects, not as a layering system. Depth is otherwise conveyed by flat color blocking (accent card backgrounds against the paper ground) and by a darkened overlay tint (`rgba(0,0,0,0.16)`) used for the card footer band, not by additional shadow steps.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 14px 30px -14px rgba(21, 19, 15, 0.35)`): applied to project cards and the hero ledger card; the only shadow in the system.
- **CTA glow** (`box-shadow: 0 10px 22px -12px var(--green-ink)`, intensifying slightly on hover): scoped to the primary pill button only, tinted to the green rather than neutral black.

### Named Rules
**The One-Shadow Rule.** There is exactly one ambient card shadow and one CTA-specific glow in the whole system. Don't add new shadow values for new components; reuse `--shadow-card` or state explicitly why a component needs the CTA glow instead.

## Shapes

Rounded-but-structured: three radius steps (`--radius-sm: 10px` for small marks like the nav initials and contact mark; `--radius-md: 18px` for the hero ledger card; `--radius-lg: 28px` for project cards) plus full-pill (`999px`) for every button, tag, and chip. Every rounded surface pairs its radius with the same ~1.75px near-black outline (`--stroke`/`--line`), so the outline — not the radius — is what reads as the system's signature edge.

## Components

### Buttons
- **Shape:** full pill (`border-radius: 999px`), outlined with `1.75px solid var(--line)` even on the filled primary variant.
- **Primary:** green fill (`#2e7d32`), white text, padding `0.75em 1.5em`, green-tinted shadow; lifts `translateY(-2px)` on hover, settles on active.
- **Secondary:** an underlined text link (`.link-underline`, 1.5px underline, 4px offset, weight 600) — no pill, no border. Used wherever a CTA needs a lower-emphasis sibling ("View my work", "LinkedIn").

### Chips / Tags
- **Style:** pill-shaped, `1–1.25px` outline in the current text color (so tags on a colored card outline in white-ish, tags on paper outline in ink), weight 600, small size (0.78–0.9rem).

### Cards / Containers
- **Corner Style:** 28px radius (project cards), 18px (hero ledger).
- **Background:** flat accent fill only for project cards (forest, burgundy); the hero ledger stays on-paper with an inset green highlight strip for the standout stat.
- **Shadow Strategy:** the single `--shadow-card` ambient lift (see Elevation).
- **Border:** 1.75px near-black outline on every card, no exceptions.
- **Internal Padding:** ~1.75rem horizontal, tiered vertical padding by zone (top icon row, body, footer band).

### Navigation
- Sticky top bar, translucent paper background (`color-mix` at 88% opacity) with backdrop blur, no bottom border at rest. Left: a square outlined initials mark ("JR", 44px, 10px radius). Center-right: inline text links, ink-soft at rest, ink on hover, no underline, no active-state treatment beyond the hover color shift. Right: the primary pill CTA at a slightly reduced size. On mobile, links wrap to a centered second row.

### Doodle (signature component)
The hand-drawn squiggle is the one true signature device: a single-stroke SVG path (4 variants — tangle, loop, flick, underline) that self-draws via `stroke-dasharray: 1` / `stroke-dashoffset` animated to 0 over 1.3s. Used sparse and low-opacity (0.5–0.55) scattered in the Hero's empty space, inside project cards as a muted corner accent, and as an underline flourish in the Contact footer. Respects `prefers-reduced-motion` by snapping to fully-drawn with no transition.

## Do's and Don'ts

### Do:
- **Do** pair every filled or bordered surface with the same `1.75px` near-black outline (`--line`) — it's the connective tissue between the paper, card, and pill components.
- **Do** keep the Doodle component sparse and low-opacity; it's an accent, not a pattern-fill.
- **Do** use Bricolage Grotesque for anything that functions as a label, stat, or heading, and Hanken Grotesk for anything read as a paragraph.
- **Do** scope the `.reveal` scroll-fade-and-rise treatment to the Hero's copy and ledger only; it is not a generic section-enter animation to apply everywhere.

### Don't:
- **Don't** add small-caps, tracked-uppercase eyebrow labels above headings anywhere, even though the pinned visual reference (rothfinder.com) uses them — this was banned by the finish review as a craft-floor default, not left out by accident.
- **Don't** introduce hard-offset (non-blurred) drop shadows; the system's only shadow is the soft ambient `--shadow-card` lift plus the tinted CTA glow.
- **Don't** treat the unused `--periwinkle` / `--rust` tokens as a mandate to invent additional project cards just to "use" the palette; add a third/fourth accent card only when a third/fourth real project exists.
- **Don't** reintroduce the brighter, pre-review green (~`#3fa92e`); `#2e7d32` is the canonical primary and exists specifically to clear white-text contrast.
