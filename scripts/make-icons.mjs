// Draws the site icons: node scripts/make-icons.mjs
// A blue tile with a paper "J" and an ink full stop (the "jordy." of the logo, boiled down so it
// still reads at 16 px). Writes public/favicon.svg, favicon.ico (32 px), apple-touch-icon.png (180 px).
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const BLUE = "#2342e8";
const PAPER = "#f4f1e8";
const INK = "#14130f";

// The glyph on a 128 grid. A thick stroke for the J, a dot for the full stop.
const glyph = `
  <path d="M74 20v56c0 17-9 27-23 27-12 0-20-7-22-20" fill="none" stroke="${PAPER}" stroke-width="23"/>
  <circle cx="99" cy="97" r="9.5" fill="${INK}"/>`;

// Browser tab: rounded tile.
const rounded = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><rect width="128" height="128" rx="28" fill="${BLUE}"/>${glyph}</svg>`;
// iOS rounds the corners itself and fills transparency with black, so this one is full-bleed.
const square = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><rect width="128" height="128" fill="${BLUE}"/>${glyph}</svg>`;

writeFileSync("public/favicon.svg", rounded.trim() + "\n");
await sharp(Buffer.from(rounded), { density: 600 }).resize(32, 32).png().toFile("public/favicon.ico");
await sharp(Buffer.from(square), { density: 600 }).resize(180, 180).png().toFile("public/apple-touch-icon.png");
console.log("icons written");
