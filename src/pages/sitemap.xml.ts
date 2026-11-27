import type { APIRoute } from "astro";
import { langs, langPath, aboutPath, projectPath, type Lang } from "../i18n/content";
import { projects } from "../i18n/projects";

/** Every page, with its translations linked (hreflang). Written by hand: no extra dependency. */
export const GET: APIRoute = ({ site }) => {
  const origin = site ? site.origin : "";

  // One entry per page; each lists the path in every language.
  const pages: Record<Lang, string>[] = [
    Object.fromEntries(langs.map((l) => [l, langPath(l)])) as Record<Lang, string>,
    Object.fromEntries(langs.map((l) => [l, aboutPath(l)])) as Record<Lang, string>,
    ...projects.map((p) => Object.fromEntries(langs.map((l) => [l, projectPath(l, p.slug)])) as Record<Lang, string>),
  ];

  const urls = pages
    .flatMap((page) =>
      langs.map((l) => {
        const alternates = langs
          .map((a) => `    <xhtml:link rel="alternate" hreflang="${a}" href="${origin}${page[a]}" />`)
          .join("\n");
        return `  <url>\n    <loc>${origin}${page[l]}</loc>\n${alternates}\n  </url>`;
      }),
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
