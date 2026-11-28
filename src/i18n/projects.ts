/* Project detail pages: one template, five projects, every language in `langs`.
   Labels shared by all pages (Year, The challenge, ...) live in `content.projectPage`.
   Everything here is Jordy's own account of his projects (confirmed true by him); do not
   add claims, metrics or employers that are not already supplied. */

import type { CollageKey, Lang } from "./content";
import type { Grammar, Wrap } from "../lib/highlight";

export interface Shot {
  src: string;
  alt: string;
  caption: string;
}

/** A code sample, shown as an editor window (see components/CodeBlock.astro). */
export interface CodeSnippet {
  text: string;
  /** File name in the header. */
  file: string;
  /** Language label in the header. */
  label: string;
  /** Grammar used to colour it. */
  grammar: Grammar;
  /** Invisible wrapper for fragments that are a method or object member, not a whole file. */
  wrap?: Wrap;
  /** Margin notes by 1-based line number; those lines are highlighted. Short paraphrases of the caption. */
  notes?: Record<number, string>;
  /** Explanation shown in the footer of the window. Backticks become <code>. */
  caption: string;
}

/** One block of the technical layer ("Under the hood"). Backticks in text become <code>. */
export interface TechBlock {
  h: string;
  p?: string[];
  rows?: { base: string; summary: string }[];
  code?: CodeSnippet;
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
  /** Every language in `langs` is written. `projectText` still falls back to English if a language is added without its text. */
  text: { es: ProjectText; en: ProjectText } & Partial<Record<Lang, ProjectText>>;
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

const pdfSnippet = { text: pdfCode, file: "store-reports.service.ts", label: "TypeScript", grammar: "typescript", wrap: "class" } as const;
const cinemaSnippet = { text: cinemaCode, file: "movies_provider.dart", label: "Dart", grammar: "dart" } as const;
const pokeSnippet = { text: pokeCode, file: "PokemonPage.vue", label: "Vue", grammar: "javascript", wrap: "object" } as const;

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
      pt: {
        title: "Integração móvel nativa",
        tagline: "Flutter, apresento-te o teu ecrã inicial.",
        description:
          "Widgets nativos de Android e iOS e notificações push para uma aplicação Flutter em produção na Motorline.",
        client: "Motorline",
        role: "Programador móvel",
        year: "2022 a atualidade",
        tags: ["Flutter", "Kotlin", "Widgets nativos", "Notificações push"],
        challenge:
          "Os utilizadores queriam ver a informação-chave sem abrir a aplicação: diretamente no ecrã inicial, e com um aviso quando algo mudasse.",
        built:
          "Ampliei a aplicação Flutter em produção com widgets nativos para Android (Kotlin) e iOS e notificações push, partilhando o estado entre o motor do Flutter e o código nativo.",
        result: "Widgets e notificações sempre sincronizados com a aplicação.",
      },
      it: {
        title: "Integrazione mobile nativa",
        tagline: "Flutter, ti presento la tua schermata Home.",
        description:
          "Widget nativi per Android e iOS e notifiche push per un'app Flutter in produzione in Motorline.",
        client: "Motorline",
        role: "Sviluppatore mobile",
        year: "dal 2022",
        tags: ["Flutter", "Kotlin", "Widget nativi", "Notifiche push"],
        challenge:
          "Gli utenti volevano vedere le informazioni chiave senza aprire l'app: direttamente nella schermata Home, e con un avviso quando qualcosa cambiava.",
        built:
          "Ho esteso l'app Flutter in produzione con widget nativi per Android (Kotlin) e iOS e notifiche push, condividendo lo stato tra il motore di Flutter e il codice nativo.",
        result: "Widget e notifiche sempre sincronizzati con l'app.",
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
      pt: {
        title: "Monitorização de produção e controlo de qualidade",
        tagline: "Eficiência em tempo real no chão de fábrica.",
        description:
          "Plataforma desktop em Flutter que mede em tempo real a eficiência da produção numa fábrica e reduziu os erros operacionais em 20%.",
        client: "Motorline",
        role: "Programador líder",
        year: "2022 a atualidade",
        tags: ["Flutter desktop", "Node.js", "Automação com cron", "Sincronização de dados"],
        stat: { value: "−20%", label: "erros operacionais" },
        challenge:
          "A fábrica precisava de ver, em tempo real, a eficiência de cada tarefa de produção e de evitar que os pequenos erros se acumulassem.",
        built:
          "Liderei uma plataforma desktop em Flutter que mede em direto a eficiência das tarefas de produção e mantém os dados sincronizados entre sistemas, com serviços em Node.js e tarefas agendadas com cron.",
        result: "Os erros operacionais desceram 20%.",
      },
      it: {
        title: "Monitoraggio della produzione e controllo qualità",
        tagline: "Efficienza in tempo reale in fabbrica.",
        description:
          "Piattaforma desktop in Flutter che misura in tempo reale l'efficienza della produzione in una fabbrica e ha ridotto del 20% gli errori operativi.",
        client: "Motorline",
        role: "Lead developer",
        year: "dal 2022",
        tags: ["Flutter desktop", "Node.js", "Automazione con cron", "Sincronizzazione dei dati"],
        stat: { value: "−20%", label: "errori operativi" },
        challenge:
          "La fabbrica aveva bisogno di vedere, in tempo reale, l'efficienza di ogni attività di produzione e di evitare che i piccoli errori si accumulassero.",
        built:
          "Ho guidato una piattaforma desktop in Flutter che misura in diretta l'efficienza delle attività di produzione e mantiene i dati sincronizzati tra i sistemi, con servizi in Node.js e job pianificati con cron.",
        result: "Gli errori operativi sono scesi del 20%.",
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
          "API en NestJS y Prisma que genera reportes PDF bajo demanda: facturas, certificados, tablas y paneles con gráficos.",
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
              ...pdfSnippet,
              notes: { 2: "groupBy de Prisma", 9: "SQL directo" },
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
              ...pdfSnippet,
              notes: { 2: "Prisma groupBy", 9: "raw SQL" },
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
      pt: {
        title: "API de relatórios em PDF",
        tagline: "Entram dados, saem documentos impecáveis.",
        description:
          "Uma API NestJS + Prisma que transforma registos da base de dados em relatórios PDF a pedido: faturas, certificados, tabelas e painéis com gráficos incorporados.",
        client: "Projeto pessoal",
        role: "Engenheiro de backend",
        year: "2024",
        tags: ["NestJS", "Prisma", "PostgreSQL", "pdfmake", "PDFKit", "Chart.js"],
        challenge:
          "Quase todas as aplicações de negócio acabam por precisar de imprimir alguma coisa: uma fatura, um certificado, um relatório mensal. Queria um único serviço capaz de fazer tudo isso a partir de dados reais da base de dados.",
        built:
          "Uma API NestJS que lê o PostgreSQL através do Prisma e gera PDFs prontos: faturas de compra, certificados, tabelas de referência e painéis de estatísticas com gráficos SVG incorporados. Também converte modelos HTML em PDF.",
        result:
          "Um endpoint tipado e testável por tipo de documento, rápido o suficiente para gerar relatórios na hora em vez de em processos noturnos.",
        tech: [
          {
            h: "Porque o construí",
            p: [
              "Comecei este projeto depois de terminar o curso “Nest + Reportes: Genera PDF desde Node” da DevTalles e continuei a ampliá-lo por conta própria: novos tipos de relatório, consultas reais ao Prisma em vez de dados estáticos e gráficos SVG renderizados no servidor em vez de imagens pré-feitas. É o projeto que uso para praticar padrões de backend que toco menos no trabalho móvel e em Flutter que faço no dia a dia na Motorline.",
            ],
          },
          {
            h: "Arquitetura",
            p: [
              "Cada endpoint segue o mesmo caminho: um controlador resolve o pedido, um serviço obtém os dados através do Prisma (ou executa uma consulta SQL direta quando o construtor de consultas do Prisma não consegue expressá-la) e um `PrinterService` partilhado converte uma definição de documento do pdfmake num stream PDF. Nada é guardado em cache nem persistido: cada pedido reconstrói o documento a partir de dados em direto.",
            ],
            rows: [
              {
                base: "/basic-report",
                summary:
                  "Certificados e tabelas de referência: uma declaração de trabalho gerada a partir de um registo real de funcionário e uma lista de países que se pode filtrar por continente.",
              },
              {
                base: "/extra-reports",
                summary:
                  "Experiências de formato: converter um modelo HTML existente diretamente em PDF, um relatório de layout fixo e um tamanho de página personalizado com um código QR incorporado.",
              },
              {
                base: "/store-reports",
                summary:
                  "Relatórios orientados a dados: uma fatura de compra construída a partir de uma encomenda real (cliente, produtos, totais) e um painel de estatísticas que combina um `groupBy` do Prisma com um join em SQL direto.",
              },
            ],
            code: {
              ...pdfSnippet,
              notes: { 2: "groupBy do Prisma", 9: "SQL direto" },
              caption:
                "`store-reports.service.ts`: combinar um `groupBy` do Prisma com um join em SQL direto e entregar os dois conjuntos de dados a uma função construtora de relatórios.",
            },
          },
          {
            h: "Exemplo de resultado",
            p: ["As capturas abaixo são PDFs reais gerados pela API em execução sobre uma base de dados com dados de teste, não maquetes."],
            shots: [
              {
                src: `${P}/pdf-report-api/statistics.png`,
                alt: "PDF do relatório de estatísticas: um gráfico em anel com os principais países de clientes, um gráfico de linhas, um gráfico de barras e um gráfico radar numa só página",
                caption: "Estatísticas de clientes e inventário: `groupBy` do Prisma mais um join em SQL direto, renderizados como gráficos.",
              },
              {
                src: `${P}/pdf-report-api/invoice.png`,
                alt: "PDF de uma fatura de compra com um código QR, dados do cliente e uma tabela de linhas",
                caption: "Uma encomenda de compra renderizada como fatura, obtida em direto do Prisma.",
              },
              {
                src: `${P}/pdf-report-api/countries.png`,
                alt: "PDF do relatório de países com uma tabela às riscas com códigos ISO, nomes, continentes e nomes locais",
                caption: "Uma tabela de países de 12 páginas, com linhas às riscas e cabeçalho repetido.",
              },
              {
                src: `${P}/pdf-report-api/html-report.png`,
                alt: "PDF gerado a partir de um modelo HTML existente, com títulos, listas e estilos em linha",
                caption: "Um modelo HTML existente convertido diretamente em PDF.",
              },
            ],
          },
          {
            h: "Stack",
            p: [
              "NestJS na camada da API, Prisma sobre PostgreSQL para o acesso a dados, `pdfmake` para a composição e o layout dos documentos, PDFKit por baixo para o stream PDF propriamente dito e Chart.js (renderizado no servidor para SVG/PNG) para os gráficos incorporados no relatório de estatísticas.",
            ],
          },
        ],
      },
      it: {
        title: "API di report PDF",
        tagline: "Entrano dati, escono documenti impeccabili.",
        description:
          "Un'API NestJS + Prisma che trasforma i record del database in report PDF su richiesta: fatture, certificati, tabelle e dashboard con grafici incorporati.",
        client: "Progetto personale",
        role: "Ingegnere backend",
        year: "2024",
        tags: ["NestJS", "Prisma", "PostgreSQL", "pdfmake", "PDFKit", "Chart.js"],
        challenge:
          "Quasi ogni applicazione aziendale finisce per dover stampare qualcosa: una fattura, un certificato, un report mensile. Volevo un unico servizio in grado di fare tutto questo a partire da dati reali del database.",
        built:
          "Un'API NestJS che legge PostgreSQL tramite Prisma e genera PDF pronti: fatture d'acquisto, certificati, tabelle di riferimento e dashboard di statistiche con grafici SVG incorporati. Converte anche template HTML in PDF.",
        result:
          "Un endpoint tipizzato e testabile per ogni tipo di documento, abbastanza veloce da generare i report al momento invece che in elaborazioni notturne.",
        tech: [
          {
            h: "Perché l'ho costruita",
            p: [
              "Ho iniziato questo progetto dopo aver finito il corso “Nest + Reportes: Genera PDF desde Node” di DevTalles e ho continuato a estenderlo da solo: nuovi tipi di report, vere query di Prisma al posto di dati statici e grafici SVG renderizzati lato server invece di immagini già pronte. È il progetto che uso per esercitarmi su pattern di backend che tocco meno nel lavoro mobile e in Flutter di ogni giorno in Motorline.",
            ],
          },
          {
            h: "Architettura",
            p: [
              "Ogni endpoint segue lo stesso percorso: un controller risolve la richiesta, un service recupera i dati tramite Prisma (o esegue una query SQL grezza quando il query builder di Prisma non riesce a esprimerla) e un `PrinterService` condiviso trasforma una definizione di documento di pdfmake in uno stream PDF. Nulla viene messo in cache né salvato: ogni richiesta ricostruisce il documento da dati dal vivo.",
            ],
            rows: [
              {
                base: "/basic-report",
                summary:
                  "Certificati e tabelle di riferimento: una lettera di impiego generata da un record reale di un dipendente e un elenco di paesi filtrabile per continente.",
              },
              {
                base: "/extra-reports",
                summary:
                  "Esperimenti di formato: convertire un template HTML esistente direttamente in PDF, un report a layout fisso e un formato di pagina personalizzato con un codice QR incorporato.",
              },
              {
                base: "/store-reports",
                summary:
                  "Report guidati dai dati: una fattura d'acquisto costruita da un ordine reale (cliente, prodotti, totali) e una dashboard di statistiche che combina un `groupBy` di Prisma con una join in SQL grezzo.",
              },
            ],
            code: {
              ...pdfSnippet,
              notes: { 2: "groupBy di Prisma", 9: "SQL grezzo" },
              caption:
                "`store-reports.service.ts`: combinare un `groupBy` di Prisma con una join in SQL grezzo e passare entrambi i dataset a una funzione che costruisce il report.",
            },
          },
          {
            h: "Esempio di output",
            p: ["Le schermate qui sotto sono PDF reali generati dall'API in esecuzione su un database di prova, non mockup."],
            shots: [
              {
                src: `${P}/pdf-report-api/statistics.png`,
                alt: "PDF del report di statistiche: un grafico ad anello dei principali paesi dei clienti, un grafico a linee, un grafico a barre e un grafico radar in un'unica pagina",
                caption: "Statistiche di clienti e magazzino: `groupBy` di Prisma più una join in SQL grezzo, rese come grafici.",
              },
              {
                src: `${P}/pdf-report-api/invoice.png`,
                alt: "PDF di una fattura d'acquisto con un codice QR, i dati del cliente e una tabella di righe",
                caption: "Un ordine d'acquisto reso come fattura, letto dal vivo da Prisma.",
              },
              {
                src: `${P}/pdf-report-api/countries.png`,
                alt: "PDF del report dei paesi con una tabella a righe alternate con codici ISO, nomi, continenti e nomi locali",
                caption: "Una tabella di paesi di 12 pagine, con righe alternate e intestazione ripetuta.",
              },
              {
                src: `${P}/pdf-report-api/html-report.png`,
                alt: "PDF generato da un template HTML esistente, con titoli, elenchi e stili inline",
                caption: "Un template HTML esistente convertito direttamente in PDF.",
              },
            ],
          },
          {
            h: "Stack",
            p: [
              "NestJS per il livello API, Prisma su PostgreSQL per l'accesso ai dati, `pdfmake` per la composizione e il layout dei documenti, PDFKit sotto per lo stream PDF vero e proprio e Chart.js (renderizzato lato server in SVG/PNG) per i grafici incorporati nel report di statistiche.",
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
          "App Flutter para descubrir películas con datos de TMDB: búsqueda, reparto y sinopsis, y favoritos sin conexión con Isar.",
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
              ...cinemaSnippet,
              notes: { 3: "lo único que cambia entre listas" },
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
          "Flutter app to discover movies with TMDB data: search, cast and synopsis, and favorites saved offline with Isar.",
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
              ...cinemaSnippet,
              notes: { 3: "the only thing that changes per list" },
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
      pt: {
        title: "Cinemapedia",
        tagline: "Um guia de bolso do que está nos cinemas.",
        description:
          "Aplicação Flutter para descobrir filmes com dados do TMDB: pesquisa, elenco e sinopse, e favoritos guardados offline com Isar.",
        client: "Projeto pessoal",
        role: "Engenheiro mobile",
        year: "2024",
        tags: ["Flutter", "Dart", "Riverpod", "go_router", "Isar", "Dio", "TMDB API"],
        challenge:
          "Uma aplicação de filmes é o teste clássico de uma stack móvel: muitas listas, imagens, navegação e estado offline. Construí-a para afinar a minha arquitetura em Flutter.",
        built:
          "Uma aplicação Flutter sobre a API do TMDB com listas de filmes em cartaz, populares, mais bem avaliados e a estrear, pesquisa e páginas de detalhe com elenco e sinopse. Os favoritos são guardados offline com Isar; o estado vive no Riverpod e a navegação no go_router.",
        result:
          "Temas claro e escuro com 15 cores de destaque, scroll infinito fluido e uma arquitetura fácil de ampliar.",
        tech: [
          {
            h: "O que faz",
            p: [
              "O ecrã inicial vai buscar quatro listas do TMDB (em cartaz, populares, mais bem avaliados e a estrear) para filas com scroll infinito, e os títulos em cartaz servem também de apresentação em destaque no topo. Tocar num cartaz abre um ecrã de detalhe com a sinopse, os géneros e as fotografias do elenco obtidas no endpoint de créditos do TMDB. O ícone da lupa abre uma pesquisa com debounce sobre a mesma API, e cada ecrã de detalhe tem um botão de favorito que persiste numa base de dados Isar no dispositivo, por isso o separador de favoritos lê instantaneamente, sem chamadas de rede.",
            ],
          },
          {
            h: "Arquitetura",
            p: ["A aplicação segue uma divisão de arquitetura limpa em três camadas, cada uma a conhecer apenas a de baixo:"],
            rows: [
              {
                base: "domain",
                summary:
                  "Núcleo independente da framework: as entidades Movie e Actor e os contratos abstratos de repositório e fonte de dados de que o resto da aplicação depende.",
              },
              {
                base: "infraestructure",
                summary:
                  "As respostas REST do TMDB convertidas em entidades de domínio através do Dio, mais uma fonte de dados Isar que lê e escreve favoritos no dispositivo.",
              },
              {
                base: "presentation",
                summary:
                  "Providers do Riverpod a gerir o estado, go_router para a navegação e os ecrãs e widgets: a única camada que sabe que qualquer um dos dois existe.",
              },
            ],
            code: {
              ...cinemaSnippet,
              notes: { 3: "o único que muda em cada lista" },
              caption:
                "`movies_provider.dart`: o mesmo padrão de paginação com `StateNotifier` sustenta as quatro listas do ecrã inicial; só muda a função de obtenção com que cada uma é construída.",
            },
          },
          {
            h: "Ecrãs",
            p: ["As capturas abaixo são da aplicação a correr num simulador de iOS."],
            shots: [
              {
                src: `${P}/movies-app/home.jpg`,
                alt: "Ecrã inicial com uma apresentação de filmes em destaque, uma fila de filmes em cartaz e outra de estreias próximas",
                caption: "Início: destaques, em cartaz e a estrear.",
              },
              {
                src: `${P}/movies-app/dark-home.jpg`,
                alt: "O mesmo ecrã inicial em modo escuro",
                caption: "Início escuro: o tema aplica-se de imediato a todos os ecrãs.",
              },
              {
                src: `${P}/movies-app/detail.jpg`,
                alt: "Ecrã de detalhe de um filme com a sinopse, os géneros, fotografias do elenco e um ícone de favorito preenchido",
                caption: "Detalhe: sinopse, géneros e elenco, com o botão de favorito.",
              },
              {
                src: `${P}/movies-app/dark-detail.png`,
                alt: "Ecrã de detalhe de um filme em modo escuro com a sinopse, os géneros, fotografias do elenco e um ícone de favorito preenchido",
                caption: "Detalhe escuro: sinopse, géneros e elenco, com o botão de favorito.",
              },
              {
                src: `${P}/movies-app/search.jpg`,
                alt: "Lista de resultados de pesquisa com vários filmes que correspondem a uma consulta, cada um com a sua classificação",
                caption: "Pesquisa: debounce de 500 ms contra a API do TMDB enquanto escreves.",
              },
              {
                src: `${P}/movies-app/dark-search.png`,
                alt: "Lista de resultados de pesquisa em modo escuro com vários filmes que correspondem a uma consulta, cada um com a sua classificação",
                caption: "Pesquisa escura: debounce de 500 ms contra a API do TMDB enquanto escreves.",
              },
              {
                src: `${P}/movies-app/favorites.png`,
                alt: "Ecrã de favoritos com uma grelha em mosaico de dois cartazes de filmes guardados",
                caption: "Favoritos: guardados no dispositivo com Isar, sem ida e volta à rede.",
              },
              {
                src: `${P}/movies-app/dark-favorites.png`,
                alt: "Ecrã de favoritos em modo escuro com uma grelha em mosaico de dois cartazes de filmes guardados",
                caption: "Favoritos escuros: guardados no dispositivo com Isar, sem ida e volta à rede.",
              },
              {
                src: `${P}/movies-app/dark-settings.jpg`,
                alt: "Ecrã de definições em modo escuro com o idioma, a cor de destaque e um interruptor de modo escuro",
                caption: "Definições escuras: idioma, uma das 15 cores de destaque e o interruptor do tema.",
              },
            ],
          },
          {
            h: "Stack",
            p: [
              "Flutter e Dart para a aplicação em si, `flutter_riverpod` para a gestão de estado e `go_router` para a navegação. Os dados dos filmes vêm da API REST do TMDB através do Dio, e os favoritos são guardados no dispositivo com `Isar`, sem backend próprio.",
            ],
          },
        ],
      },
      it: {
        title: "Cinemapedia",
        tagline: "Una guida tascabile a quello che c'è al cinema.",
        description:
          "App Flutter per scoprire film con i dati di TMDB: ricerca, cast e sinossi, e preferiti salvati offline con Isar.",
        client: "Progetto personale",
        role: "Ingegnere mobile",
        year: "2024",
        tags: ["Flutter", "Dart", "Riverpod", "go_router", "Isar", "Dio", "TMDB API"],
        challenge:
          "Un'app di film è il classico banco di prova di uno stack mobile: tante liste, immagini, navigazione e stato offline. L'ho costruita per affinare la mia architettura in Flutter.",
        built:
          "Un'app Flutter sull'API di TMDB con liste di film in programmazione, popolari, più votati e in arrivo, ricerca e pagine di dettaglio con cast e sinossi. I preferiti sono salvati offline con Isar; lo stato vive in Riverpod e la navigazione in go_router.",
        result:
          "Temi chiaro e scuro con 15 colori d'accento, scorrimento infinito fluido e un'architettura facile da estendere.",
        tech: [
          {
            h: "Cosa fa",
            p: [
              "La home carica quattro liste di TMDB (in programmazione, popolari, più votati e in arrivo) in file a scorrimento infinito, e i titoli in programmazione fanno anche da presentazione in evidenza in alto. Toccando una locandina si apre una schermata di dettaglio con la sinossi, i generi e le foto del cast prese dall'endpoint dei crediti di TMDB. L'icona della lente apre una ricerca con debounce sulla stessa API, e ogni schermata di dettaglio ha un interruttore dei preferiti che persiste in un database Isar sul dispositivo, per cui la scheda dei preferiti si legge subito, senza chiamate di rete.",
            ],
          },
          {
            h: "Architettura",
            p: ["L'app segue una divisione in clean architecture su tre livelli, ognuno a conoscenza solo di quello sottostante:"],
            rows: [
              {
                base: "domain",
                summary:
                  "Nucleo indipendente dal framework: le entità Movie e Actor e i contratti astratti di repository e datasource da cui dipende il resto dell'app.",
              },
              {
                base: "infraestructure",
                summary:
                  "Le risposte REST di TMDB mappate in entità di dominio tramite Dio, più un datasource Isar che legge e scrive i preferiti sul dispositivo.",
              },
              {
                base: "presentation",
                summary:
                  "Provider di Riverpod che gestiscono lo stato, go_router per la navigazione, e le schermate e i widget: l'unico livello che sa che esistono entrambi.",
              },
            ],
            code: {
              ...cinemaSnippet,
              notes: { 3: "l'unica cosa che cambia per ogni lista" },
              caption:
                "`movies_provider.dart`: lo stesso pattern di paginazione con `StateNotifier` regge tutte e quattro le liste della home; cambia solo la funzione di recupero con cui ciascuna è costruita.",
            },
          },
          {
            h: "Schermate",
            p: ["Le schermate qui sotto sono dell'app in esecuzione su un simulatore iOS."],
            shots: [
              {
                src: `${P}/movies-app/home.jpg`,
                alt: "Schermata Home con una presentazione di film in evidenza, una fila di film in programmazione e una di prossime uscite",
                caption: "Home: presentazione in evidenza, in programmazione e in arrivo.",
              },
              {
                src: `${P}/movies-app/dark-home.jpg`,
                alt: "La stessa schermata Home in modalità scura",
                caption: "Home scura: il tema si applica subito a tutte le schermate.",
              },
              {
                src: `${P}/movies-app/detail.jpg`,
                alt: "Schermata di dettaglio di un film con sinossi, generi, foto del cast e un'icona dei preferiti piena",
                caption: "Dettaglio: sinossi, generi e cast, con l'interruttore dei preferiti.",
              },
              {
                src: `${P}/movies-app/dark-detail.png`,
                alt: "Schermata di dettaglio di un film in modalità scura con sinossi, generi, foto del cast e un'icona dei preferiti piena",
                caption: "Dettaglio scuro: sinossi, generi e cast, con l'interruttore dei preferiti.",
              },
              {
                src: `${P}/movies-app/search.jpg`,
                alt: "Elenco dei risultati di ricerca con diversi film corrispondenti a una query, ciascuno con il suo voto",
                caption: "Ricerca: debounce di 500 ms sull'API di TMDB mentre scrivi.",
              },
              {
                src: `${P}/movies-app/dark-search.png`,
                alt: "Elenco dei risultati di ricerca in modalità scura con diversi film corrispondenti a una query, ciascuno con il suo voto",
                caption: "Ricerca scura: debounce di 500 ms sull'API di TMDB mentre scrivi.",
              },
              {
                src: `${P}/movies-app/favorites.png`,
                alt: "Schermata dei preferiti con una griglia a mosaico di due locandine di film salvati",
                caption: "Preferiti: salvati sul dispositivo con Isar, senza andata e ritorno in rete.",
              },
              {
                src: `${P}/movies-app/dark-favorites.png`,
                alt: "Schermata dei preferiti in modalità scura con una griglia a mosaico di due locandine di film salvati",
                caption: "Preferiti scuri: salvati sul dispositivo con Isar, senza andata e ritorno in rete.",
              },
              {
                src: `${P}/movies-app/dark-settings.jpg`,
                alt: "Schermata delle impostazioni in modalità scura con lingua, colore d'accento e un interruttore della modalità scura",
                caption: "Impostazioni scure: lingua, uno dei 15 colori d'accento e l'interruttore del tema.",
              },
            ],
          },
          {
            h: "Stack",
            p: [
              "Flutter e Dart per l'app vera e propria, `flutter_riverpod` per la gestione dello stato e `go_router` per la navigazione. I dati dei film arrivano dall'API REST di TMDB tramite Dio, e i preferiti sono salvati sul dispositivo con `Isar`, senza backend proprio.",
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
          "Juego de trivia en Vue 3 y TypeScript sobre PokeAPI: adivina el Pokémon por su silueta antes de que se acaben el tiempo y los corazones.",
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
              ...pokeSnippet,
              notes: { 8: "se vuelven a mezclar" },
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
          "Vue 3 + TypeScript trivia game on PokeAPI: guess the Pokémon from its silhouette before the clock and your hearts run out.",
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
              ...pokeSnippet,
              notes: { 8: "reshuffled" },
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
      pt: {
        title: "¿Quién es ese Pokémon?",
        tagline: "Adivinha a silhueta. Bate o ranking.",
        description:
          "Jogo de perguntas em Vue 3 + TypeScript sobre a PokeAPI: adivinha o Pokémon pela silhueta antes de o relógio e os corações acabarem.",
        client: "Projeto pessoal",
        role: "Engenheiro de frontend",
        year: "2021 a 2026",
        tags: ["Vue 3", "TypeScript", "Axios", "PokeAPI", "Vue CLI"],
        challenge:
          "Um pequeno jogo que começou em 2021 como projeto para aprender Vue e se tornou o meu laboratório de ideias de interface.",
        built:
          "Um jogo de perguntas sobre a PokeAPI: adivinha o Pokémon pela silhueta em três níveis de dificuldade, com um top 10 local.",
        result:
          "Redesenhado por completo em 2026 com um aspeto de terminal holográfico retro. Está online, experimenta.",
        tech: [
          {
            h: "Porque o construí",
            p: [
              "Foi um dos meus primeiros projetos em Vue 3 + TypeScript, feito em 2021 para praticar a composição de componentes, as propriedades computadas e a obtenção de dados em direto de uma API REST pública em vez de dados estáticos. Voltei a ele em 2026 para redesenhar a interface de raiz (o atual aspeto de “terminal holográfico de Kanto”), deixando intacta a lógica original do jogo.",
            ],
          },
          {
            h: "O que faz",
            p: [
              "Em cada ronda baralham-se os 650 ids de Pokémon de Kanto a Unova, vão-se buscar quatro à PokeAPI e um é mostrado como silhueta negra que só se revela quando respondes. A dificuldade escolhida no início (Fácil, Normal ou Difícil) define as vidas, os segundos por pergunta e quantas pistas tens; cada pista elimina duas das três opções erradas, deixando uma escolha 50/50. O Normal e o Difícil acrescentam um relógio geral do jogo que custa uma vida e reinicia sempre que chega ao fim. As pontuações finais são guardadas diretamente num top 10 local, sem backend.",
            ],
          },
          {
            h: "Arquitetura",
            p: [
              "Não há router nem biblioteca de estado: o `App.vue` limita-se a alternar entre o menu e o ecrã de jogo com um par prop/emit, e cada ecrã gere o seu próprio estado através da Options API. A lógica que não é interface vive em três módulos pequenos, cada um com um único propósito:",
            ],
            rows: [
              {
                base: "api/pokemonApi.ts",
                summary:
                  "Uma única instância do Axios apontada ao endpoint /pokemon da PokeAPI: todos os pedidos do nome e do id de um Pokémon passam por ela.",
              },
              {
                base: "helper/getPokemonOptions.ts",
                summary:
                  "Baralha no cliente os 650 ids de Kanto a Unova, escolhe quatro e resolve os quatro pedidos à PokeAPI em paralelo com Promise.all.",
              },
              {
                base: "helper/dificultad.ts + scoreStorage.ts",
                summary:
                  "Níveis de dificuldade (vidas, segundos por pergunta, pistas, tempo total) e um top 10 em localStorage, reordenado e cortado a cada gravação.",
              },
            ],
            code: {
              ...pokeSnippet,
              notes: { 8: "baralhado de novo" },
              caption:
                "`PokemonPage.vue`: usar uma pista mantém o Pokémon correto e um engodo aleatório, e volta a baralhar os dois para que a posição da resposta no ecrã não a denuncie.",
            },
          },
          {
            h: "Ecrãs",
            p: ["As capturas abaixo são da aplicação a correr localmente, não maquetes."],
            shots: [
              {
                src: `${P}/poke-web/menu.png`,
                alt: "Menu principal com o aspeto de um terminal holográfico de Kanto, com uma silhueta de Pokémon desfocada à esquerda e as opções Empezar, Configurar, Puntajes e Créditos à direita",
                caption: "Menu principal: o redesenho de terminal holográfico, com pré-visualização de uma silhueta em direto.",
              },
              {
                src: `${P}/poke-web/config.png`,
                alt: "Ecrã de escolha de dificuldade com as opções Fácil, Normal e Difícil, cada uma com as suas vidas, tempo por pergunta e pistas disponíveis",
                caption: "Escolha de dificuldade: Fácil, Normal e Difícil ajustam de forma diferente as vidas, o tempo e as pistas.",
              },
              {
                src: `${P}/poke-web/game.png`,
                alt: "Ecrã de jogo com uma silhueta negra de Pokémon dentro de um scanner ao estilo Pokédex, um temporizador, um botão de pista e quatro opções de resposta em baixo",
                caption: "O ecrã de adivinhar: uma contagem decrescente, um botão de pista e quatro opções vindas da PokeAPI.",
              },
            ],
          },
          {
            h: "Stack",
            p: [
              "Vue 3 com Options API e TypeScript para a aplicação em si, Axios a falar diretamente com a PokeAPI sem camada de cache pelo meio, e estilos com classes utilitárias com algumas animações keyframe com âmbito para as linhas de varrimento do Pokédex e o brilho da lente.",
            ],
          },
        ],
      },
      it: {
        title: "¿Quién es ese Pokémon?",
        tagline: "Indovina la sagoma. Batti la classifica.",
        description:
          "Gioco a quiz in Vue 3 + TypeScript sulla PokeAPI: indovina il Pokémon dalla sagoma prima che finiscano il tempo e i cuori.",
        client: "Progetto personale",
        role: "Ingegnere frontend",
        year: "dal 2021 al 2026",
        tags: ["Vue 3", "TypeScript", "Axios", "PokeAPI", "Vue CLI"],
        challenge:
          "Un piccolo gioco nato nel 2021 come progetto per imparare Vue e diventato il mio laboratorio di idee per le interfacce.",
        built:
          "Un gioco a quiz sulla PokeAPI: indovina il Pokémon dalla sagoma su tre livelli di difficoltà, con una top 10 locale.",
        result:
          "Ridisegnato da zero nel 2026 con un look da terminale olografico retrò. È online, provalo.",
        tech: [
          {
            h: "Perché l'ho costruito",
            p: [
              "È stato uno dei miei primi progetti in Vue 3 + TypeScript, fatto nel 2021 per esercitarmi con la composizione dei componenti, le proprietà computed e il recupero di dati dal vivo da una API REST pubblica invece di dati statici. Ci sono tornato nel 2026 per ridisegnare l'interfaccia da zero (l'attuale look da “terminale olografico di Kanto”) lasciando intatta la logica originale del gioco.",
            ],
          },
          {
            h: "Cosa fa",
            p: [
              "A ogni round vengono mescolati i 650 id dei Pokémon da Kanto a Unima, ne vengono recuperati quattro dalla PokeAPI e uno viene mostrato come sagoma nera che si rivela solo dopo la risposta. La difficoltà scelta all'inizio (Fácil, Normal o Difícil) stabilisce le vite, i secondi per domanda e quanti aiuti hai; ogni aiuto elimina due delle tre risposte sbagliate, lasciando una scelta 50/50. Normal e Difícil aggiungono un timer complessivo della partita che costa una vita e si azzera ogni volta che scade. I punteggi finali vengono salvati direttamente in una top 10 locale, senza backend.",
            ],
          },
          {
            h: "Architettura",
            p: [
              "Non c'è né un router né una libreria di stato: `App.vue` si limita ad alternare tra il menu e la schermata di gioco con una coppia prop/emit, e ogni schermata gestisce il proprio stato con la Options API. La logica che non è interfaccia vive in tre piccoli moduli, ciascuno con un solo scopo:",
            ],
            rows: [
              {
                base: "api/pokemonApi.ts",
                summary:
                  "Una sola istanza di Axios puntata all'endpoint /pokemon della PokeAPI: ogni richiesta del nome e dell'id di un Pokémon passa da lì.",
              },
              {
                base: "helper/getPokemonOptions.ts",
                summary:
                  "Mescola lato client i 650 id da Kanto a Unima, ne prende quattro e risolve le quattro richieste alla PokeAPI in parallelo con Promise.all.",
              },
              {
                base: "helper/dificultad.ts + scoreStorage.ts",
                summary:
                  "Livelli di difficoltà (vite, secondi per domanda, aiuti, tempo totale) e una top 10 in localStorage, riordinata e tagliata a ogni salvataggio.",
              },
            ],
            code: {
              ...pokeSnippet,
              notes: { 8: "rimescolate" },
              caption:
                "`PokemonPage.vue`: usare un aiuto mantiene il Pokémon corretto e un'esca casuale, poi rimescola i due perché la posizione della risposta sullo schermo non la tradisca.",
            },
          },
          {
            h: "Schermate",
            p: ["Le schermate qui sotto sono dell'app in esecuzione in locale, non mockup."],
            shots: [
              {
                src: `${P}/poke-web/menu.png`,
                alt: "Menu principale in stile terminale olografico di Kanto, con una sagoma di Pokémon sfocata a sinistra e le opzioni Empezar, Configurar, Puntajes e Créditos a destra",
                caption: "Menu principale: il redesign a terminale olografico, con anteprima dal vivo di una sagoma.",
              },
              {
                src: `${P}/poke-web/config.png`,
                alt: "Schermata di scelta della difficoltà con le opzioni Fácil, Normal e Difícil, ciascuna con le proprie vite, il tempo per domanda e gli aiuti disponibili",
                caption: "Scelta della difficoltà: Fácil, Normal e Difícil regolano in modo diverso vite, tempo e aiuti.",
              },
              {
                src: `${P}/poke-web/game.png`,
                alt: "Schermata di gioco con una sagoma nera di Pokémon dentro uno scanner in stile Pokédex, un conto alla rovescia, un pulsante di aiuto e quattro opzioni di risposta sotto",
                caption: "La schermata dell'indovinello: un conto alla rovescia, un pulsante di aiuto e quattro opzioni dalla PokeAPI.",
              },
            ],
          },
          {
            h: "Stack",
            p: [
              "Vue 3 con Options API e TypeScript per l'app vera e propria, Axios che parla direttamente con la PokeAPI senza livelli di cache in mezzo, e stili con classi utility con qualche animazione keyframe con scope per le scanline del Pokédex e il bagliore della lente.",
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

/** Text of a project in a language, falling back to English while that language is not translated. */
export function projectText(p: ProjectDetail, lang: Lang): ProjectText {
  return p.text[lang] ?? p.text.en;
}
