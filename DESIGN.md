---
name: Jordy Rojas Aliaga — Portfolio
description: A typographic, confident personal portfolio. Oversized condensed type, paper and ink, one azulejo blue, and a few theatrical moments.
colors:
  paper: "#f4f1e8"
  paper-dim: "#e8e3d4"
  ink: "#14130f"
  ink-soft: "#5a564c"
  blue: "#2342e8"
  blue-on-ink: "#8a99ff"
typography:
  display:
    fontFamily: "Anton, Impact, Arial Narrow, sans-serif"
    textTransform: uppercase
    lineHeight: 0.92-0.98
  body:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    lineHeight: 1.6
  mono:
    fontFamily: "Geist Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.78rem"
    textTransform: uppercase
    letterSpacing: "0.05em"
rounded:
  none: "0"
spacing:
  section: "clamp(4rem, 9vw, 8rem)"
  gutter: "clamp(1.25rem, 4vw, 3rem)"
  rule: "1.5px"
---

# Design System: Jordy Rojas Aliaga — Portfolio

## Direction change in progress (decided 2026-11-26)

The system is moving toward the softer, more playful prototype in `resource/portfolio/`: illustrated collages, rounded cards and pills, soft shadows, a handwriting accent font (`Nothing You Could Do`), tilted cards, and a Lima ↔ Porto narrative. Where this section conflicts with the rules below ("square corners", "hard-offset shadows only", "no pills"), this section wins, and the older rule is updated when the piece it governs is migrated. It is done piece by piece, not all at once.

Constraints that do NOT change: one blue accent (the prototype's green Portugal stamp is out), all copy in `content.ts` for every language in `langs` (today `es` and `en`), no scroll-jacking, no page-transition curtain on every click, intro only on first visit and skippable.

Migrated so far:
- Nav (`Nav.astro`): handwritten `jordy.` logo (`--font-hand`), links in one outlined pill with a sliding blue underline, segmented ES/EN pill (current language filled ink), blue pill CTA, decorative Porto clock from 1100px. On the home page a scroll-spy marks the link of the section under 40% of the viewport with `aria-current="location"` (same blue + underline as the current page); About keeps `aria-current="page"`. Under 860px: burger plus a full-screen blue menu (hidden with `visibility`, rest of the page `inert` while open, Escape closes and returns focus, page scroll locked). Labels live in `content.nav` (`menuOpen`, `menuClose`, `clock`).
- Contact (`Contact.astro`): opens with the rotary-phone sticker (`public/contact/phone.png`, rings on hover) and the email as a big Anton button that copies on click (toast; falls back to selecting the text if the clipboard is blocked). LinkedIn and GitHub as outlined pills. Then the contract (unchanged copy), and the handwritten signature plus a solid "Sign by email" pill (`mailto:`) closes it. The phone is decoration only: no phone number is published and no copy invites a call. New strings live in `content.contact` (`lead`, `copyHint`, `copied`, `copyFailed`, `phoneAlt`, `github`); `GITHUB` is exported next to `LINKEDIN`.
- Hero (`Hero.astro`): says who he is, not the stance. Giant Anton words "¡Hola! / Soy / Jordy" around a black-and-white cut-out photo with a paper outline and four hand-drawn blue lines that draw themselves; role line in mono, two pills (Lima ✈ Porto, years), a line that types rotating phrases (static first phrase without JS or with reduced motion). The real `h1` is `sr-only`; the big words are decorative. Below: one-sentence proof, a pill "See my work" button and "Write to me" link, then the three stats. Under 820px it stacks. `.btn` is now a blue pill site-wide (also used by the About teaser); `.btn--paper` was removed. Copy in `content.hero`.
- Experience title is now the stance line, with a one-line sub ("Four companies, two countries and one habit: shipping.").
- Rhythm pass: `--rule` is 1.5px; the global top rule on `section` is gone and vertical padding grew, so About and Home breathe like the prototype. `AboutTeaser` sits on `--paper-dim`. New `Quote.astro` right after the hero: the keyboard rule in handwriting that writes itself on entering the viewport, plus scattered zigzags (about 58% of the viewport tall; plain visible text without JS or with reduced motion). Copy in `content.quote`. The phrase is Jordy's own (confirmed 2026-11-26).
- Project collages (`collages` in `content.ts`, files in `public/projects/collages/`): tilted card, `--radius-card`, `--shadow-card`. Shown in the Projects list for all five projects.

## Overview

**Creative North Star: "The Hard Problem"**

The site's stance is "Busco el problema difícil." (figurative: easy work does not interest him, challenges do). It lives in the Experience section, not the hero. Everything serves that confidence. Type does the heavy lifting (huge, condensed, uppercase), color is rationed to a single azulejo blue (a nod to Porto), and structure comes from space, background changes and thin ink rules inside lists, not boxes.

Inspiration is worksruthi.com: personality from oversized type, one brand color and a few theatrical moments. Palette, voice and content are Jordy's own; do not drift toward that site's red or Impact-on-black look.

**Key characteristics**
- Paper (#f4f1e8) ground, near-black ink, and exactly one accent: blue. No second accent color.
- Anton for every heading and big number, Geist for reading text, Geist Mono for metadata.
- Square corners everywhere. Hierarchy is built with 2px ink rules and scale contrast.
- Hard-offset shadows only (buttons, covers, code blocks). No blurred shadows.
- Hand-drawn doodle squiggles are the one ornament, sparse, around the hero photo and under the signature.
- Bilingual (ES/EN) with equal weight; all copy lives in one typed file.

## Colors

- **Paper** `#f4f1e8`: page ground. **Paper Dim** `#e8e3d4`: inline code and quiet fills.
- **Ink** `#14130f`: text, rules, borders, the dark contact/footer surface and the marquee.
- **Ink Soft** `#5a564c`: secondary text (about 6.6:1 on paper).
- **Blue** `#2342e8`: the accent. Primary buttons, the second line of the hero, outcome highlights, hover states, labels that become "active". White text on it passes AA (about 7:1).
- **Blue on Ink** `#8a99ff`: the same accent on dark surfaces (clause numerals, signature doodle, hover on ink rows). Plain blue on ink fails contrast, never use it there.

**One-Accent Rule.** If something needs emphasis, it is blue or it is big. Do not add a second hue.

## Typography

- **Display (Anton, uppercase):** hero `clamp(3rem, 6.9vw, 6.6rem)`, section titles `clamp(2.6rem, 7.2vw, 6.25rem)`, big numerals and company/project names. Line-height 0.92-0.98.
- **Body (Geist):** 17px, 1.6, max 62-68ch.
- **Mono (Geist Mono, uppercase, tracked):** nav, dates, tags, labels. Metadata only, never body copy.
- Small mono labels (including the tag above a case-study title) are allowed. The old "no eyebrow" rule belonged to the previous system and is retired.

## Layout

Single-column stack: marquee, sticky nav, hero, experience, projects, stack, education, contact (dark). `.wrap` is `min(1240px, 100% - 2 * gutter)`. Sections are separated by space (`clamp(5rem, 11vw, 10rem)` of vertical padding) and, where a beat is needed, a background change (paper-dim, blue, ink). No rule between sections.

- **Hero:** 12-col grid. Copy spans columns 1-9 and the photo 8-12, so the headline can overlap the photo column slightly. Stacks under 700px. The subtitle is capped to 77% of the copy column so it never runs under the photo.
- **Lists (experience, projects, stack, education):** ruled rows. Experience and projects are `3.5rem | 1.1fr | 1fr` and stack on narrow screens.
- **Case studies:** single column, one `block` per heading.

## Components

- **Button (`.btn`, `.pill` on case pages):** blue fill, white text, 2px ink border, `5px 5px 0 ink` shadow. Hover moves up-left and grows the shadow, active presses in. Variant `.btn--paper` for dark surfaces.
- **Link (`.link`):** underlined 2px, turns blue on hover.
- **Marquee:** ink bar, mono text, 38s linear loop, static with reduced motion.
- **Nav:** sticky, paper, 2px bottom rule. See "Migrated so far" for the current pill-based design (this line predates it).
- **Stats:** three huge numerals, each with one thin ink rule above it and space between them (no boxed grid). The last one is blue.
- **Project row:** big title, mono context, description, outcome chip (blue), mono tags. On hover (pointer devices) the row inverts to ink. Projects with public screenshots show a cover: 16:10 frame, blue ground, ink border, hard shadow.
- **Stack list:** outline text that fills as each group crosses the middle of the screen. Progressive enhancement, filled by default.
- **Contact contract:** ink section. See "Migrated so far" for the current order (phone and copyable email, then four numbered clauses, then handwritten signature). This line predates it.
- **Cursor ring:** a lagging 34px ring (68px, filled, over links, buttons and `[data-cursor]`) with `mix-blend-mode: difference`. Mouse only; the native cursor stays.
- **Intro:** full-screen ink curtain with three words (HOLA/SOY/JORDY or HELLO/I'M/JORDY), about 1.5s, first visit only (`localStorage.introSeen`), `?intro` replays it, any key or click skips it, off with reduced motion, removes itself with a CSS timeline.

## About page

`/{lang}/about/`, reached from the nav ("Sobre mí" / "About") and from a teaser band under the hero. Five scenes, all text in `content.about`:

1. **Opening:** the sentence as a giant Anton headline, the last word in blue. Optional photo.
2. **Life line:** seven dots (2012 to 2024) on a ruled track. Click or arrow keys pick a stage and its panel shows below. Narrow screens and no-JS render every stage as a plain ruled list (progressive enhancement).
3. **Lima ↔ Porto:** inline SVG arc that draws itself on entering, the straight-line distance, and the three languages as outlined tags. Optional photo.
4. **What I build for fun:** three cards with the personal-project covers, linking to their case studies.
5. **What I carry with me:** numbered lessons (001+) in huge Anton, blue on hover.

Optional photos: drop `hero.(webp|jpg|png)` or `porto.(webp|jpg|png)` in `public/me/about/`. If a file exists at build time it appears, if not the scene renders without it (`src/lib/aboutPhoto.ts`).

Only facts from the CV, LinkedIn or the case studies go in the timeline and cards. The six "lessons" are drafts in Jordy's voice, pending his validation.

Shared utility: `data-reveal` fades an element up once when it enters the viewport (animation with `backwards` fill so hover transforms keep working; content stays visible without JS or with reduced motion).

## Motion

Entrance (`rise`) on the hero copy, doodles that draw themselves on entering the viewport, hover shifts on rows, the stack scroll focus, the cursor ring, the intro. All of it respects `prefers-reduced-motion`. No scroll-jacking and no parallax.

## Internationalization

- Languages are listed once in `langs` (`src/i18n/content.ts`). `content` is `Record<Lang, Content>`, and `Content` is an interface, so a missing key or a language without a text block is a type error (checked with `tsc`, not by `astro build`).
- Routes: `/es/` and `/en/` from `src/pages/[lang]/index.astro`. `/` is a client-side redirect: saved choice, then browser languages, then `defaultLang`.
- To add a language: add it to `langs`, write its `Content` block (including `ogLocale`) and its alt texts in `covers`. Nothing else is language-specific.
- Case-study pages (`/projects/*`) are English only for now and use `layouts/CaseStudy.astro`.

## Do's and Don'ts

**Do**
- Keep headings in Anton uppercase and let scale carry the hierarchy.
- Use blue for emphasis and `blue-on-ink` on dark.
- Use thin (1.5px) ink rules only to order lists, and space or background to separate sections.
- Pass user-visible text through `content.ts`, never hardcode it in a component.
- Add `data-cursor` to any new large interactive surface that isn't a link or button.

**Don't**
- Don't add a second accent color or reuse the retired palette (green, forest, burgundy, periwinkle, rust).
- Don't use rounded corners, blurred shadows, or pill shapes.
- Don't put Geist Mono on paragraphs.
- Don't invent employers, metrics or testimonials. Content comes from the CV, LinkedIn, or Jordy.
