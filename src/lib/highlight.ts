import { createHighlighter, type ThemeRegistration } from "shiki";

/* Syntax colouring for the code blocks of the project pages. It runs at build time (Shiki),
   so the browser receives plain coloured text and no JavaScript. The palette is the one in
   DESIGN.md ("Code blocks"): several hues on purpose, softened to sit next to the paper and
   the site's blue; functions use the site's blue-on-ink. */

const C = {
  text: "#e9e7ef",
  muted: "#8d8c96", // punctuation and operators
  comment: "#6f6e79",
  keyword: "#b9a3ff", // violet
  type: "#72e0d1", // teal, italic
  property: "#ff9fc4", // pink, italic
  string: "#f3cf93", // sand
  number: "#ffb585", // soft orange
  func: "#8a99ff", // the site's blue on ink
};

export const codeTheme: ThemeRegistration = {
  name: "jordy-code",
  type: "dark",
  colors: { "editor.background": "#161725", "editor.foreground": C.text },
  tokenColors: [
    { settings: { foreground: C.text } },
    { scope: ["punctuation", "meta.brace", "keyword.operator", "punctuation.accessor"], settings: { foreground: C.muted } },
    {
      scope: [
        "keyword.control",
        "keyword.declaration",
        "keyword.operator.new",
        "keyword.operator.expression",
        "storage",
        "variable.language",
        "keyword.other",
      ],
      settings: { foreground: C.keyword },
    },
    { scope: ["constant.numeric", "constant.language", "constant.character"], settings: { foreground: C.number } },
    {
      scope: ["entity.name.type", "entity.name.class", "support.class", "support.type", "entity.other.inherited-class"],
      settings: { foreground: C.type, fontStyle: "italic" },
    },
    {
      scope: ["variable.parameter", "meta.object-literal.key", "variable.other.property", "support.type.property-name"],
      settings: { foreground: C.property, fontStyle: "italic" },
    },
    { scope: ["entity.name.function", "support.function"], settings: { foreground: C.func } },
    { scope: ["string", "string.template", "punctuation.definition.string"], settings: { foreground: C.string } },
    { scope: ["comment", "punctuation.definition.comment"], settings: { foreground: C.comment, fontStyle: "italic" } },
  ],
};

export type Grammar = "typescript" | "dart" | "javascript";

/** Some fragments are a method or an object member, not a whole file. They are coloured
    inside an invisible wrapper so the grammar reads them right, and the wrapper is dropped. */
export type Wrap = "class" | "object";

const WRAPS: Record<Wrap, [string, string]> = {
  class: ["class _ {\n", "\n}"],
  object: ["const _ = {\n", "\n}"],
};

export interface Token {
  text: string;
  color?: string;
  italic?: boolean;
}

let highlighter: ReturnType<typeof createHighlighter> | undefined;

/** One highlighter for the whole build. */
function getHighlighter() {
  highlighter ??= createHighlighter({ themes: [codeTheme], langs: ["typescript", "dart", "javascript"] });
  return highlighter;
}

/** The code as lines of coloured tokens. */
export async function tokenizeCode(code: string, grammar: Grammar, wrap?: Wrap): Promise<Token[][]> {
  const hl = await getHighlighter();
  const [before, after] = wrap ? WRAPS[wrap] : ["", ""];
  const { tokens } = hl.codeToTokens(before + code + after, { lang: grammar, theme: "jordy-code" });

  const skipBefore = before ? before.split("\n").length - 1 : 0;
  const skipAfter = after ? after.split("\n").length - 1 : 0;
  const lines = tokens.slice(skipBefore, tokens.length - skipAfter);

  return lines.map((line) =>
    line.map((t) => ({
      text: t.content,
      color: t.color && t.color.toLowerCase() !== C.text ? t.color : undefined,
      // Shiki's FontStyle: 1 = italic.
      italic: ((t.fontStyle ?? 0) & 1) === 1,
    })),
  );
}
