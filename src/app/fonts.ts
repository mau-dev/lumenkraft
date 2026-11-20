import { Bricolage_Grotesque, Fraunces, JetBrains_Mono } from "next/font/google";

// All three are SIL Open Font License: free for commercial use and
// self-hosted by next/font, so visitors' browsers never contact Google.
// `subsets` controls preloading only; latin-ext glyphs (ć, č, š, ž, đ)
// still load on demand.

// Display: a soft, slightly "wonky" variable serif for expressive headlines.
export const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

// Interface and body: a contemporary grotesque with optical sizing and a width axis.
export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-bricolage",
  display: "swap",
});

// Metadata and technical details.
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: false,
});

export const fontVariables = [fraunces.variable, bricolage.variable, jetbrainsMono.variable].join(" ");
