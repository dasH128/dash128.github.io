export const langs = ["es", "en"] as const;
export type Lang = (typeof langs)[number];
/** Used by "/" when the visitor has no saved choice and no browser language matches. */
export const defaultLang: Lang = "en";

export const EMAIL = "rojas71421@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/dash128/";

export function langPath(lang: Lang): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${lang}/`;
}

/** "2024-07" -> "Jul 2024" / "jul 2024" in the page language. */
export function formatMonth(iso: string, lang: Lang): string {
  const [y, m] = iso.split("-").map(Number);
  const out = new Intl.DateTimeFormat(lang, { month: "short", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(y, m - 1, 1)),
  );
  return out.replace(/\./g, "").replace(/\s+de\s+/, " ");
}

const certs = [
  { name: "Nest + Reportes: Genera PDF desde Node", issuer: "DevTalles", date: "2024-07" },
  { name: "Nest + GraphQL: Evoluciona tus APIs", issuer: "Udemy", date: "2024-06" },
  { name: "Nest: Desarrollo Backend Escalable con Node", issuer: "Udemy", date: "2024-05" },
  { name: "Principios SOLID y Clean Code", issuer: "Udemy", date: "2023-03" },
  { name: "Node Autentificación REST Clean Architecture", issuer: "DevTalles", date: "2023-12" },
  { name: "Futures Thinking", issuer: "Institute for the Future · Coursera", date: "2021-07" },
  { name: "Scrum Fundamentals Certified (SFC)", issuer: "SCRUMstudy", date: "2020-06" },
];

const es: Content = {
    htmlLang: "es",
    ogLocale: "es_ES",
    meta: {
      title: "Jordy Rojas Aliaga · Ingeniero Fullstack y Mobile",
      description:
        "Jordy Rojas Aliaga, ingeniero fullstack y mobile en Porto. 8+ años lanzando producto web y móvil en Portugal y Perú. No busca trabajo: busca el problema difícil.",
    },
    marquee: [
      "Porto ↔ Lima",
      "Flutter + NestJS",
      "8+ años lanzando software",
      "ES · PT · EN",
      "Busco el problema difícil",
    ],
    intro: ["Hola", "Soy", "Jordy"],
    nav: {
      aria: "Principal",
      home: "Jordy Rojas Aliaga, inicio",
      work: "Proyectos",
      experience: "Experiencia",
      stack: "Stack",
      education: "Estudios",
      cta: "Hablemos",
      langLabel: "Idioma",
    },
    hero: {
      lineA: "No busco trabajo.",
      lineB: "Busco el problema difícil.",
      sub: "Soy Jordy Rojas, ingeniero fullstack y mobile en Porto. Flutter, NestJS y 8+ años lanzando producto entre Perú y Portugal. Si alguien ya resolvió tu problema, no me necesitas. Si no, cuéntamelo.",
      cta: "Cuéntame el problema",
      secondary: "Ver proyectos",
      photoAlt: "Jordy Rojas sonriendo, con gorro de pescador y las manos en los bolsillos",
      statsLabel: "Cifras de mi trayectoria",
      stats: [
        { n: "8+", l: "años lanzando software" },
        { n: "4", l: "empresas en 2 países" },
        { n: "20%", l: "menos errores operativos en Motorline" },
      ],
    },
    experience: {
      title: "Cuatro empresas. Una costumbre: entregar.",
      roles: [
        {
          company: "Motorline",
          role: "Desarrollador Full Stack y Mobile",
          place: "Portugal",
          dates: "Jul 2022 — Actualidad",
          detail:
            "Lideré una app de escritorio en Flutter para monitorear la eficiencia de producción y reduje un 20% los errores operativos. Construí integraciones nativas de widgets en Android e iOS y un backend en Node.js que sincroniza datos entre plataformas.",
        },
        {
          company: "ITData Consulting",
          role: "Desarrollador Full Stack",
          place: "Perú",
          dates: "May 2021 — Feb 2022",
          detail:
            "Automaticé procesos clave y lideré el desarrollo web en React dentro de un equipo Scrum. Entregué los proyectos un 10% antes de lo planeado.",
        },
        {
          company: "Holinsys",
          role: "Analista de Ingeniería de Software",
          place: "Perú",
          dates: "Feb 2020 — Feb 2021",
          detail:
            "Construí frontends dinámicos con Angular e Ionic y backends escalables con Node.js y Express. Optimicé MySQL y PostgreSQL para consultas más rápidas y fiables.",
        },
        {
          company: "Clínica Médica Climper",
          role: "Analista de Software",
          place: "Perú",
          dates: "Ene 2015 — Feb 2020",
          detail:
            "Desarrollé apps móviles y una API REST para la prestación de servicios, y diseñé arquitecturas de base de datos para varios sistemas mientras crecían.",
        },
      ],
    },
    projects: {
      title: "Sistemas lanzados bajo presión.",
      caseStudy: "Leer el caso (en inglés)",
      demo: "Probar la demo",
      items: [
        {
          title: "Integración móvil nativa",
          context: "Motorline · 2022–Actualidad",
          detail:
            "Una app móvil en Flutter ampliada con widgets nativos de Android e iOS. Cierra la brecha entre el framework y la plataforma para una experiencia más fluida.",
          tags: ["Flutter", "Kotlin", "Widgets nativos", "Push Notifications"],
        },
        {
          title: "Monitoreo de producción y control de calidad",
          context: "Motorline · 2022–Actualidad",
          detail:
            "Una plataforma de escritorio en Flutter que sigue en tiempo real la eficiencia de las tareas de producción y sincroniza datos entre sistemas. Los operarios ven el problema antes de que sea un defecto.",
          outcome: "20% menos errores operativos",
          tags: ["Flutter", "Node.js", "Cron", "Sincronización de datos"],
        },
        {
          title: "API de reportes PDF",
          context: "Proyecto personal · 2024",
          detail:
            "Una API en NestJS que convierte datos de Prisma y PostgreSQL en reportes PDF bajo demanda: facturas, certificados, tablas de países y paneles con gráficos SVG. Sin motor de plantillas.",
          tags: ["NestJS", "Prisma", "PostgreSQL", "PDFKit"],
          href: "/projects/pdf-report-api",
        },
        {
          title: "Cinemapedia",
          context: "Proyecto personal · 2024",
          detail:
            "Una app Flutter para explorar y buscar películas de TMDB, con reparto y sinopsis en cada detalle, favoritos sin conexión con Isar y tema claro u oscuro con 15 colores de acento.",
          tags: ["Flutter", "Riverpod", "Isar", "TMDB API"],
          href: "/projects/movies-app",
        },
        {
          title: "¿Quién es ese Pokémon?",
          context: "Proyecto personal · 2021–2026",
          detail:
            "Un juego de trivia en Vue 3 y TypeScript sobre PokeAPI. Adivina el Pokémon por su silueta antes de que se acaben el tiempo y los corazones, con tres niveles y tabla de récords local.",
          tags: ["Vue 3", "TypeScript", "PokeAPI", "Axios"],
          href: "/projects/poke-web",
          demo: "https://pokigame.netlify.app/",
        },
      ],
    },
    skills: {
      title: "El stack, de punta a punta.",
      groups: [
        { label: "Lenguajes", items: ["Dart", "Kotlin", "TypeScript", "Python"] },
        { label: "Frameworks", items: ["Flutter", "React Native", "React", "Angular", "Vue", "NestJS", "Express"] },
        { label: "Datos", items: ["MongoDB", "PostgreSQL", "Firebase", "Supabase"] },
        {
          label: "APIs e integraciones",
          items: ["REST", "GraphQL", "Push Notifications", "Google Maps y geolocalización"],
        },
        { label: "Práctica y herramientas", items: ["SOLID", "Clean Code", "Git", "Docker", "Android Studio", "Xcode"] },
      ],
    },
    education: {
      title: "La universidad dio las bases. Lo demás lo aprendí por mi cuenta.",
      studies: "Estudios",
      certs: "Certificaciones",
      degrees: [
        {
          degree: "Ingeniería de Software (título de Ingeniero)",
          school: "Universidad Peruana de Ciencias Aplicadas (UPC)",
          place: "Lima, Perú",
          dates: "2015 — 2021",
        },
        {
          degree: "Redes y Comunicación de Datos",
          school: "Tecsup",
          place: "Lima, Perú",
          dates: "2012 — 2014",
        },
      ],
      certifications: certs,
    },
    contact: {
      title: "Términos y condiciones de contratarme",
      intro: "Léelos con calma. Casi todo es verdad, y lo poco que no, es por diversión.",
      clauses: [
        {
          h: "Lo entrego antes.",
          p: "En ITData fue un 10% antes de lo planeado. No he cambiado de costumbre.",
        },
        {
          h: "Si se rompe, lo arreglo yo.",
          p: "Y de forma que no se repita. En Motorline eso fue un 20% menos de errores operativos.",
        },
        {
          h: "Hablo tu idioma.",
          p: "Español nativo, portugués B2, inglés B1. Lo que me falte de gramática lo compenso con código claro.",
        },
        {
          h: "Los problemas fáciles también se aceptan.",
          p: "Pero los difíciles pasan primero.",
        },
      ],
      signed: "Firmado,",
      cta: "Firmar por email",
      linkedin: "LinkedIn",
      loc: "Porto, Portugal",
      lang: "Español (nativo) · Português (B2) · English (B1)",
      copyright: "Hecho con Astro.",
    },
};

const en: Content = {
    htmlLang: "en",
    ogLocale: "en_US",
    meta: {
      title: "Jordy Rojas Aliaga · Fullstack & Mobile Engineer",
      description:
        "Jordy Rojas Aliaga, fullstack and mobile engineer in Porto. 8+ years shipping web and mobile products across Portugal and Peru. Not looking for a job: looking for the hard problem.",
    },
    marquee: [
      "Porto ↔ Lima",
      "Flutter + NestJS",
      "8+ years shipping software",
      "ES · PT · EN",
      "Looking for the hard problem",
    ],
    intro: ["Hello", "I'm", "Jordy"],
    nav: {
      aria: "Primary",
      home: "Jordy Rojas Aliaga, home",
      work: "Work",
      experience: "Experience",
      stack: "Stack",
      education: "Education",
      cta: "Let's talk",
      langLabel: "Language",
    },
    hero: {
      lineA: "I'm not looking for a job.",
      lineB: "I'm looking for the hard problem.",
      sub: "I'm Jordy Rojas, a fullstack and mobile engineer in Porto. Flutter, NestJS and 8+ years shipping product between Peru and Portugal. If someone already solved your problem, you don't need me. If not, tell me about it.",
      cta: "Tell me the problem",
      secondary: "See the work",
      photoAlt: "Jordy Rojas smiling, wearing a bucket hat with hands in pockets",
      statsLabel: "Career numbers",
      stats: [
        { n: "8+", l: "years shipping software" },
        { n: "4", l: "companies in 2 countries" },
        { n: "20%", l: "fewer operational errors at Motorline" },
      ],
    },
    experience: {
      title: "Four companies. One habit: shipping.",
      roles: [
        {
          company: "Motorline",
          role: "Full Stack & Mobile Developer",
          place: "Portugal",
          dates: "Jul 2022 — Present",
          detail:
            "Led a Flutter desktop app for production-efficiency monitoring, cutting operational errors by 20%. Built native Android and iOS widget integrations and a Node.js backend that syncs data across platforms.",
        },
        {
          company: "ITData Consulting",
          role: "Full Stack Developer",
          place: "Peru",
          dates: "May 2021 — Feb 2022",
          detail:
            "Automated key processes and led React web development inside a Scrum team. Delivered projects 10% faster than planned.",
        },
        {
          company: "Holinsys",
          role: "Software Engineering Analyst",
          place: "Peru",
          dates: "Feb 2020 — Feb 2021",
          detail:
            "Built dynamic frontends with Angular and Ionic and scalable backends with Node.js and Express. Optimized MySQL and PostgreSQL for faster, more reliable queries.",
        },
        {
          company: "Clínica Médica Climper",
          role: "Software Analyst",
          place: "Peru",
          dates: "Jan 2015 — Feb 2020",
          detail:
            "Built mobile apps and a REST API for service delivery, and designed database architectures supporting multiple systems as they scaled.",
        },
      ],
    },
    projects: {
      title: "Systems shipped under pressure.",
      caseStudy: "Read the case study",
      demo: "Try the live demo",
      items: [
        {
          title: "Native Mobile Integration",
          context: "Motorline · 2022–Present",
          detail:
            "A Flutter mobile app extended with native Android and iOS widgets. Closes the gap between the framework and the platform for a smoother experience.",
          tags: ["Flutter", "Kotlin", "Native Widgets", "Push Notifications"],
        },
        {
          title: "Production Monitoring & Quality Control",
          context: "Motorline · 2022–Present",
          detail:
            "A Flutter desktop platform that tracks production-task efficiency in real time and syncs data across systems. Operators see the problem before it becomes a defect.",
          outcome: "20% fewer operational errors",
          tags: ["Flutter", "Node.js", "Cron Automation", "Data Sync"],
        },
        {
          title: "PDF Report Generation API",
          context: "Personal project · 2024",
          detail:
            "A NestJS API that turns Prisma and PostgreSQL data into PDF reports on demand: invoices, certificates, country tables and dashboards with embedded SVG charts. No templating engine.",
          tags: ["NestJS", "Prisma", "PostgreSQL", "PDFKit"],
          href: "/projects/pdf-report-api",
        },
        {
          title: "Cinemapedia",
          context: "Personal project · 2024",
          detail:
            "A Flutter app for browsing and searching TMDB movies, with cast and synopsis on every detail page, offline favorites via Isar, and a light or dark theme with 15 accent colors.",
          tags: ["Flutter", "Riverpod", "Isar", "TMDB API"],
          href: "/projects/movies-app",
        },
        {
          title: "¿Quién es ese Pokémon?",
          context: "Personal project · 2021–2026",
          detail:
            "A Vue 3 and TypeScript trivia game on PokeAPI. Guess the Pokémon from its silhouette before the clock and your hearts run out, with three difficulty tiers and a local high-score board.",
          tags: ["Vue 3", "TypeScript", "PokeAPI", "Axios"],
          href: "/projects/poke-web",
          demo: "https://pokigame.netlify.app/",
        },
      ],
    },
    skills: {
      title: "The stack, end to end.",
      groups: [
        { label: "Languages", items: ["Dart", "Kotlin", "TypeScript", "Python"] },
        { label: "Frameworks", items: ["Flutter", "React Native", "React", "Angular", "Vue", "NestJS", "Express"] },
        { label: "Data", items: ["MongoDB", "PostgreSQL", "Firebase", "Supabase"] },
        {
          label: "APIs & Integrations",
          items: ["REST", "GraphQL", "Push Notifications", "Google Maps & Geolocation"],
        },
        { label: "Practice & Tools", items: ["SOLID", "Clean Code", "Git", "Docker", "Android Studio", "Xcode"] },
      ],
    },
    education: {
      title: "School gave me the basics. I taught myself the rest.",
      studies: "Education",
      certs: "Certifications",
      degrees: [
        {
          degree: "Engineer's Degree, Software Engineering",
          school: "Universidad Peruana de Ciencias Aplicadas (UPC)",
          place: "Lima, Peru",
          dates: "2015 — 2021",
        },
        {
          degree: "Networking & Data Communications",
          school: "Tecsup",
          place: "Lima, Peru",
          dates: "2012 — 2014",
        },
      ],
      certifications: certs,
    },
    contact: {
      title: "Terms and conditions of hiring me",
      intro: "Read them slowly. Almost all of it is true, and the little that isn't is there for fun.",
      clauses: [
        {
          h: "I deliver early.",
          p: "At ITData it was 10% ahead of plan. I haven't changed.",
        },
        {
          h: "If it breaks, I fix it.",
          p: "And in a way that doesn't repeat. At Motorline that meant 20% fewer operational errors.",
        },
        {
          h: "I speak your language.",
          p: "Native Spanish, Portuguese B2, English B1. Whatever grammar I'm missing, I make up for with clear code.",
        },
        {
          h: "Easy problems are accepted too.",
          p: "But the hard ones go first.",
        },
      ],
      signed: "Signed,",
      cta: "Sign by email",
      linkedin: "LinkedIn",
      loc: "Porto, Portugal",
      lang: "Español (native) · Português (B2) · English (B1)",
      copyright: "Built with Astro.",
    },
};

/**
 * One block per language. `Record<Lang, Content>` makes the build fail if a language
 * listed in `langs` has no block, and `Content` makes it fail if a block misses a key.
 */
export const content: Record<Lang, Content> = { es, en };

/** Project covers, keyed by the project's case-study href. Motorline work is private: no cover. */
export const covers: Record<string, { src: string; width: number; height: number; fit: "cover" | "contain"; alt: Record<Lang, string> }> = {
  "/projects/pdf-report-api": {
    src: "/projects/pdf-report-api/html-report.png",
    width: 848,
    height: 1200,
    fit: "contain",
    alt: {
      es: "Página PDF generada por la API con títulos, listas anidadas y texto con formato",
      en: "PDF page generated by the API with headings, nested lists and formatted text",
    },
  },
  "/projects/movies-app": {
    src: "/projects/movies-app/dark-home.jpg",
    width: 322,
    height: 700,
    fit: "contain",
    alt: {
      es: "Pantalla de inicio de Cinemapedia en modo oscuro, con carrusel y películas en cines",
      en: "Cinemapedia home screen in dark mode, with a carousel and movies now in theaters",
    },
  },
  "/projects/poke-web": {
    src: "/projects/poke-web/game.png",
    width: 1280,
    height: 800,
    fit: "cover",
    alt: {
      es: "Pantalla de juego con la silueta negra de un Pokémon dentro de un escáner estilo Pokédex",
      en: "Game screen with a Pokémon's black silhouette inside a Pokédex-style scanner",
    },
  },
};

export interface ProjectItem {
  title: string;
  context: string;
  detail: string;
  tags: string[];
  outcome?: string;
  href?: string;
  demo?: string;
}

/** The full shape of one language's text. Adding a key here forces every language to provide it. */
export interface Content {
  htmlLang: string;
  ogLocale: string;
  meta: { title: string; description: string };
  marquee: string[];
  intro: string[];
  nav: {
    aria: string;
    home: string;
    work: string;
    experience: string;
    stack: string;
    education: string;
    cta: string;
    langLabel: string;
  };
  hero: {
    lineA: string;
    lineB: string;
    sub: string;
    cta: string;
    secondary: string;
    photoAlt: string;
    statsLabel: string;
    stats: { n: string; l: string }[];
  };
  experience: {
    title: string;
    roles: { company: string; role: string; place: string; dates: string; detail: string }[];
  };
  projects: { title: string; caseStudy: string; demo: string; items: ProjectItem[] };
  skills: { title: string; groups: { label: string; items: string[] }[] };
  education: {
    title: string;
    studies: string;
    certs: string;
    degrees: { degree: string; school: string; place: string; dates: string }[];
    certifications: { name: string; issuer: string; date: string }[];
  };
  contact: {
    title: string;
    intro: string;
    clauses: { h: string; p: string }[];
    signed: string;
    cta: string;
    linkedin: string;
    loc: string;
    lang: string;
    copyright: string;
  };
}
