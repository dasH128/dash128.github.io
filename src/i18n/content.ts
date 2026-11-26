export const langs = ["es", "en"] as const;
export type Lang = (typeof langs)[number];
/** Used by "/" when the visitor has no saved choice and no browser language matches. */
export const defaultLang: Lang = "en";

export const EMAIL = "rojas71421@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/dash128/";
export const GITHUB = "https://github.com/dasH128";

export function langPath(lang: Lang): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${lang}/`;
}

export function aboutPath(lang: Lang): string {
  return `${langPath(lang)}about/`;
}

/** Detail page of one project (see `i18n/projects.ts`). */
export function projectPath(lang: Lang, slug: string): string {
  return `${langPath(lang)}projects/${slug}/`;
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
        "Jordy Rojas Aliaga, ingeniero fullstack y mobile en Porto. 8+ años lanzando producto web y móvil en Portugal y Perú. Le interesan los problemas difíciles, no los fáciles.",
    },
    marquee: [
      "Porto ↔ Lima",
      "Flutter + NestJS",
      "8+ años lanzando software",
      "ES · PT · EN",
      "Programando desde 2015",
    ],
    intro: {
      words: { peru: "Del Perú", world: "Al mundo", apps: "Apps", apis: "APIs", works: "Que funcionan" },
      captions: {
        peru: "Lima, Perú · donde empezó todo",
        italy: "Italia",
        switzerland: "Suiza",
        ireland: "Irlanda",
        portugal: "Portugal · desde 2022",
      },
      counter: "Del Perú ✈ al mundo",
      final: "Jordy",
      skip: "Saltar intro →",
    },
    quote: {
      lines: ["“lánzalo el viernes,", "duerme tranquilo el sábado,", "sigue funcionando el lunes.”"],
      by: "regla n.º 1 de mi teclado",
    },
    aboutTeaser: {
      title: "Lo que no cabe en el CV.",
      text: "De Lima a Porto, ocho años de oficio y una costumbre: ir primero por el problema difícil.",
      cta: "Leer mi historia",
    },
    about: {
      meta: {
        title: "Sobre mí · Jordy Rojas Aliaga",
        description:
          "De Lima a Porto: cómo llegué a ser ingeniero fullstack y mobile, y lo que construyo por gusto.",
      },
      hero: {
        title: "Me enganché a los problemas difíciles.",
        sub: "Lo que no cabe en el CV: de dónde vengo, por dónde pasé y qué construyo cuando nadie me lo pide.",
        photoAlt: "Jordy Rojas",
      },
      line: {
        title: "De Lima a Porto, paso a paso.",
        hint: "Elige un punto",
        listLabel: "Etapas de mi trayectoria",
        items: [
          {
            year: "2012",
            title: "Tecsup, Lima",
            text: "Estudio Redes y Comunicación de Datos hasta 2014.",
          },
          {
            year: "2015",
            title: "Mi primer trabajo en software",
            text: "Entro como Analista de Software en la Clínica Médica Climper. Apps móviles, una API REST y bases de datos durante cinco años.",
          },
          {
            year: "2015",
            title: "Ingeniería de Software",
            text: "Empiezo la carrera en la UPC mientras trabajo. La termino en 2021.",
          },
          {
            year: "2020",
            title: "Holinsys",
            text: "Analista de Ingeniería de Software. Angular e Ionic por delante, Node.js y Express por detrás. Ese año también me certifico en Scrum.",
          },
          {
            year: "2021",
            title: "ITData Consulting",
            text: "Full Stack con React dentro de un equipo Scrum. Entrego los proyectos un 10% antes de lo planeado.",
          },
          {
            year: "2022",
            title: "Motorline, Portugal",
            text: "Full Stack y Mobile. Flutter, widgets nativos en Android e iOS y una app de escritorio que baja un 20% los errores operativos.",
          },
          {
            year: "2024",
            title: "NestJS en serio",
            text: "Tres cursos de NestJS en tres meses y una API de reportes PDF construida por mi cuenta.",
          },
        ],
      },
      route: {
        title: "Lima ↔ Porto",
        text: "Estudié y trabajé en Lima. Hoy vivo y trabajo en Porto.",
        km: "unos 9.150 km en línea recta",
        from: "Lima",
        to: "Porto",
        tags: ["Español · nativo", "Português · B2", "English · B1"],
        photoAlt: "Jordy en Porto",
      },
      built: {
        title: "Lo que construyo por gusto.",
        intro: "Tres proyectos personales que nadie me pidió.",
        cta: "Ver el caso",
        items: [
          {
            title: "API de reportes PDF",
            year: "2024",
            text: "Backend que toco menos en Motorline, así que lo practico aquí.",
            slug: "pdf-report-api",
          },
          {
            title: "Cinemapedia",
            year: "2024",
            text: "Flutter con arquitectura limpia en tres capas y favoritos sin conexión.",
            slug: "movies-app",
          },
          {
            title: "¿Quién es ese Pokémon?",
            year: "2021–2026",
            text: "Uno de mis primeros proyectos serios en Vue 3 y TypeScript. En 2026 volví y lo rediseñé desde cero.",
            slug: "poke-web",
          },
        ],
      },
      lessons: {
        title: "Lo que me llevo.",
        items: [
          "Lo difícil primero. Lo fácil se acomoda solo.",
          "Entregar antes es aprender antes.",
          "Un arreglo que no evita la repetición solo gana tiempo.",
          "Cuando el framework no llega, bajo a lo nativo.",
          "El código limpio es una cortesía con quien lo lea después.",
          "Los cursos terminan. Los proyectos no.",
        ],
      },
    },
    nav: {
      aria: "Principal",
      home: "Jordy Rojas Aliaga, inicio",
      about: "Sobre mí",
      work: "Proyectos",
      experience: "Experiencia",
      stack: "Stack",
      education: "Estudios",
      cta: "Hablemos",
      langLabel: "Idioma",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
      clock: "Porto",
    },
    hero: {
      h1: "Jordy Rojas Aliaga, ingeniero fullstack y mobile de Lima, ahora en Porto",
      hello: "¡Hola!",
      soy: "Soy",
      name: "Jordy",
      role: "Ingeniero fullstack y mobile · Porto, PT",
      pillRoute: "🇵🇪 Lima ✈ 🇵🇹 Porto",
      pillYears: "+8 años creando software",
      typed: ["jordy rojas aliaga", "de Lima, Perú", "ahora en Porto", "Flutter y NestJS", "programando desde 2015"],
      sub: "Flutter, NestJS y más de 8 años lanzando producto entre Perú y Portugal. Lideré una app de escritorio dentro de una fábrica real.",
      cta: "Ver proyectos",
      secondary: "Escríbeme",
      photoAlt: "Jordy Rojas sonriendo, con gorro de pescador y las manos en los bolsillos",
      statsLabel: "Cifras de mi trayectoria",
      stats: [
        { n: "8+", l: "años lanzando software" },
        { n: "4", l: "empresas en 2 países" },
        { n: "20%", l: "menos errores operativos en Motorline" },
      ],
    },
    experience: {
      title: "Busco el problema difícil.",
      sub: "Cuatro empresas, dos países y una costumbre: entregar.",
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
      caseStudy: "Ver el proyecto",
      demo: "Probar la demo",
      items: [
        {
          title: "Integración móvil nativa",
          collage: "widgets",
          slug: "native-mobile-integration",
          context: "Motorline · 2022–Actualidad",
          detail:
            "Una app móvil en Flutter ampliada con widgets nativos de Android e iOS. Cierra la brecha entre el framework y la plataforma para una experiencia más fluida.",
          tags: ["Flutter", "Kotlin", "Widgets nativos", "Push Notifications"],
        },
        {
          title: "Monitoreo de producción y control de calidad",
          collage: "monitor",
          slug: "production-monitoring",
          context: "Motorline · 2022–Actualidad",
          detail:
            "Una plataforma de escritorio en Flutter que sigue en tiempo real la eficiencia de las tareas de producción y sincroniza datos entre sistemas. Los operarios ven el problema antes de que sea un defecto.",
          outcome: "20% menos errores operativos",
          tags: ["Flutter", "Node.js", "Cron", "Sincronización de datos"],
        },
        {
          title: "API de reportes PDF",
          collage: "pdf",
          context: "Proyecto personal · 2024",
          detail:
            "Una API en NestJS que convierte datos de Prisma y PostgreSQL en reportes PDF bajo demanda: facturas, certificados, tablas de países y paneles con gráficos SVG. Sin motor de plantillas.",
          tags: ["NestJS", "Prisma", "PostgreSQL", "PDFKit"],
          slug: "pdf-report-api",
        },
        {
          title: "Cinemapedia",
          collage: "cinema",
          context: "Proyecto personal · 2024",
          detail:
            "Una app Flutter para explorar y buscar películas de TMDB, con reparto y sinopsis en cada detalle, favoritos sin conexión con Isar y tema claro u oscuro con 15 colores de acento.",
          tags: ["Flutter", "Riverpod", "Isar", "TMDB API"],
          slug: "movies-app",
        },
        {
          title: "¿Quién es ese Pokémon?",
          collage: "poke",
          context: "Proyecto personal · 2021–2026",
          detail:
            "Un juego de trivia en Vue 3 y TypeScript sobre PokeAPI. Adivina el Pokémon por su silueta antes de que se acaben el tiempo y los corazones, con tres niveles y tabla de récords local.",
          tags: ["Vue 3", "TypeScript", "PokeAPI", "Axios"],
          slug: "poke-web",
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
    projectPage: {
      back: "← Todos los proyectos",
      of: "de",
      year: "Año",
      client: "Cliente",
      role: "Rol",
      stack: "Tecnologías",
      challenge: "El reto",
      built: "Lo que construí",
      result: "El resultado",
      underHood: "Bajo el capó",
      underHoodSub: "Para quien quiere ver cómo está hecho por dentro.",
      next: "Siguiente proyecto",
      github: "Ver el código",
      demo: "Probar la demo",
      nda: "Las pantallas están bajo NDA.",
      ndaCta: "Escríbeme y te lo cuento",
      copy: "Copiar",
      copied: "Copiado",
      copyKeys: "Cmd/Ctrl + C",
      copyAria: "Copiar el código",
      copiedStatus: "Código copiado.",
      codeOf: "Código de",
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
      github: "GitHub",
      lead: "Antes de la letra pequeña, escríbeme a",
      copyHint: "Clic para copiar",
      copied: "Copiado. Hablamos pronto.",
      copyFailed: "Seleccionado. Pulsa Cmd o Ctrl + C.",
      phoneAlt: "Un teléfono antiguo de disco sonando",
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
        "Jordy Rojas Aliaga, fullstack and mobile engineer in Porto. 8+ years shipping web and mobile products across Portugal and Peru. Drawn to hard problems, not easy ones.",
    },
    marquee: [
      "Porto ↔ Lima",
      "Flutter + NestJS",
      "8+ years shipping software",
      "ES · PT · EN",
      "Coding since 2015",
    ],
    intro: {
      words: { peru: "From Peru", world: "To the world", apps: "Apps", apis: "APIs", works: "That work" },
      captions: {
        peru: "Lima, Peru · where it all started",
        italy: "Italy",
        switzerland: "Switzerland",
        ireland: "Ireland",
        portugal: "Portugal · since 2022",
      },
      counter: "From Peru ✈ to the world",
      final: "Jordy",
      skip: "Skip intro →",
    },
    quote: {
      lines: ["“ship it on Friday,", "sleep well on Saturday,", "still working on Monday.”"],
      by: "rule no. 1 of my keyboard",
    },
    aboutTeaser: {
      title: "What doesn't fit on a resume.",
      text: "From Lima to Porto, eight years of craft and one habit: going for the hard problem first.",
      cta: "Read my story",
    },
    about: {
      meta: {
        title: "About · Jordy Rojas Aliaga",
        description:
          "From Lima to Porto: how I became a fullstack and mobile engineer, and what I build for fun.",
      },
      hero: {
        title: "I got hooked on hard problems.",
        sub: "What doesn't fit on a resume: where I come from, what I went through and what I build when nobody asks me to.",
        photoAlt: "Jordy Rojas",
      },
      line: {
        title: "From Lima to Porto, step by step.",
        hint: "Pick a dot",
        listLabel: "Stages of my path",
        items: [
          {
            year: "2012",
            title: "Tecsup, Lima",
            text: "I study Networking and Data Communications until 2014.",
          },
          {
            year: "2015",
            title: "First job in software",
            text: "I join Clínica Médica Climper as a Software Analyst. Mobile apps, a REST API and databases for five years.",
          },
          {
            year: "2015",
            title: "Software Engineering",
            text: "I start the degree at UPC while working. I finish in 2021.",
          },
          {
            year: "2020",
            title: "Holinsys",
            text: "Software Engineering Analyst. Angular and Ionic up front, Node.js and Express behind. I also get Scrum certified that year.",
          },
          {
            year: "2021",
            title: "ITData Consulting",
            text: "Full Stack with React inside a Scrum team. I deliver projects 10% ahead of plan.",
          },
          {
            year: "2022",
            title: "Motorline, Portugal",
            text: "Full Stack and Mobile. Flutter, native widgets on Android and iOS, and a desktop app that cuts operational errors by 20%.",
          },
          {
            year: "2024",
            title: "NestJS, for real",
            text: "Three NestJS courses in three months and a PDF report API I built on my own.",
          },
        ],
      },
      route: {
        title: "Lima ↔ Porto",
        text: "I studied and worked in Lima. Today I live and work in Porto.",
        km: "about 9,150 km as the crow flies",
        from: "Lima",
        to: "Porto",
        tags: ["Español · native", "Português · B2", "English · B1"],
        photoAlt: "Jordy in Porto",
      },
      built: {
        title: "What I build for fun.",
        intro: "Three personal projects nobody asked for.",
        cta: "See the case",
        items: [
          {
            title: "PDF Report Generation API",
            year: "2024",
            text: "Backend work I touch less at Motorline, so I practice it here.",
            slug: "pdf-report-api",
          },
          {
            title: "Cinemapedia",
            year: "2024",
            text: "Flutter with a three-layer clean architecture and offline favorites.",
            slug: "movies-app",
          },
          {
            title: "¿Quién es ese Pokémon?",
            year: "2021–2026",
            text: "One of my first serious Vue 3 and TypeScript projects. In 2026 I came back and redesigned it from scratch.",
            slug: "poke-web",
          },
        ],
      },
      lessons: {
        title: "What I carry with me.",
        items: [
          "Hard problems first. The easy ones sort themselves out.",
          "Delivering early means learning early.",
          "A fix that doesn't prevent the repeat only buys time.",
          "When the framework runs out, go native.",
          "Clean code is a courtesy to whoever reads it next.",
          "Courses end. Projects don't.",
        ],
      },
    },
    nav: {
      aria: "Primary",
      home: "Jordy Rojas Aliaga, home",
      about: "About",
      work: "Work",
      experience: "Experience",
      stack: "Stack",
      education: "Education",
      cta: "Let's talk",
      langLabel: "Language",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      clock: "Porto",
    },
    hero: {
      h1: "Jordy Rojas Aliaga, fullstack and mobile engineer from Lima, now in Porto",
      hello: "Hi!",
      soy: "I'm",
      name: "Jordy",
      role: "Fullstack & mobile engineer · Porto, PT",
      pillRoute: "🇵🇪 Lima ✈ 🇵🇹 Porto",
      pillYears: "8+ years building software",
      typed: ["jordy rojas aliaga", "from Lima, Peru", "now in Porto", "Flutter & NestJS", "coding since 2015"],
      sub: "Flutter, NestJS and 8+ years shipping product between Peru and Portugal. I led a desktop app inside a real factory.",
      cta: "See my work",
      secondary: "Write to me",
      photoAlt: "Jordy Rojas smiling, wearing a bucket hat with hands in pockets",
      statsLabel: "Career numbers",
      stats: [
        { n: "8+", l: "years shipping software" },
        { n: "4", l: "companies in 2 countries" },
        { n: "20%", l: "fewer operational errors at Motorline" },
      ],
    },
    experience: {
      title: "I look for the hard problem.",
      sub: "Four companies, two countries and one habit: shipping.",
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
      caseStudy: "View the project",
      demo: "Try the live demo",
      items: [
        {
          title: "Native Mobile Integration",
          collage: "widgets",
          slug: "native-mobile-integration",
          context: "Motorline · 2022–Present",
          detail:
            "A Flutter mobile app extended with native Android and iOS widgets. Closes the gap between the framework and the platform for a smoother experience.",
          tags: ["Flutter", "Kotlin", "Native Widgets", "Push Notifications"],
        },
        {
          title: "Production Monitoring & Quality Control",
          collage: "monitor",
          slug: "production-monitoring",
          context: "Motorline · 2022–Present",
          detail:
            "A Flutter desktop platform that tracks production-task efficiency in real time and syncs data across systems. Operators see the problem before it becomes a defect.",
          outcome: "20% fewer operational errors",
          tags: ["Flutter", "Node.js", "Cron Automation", "Data Sync"],
        },
        {
          title: "PDF Report Generation API",
          collage: "pdf",
          context: "Personal project · 2024",
          detail:
            "A NestJS API that turns Prisma and PostgreSQL data into PDF reports on demand: invoices, certificates, country tables and dashboards with embedded SVG charts. No templating engine.",
          tags: ["NestJS", "Prisma", "PostgreSQL", "PDFKit"],
          slug: "pdf-report-api",
        },
        {
          title: "Cinemapedia",
          collage: "cinema",
          context: "Personal project · 2024",
          detail:
            "A Flutter app for browsing and searching TMDB movies, with cast and synopsis on every detail page, offline favorites via Isar, and a light or dark theme with 15 accent colors.",
          tags: ["Flutter", "Riverpod", "Isar", "TMDB API"],
          slug: "movies-app",
        },
        {
          title: "¿Quién es ese Pokémon?",
          collage: "poke",
          context: "Personal project · 2021–2026",
          detail:
            "A Vue 3 and TypeScript trivia game on PokeAPI. Guess the Pokémon from its silhouette before the clock and your hearts run out, with three difficulty tiers and a local high-score board.",
          tags: ["Vue 3", "TypeScript", "PokeAPI", "Axios"],
          slug: "poke-web",
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
    projectPage: {
      back: "← All projects",
      of: "of",
      year: "Year",
      client: "Client",
      role: "Role",
      stack: "Stack",
      challenge: "The challenge",
      built: "What I built",
      result: "The result",
      underHood: "Under the hood",
      underHoodSub: "For anyone who wants to see how it is built inside.",
      next: "Next project",
      github: "View the source",
      demo: "Try the live demo",
      nda: "Screens are under NDA.",
      ndaCta: "Write to me and I'll tell you more",
      copy: "Copy",
      copied: "Copied",
      copyKeys: "Cmd/Ctrl + C",
      copyAria: "Copy the code",
      copiedStatus: "Code copied.",
      codeOf: "Code of",
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
      github: "GitHub",
      lead: "Before the fine print, write to me at",
      copyHint: "Click to copy",
      copied: "Copied. Talk soon.",
      copyFailed: "Selected. Press Cmd or Ctrl + C.",
      phoneAlt: "A vintage rotary phone ringing",
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

/** Screenshot covers (About page cards), keyed by project slug. Motorline work is private: no cover. */
export const covers: Record<string, { src: string; width: number; height: number; fit: "cover" | "contain"; alt: Record<Lang, string> }> = {
  "pdf-report-api": {
    src: "/projects/pdf-report-api/html-report.png",
    width: 848,
    height: 1200,
    fit: "contain",
    alt: {
      es: "Página PDF generada por la API con títulos, listas anidadas y texto con formato",
      en: "PDF page generated by the API with headings, nested lists and formatted text",
    },
  },
  "movies-app": {
    src: "/projects/movies-app/dark-home.jpg",
    width: 322,
    height: 700,
    fit: "contain",
    alt: {
      es: "Pantalla de inicio de Cinemapedia en modo oscuro, con carrusel y películas en cines",
      en: "Cinemapedia home screen in dark mode, with a carousel and movies now in theaters",
    },
  },
  "poke-web": {
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

/**
 * Illustrated collage per project (638x800 JPG). Unlike `covers`, these exist for every
 * project, including the private Motorline work that has no public screenshots.
 */
export const collages = {
  widgets: {
    src: "/projects/collages/widgets.jpg",
    alt: {
      es: "Collage: widgets saliendo de un móvil",
      en: "Collage: widgets popping out of a phone",
    },
  },
  monitor: {
    src: "/projects/collages/monitor.jpg",
    alt: {
      es: "Collage: un capataz delante de manómetros",
      en: "Collage: a factory foreman in front of pressure gauges",
    },
  },
  pdf: {
    src: "/projects/collages/pdf.jpg",
    alt: {
      es: "Collage: una mecanógrafa de los años 50 rodeada de informes impresos",
      en: "Collage: a 1950s typist surrounded by printed reports",
    },
  },
  cinema: {
    src: "/projects/collages/cinema.jpg",
    alt: {
      es: "Collage: una mujer con un móvil y una tira de película",
      en: "Collage: a woman holding a phone and a strip of film",
    },
  },
  poke: {
    src: "/projects/collages/poke.jpg",
    alt: {
      es: "Collage: un niño estudiando una silueta misteriosa",
      en: "Collage: a kid studying a mysterious silhouette",
    },
  },
} as const satisfies Record<string, { src: string; alt: Record<Lang, string> }>;
export type CollageKey = keyof typeof collages;
export const COLLAGE_SIZE = { width: 638, height: 800 } as const;

export interface ProjectItem {
  title: string;
  collage?: CollageKey;
  /** Slug of the project's detail page, see `i18n/projects.ts`. */
  slug: string;
  context: string;
  detail: string;
  tags: string[];
  outcome?: string;
  demo?: string;
}

/** The full shape of one language's text. Adding a key here forces every language to provide it. */
export interface Content {
  htmlLang: string;
  ogLocale: string;
  meta: { title: string; description: string };
  marquee: string[];
  /** First-visit intro: giant words as windows onto moving images. */
  intro: {
    words: { peru: string; world: string; apps: string; apis: string; works: string };
    captions: { peru: string; italy: string; switzerland: string; ireland: string; portugal: string };
    counter: string;
    final: string;
    skip: string;
  };
  /** A breather between the hero and the rest, in handwriting. */
  quote: { lines: string[]; by: string };
  aboutTeaser: { title: string; text: string; cta: string };
  about: {
    meta: { title: string; description: string };
    hero: { title: string; sub: string; photoAlt: string };
    line: {
      title: string;
      hint: string;
      listLabel: string;
      items: { year: string; title: string; text: string }[];
    };
    route: { title: string; text: string; km: string; from: string; to: string; tags: string[]; photoAlt: string };
    built: {
      title: string;
      intro: string;
      cta: string;
      items: { title: string; year: string; text: string; slug: string }[];
    };
    lessons: { title: string; items: string[] };
  };
  nav: {
    aria: string;
    home: string;
    about: string;
    work: string;
    experience: string;
    stack: string;
    education: string;
    cta: string;
    langLabel: string;
    menuOpen: string;
    menuClose: string;
    /** Label for the live Porto clock. */
    clock: string;
  };
  hero: {
    /** Real, accessible heading. The big words on screen are decorative. */
    h1: string;
    hello: string;
    soy: string;
    name: string;
    role: string;
    pillRoute: string;
    pillYears: string;
    /** Phrases the hero types out in turn. The first one is the static fallback. */
    typed: string[];
    sub: string;
    cta: string;
    secondary: string;
    photoAlt: string;
    statsLabel: string;
    stats: { n: string; l: string }[];
  };
  experience: {
    title: string;
    sub: string;
    roles: { company: string; role: string; place: string; dates: string; detail: string }[];
  };
  projects: { title: string; caseStudy: string; demo: string; items: ProjectItem[] };
  /** Labels shared by every project detail page (the project texts are in `i18n/projects.ts`). */
  projectPage: {
    back: string;
    of: string;
    year: string;
    client: string;
    role: string;
    stack: string;
    challenge: string;
    built: string;
    result: string;
    underHood: string;
    underHoodSub: string;
    next: string;
    github: string;
    demo: string;
    nda: string;
    ndaCta: string;
    /** Code block: button labels and the screen-reader messages. */
    copy: string;
    copied: string;
    /** Shown on the button when the clipboard is blocked and the code was selected instead. */
    copyKeys: string;
    copyAria: string;
    copiedStatus: string;
    codeOf: string;
  };
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
    github: string;
    /** Line above the copyable email. */
    lead: string;
    copyHint: string;
    copied: string;
    copyFailed: string;
    phoneAlt: string;
    loc: string;
    lang: string;
    copyright: string;
  };
}
