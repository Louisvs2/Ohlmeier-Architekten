import { Fraunces, Inter, Sora, Space_Grotesk } from "next/font/google";

// One font per role for each look preset (see src/config/theme.ts). All are
// declared and self-hosted via next/font (GDPR, zero CLS); the active look
// picks which family is applied through CSS variables in globals.css. Unused
// looks add only a few unreferenced @font-face lines — delete a look's font
// here if you want to trim a client build to the essentials.

// Body / UI — shared by every look.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Display faces, one per look that needs a distinctive headline.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

// Every font's CSS-variable class, applied once on <html>. globals.css maps
// the active look's `--font-*-active` variables onto these.
export const fontVariables = [
  inter.variable,
  spaceGrotesk.variable,
  fraunces.variable,
  sora.variable,
].join(" ");
