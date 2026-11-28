export const langs = ["es", "en", "pt", "it"] as const;
export type Lang = (typeof langs)[number];
/**
 * Languages whose pages exist but are not translated yet (they reuse the English text, with the
 * navigation translated). They are `noindex`, left out of the sitemap, hreflang and the root
 * redirect. Empty this list, language by language, as each translation is reviewed.
 */
export const provisionalLangs: readonly Lang[] = ["pt", "it"];
export const isProvisional = (l: Lang): boolean => provisionalLangs.includes(l);
/** Languages that are translated and published. */
export const liveLangs: readonly Lang[] = langs.filter((l) => !isProvisional(l));

/** How each language greets and names itself, used by the language picker. Same in every page language. */
export const langMeta: Record<Lang, { name: string; greeting: string }> = {
  es: { name: "Español", greeting: "Hola" },
  en: { name: "English", greeting: "Hello" },
  pt: { name: "Português", greeting: "Olá" },
  it: { name: "Italiano", greeting: "Ciao" },
};
/** Used by "/" when the visitor has no saved choice and no browser language matches. */
export const defaultLang: Lang = "en";

export const EMAIL = "rojas71421@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/dash128/";
export const GITHUB = "https://github.com/dasH128";

/** First job in software (Clínica Climper, Jan 2015). */
export const CAREER_START = 2015;
/**
 * "N+" years in software, computed at build time. It subtracts one year on purpose: the claim
 * stays true all year, and it goes up by itself every January (2026 -> 10+, 2027 -> 11+).
 */
export const YEARS_IN_CODE = new Date().getFullYear() - CAREER_START - 1;

/** The root URL redirects by language with JavaScript, but chats and social networks do not run
    scripts: they read this, so it has to work for any reader, hence both languages. */
export const rootMeta = {
  title: "Jordy Rojas Aliaga · Fullstack & Mobile Engineer",
  description: "Ingeniero fullstack y mobile en Porto · Fullstack & mobile engineer in Porto. Flutter, NestJS.",
  ogAlt: "Jordy Rojas Aliaga, fullstack & mobile engineer, Lima to Porto",
};

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
      // Short on purpose: chats and social networks cut long descriptions.
      description:
        `Ingeniero fullstack y mobile en Porto. ${YEARS_IN_CODE}+ años lanzando producto entre Perú y Portugal. Flutter, NestJS y problemas difíciles.`,
      jobTitle: "Ingeniero fullstack y mobile",
      ogAlt: "Jordy Rojas Aliaga, ingeniero fullstack y mobile, de Lima a Porto",
    },
    marquee: [
      "Porto ↔ Lima",
      "Flutter + NestJS",
      `${YEARS_IN_CODE}+ años lanzando software`,
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
      text: `De Lima a Porto, más de ${YEARS_IN_CODE} años de oficio y una costumbre: ir primero por el problema difícil.`,
      cta: "Leer mi historia",
    },
    about: {
      meta: {
        title: "Sobre mí · Jordy Rojas Aliaga",
        description:
          "Ingeniero fullstack y mobile, de Lima a Porto: cómo pasé de configurar sistemas a crear, y lo que no cabe en el CV.",
      },
      hero: {
        label: "Sobre mí",
        title: { before: "Sin miedo al", accent: "éxito." },
        lead: "Soy Jordy, ingeniero full stack y mobile. Nací en Lima, estudié redes antes que software y desde julio de 2022 vivo en Porto, donde trabajo en Motorline.",
        lead2: "Lo que más me gusta es convertir una idea en algo que funciona de verdad.",
        chips: [`${YEARS_IN_CODE}+ años`, "Full Stack y Mobile"],
        photoAlt:
          "Jordy sentado en unas escaleras de hormigón al sol, con gorro de pescador y zapatillas, mirando hacia un lado con media sonrisa",
        caption: "Jordy",
        stickerBorn: "🇵🇪 Nacido en Lima",
        stickerLiving: "🇵🇹 Creando en Porto",
        note: `${YEARS_IN_CODE}+ años de oficio y lo que viene.`,
      },
      bento: {
        aria: "Datos rápidos",
        route: { label: "Ruta", from: "Lima", to: "Porto", km: "9.150 km · desde julio de 2022" },
        years: { label: "Oficio", caption: "años escribiendo software" },
        langs: {
          label: "Tres formas de saludar",
          items: [
            { word: "Hola", level: "Español · nativo", pct: 100 },
            { word: "Olá", level: "Português · B2", pct: 72 },
            { word: "Hello", level: "English · B1", pct: 58 },
          ],
        },
        role: { label: "Ahora", title: "Full Stack", accent: "y Mobile", where: "en Motorline, Porto" },
        edu: {
          label: "Estudié",
          big: "UPC",
          degree: "Ingeniería de Software",
          detail: ", Lima, 2015 a 2021. Antes, Redes en Tecsup.",
        },
        name: { label: "Nombre", signature: "Jordy Rojas Aliaga" },
      },
      giro: {
        label: "El giro",
        title: "De configurar a crear.",
        before: {
          label: "Antes · Tecsup, 2012 a 2014",
          title: "Configurar y mantener",
          text: "Estudié Redes y Comunicación de Datos. Aprendí cómo viajan los datos y cómo se mantiene un sistema en pie.",
        },
        arrow: ["y un día", "pasó esto"],
        after: {
          label: "Después · desde 2015",
          title: "Crear",
          text: "Descubrí que programando podía convertir ideas en soluciones reales, y me enganché. Todo lo que vino después sale de ahí.",
          chips: ["Climper 2015", "Holinsys 2020", "ITData 2021", "Motorline 2022"],
        },
      },
      off: {
        title: "Fuera del",
        accent: "teclado.",
        lead: "Lo que ningún CV pregunta.",
        cropAlts: [
          "Detalle del retrato: rostro con gorro",
          "Detalle del retrato: manos y brazo",
          "Detalle del retrato: zapatillas en las escaleras",
        ],
        items: [
          {
            label: "De niño, en Lima",
            title: "Horas sin aburrirme.",
            text: "Mucho videojuego, dibujos animados y fútbol con los amigos. Era de esos niños que podían pasar horas jugando sin aburrirse.",
          },
          {
            label: "Un domingo en Porto",
            title: "Domingo sin prisa.",
            text: "Depende del día, pero normalmente salgo a caminar, tomo un café, conozco algún sitio nuevo o simplemente descanso y disfruto del día.",
          },
          {
            label: "Mi error favorito en producción",
            title: "Producción tiene personalidad.",
            text: "Una vez algo funcionaba perfecto en desarrollo y, al llegar a producción, decidió tener personalidad propia 😂 Desde entonces no me confío hasta comprobarlo todo en el entorno real.",
          },
        ],
      },
      lessons: {
        title: "Cómo trabajo.",
        sub: "seis reglas, cada una con su prueba.",
        items: [
          { title: "Lo difícil primero.", note: "Lo fácil se acomoda solo.", proof: "App de escritorio en Flutter, Motorline" },
          { title: "Entregar antes es aprender antes.", proof: "ITData: proyectos un 10% antes de lo planeado" },
          {
            title: "Un arreglo que no evita la repetición solo gana tiempo.",
            proof: "Motorline: 20% menos errores operativos",
          },
          { title: "Cuando el framework no llega, bajo a lo nativo.", proof: "Widgets nativos en Android e iOS" },
          {
            title: "El código limpio es una cortesía.",
            note: "Con quien lo lea después.",
            proof: "Certificado en SOLID y Clean Code, 2023",
          },
          {
            title: "Los cursos terminan.",
            accent: "Los proyectos no.",
            proof: "Tres cursos de NestJS y una API de reportes PDF, 2024",
          },
        ],
      },
      close: { title: "¿Próxima parada?", hand: "tu equipo, quizás.", cta: "Escríbeme", link: "o mira lo que construyo" },
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
      langClose: "Cerrar",
      here: "estás aquí",
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
      pillYears: `+${YEARS_IN_CODE} años creando software`,
      typed: ["jordy rojas aliaga", "de Lima, Perú", "ahora en Porto", "Flutter y NestJS", "programando desde 2015"],
      sub: `Flutter, NestJS y más de ${YEARS_IN_CODE} años lanzando producto entre Perú y Portugal. Lideré una app de escritorio dentro de una fábrica real.`,
      cta: "Ver proyectos",
      secondary: "Escríbeme",
      photoAlt: "Jordy Rojas sonriendo, con gorro de pescador y las manos en los bolsillos",
      statsLabel: "Cifras de mi trayectoria",
      stats: [
        { n: `${YEARS_IN_CODE}+`, l: "años lanzando software" },
        { n: "4", l: "empresas en 2 países" },
        { n: "20%", l: "menos errores operativos en Motorline" },
      ],
    },
    experience: {
      title: "No busco trabajo. Busco el problema difícil.",
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
      // Short on purpose: chats and social networks cut long descriptions.
      description:
        `Fullstack and mobile engineer in Porto. ${YEARS_IN_CODE}+ years shipping product between Peru and Portugal. Flutter, NestJS and hard problems.`,
      jobTitle: "Fullstack and mobile engineer",
      ogAlt: "Jordy Rojas Aliaga, fullstack and mobile engineer, from Lima to Porto",
    },
    marquee: [
      "Porto ↔ Lima",
      "Flutter + NestJS",
      `${YEARS_IN_CODE}+ years shipping software`,
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
      text: `From Lima to Porto, more than ${YEARS_IN_CODE} years of craft and one habit: going for the hard problem first.`,
      cta: "Read my story",
    },
    about: {
      meta: {
        title: "About · Jordy Rojas Aliaga",
        description:
          "Fullstack and mobile engineer, from Lima to Porto: how I went from configuring systems to building, and what doesn't fit on a resume.",
      },
      hero: {
        label: "About me",
        title: { before: "Not afraid of", accent: "success." },
        lead: "I'm Jordy, a full stack and mobile engineer. I was born in Lima, studied networking before software, and since July 2022 I live in Porto, where I work at Motorline.",
        lead2: "What I like most is turning an idea into something that really works.",
        chips: [`${YEARS_IN_CODE}+ years`, "Full Stack & Mobile"],
        photoAlt:
          "Jordy sitting on sunlit concrete steps, wearing a bucket hat and sneakers, looking to one side with a half smile",
        caption: "Jordy",
        stickerBorn: "🇵🇪 Born in Lima",
        stickerLiving: "🇵🇹 Building in Porto",
        note: `${YEARS_IN_CODE}+ years in and what comes next.`,
      },
      bento: {
        aria: "Quick facts",
        route: { label: "Route", from: "Lima", to: "Porto", km: "9,150 km · since July 2022" },
        years: { label: "Craft", caption: "years writing software" },
        langs: {
          label: "Three ways to say hi",
          items: [
            { word: "Hola", level: "Español · native", pct: 100 },
            { word: "Olá", level: "Português · B2", pct: 72 },
            { word: "Hello", level: "English · B1", pct: 58 },
          ],
        },
        role: { label: "Now", title: "Full Stack", accent: "& Mobile", where: "at Motorline, Porto" },
        edu: {
          label: "Studied",
          big: "UPC",
          degree: "Software Engineering",
          detail: ", Lima, 2015 to 2021. Before that, Networking at Tecsup.",
        },
        name: { label: "Name", signature: "Jordy Rojas Aliaga" },
      },
      giro: {
        label: "The turn",
        title: "From configuring to creating.",
        before: {
          label: "Before · Tecsup, 2012 to 2014",
          title: "Configure and maintain",
          text: "I studied Networking and Data Communications. I learned how data travels and how to keep a system standing.",
        },
        arrow: ["and one day", "this happened"],
        after: {
          label: "After · since 2015",
          title: "Create",
          text: "I found out that by programming I could turn ideas into real solutions, and I got hooked. Everything after that comes from there.",
          chips: ["Climper 2015", "Holinsys 2020", "ITData 2021", "Motorline 2022"],
        },
      },
      off: {
        title: "Away from the",
        accent: "keyboard.",
        lead: "What no resume asks.",
        cropAlts: [
          "Portrait detail: face under a bucket hat",
          "Portrait detail: hands and arm",
          "Portrait detail: sneakers on the steps",
        ],
        items: [
          {
            label: "As a kid, in Lima",
            title: "Hours without getting bored.",
            text: "Lots of video games, cartoons and football with friends. I was one of those kids who could play for hours without getting bored.",
          },
          {
            label: "A Sunday in Porto",
            title: "A Sunday with no rush.",
            text: "It depends on the day, but usually I go for a walk, have a coffee, find a new place or simply rest and enjoy the day.",
          },
          {
            label: "My favourite production bug",
            title: "Production has a personality.",
            text: "Once something worked perfectly in development and, once in production, decided to have a personality of its own 😂 Since then I don't trust it until I've checked everything in the real environment.",
          },
        ],
      },
      lessons: {
        title: "How I work.",
        sub: "six rules, each with its proof.",
        items: [
          { title: "Hard problems first.", note: "The easy ones sort themselves out.", proof: "Flutter desktop app, Motorline" },
          { title: "Delivering early means learning early.", proof: "ITData: projects 10% ahead of plan" },
          {
            title: "A fix that doesn't prevent the repeat only buys time.",
            proof: "Motorline: 20% fewer operational errors",
          },
          { title: "When the framework runs out, go native.", proof: "Native widgets on Android and iOS" },
          {
            title: "Clean code is a courtesy.",
            note: "To whoever reads it next.",
            proof: "SOLID and Clean Code certified, 2023",
          },
          {
            title: "Courses end.",
            accent: "Projects don't.",
            proof: "Three NestJS courses and a PDF report API, 2024",
          },
        ],
      },
      close: { title: "Next stop?", hand: "your team, maybe.", cta: "Write to me", link: "or see what I build" },
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
      langClose: "Close",
      here: "you are here",
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
      pillYears: `${YEARS_IN_CODE}+ years building software`,
      typed: ["jordy rojas aliaga", "from Lima, Peru", "now in Porto", "Flutter & NestJS", "coding since 2015"],
      sub: `Flutter, NestJS and ${YEARS_IN_CODE}+ years shipping product between Peru and Portugal. I led a desktop app inside a real factory.`,
      cta: "See my work",
      secondary: "Write to me",
      photoAlt: "Jordy Rojas smiling, wearing a bucket hat with hands in pockets",
      statsLabel: "Career numbers",
      stats: [
        { n: `${YEARS_IN_CODE}+`, l: "years shipping software" },
        { n: "4", l: "companies in 2 countries" },
        { n: "20%", l: "fewer operational errors at Motorline" },
      ],
    },
    experience: {
      title: "I'm not looking for a job. I'm looking for the hard problem.",
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
/* Portuguese and Italian are provisional: English text, translated navigation (see `provisionalLangs`). */
const pt: Content = {
  ...en,
  htmlLang: "pt-PT",
  ogLocale: "pt_PT",
  nav: {
    ...en.nav,
    aria: "Principal",
    home: "Jordy Rojas Aliaga, início",
    about: "Sobre mim",
    work: "Projetos",
    experience: "Experiência",
    stack: "Stack",
    education: "Formação",
    cta: "Falemos",
    langLabel: "Idioma",
    langClose: "Fechar",
    here: "estás aqui",
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
  },
};

const it: Content = {
  ...en,
  htmlLang: "it",
  ogLocale: "it_IT",
  nav: {
    ...en.nav,
    aria: "Principale",
    home: "Jordy Rojas Aliaga, home",
    about: "Chi sono",
    work: "Progetti",
    experience: "Esperienza",
    stack: "Stack",
    education: "Studi",
    cta: "Parliamone",
    langLabel: "Lingua",
    langClose: "Chiudi",
    here: "sei qui",
    menuOpen: "Apri il menu",
    menuClose: "Chiudi il menu",
  },
};

export const content: Record<Lang, Content> = { es, en, pt, it };

/**
 * Illustrated collage per project (638x800 JPG), including the private Motorline work that
 * has no public screenshots.
 */
export const collages = {
  widgets: {
    src: "/projects/collages/widgets.jpg",
    alt: {
      es: "Collage: widgets saliendo de un móvil",
      en: "Collage: widgets popping out of a phone",
      pt: "Colagem: widgets a saírem de um telemóvel",
      it: "Collage: widget che escono da uno smartphone",
    },
  },
  monitor: {
    src: "/projects/collages/monitor.jpg",
    alt: {
      es: "Collage: un capataz delante de manómetros",
      en: "Collage: a factory foreman in front of pressure gauges",
      pt: "Colagem: um capataz à frente de manómetros",
      it: "Collage: un caposquadra davanti a dei manometri",
    },
  },
  pdf: {
    src: "/projects/collages/pdf.jpg",
    alt: {
      es: "Collage: una mecanógrafa de los años 50 rodeada de informes impresos",
      en: "Collage: a 1950s typist surrounded by printed reports",
      pt: "Colagem: uma dactilógrafa dos anos 50 rodeada de relatórios impressos",
      it: "Collage: una dattilografa degli anni 50 circondata da report stampati",
    },
  },
  cinema: {
    src: "/projects/collages/cinema.jpg",
    alt: {
      es: "Collage: una mujer con un móvil y una tira de película",
      en: "Collage: a woman holding a phone and a strip of film",
      pt: "Colagem: uma mulher com um telemóvel e uma tira de filme",
      it: "Collage: una donna con uno smartphone e una pellicola",
    },
  },
  poke: {
    src: "/projects/collages/poke.jpg",
    alt: {
      es: "Collage: un niño estudiando una silueta misteriosa",
      en: "Collage: a kid studying a mysterious silhouette",
      pt: "Colagem: um miúdo a estudar uma silhueta misteriosa",
      it: "Collage: un bambino che studia una sagoma misteriosa",
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
  meta: {
    title: string;
    description: string;
    /** For the structured data (schema.org Person). */
    jobTitle: string;
    /** Alt text of the share image. */
    ogAlt: string;
  };
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
    hero: {
      label: string;
      title: { before: string; accent: string };
      lead: string;
      lead2: string;
      chips: string[];
      photoAlt: string;
      caption: string;
      stickerBorn: string;
      stickerLiving: string;
      note: string;
    };
    bento: {
      aria: string;
      route: { label: string; from: string; to: string; km: string };
      years: { label: string; caption: string };
      langs: { label: string; items: { word: string; level: string; pct: number }[] };
      role: { label: string; title: string; accent: string; where: string };
      edu: { label: string; big: string; degree: string; detail: string };
      name: { label: string; signature: string };
    };
    giro: {
      label: string;
      title: string;
      before: { label: string; title: string; text: string };
      arrow: [string, string];
      after: { label: string; title: string; text: string; chips: string[] };
    };
    off: {
      title: string;
      accent: string;
      lead: string;
      cropAlts: [string, string, string];
      items: { label: string; title: string; text: string }[];
    };
    lessons: {
      title: string;
      sub: string;
      items: { title: string; note?: string; accent?: string; proof: string }[];
    };
    close: { title: string; hand: string; cta: string; link: string };
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
    /** Close button of the language picker, and the handwritten "you are here" note. */
    langClose: string;
    here: string;
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
