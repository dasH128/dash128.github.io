import { existsSync } from "node:fs";
import { join } from "node:path";

const EXTENSIONS = ["webp", "jpg", "jpeg", "png"];

/**
 * Optional photos for the About page. Drop a file named `<name>.webp|jpg|png` into
 * `public/me/about/` and it shows up on the next build; if it's missing, the page
 * simply renders without it.
 */
export function aboutPhoto(name: string): string | null {
  for (const ext of EXTENSIONS) {
    if (existsSync(join(process.cwd(), "public", "me", "about", `${name}.${ext}`))) {
      return `/me/about/${name}.${ext}`;
    }
  }
  return null;
}
