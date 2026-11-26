# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (`astro ^7.3.2`, Node >=22.12), static output. No UI framework. Plain CSS (`src/styles/site.css` plus scoped component styles) and small inline scripts. Fonts from Google Fonts: Anton, Geist, Geist Mono.

## Users

Recruiters, hiring managers, and potential clients or collaborators evaluating Jordy Rojas Aliaga as a software developer, in Portugal and internationally.

## Product Purpose

A personal portfolio for Jordy Rojas Aliaga, a fullstack and mobile software engineer, to present who he is, what he builds, and how to reach him.

## Positioning

Confident and a little cheeky. The site does not beg for a job. Its stance is "Busco el problema difícil." (EN: "I look for the hard problem."), meant figuratively: Jordy is open to work, but easy work does not interest him, hard problems and challenges do. It is NOT a claim that he is not looking for work. The old two-line version ("No busco trabajo. Busco el problema difícil.") was retired from the hero because a quick reader can take it literally. Personality comes from oversized condensed type, one azulejo blue, a first-visit intro, hand-drawn doodles, and a contact section written as "Terms and conditions of hiring me". Humor is meant to convey confidence, not to joke around.

## Operating Context

Single-developer static site, no backend or CMS. Viewed on desktop and mobile, usually as a first impression before a resume or LinkedIn/GitHub profile. Bilingual: Spanish and English with equal weight, with a language switch. Case-study pages are English only for now.

## Capabilities and Constraints

- Static Astro site, no server-side features.
- All copy lives in `src/i18n/content.ts`. Real content is shipped; any addition must come from Jordy's CV, LinkedIn, or his own statement, never invented employers, projects, metrics or testimonials.
- The contract clauses in the contact section are Jordy's voice, drafted by Claude, and still to be validated by him (as is the rest of the copy).
- The About page timeline and cards use only CV/LinkedIn/case-study facts. The "lessons" list and the personal framing ("Me enganché a los problemas difíciles") are drafts pending Jordy's validation. Still missing from him: the personal "why" behind each career step, things that shaped him (games, films, books), and extra photos (`public/me/about/`).
- Photo: `public/me/jordy.png` (transparent PNG cutout, 1024x1536).
- Branding choices made by Claude and open to change: the blue `#2342e8` and the Anton/Geist type pairing.

## Brand Commitments

- Name: Jordy Rojas Aliaga.
- Visual inspiration (not to be copied): worksruthi.com, for its personality through type and a single brand color. This site keeps its own palette, voice and content.
- Stance line: "Busco el problema difícil." Lives in the Experience section title (paid off by contract clause 4 in Contact), not in the hero. The hero says who he is: "¡Hola! Soy Jordy", role, Lima ✈ Porto. "Tu CV como contrato" stays as the contact concept.

## Evidence on Hand

Supplied by Jordy via CV (`cv_jordy.pdf`) and LinkedIn export (`linkedin_profile.pdf`), and shipped on the homepage:

- **Experience** (reverse chronological): Motorline, Full Stack & Mobile Developer, Portugal, Jul 2022–Present; ITData Consulting, Full Stack Developer, Peru, May 2021–Feb 2022; Holinsys, Software Engineering Analyst, Peru, Feb 2020–Feb 2021; Clínica Médica Climper, Software Analyst, Peru, Jan 2015–Feb 2020.
- **Projects**: two Motorline projects (native Android/iOS widget integration in a Flutter app; a Flutter desktop production-monitoring/quality-control platform, 20% fewer operational errors) and three personal projects with case studies (PDF report API in NestJS, Cinemapedia in Flutter, ¿Quién es ese Pokémon? in Vue 3).
- **Claims used in copy**: 8+ years shipping software, 4 companies in 2 countries, 20% fewer operational errors (Motorline), projects delivered 10% faster than planned (ITData).
- **Stack**: Dart, Kotlin, TypeScript, Python; Flutter, React Native, React, Angular, Vue, NestJS, Express; MongoDB, PostgreSQL, Firebase, Supabase; REST, GraphQL, push notifications, Google Maps/geolocation; SOLID, Clean Code, Git, Docker, Android Studio, Xcode.
- **Contact**: email (rojas71421@gmail.com) and LinkedIn (linkedin.com/in/dash128). Phone number deliberately withheld.
- **Languages**: Spanish (native), Portuguese (B2), English (B1).
- **Education**: Engineer's Degree, Software Engineering, UPC, Lima, 2015–2021; Networking & Data Communications, Tecsup, Lima, 2012–2014.
- **Certifications** (7): Nest + Reportes (DevTalles, Jul 2024); Nest + GraphQL (Udemy, Jun 2024); Nest: Backend Escalable (Udemy, May 2024); SOLID y Clean Code (Udemy, Mar 2023); Node Autenticación REST Clean Architecture (DevTalles, Dec 2023); Futures Thinking (IFTF/Coursera, Jul 2021); Scrum Fundamentals Certified (SCRUMstudy, Jun 2020).
- **Photo**: supplied. **Testimonials**: not supplied, not fabricated.

## Product Principles

1. Say it with confidence: big type, one color, short sentences. Personality over polish.
2. Show, don't just claim: use real project specifics. Never fabricate.
3. Recruiters skim: the headline, the proof (three numbers) and a contact path are all in the first screen.
4. Delight without blocking: the intro is short, skippable and once per visitor, and every effect respects reduced motion.

## Accessibility & Inclusion

- Respect `prefers-reduced-motion` for the intro, marquee, entrances, stack scroll focus and cursor ring.
- Keep text contrast at AA or better (use `blue-on-ink` on dark surfaces).
- The cursor ring is decorative and never replaces the native cursor.
- Both languages are first-class: `lang` attribute, `hreflang` alternates, and a visible language switch.
