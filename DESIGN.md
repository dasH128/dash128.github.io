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
- Nav (`Nav.astro`): handwritten `jordy.` logo (`--font-hand`), links in one outlined pill with a sliding blue underline, language picker (see "Language picker" below), blue pill CTA, decorative Porto clock from 1100px. On the home page a scroll-spy marks the link of the section under 40% of the viewport with `aria-current="location"` (same blue + underline as the current page); About keeps `aria-current="page"`. Under 860px: burger plus a full-screen blue menu (hidden with `visibility`, rest of the page `inert` while open, Escape closes and returns focus, page scroll locked). Labels live in `content.nav` (`menuOpen`, `menuClose`, `clock`).
- Contact (`Contact.astro`): opens with the rotary-phone sticker (`public/contact/phone.png`, rings on hover) and the email as a big Anton button that copies on click (toast; falls back to selecting the text if the clipboard is blocked). LinkedIn and GitHub as outlined pills. Then the contract (unchanged copy), and the handwritten signature plus a solid "Sign by email" pill (`mailto:`) closes it. The phone is decoration only: no phone number is published and no copy invites a call. New strings live in `content.contact` (`lead`, `copyHint`, `copied`, `copyFailed`, `phoneAlt`, `github`); `GITHUB` is exported next to `LINKEDIN`.
- Hero (`Hero.astro`): says who he is, not the stance. Giant Anton words "¡Hola! / Soy / Jordy" around a black-and-white cut-out photo with a paper outline and four hand-drawn blue lines that draw themselves; role line in mono, two pills (Lima ✈ Porto, years), a line that types rotating phrases (static first phrase without JS or with reduced motion). The real `h1` is `sr-only`; the big words are decorative. Below: one-sentence proof, a pill "See my work" button and "Write to me" link, then the three stats. Under 820px it stacks. `.btn` is now a blue pill site-wide (also used by the About teaser); `.btn--paper` was removed. Copy in `content.hero`.
- Experience title is the full stance line ("No busco trabajo. Busco el problema difícil.", three lines in Spanish, four in English), with a one-line sub ("Four companies, two countries and one habit: shipping.").
- Rhythm pass: `--rule` is 1.5px; the global top rule on `section` is gone and vertical padding grew, so About and Home breathe like the prototype. `AboutTeaser` sits on `--paper-dim`. New `Quote.astro` right after the hero: the keyboard rule in handwriting that writes itself on entering the viewport, plus scattered zigzags (about 58% of the viewport tall; plain visible text without JS or with reduced motion). Copy in `content.quote`. The phrase is Jordy's own (confirmed 2026-11-26).
- Intro (`Intro.astro`): giant words are windows (an SVG mask over an ink screen) onto drifting pictures: "Del Perú" (Lima), "Al mundo" (Italia, Suiza, Irlanda, Portugal, each with a caption), then "Apps / APIs / Que funcionan" over three retro illustrations, a `01 / 03` counter, and an ending on "JORDY" with the black-and-white cut-out photo before the curtain lifts. About 3.5 s plus the 0.8 s lift. No library: Web Animations plus one SVG `<text>`; on screens under 760px multi-word text is split into one line per word. Images (`public/intro/`, about 1.6 MB with the photo) are requested only when the intro plays, so returning visitors download nothing; blue shows through the letters until an image is ready. Any key, any click or the "Skip intro" button ends it. The intro (not a timer) removes `intro` from `<html>`, which starts the hero's entrance (`animation-play-state: paused` while it is up); a 7 s failsafe in `<head>` removes it anyway. All words and captions are in `content.intro` (es and en). Careful in scripts: `html` also carries the class `intro`, so select `div.intro`.
- Code blocks (`CodeBlock.astro`, colouring in `src/lib/highlight.ts`): an editor window, not a plain box. Three window dots, then file name and language as pills and a Copy pill (copies the code only; if the clipboard is blocked it selects the code and says Cmd/Ctrl + C); dim line numbers; key lines get a blue band and a short handwritten margin note with a small arrow (a paraphrase of the caption, in `projects.ts`, hidden under 900 px); the explanation sits in a footer inside the window. Background is ink mixed with 10% blue, 12 px corners. **Exception to the one-accent rule:** syntax colours use several hues (violet keywords, teal italic types, pink italic properties, sand strings, soft orange numbers), softened to sit next to paper and blue, and functions use the site's blue-on-ink; the window dots are macOS red/yellow/green. This is the only place allowed to do that. Colouring is done at build time with Shiki (`shiki` is a direct dependency), so the browser gets coloured text and no highlighter. Fragments that are a method or object member are coloured inside an invisible wrapper (`wrap` in `CodeSnippet`).
- Project pages (`ProjectDetail.astro`, route `src/pages/[lang]/projects/[slug].astro`): one template for all five projects, two layers. Layer 1 for everyone: back link, "02 of 05 · client", giant blue Anton title, handwriting tagline, the tilted collage, a four-cell meta strip (year, client, role, stack), the big number when there is one (−20%), then the three chapters (The challenge, What I built, The result) with the tags and links; projects under NDA say so and point to the contact. Layer 2 "Under the hood" only for the three with public code and screens: blocks of text, layer tables, a code sample (see "Code blocks") and real screenshots, on a darker paper. Ends with a blue "Next project" band that loops through the five, then the normal contact footer. Same nav as the rest of the site, with the ES/EN switch staying on the same project. No parallax, no page-transition curtain, real URLs (no hash routing).
- Stack, bands and Education (`Skills.astro`, `StackBands.astro`, `Education.astro`): Stack sits on `--paper-dim`. Only the row closest to the middle of the screen is lit (full ink, blue label); the others are dimmed to `--ink-soft`, which keeps its contrast (the old outline-only text was hard to read and lit two or three rows at once). Without JS or with reduced motion every row is lit. Under it, two tilted bands (blue, ink) straddle the border between Stack and Education, moving in opposite directions; they are decorative (`aria-hidden`), built from the stack list itself (no extra copy), and static with reduced motion. They can be removed by deleting `<StackBands />` from `pages/[lang]/index.astro`. Education: a shorter headline, degrees as rows led by the years in blue Anton, certifications as a one-line table (name, issuer, month). The section is 1,302 px tall (it was 1,396 px).
- Sharing (link previews, icons, search): every page carries Open Graph and Twitter card tags (`og:image` 1200x630 JPG, absolute URL, alt text, `og:url`, site name, locale and its alternate), `theme-color` (paper), JSON-LD `Person` on the two home pages (only facts already on the site; no email), `sitemap.xml` with hreflang links and `robots.txt` (both written by hand in `src/pages`). Share image: two cards, one per language (`public/og/es.jpg` and `public/og/en.jpg`, 1200x630, same design, only the role and "N+ años / N+ years" change), source in `scripts/og-default.html` (`?lang=es|en`). Every page of a language uses that language's card, project pages included; the root uses the default language's. Per-project cards were tried and dropped (kept outside the site, in `resource/og-project-cards/`). The root URL `/` redirects by language with JavaScript, which chats do not run, so it has its own full set of tags in both languages (`rootMeta` in `content.ts`) and is no longer `noindex`. Meta descriptions stay under about 150 characters. Icons: a blue tile with a paper "J" and an ink full stop, drawn by `scripts/make-icons.mjs` (`favicon.svg`, `favicon.ico` 32 px, `apple-touch-icon.png` 180 px). Chats cache previews: after publishing, refresh them with the Facebook Sharing Debugger (covers WhatsApp and Instagram) and LinkedIn's Post Inspector, or add `?v=2` to the link.
- Project collages (`collages` in `content.ts`, files in `public/projects/collages/`): tilted card, `--radius-card`, `--shadow-card`. They no longer sit inside each row (that made the list 2,600 px, 3.4 screens). With a mouse, the row gets a blue panel that wipes up from its bottom edge (a little wider than the column), the title nudges 1 rem right, the outcome chip inverts to white, and one floating collage follows the cursor, centred on it and kept inside the window, only while over a row; it is decorative (`aria-hidden`), the five pictures are fetched shortly before the list scrolls into view, and with reduced motion it follows without lag. On touch screens (`hover: none`) each row shows a small tilted thumbnail next to the title instead. The list is about 1,300 px (1.4 screens).

## Language picker

Four languages: es, en, pt, it (`langs`). On large screens the nav shows one outlined pill with a globe and the greeting in the current language (Hola, Hello, Olá, Ciao). It opens a full-screen blue sheet (`#lang-sheet`, a dialog) with the four greetings in giant Anton; each is a real link to the same page in that language (`hreflang`, `lang`), the current one underlined with a handwritten "you are here". Esc, the Close pill or a click on the empty blue closes it; focus goes in on the current language and returns to the pill; the page and the rest of the header are `inert` while it is open. Under 860px the pill and the sheet are gone: the burger menu ends with a row of four code pills (ES EN PT IT). Without JavaScript the pill is replaced by four plain links (`noscript`). The sheet is opened on request only, it is not a transition on every click. Greetings and names are `langMeta` in `content.ts`; `nav.langLabel`, `nav.langClose` and `nav.here` are per language. Choosing a language is remembered in `localStorage.lang`, which the root `/` uses to redirect.

**Provisional languages.** `pt` and `it` exist but reuse the English text with a translated nav (`provisionalLangs` in `content.ts`). Their pages are `noindex` and left out of the sitemap, the hreflang alternates and the root redirect (`liveLangs`). Project pages fall back to English (`projectText`). To publish a language once its blocks are translated and reviewed, write its `Content` block and its `text` in `projects.ts`, add its share card (`public/og/{lang}.jpg`) and remove it from `provisionalLangs`.

## Overview

**Creative North Star: "The Hard Problem"**

The site's stance is "No busco trabajo. Busco el problema difícil." (figurative: easy work does not interest him, challenges do). It lives in the Experience section, not the hero. Everything serves that confidence. Type does the heavy lifting (huge, condensed, uppercase), color is rationed to a single azulejo blue (a nod to Porto), and structure comes from space, background changes and thin ink rules inside lists, not boxes.

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
- **Project pages:** see "Migrated so far" (one template for all five projects).

## Components

- **Button (`.btn`, `.pill` on case pages):** blue fill, white text, 2px ink border, `5px 5px 0 ink` shadow. Hover moves up-left and grows the shadow, active presses in. Variant `.btn--paper` for dark surfaces.
- **Link (`.link`):** underlined 2px, turns blue on hover.
- **Marquee:** ink bar, mono text, 38s linear loop, static with reduced motion.
- **Nav:** sticky, paper, 2px bottom rule. See "Migrated so far" for the current pill-based design (this line predates it).
- **Stats:** three huge numerals, each with one thin ink rule above it and space between them (no boxed grid). The last one is blue.
- **Project row:** big title, mono context, description, outcome chip (blue), mono tags. On hover (pointer devices) a blue panel wipes up behind the row and the floating collage appears (see "Migrated so far"). The old 16:10 screenshot cover is gone from the list (the About page no longer shows project cards).
- **Stack list:** see "Migrated so far" (single lit row, no outline text; this line predates it).
- **Contact contract:** ink section. See "Migrated so far" for the current order (phone and copyable email, then four numbered clauses, then handwritten signature). This line predates it.
- **Cursor ring:** a lagging 34px ring (68px, filled, over links, buttons and `[data-cursor]`) with `mix-blend-mode: difference`. Mouse only; the native cursor stays.
- **Intro:** first visit only (`localStorage.introSeen`), `?intro` replays it, off with reduced motion. See "Migrated so far" for the current story intro (this line predates it).

## About page

`/{lang}/about/`, reached from the nav ("Sobre mí" / "About") and from a teaser band under the hero. Migrated to the soft prototype direction on 2026-11-28 (proposal in `resource/portfolio/about-propuesta.html`). Scenes, all text in `content.about`:

1. **Hero (`AboutHero`):** label, giant title "Sin miedo al éxito" / "Not afraid of success" (last word blue), two lead lines, two chips, and the colour portrait (`public/me/about/hero.webp`, 1122x1402) in a tilted white frame with blue tape, two stickers and a handwritten note. The portrait stays small (max 390px).
2. **Bento (`AboutBento`):** tilted tiles with the quick facts: Lima ✈ Porto (blue), the years in software (ink, `YEARS_IN_CODE`, automatic), languages as "three ways to say hi" with bars, role at Motorline, "UPC" in blue, and the name as a handwritten signature.
3. **The turn (`AboutGiro`):** "De configurar a crear": a gridded ink pane (struck-through "Configurar y mantener") and a blue pane ("Crear") with four company/year chips. Draws on Jordy's own answer about moving from networking to software.
4. **Away from the keyboard (`AboutOff`):** ink section. Three Q&A cards in Jordy's own words (childhood in Lima, a Sunday in Porto, the production bug) between three CSS-background crops of the same portrait.
5. **How I work (`Lessons`):** six rule cards in a mosaic, each with a proof chip from the CV (the rule-to-proof pairing is Claude's draft).
6. **Close (`AboutClose`):** blue band "¿Próxima parada? / tu equipo, quizás.", a mailto button and a link to the projects. It carries `id="contact"` so the nav "Hablemos" button scrolls to it. Under it, `AboutFooter`: a slim ink strip with LinkedIn and GitHub pills and a mono line (name, Porto, year). No full Contact footer on this page, it repeated the close.

Removed with this change: `LifeLine`, `Route`, `BuiltForFun`, `lib/aboutPhoto.ts` and the `covers` export (projects already live in the home). The original PNG of the portrait is kept outside `public/`, in `resource/portfolio/assets/retrato.png`.

Shared utility: `data-reveal` fades an element up once when it enters the viewport (animation with `backwards` fill so hover transforms keep working; content stays visible without JS or with reduced motion).

## Motion

Entrance (`rise`) on the hero copy, doodles that draw themselves on entering the viewport, hover shifts on rows, the stack scroll focus, the cursor ring, the intro. All of it respects `prefers-reduced-motion`. No scroll-jacking and no parallax.

## Internationalization

- Languages are listed once in `langs` (`src/i18n/content.ts`: es, en, pt, it; pt and it are provisional, see "Language picker"). `content` is `Record<Lang, Content>`, and `Content` is an interface, so a missing key or a language without a text block is a type error (checked with `tsc`, not by `astro build`).
- Routes: `/es/` and `/en/` from `src/pages/[lang]/index.astro`. `/` is a client-side redirect: saved choice, then browser languages, then `defaultLang`.
- To add a language: add it to `langs`, write its `Content` block (including `ogLocale`) and its alt texts in `covers`. Nothing else is language-specific.
- Project pages are `/{lang}/projects/{slug}/` in every language. Their copy is in `src/i18n/projects.ts` (one typed `ProjectDetail` per project, a `text` block per language), the shared labels in `content.projectPage`. The old `/projects/{slug}` URLs (English only) redirect to `/en/projects/{slug}/` (see `redirects` in `astro.config.mjs`). To add a language, add its `text` block to every project and its `projectPage` labels.

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
