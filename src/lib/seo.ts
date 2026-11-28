import { existsSync } from "node:fs";
import { join } from "node:path";
import { content, langPath, defaultLang, GITHUB, LINKEDIN, type Lang } from "../i18n/content";

/** Share images are 1200x630 JPG (the size chats and social networks expect). */
export const OG_SIZE = { width: 1200, height: 630 } as const;

/**
 * Path of the share image of a page: one card per language, `public/og/{lang}.jpg`, used by every
 * page of that language (home, about, projects). If a language has no card yet, the default
 * language's is used.
 */
export function ogImage(lang: Lang): string {
  const own = join(process.cwd(), "public", "og", `${lang}.jpg`);
  return existsSync(own) ? `/og/${lang}.jpg` : `/og/${defaultLang}.jpg`;
}

/** schema.org Person, for search engines. Only facts already published on the site. */
export function personJsonLd(lang: Lang, site: string) {
  const t = content[lang];
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jordy Rojas Aliaga",
    url: `${site}${langPath(lang)}`,
    image: `${site}/me/jordy.png`,
    jobTitle: t.meta.jobTitle,
    description: t.meta.description,
    address: { "@type": "PostalAddress", addressLocality: "Porto", addressCountry: "PT" },
    worksFor: { "@type": "Organization", name: "Motorline" },
    knowsLanguage: ["es", "pt", "en"],
    sameAs: [LINKEDIN, GITHUB],
  };
}
