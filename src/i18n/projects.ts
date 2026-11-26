/* Project detail pages: one template, five projects, every language in `langs`.
   Labels shared by all pages (Year, The challenge, ...) live in `content.projectPage`.
   Everything here is Jordy's own account of his projects (confirmed true by him); do not
   add claims, metrics or employers that are not already supplied. */

import type { CollageKey, Lang } from "./content";

export interface Shot {
  src: string;
  alt: string;
  caption: string;
}

/** One block of the technical layer ("Under the hood"). Backticks in text become <code>. */
export interface TechBlock {
  h: string;
  p?: string[];
  rows?: { base: string; summary: string }[];
  code?: { text: string; caption: string };
  shots?: Shot[];
}

export interface ProjectText {
  title: string;
  /** One line in handwriting under the title. */
  tagline: string;
  /** Meta description of the page. */
  description: string;
  client: string;
  role: string;
  year: string;
  tags: string[];
  stat?: { value: string; label: string };
  challenge: string;
  built: string;
  result: string;
  tech?: TechBlock[];
}

export interface ProjectDetail {
  slug: string;
  collage: CollageKey;
  github?: string;
  demo?: string;
  /** Private client work: no public screens or code. */
  nda?: boolean;
  /** Columns of the screenshot gallery on wide screens. */
  shotCols?: number;
  text: Record<Lang, ProjectText>;
}

const P = "/projects";

/* ------------------------------------------------------------------ code samples */

const pdfCode = `async getStatisticsService(): Promise<PDFKit.PDFDocument> {
  const topCountries = await this.customers.groupBy({
    by: ['country'],
    _count: true,
    orderBy: { _count: { country: 'desc' } },
    take: 10,
  });

  const infoCategories = await this.$queryRaw\`
    SELECT COUNT(*) AS TOTAL, C.CATEGORY_NAME
    FROM PRODUCTS P
    INNER JOIN CATEGORIES C ON P.CATEGORY_ID = C.CATEGORY_ID
    GROUP BY P.CATEGORY_ID, C.CATEGORY_NAME\`;

  const docDefinition = await getStatisticsReport({
    topCountries: topCountryData,
    infoCategories: infoCategoryData,
  });
  return this.printerService.createPdf(docDefinition);
}`;

const cinemaCode = `class MoviesNotifier extends StateNotifier<MoviesState> {
  int currentPage = 0;
  MovieCallback fetchMoreMovies;

  MoviesNotifier({required this.fetchMoreMovies})
      : super(MoviesState(movies: [])) {
    loadNextPage();
  }

  Future loadNextPage() async {
    if (state.isLoading) return;

    currentPage++;
    state = state.copyWith(isLoading: true);
    final movies = await fetchMoreMovies(page: currentPage);
    state = state.copyWith(movies: [...state.movies, ...movies]);
    await Future.delayed(const Duration(milliseconds: 300));
    state = state.copyWith(isLoading: false);
  }
}`;

const pokeCode = `usarAyuda() {
  if (this.ayudasRestantes <= 0 || this.ayudaUsadaEnPregunta || this.mostrarRespuesta) return

  const correcta = this.opcionesMostradas.find(p => p.id === this.pokemon.id)
  const incorrectas = this.opcionesMostradas.filter(p => p.id !== this.pokemon.id)
  const incorrectaAlAzar = incorrectas[Math.floor(Math.random() * incorrectas.length)]

  this.opcionesMostradas = [correcta, incorrectaAlAzar].sort(() => Math.random() - 0.5)
  this.ayudasRestantes--
  this.ayudaUsadaEnPregunta = true
}`;

/* ------------------------------------------------------------------ projects */

export const projects: ProjectDetail[] = [
  /* 1. Motorline: native widgets */
  {
    slug: "native-mobile-integration",
    collage: "widgets",
    nda: true,
    text: {
      es: {
        title: "Integración móvil nativa",
        tagline: "Flutter, te presento tu pantalla de inicio.",
        description:
          "Widgets nativos de Android e iOS y notificaciones push para una app Flutter en producción en Motorline.",
        client: "Motorline",
        role: "Desarrollador móvil",
        year: "2022–Actualidad",
        tags: ["Flutter", "Kotlin", "Widgets nativos", "Notificaciones push"],
        challenge:
          "Los usuarios querían ver la información clave sin abrir la app: directamente en la pantalla de inicio, y con un aviso cuando algo cambiara.",
        built:
          "Amplié la app de Flutter en producción con widgets nativos para Android (Kotlin) e iOS y notificaciones push, compartiendo el estado entre el motor de Flutter y el código nativo.",
        result: "Widgets y notificaciones siempre sincronizados con la app.",
      },
      en: {
        title: "Native Mobile Integration",
        tagline: "Flutter, meet your home screen.",
        description:
          "Native Android and iOS widgets and push notifications for a production Flutter app at Motorline.",
        client: "Motorline",
        role: "Mobile developer",
        year: "2022–Present",
        tags: ["Flutter", "Kotlin", "Native widgets", "Push notifications"],
        challenge:
          "Users wanted to see the key information without opening the app: right on the home screen, with an alert when something changed.",
        built:
          "I extended the production Flutter app with native widgets for Android (Kotlin) and iOS and push notifications, sharing state between the Flutter engine and the native code.",
        result: "Widgets and notifications always in sync with the app.",
      },
    },
  },

  /* 2. Motorline: production monitor */
  {
    slug: "production-monitoring",
    collage: "monitor",
    nda: true,
    text: {
      es: {
        title: "Monitoreo de producción y control de calidad",
        tagline: "Eficiencia en tiempo real en la fábrica.",
        description:
          "Plataforma de escritorio en Flutter que mide en tiempo real la eficiencia de producción en una fábrica y redujo un 20% los errores operativos.",
        client: "Motorline",
        role: "Desarrollador líder",
        year: "2022–Actualidad",
        tags: ["Flutter desktop", "Node.js", "Automatización con cron", "Sincronización de datos"],
        stat: { value: "−20%", label: "errores operativos" },
        challenge:
          "La fábrica necesitaba ver, en tiempo real, la eficiencia de cada tarea de producción y evitar que los pequeños errores se acumularan.",
        built:
          "Lideré una plataforma de escritorio en Flutter que mide en directo la eficiencia de las tareas de producción y mantiene los datos sincronizados entre sistemas, con servicios en Node.js y tareas programadas con cron.",
        result: "Los errores operativos bajaron un 20%.",
      },
      en: {
        title: "Production Monitoring & Quality Control",
        tagline: "Real-time efficiency on the factory floor.",
        description:
          "A Flutter desktop platform that tracks production efficiency in real time at a factory and cut operational errors by 20%.",
        client: "Motorline",
        role: "Lead developer",
        year: "2022–Present",
        tags: ["Flutter desktop", "Node.js", "Cron automation", "Data synchronization"],
        stat: { value: "−20%", label: "operational errors" },
        challenge:
          "The factory needed to see, in real time, the efficiency of every production task and stop small errors from piling up.",
        built:
          "I led a Flutter desktop platform that measures production-task efficiency live and keeps data synchronized across systems, with Node.js services and cron-scheduled jobs.",
        result: "Operational errors dropped by 20%.",
      },
    },
  },

  /* 3. PDF report API */
  {
    slug: "pdf-report-api",
    collage: "pdf",
    github: "https://github.com/dasH128/pdf-report-api-nest",
    shotCols: 2,
    text: {
      es: {
        title: "API de reportes PDF",
        tagline: "Entran datos, salen documentos impecables.",
        description:
          "Una API en NestJS y Prisma que convierte registros de la base de datos en reportes PDF bajo demanda: facturas, certificados, tablas y paneles con gráficos integrados.",
        client: "Proyecto personal",
        role: "Ingeniero backend",
        year: "2024",
        tags: ["NestJS", "Prisma", "PostgreSQL", "pdfmake", "PDFKit", "Chart.js"],
        challenge:
          "Casi todas las aplicaciones de empresa acaban necesitando imprimir algo: una factura, un certificado, un informe mensual. Quería un solo servicio capaz de hacerlo todo a partir de datos reales de la base de datos.",
        built:
          "Una API en NestJS que lee PostgreSQL con Prisma y genera PDFs listos: facturas de compra, certificados, tablas de referencia y paneles de estadísticas con gráficos SVG integrados. También convierte plantillas HTML en PDF.",
        result:
          "Un endpoint tipado y testeable por cada tipo de documento, lo bastante rápido como para generar informes al momento en lugar de en procesos nocturnos.",
        tech: [
          {
            h: "Por qué lo construí",
            p: [
              "Lo empecé al terminar el curso «Nest + Reportes: Genera PDF desde Node» de DevTalles y seguí ampliándolo por mi cuenta: nuevos tipos de reporte, consultas reales con Prisma en vez de datos estáticos y gráficos SVG generados en el servidor en vez de imágenes ya hechas. Es el proyecto con el que practico patrones de backend que toco menos en el trabajo móvil y de Flutter que hago a diario en Motorline.",
            ],
          },
          {
            h: "Arquitectura",
            p: [
              "Todos los endpoints siguen el mismo camino: un controlador resuelve la petición, un servicio obtiene los datos con Prisma (o ejecuta una consulta SQL directa cuando el constructor de consultas de Prisma no puede expresarla) y un `PrinterService` compartido convierte la definición de documento de pdfmake en un flujo PDF. Nada se guarda en caché ni se persiste: cada petición reconstruye el documento con datos en vivo.",
            ],
            rows: [
              {
                base: "/basic-report",
                summary:
                  "Certificados y tablas de referencia: una carta de empleo generada a partir de un empleado real y una lista de países que se puede filtrar por continente.",
              },
              {
                base: "/extra-reports",
                summary:
                  "Experimentos de formato: convertir una plantilla HTML existente directamente a PDF, un reporte de diseño fijo y un tamaño de página personalizado con un código QR integrado.",
              },
              {
                base: "/store-reports",
                summary:
                  "Reportes con datos: una factura de compra construida a partir de un pedido real (cliente, productos, totales) y un panel de estadísticas que combina un `groupBy` de Prisma con un join en SQL directo.",
              },
            ],
            code: {
              text: pdfCode,
              caption:
                "`store-reports.service.ts`: mezcla un `groupBy` de Prisma con un join en SQL directo y entrega ambos conjuntos de datos a una función que construye el reporte.",
            },
          },
          {
            h: "Resultado en pantalla",
            p: ["Las capturas son PDFs reales generados por la API en ejecución sobre una base de datos de prueba, no maquetas."],
            shots: [
              {
                src: `${P}/pdf-report-api/statistics.png`,
                alt: "PDF de estadísticas: un gráfico de anillo con los países de más clientes, un gráfico de líneas, uno de barras y uno de radar en una sola página",
                caption: "Estadísticas de clientes e inventario: `groupBy` de Prisma más un join en SQL directo, renderizados como gráficos.",
              },
              {
                src: `${P}/pdf-report-api/invoice.png`,
                alt: "PDF de una factura de compra con un código QR, los datos del cliente y una tabla de líneas",
                caption: "Un pedido de compra convertido en factura, obtenido en vivo con Prisma.",
              },
              {
                src: `${P}/pdf-report-api/countries.png`,
                alt: "PDF de países con una tabla a rayas que muestra códigos ISO, nombres, continentes y nombres locales",
                caption: "Una tabla de países de 12 páginas con filas a rayas y cabecera repetida.",
              },
              {
                src: `${P}/pdf-report-api/html-report.png`,
                alt: "PDF generado desde una plantilla HTML existente, con títulos, listas y estilos en línea",
                caption: "Una plantilla HTML existente convertida directamente a PDF.",
              },
            ],
          },
          {
            h: "Tecnologías",
            p: [
              "NestJS en la capa de API, Prisma sobre PostgreSQL para el acceso a datos, `pdfmake` para componer y maquetar el documento, PDFKit por debajo para el flujo PDF en sí, y Chart.js (renderizado en el servidor a SVG o PNG) para los gráficos del reporte de estadísticas.",
            ],
          },
        ],
      },
      en: {
        title: "PDF Report Generation API",
        tagline: "Data goes in, flawless documents come out.",
        description:
          "A NestJS + Prisma API that turns database records into PDF reports on demand: invoices, certificates, tables, and dashboards with embedded charts.",
        client: "Personal project",
        role: "Backend engineer",
        year: "2024",
        tags: ["NestJS", "Prisma", "PostgreSQL", "pdfmake", "PDFKit", "Chart.js"],
        challenge:
          "Almost every business application ends up needing to print something: an invoice, a certificate, a monthly report. I wanted a single service able to do all of it from real database data.",
        built:
          "A NestJS API that reads PostgreSQL through Prisma and generates ready PDFs: purchase invoices, certificates, reference tables and statistics dashboards with embedded SVG charts. It also converts HTML templates to PDF.",
        result:
          "One typed, testable endpoint per document type, fast enough to generate reports on the spot instead of in overnight batch jobs.",
        tech: [
          {
            h: "Why I built it",
            p: [
              "I started this after finishing DevTalles’ “Nest + Reportes: Genera PDF desde Node” course, then kept extending it on my own: adding new report types, real Prisma queries instead of static data, and SVG charts rendered server-side instead of pre-baked images. It’s the project I use to practice backend patterns I don’t get to touch as often on the mobile and Flutter work I do day to day at Motorline.",
            ],
          },
          {
            h: "Architecture",
            p: [
              "Every endpoint follows the same path: a controller resolves the request, a service pulls data through Prisma (or runs a raw query when Prisma’s query builder can’t express it), and a shared `PrinterService` turns a pdfmake document definition into a PDF stream. Nothing is cached or persisted: each request rebuilds the document from live data.",
            ],
            rows: [
              {
                base: "/basic-report",
                summary:
                  "Certificates and reference tables: an employment letter rendered from a live employee record, and a country list that can be filtered by continent.",
              },
              {
                base: "/extra-reports",
                summary:
                  "Format experiments: converting an existing HTML template straight to PDF, a fixed-layout report, and a custom page size with an embedded QR code.",
              },
              {
                base: "/store-reports",
                summary:
                  "Data-driven reports: a purchase invoice built from a real order (customer, products, totals), and a statistics dashboard combining a Prisma `groupBy` with a raw SQL join.",
              },
            ],
            code: {
              text: pdfCode,
              caption:
                "`store-reports.service.ts`: mixing a Prisma `groupBy` with a raw SQL join, then handing both datasets to a report builder function.",
            },
          },
          {
            h: "Sample output",
            p: ["Screenshots below are real PDFs generated by the running API against a seeded database, not mockups."],
            shots: [
              {
                src: `${P}/pdf-report-api/statistics.png`,
                alt: "Statistics report PDF: a donut chart of top customer countries, a line chart, a bar chart, and a radar chart on one page",
                caption: "Customer and inventory statistics: Prisma `groupBy` plus a raw SQL join, rendered as charts.",
              },
              {
                src: `${P}/pdf-report-api/invoice.png`,
                alt: "Purchase invoice PDF with a QR code, customer details, and a line-item table",
                caption: "A purchase order rendered as an invoice, pulled live from Prisma.",
              },
              {
                src: `${P}/pdf-report-api/countries.png`,
                alt: "Countries report PDF showing a striped table with ISO codes, names, continents, and local names",
                caption: "A 12-page country table with striped rows and a repeating header.",
              },
              {
                src: `${P}/pdf-report-api/html-report.png`,
                alt: "PDF rendered from an existing HTML template, showing headings, lists, and inline styles",
                caption: "An existing HTML template converted straight to PDF.",
              },
            ],
          },
          {
            h: "Stack",
            p: [
              "NestJS on the API layer, Prisma against PostgreSQL for data access, `pdfmake` for document composition and layout, PDFKit underneath for the actual PDF stream, and Chart.js (rendered server-side to SVG/PNG) for the charts embedded in the statistics report.",
            ],
          },
        ],
      },
    },
  },

  /* 4. Cinemapedia */
  {
    slug: "movies-app",
    collage: "cinema",
    github: "https://github.com/dasH128/movies-app-flutter",
    shotCols: 3,
    text: {
      es: {
        title: "Cinemapedia",
        tagline: "Una guía de bolsillo de lo que está en cartelera.",
        description:
          "Una app Flutter para descubrir películas: estrenos, populares y próximas de TMDB, con búsqueda, reparto y sinopsis en cada detalle y favoritos sin conexión con Isar.",
        client: "Proyecto personal",
        role: "Ingeniero móvil",
        year: "2024",
        tags: ["Flutter", "Dart", "Riverpod", "go_router", "Isar", "Dio", "TMDB API"],
        challenge:
          "Una app de películas es la prueba clásica de un stack móvil: muchas listas, imágenes, navegación y estado offline. La construí para afinar mi arquitectura en Flutter.",
        built:
          "Una app en Flutter sobre la API de TMDB con listas de estrenos, populares, mejor valoradas y próximas, búsqueda y fichas con reparto y sinopsis. Los favoritos se guardan offline con Isar; el estado vive en Riverpod y la navegación en go_router.",
        result:
          "Temas claro y oscuro con 15 colores de acento, scroll infinito fluido y una arquitectura fácil de ampliar.",
        tech: [
          {
            h: "Qué hace",
            p: [
              "La pantalla de inicio carga cuatro listas de TMDB (en cartelera, populares, mejor valoradas y próximos estrenos) en filas con scroll infinito, y las películas en cartelera hacen también de carrusel destacado arriba. Al tocar un póster se abre el detalle con la sinopsis, los géneros y las fotos del reparto, obtenidas del endpoint de créditos de TMDB. El icono de la lupa abre una búsqueda con debounce sobre la misma API, y cada detalle tiene un botón de favorito que se guarda en una base de datos Isar en el dispositivo, así que la pestaña de favoritos carga al instante, sin llamadas de red.",
            ],
          },
          {
            h: "Arquitectura",
            p: [
              "La app sigue una arquitectura limpia dividida en tres capas, cada una consciente solo de la que tiene debajo:",
            ],
            rows: [
              {
                base: "domain",
                summary:
                  "Núcleo independiente del framework: las entidades Movie y Actor y los contratos abstractos de repositorio y datasource de los que depende el resto de la app.",
              },
              {
                base: "infraestructure",
                summary:
                  "Las respuestas REST de TMDB se convierten en entidades del dominio mediante Dio, más un datasource de Isar que lee y escribe los favoritos en el dispositivo.",
              },
              {
                base: "presentation",
                summary:
                  "Providers de Riverpod para el estado, go_router para la navegación y las pantallas y widgets: la única capa que conoce a ambos.",
              },
            ],
            code: {
              text: cinemaCode,
              caption:
                "`movies_provider.dart`: el mismo patrón de paginación con `StateNotifier` sostiene las cuatro listas de inicio; solo cambia la función de carga con la que se construye cada una.",
            },
          },
          {
            h: "Pantallas",
            p: ["Las capturas son de la app ejecutándose en el simulador de iOS."],
            shots: [
              {
                src: `${P}/movies-app/home.jpg`,
                alt: "Pantalla de inicio con un carrusel de películas destacadas, una fila de en cartelera y otra de próximos estrenos",
                caption: "Inicio: carrusel destacado, en cartelera y próximos estrenos.",
              },
              {
                src: `${P}/movies-app/dark-home.jpg`,
                alt: "La misma pantalla de inicio en modo oscuro",
                caption: "Inicio oscuro: el tema se aplica al instante en todas las pantallas.",
              },
              {
                src: `${P}/movies-app/detail.jpg`,
                alt: "Pantalla de detalle con la sinopsis, los géneros, las fotos del reparto y un icono de favorito relleno",
                caption: "Detalle: sinopsis, géneros y reparto, con el botón de favorito.",
              },
              {
                src: `${P}/movies-app/dark-detail.png`,
                alt: "Pantalla de detalle en modo oscuro con la sinopsis, los géneros, las fotos del reparto y un icono de favorito relleno",
                caption: "Detalle oscuro: sinopsis, géneros y reparto, con el botón de favorito.",
              },
              {
                src: `${P}/movies-app/search.jpg`,
                alt: "Lista de resultados de búsqueda con varias películas que coinciden con la consulta, cada una con su valoración",
                caption: "Búsqueda: debounce de 500 ms contra la API de TMDB mientras escribes.",
              },
              {
                src: `${P}/movies-app/dark-search.png`,
                alt: "Lista de resultados de búsqueda en modo oscuro con varias películas y su valoración",
                caption: "Búsqueda oscura: debounce de 500 ms contra la API de TMDB mientras escribes.",
              },
              {
                src: `${P}/movies-app/favorites.png`,
                alt: "Pantalla de favoritos con una cuadrícula de dos pósters guardados",
                caption: "Favoritos: guardados en el dispositivo con Isar, sin ir a la red.",
              },
              {
                src: `${P}/movies-app/dark-favorites.png`,
                alt: "Pantalla de favoritos en modo oscuro con una cuadrícula de dos pósters guardados",
                caption: "Favoritos oscuros: guardados en el dispositivo con Isar, sin ir a la red.",
              },
              {
                src: `${P}/movies-app/dark-settings.jpg`,
                alt: "Pantalla de ajustes en modo oscuro con idioma, color de acento y un interruptor de modo oscuro",
                caption: "Ajustes oscuros: idioma, uno de 15 colores de acento y el interruptor de tema.",
              },
            ],
          },
          {
            h: "Tecnologías",
            p: [
              "Flutter y Dart para la app, `flutter_riverpod` para el estado y `go_router` para la navegación. Los datos de películas vienen de la API REST de TMDB mediante Dio y los favoritos se guardan en el dispositivo con `Isar`, sin backend propio.",
            ],
          },
        ],
      },
      en: {
        title: "Cinemapedia",
        tagline: "A pocket guide to what’s showing in theaters.",
        description:
          "A Flutter mobile app for discovering movies: now playing, popular, and upcoming titles from TMDB, with debounced search, cast and synopsis on every detail page, and favorites persisted offline with Isar.",
        client: "Personal project",
        role: "Mobile engineer",
        year: "2024",
        tags: ["Flutter", "Dart", "Riverpod", "go_router", "Isar", "Dio", "TMDB API"],
        challenge:
          "A movie app is the classic test of a mobile stack: lots of lists, images, navigation and offline state. I built it to sharpen my Flutter architecture.",
        built:
          "A Flutter app on the TMDB API with now-playing, popular, top-rated and upcoming lists, search, and detail pages with cast and synopsis. Favorites are saved offline with Isar; state lives in Riverpod and navigation in go_router.",
        result:
          "Light and dark themes with 15 accent colors, smooth infinite scrolling and an architecture that is easy to extend.",
        tech: [
          {
            h: "What it does",
            p: [
              "The home screen pulls four TMDB lists (now playing, popular, top rated, and upcoming) into infinite-scrolling rows, with the now-playing titles doubling as a featured slideshow up top. Tapping a poster opens a detail screen with the synopsis, genre tags, and cast photos pulled from TMDB’s credits endpoint. A magnifying-glass icon opens a debounced search over the same API, and every detail screen has a favorite toggle that persists to an on-device Isar database, so the favorites tab reads instantly with no network call.",
            ],
          },
          {
            h: "Architecture",
            p: ["The app follows a clean-architecture split into three layers, each only aware of the one below it:"],
            rows: [
              {
                base: "domain",
                summary:
                  "Framework-agnostic core: the Movie and Actor entities, and the abstract repository and datasource contracts the rest of the app depends on.",
              },
              {
                base: "infraestructure",
                summary:
                  "TMDB’s REST responses mapped into domain entities through Dio, plus an Isar datasource that reads and writes favorites on-device.",
              },
              {
                base: "presentation",
                summary:
                  "Riverpod providers driving state, go_router for navigation, and the screens and widgets: the only layer that knows either exists.",
              },
            ],
            code: {
              text: cinemaCode,
              caption:
                "`movies_provider.dart`: the same `StateNotifier` pagination pattern backs all four home lists; only the fetch callback each one is built with changes.",
            },
          },
          {
            h: "Screens",
            p: ["Screenshots below are from the app running on an iOS Simulator."],
            shots: [
              {
                src: `${P}/movies-app/home.jpg`,
                alt: "Home screen with a featured-movies slideshow, a now-playing row, and an upcoming row",
                caption: "Home: featured slideshow, now playing, and upcoming.",
              },
              {
                src: `${P}/movies-app/dark-home.jpg`,
                alt: "The same home screen rendered in dark mode",
                caption: "Dark home: the theme applies instantly across every screen.",
              },
              {
                src: `${P}/movies-app/detail.jpg`,
                alt: "Movie detail screen showing the synopsis, genre tags, cast photos, and a filled favorite icon",
                caption: "Detail: synopsis, genres, and cast, with the favorite toggle.",
              },
              {
                src: `${P}/movies-app/dark-detail.png`,
                alt: "Movie detail screen in dark mode showing the synopsis, genre tags, cast photos, and a filled favorite icon",
                caption: "Dark detail: synopsis, genres, and cast, with the favorite toggle.",
              },
              {
                src: `${P}/movies-app/search.jpg`,
                alt: "Search results list showing several movies matching a query, each with a rating",
                caption: "Search: debounced 500 ms against the TMDB API as you type.",
              },
              {
                src: `${P}/movies-app/dark-search.png`,
                alt: "Search results list in dark mode showing several movies matching a query, each with a rating",
                caption: "Dark search: debounced 500 ms against the TMDB API as you type.",
              },
              {
                src: `${P}/movies-app/favorites.png`,
                alt: "Favorites screen showing a masonry grid of two saved movie posters",
                caption: "Favorites: persisted on-device with Isar, no network round trip.",
              },
              {
                src: `${P}/movies-app/dark-favorites.png`,
                alt: "Favorites screen in dark mode showing a masonry grid of two saved movie posters",
                caption: "Dark favorites: persisted on-device with Isar, no network round trip.",
              },
              {
                src: `${P}/movies-app/dark-settings.jpg`,
                alt: "Settings screen in dark mode with language, accent color, and a dark mode switch",
                caption: "Dark settings: language, one of 15 accent colors, and the theme switch.",
              },
            ],
          },
          {
            h: "Stack",
            p: [
              "Flutter and Dart for the app itself, `flutter_riverpod` for state management, and `go_router` for navigation. Movie data comes from the TMDB REST API through Dio, and favorites are stored on-device with `Isar`, with no backend of its own.",
            ],
          },
        ],
      },
    },
  },

  /* 5. ¿Quién es ese Pokémon? */
  {
    slug: "poke-web",
    collage: "poke",
    github: "https://github.com/dasH128/poke-web",
    demo: "https://pokigame.netlify.app/",
    shotCols: 3,
    text: {
      es: {
        title: "¿Quién es ese Pokémon?",
        tagline: "Adivina la silueta. Supera el ranking.",
        description:
          "Un juego de trivia en Vue 3 y TypeScript sobre PokeAPI: adivina el Pokémon por su silueta antes de que se acaben el tiempo y los corazones, con tres niveles de dificultad y un ranking local.",
        client: "Proyecto personal",
        role: "Ingeniero frontend",
        year: "2021–2026",
        tags: ["Vue 3", "TypeScript", "Axios", "PokeAPI", "Vue CLI"],
        challenge:
          "Un pequeño juego que empezó en 2021 como proyecto para aprender Vue y se convirtió en mi laboratorio de ideas de interfaz.",
        built:
          "Un juego de preguntas sobre PokeAPI: adivina el Pokémon por su silueta en tres niveles de dificultad, con un ranking local de los 10 mejores.",
        result:
          "Rediseñado por completo en 2026 con un estilo de terminal retro holográfico. Está online, así que pruébalo.",
        tech: [
          {
            h: "Por qué lo construí",
            p: [
              "Fue uno de mis primeros proyectos con Vue 3 y TypeScript, hecho en 2021 para practicar la composición de componentes, las propiedades computadas y el consumo de datos en vivo de una API REST pública en vez de datos de ejemplo. Volví en 2026 para rediseñar la interfaz desde cero (el aspecto actual de «terminal holográfica de Kanto») sin tocar la lógica original del juego.",
            ],
          },
          {
            h: "Qué hace",
            p: [
              "Cada ronda mezcla los 650 ids de Pokémon de Kanto a Teselia, pide cuatro a PokeAPI y muestra uno como una silueta negra que solo se revela cuando respondes. La dificultad elegida al inicio (Fácil, Normal o Difícil) define las vidas, los segundos por pregunta y cuántas ayudas tienes; cada ayuda elimina dos de las tres opciones incorrectas y lo deja en un 50/50. Normal y Difícil añaden un reloj total de la partida que cuesta una vida y se reinicia cada vez que se agota. Las puntuaciones finales se guardan directamente en un ranking local de los 10 mejores, sin backend.",
            ],
          },
          {
            h: "Arquitectura",
            p: [
              "No hay router ni librería de estado: `App.vue` solo alterna entre el menú y la pantalla de juego con un par prop/emit, y cada pantalla gestiona su propio estado con la Options API. La lógica que no es interfaz vive en tres módulos pequeños de un solo propósito:",
            ],
            rows: [
              {
                base: "api/pokemonApi.ts",
                summary:
                  "Una única instancia de Axios apuntando al endpoint /pokemon de PokeAPI: toda petición del nombre y el id de un Pokémon pasa por ahí.",
              },
              {
                base: "helper/getPokemonOptions.ts",
                summary:
                  "Mezcla en el cliente los 650 ids de Kanto a Teselia, toma cuatro y resuelve las cuatro peticiones a PokeAPI en paralelo con Promise.all.",
              },
              {
                base: "helper/dificultad.ts + scoreStorage.ts",
                summary:
                  "Los ajustes de dificultad (vidas, segundos por pregunta, ayudas y tiempo total) y un ranking de los 10 mejores en localStorage, reordenado y recortado en cada guardado.",
              },
            ],
            code: {
              text: pokeCode,
              caption:
                "`PokemonPage.vue`: usar una ayuda conserva el Pokémon correcto y un señuelo al azar, y los vuelve a mezclar para que la posición en pantalla no delate la respuesta.",
            },
          },
          {
            h: "Pantallas",
            p: ["Las capturas son de la app ejecutándose en local, no maquetas."],
            shots: [
              {
                src: `${P}/poke-web/menu.png`,
                alt: "Menú principal con estilo de terminal holográfica de Kanto, con una silueta de Pokémon desenfocada a la izquierda y las opciones Empezar, Configurar, Puntajes y Créditos a la derecha",
                caption: "Menú principal: el rediseño de terminal holográfica, con una vista previa de silueta en vivo.",
              },
              {
                src: `${P}/poke-web/config.png`,
                alt: "Pantalla de selección de dificultad con las opciones Fácil, Normal y Difícil, cada una con sus vidas, tiempo por pregunta y ayudas",
                caption: "Selector de dificultad: Fácil, Normal y Difícil ajustan de forma distinta las vidas, el tiempo y las ayudas.",
              },
              {
                src: `${P}/poke-web/game.png`,
                alt: "Pantalla de juego con la silueta negra de un Pokémon dentro de un escáner estilo Pokédex, un temporizador, un botón de ayuda y cuatro opciones debajo",
                caption: "La pantalla de adivinar: un temporizador, un botón de ayuda y cuatro opciones obtenidas de PokeAPI.",
              },
            ],
          },
          {
            h: "Tecnologías",
            p: [
              "Vue 3 con la Options API y TypeScript para la app, Axios hablando directamente con PokeAPI sin capa de caché de por medio, y estilos con clases utilitarias más unas pocas animaciones keyframe con ámbito para las líneas de escaneo y el brillo de la lente de la Pokédex.",
            ],
          },
        ],
      },
      en: {
        title: "¿Quién es ese Pokémon?",
        tagline: "Guess the silhouette. Beat the leaderboard.",
        description:
          "A Vue 3 + TypeScript trivia game built on PokeAPI: guess the Pokémon from its silhouette before the clock and your hearts run out, across three difficulty tiers with a local high-score board.",
        client: "Personal project",
        role: "Frontend engineer",
        year: "2021–2026",
        tags: ["Vue 3", "TypeScript", "Axios", "PokeAPI", "Vue CLI"],
        challenge:
          "A small game that started in 2021 as a project to learn Vue and became my lab for interface ideas.",
        built:
          "A quiz game on PokeAPI: guess the Pokémon from its silhouette across three difficulty levels, with a local top-10 leaderboard.",
        result:
          "Completely redesigned in 2026 with a retro holographic terminal look. It’s online, so try it.",
        tech: [
          {
            h: "Why I built it",
            p: [
              "This was one of my first Vue 3 + TypeScript projects, built in 2021 to practice component composition, computed properties, and pulling live data from a public REST API instead of static fixtures. I came back to it in 2026 to redesign the interface from scratch (the current “holographic Kanto terminal” look) while leaving the original game logic untouched.",
            ],
          },
          {
            h: "What it does",
            p: [
              "Every round shuffles the 650 Kanto-through-Unova Pokémon ids, fetches four of them from PokeAPI, and renders one as a black silhouette that only reveals itself once you answer. The difficulty picked at the start (Fácil, Normal, or Difícil) sets your lives, the seconds per question, and how many hints you get; each hint strips two of the three wrong options down to a 50/50 guess. Normal and Difícil add a shared total-game clock that costs a life and resets every time it runs out. Final scores are saved straight to a local top-10 leaderboard, no backend involved.",
            ],
          },
          {
            h: "Architecture",
            p: [
              "There’s no router or state library: `App.vue` just toggles between the menu and the game screen via a prop/emit pair, and each screen owns its own state through the Options API. The logic that isn’t UI lives in three small, single-purpose modules:",
            ],
            rows: [
              {
                base: "api/pokemonApi.ts",
                summary:
                  "A single Axios instance pointed at PokeAPI’s /pokemon endpoint: every request for a Pokémon’s name and id goes through it.",
              },
              {
                base: "helper/getPokemonOptions.ts",
                summary:
                  "Shuffles the 650 Kanto-through-Unova ids client-side, takes four, and resolves all four PokeAPI requests in parallel with Promise.all.",
              },
              {
                base: "helper/dificultad.ts + scoreStorage.ts",
                summary:
                  "Difficulty presets (lives, seconds per question, hints, total time) and a localStorage-backed top-10 leaderboard, re-sorted and trimmed on every save.",
              },
            ],
            code: {
              text: pokeCode,
              caption:
                "`PokemonPage.vue`: using a hint keeps the correct Pokémon and one random decoy, then reshuffles the two so the answer’s position on screen doesn’t give it away.",
            },
          },
          {
            h: "Screens",
            p: ["Screenshots below are from the app running locally, not mockups."],
            shots: [
              {
                src: `${P}/poke-web/menu.png`,
                alt: "Main menu styled as a holographic Kanto terminal, with a blurred Pokémon silhouette on the left and Empezar, Configurar, Puntajes and Créditos options on the right",
                caption: "Main menu: the holographic-terminal redesign, with a live silhouette preview.",
              },
              {
                src: `${P}/poke-web/config.png`,
                alt: "Difficulty selection screen showing Fácil, Normal and Difícil options, each listing their lives, time per question and available hints",
                caption: "Difficulty picker: Fácil, Normal and Difícil each tune lives, time and hints differently.",
              },
              {
                src: `${P}/poke-web/game.png`,
                alt: "Game screen with a black Pokémon silhouette inside a Pokédex-style scanner, a countdown timer, a hint button and four answer options below",
                caption: "The guessing screen: a countdown, a hint button, and four PokeAPI-sourced options.",
              },
            ],
          },
          {
            h: "Stack",
            p: [
              "Vue 3 with the Options API and TypeScript for the app itself, Axios talking directly to PokeAPI with no caching layer in between, and utility-class styling with a handful of scoped keyframe animations for the Pokédex scanlines and lens glow.",
            ],
          },
        ],
      },
    },
  },
];

export const projectBySlug = (slug: string): ProjectDetail | undefined => projects.find((p) => p.slug === slug);

/** Position (1-based), total, and the next project (wraps around). */
export function projectNav(slug: string) {
  const i = Math.max(0, projects.findIndex((p) => p.slug === slug));
  return { index: i + 1, total: projects.length, next: projects[(i + 1) % projects.length] };
}
