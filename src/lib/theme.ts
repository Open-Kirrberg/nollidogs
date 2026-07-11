import { parseTheme } from "@mind-studio/ui";

/*
 * nolli-dogs — Markentheme nach brand.md:
 * Petrol (#2F6D6B) als Primärfarbe, Warmbraun (#6E4F3A) als Akzent,
 * Salbei/Sand als helle Flächen. Farben aus den Flyern gemessen.
 * Nur abweichende Tokens; Rest erbt vom Mind-Basistheme.
 */
export const nolliDogs = parseTheme(
  {
    name: "nolli-dogs",
    label: "Nolli Dogs",
    light: {
      background: "#fbfaf7",
      foreground: "oklch(0.24 0.01 70)",
      primary: "oklch(0.50 0.06 190)",
      "primary-foreground": "#ffffff",
      accent: "#efe9e2",
      "accent-foreground": "oklch(0.45 0.05 60)",
      ring: "oklch(0.50 0.06 190)",
      destructive: "oklch(0.50 0.17 29)",
      "chart-1": "oklch(0.50 0.06 190)",
      "chart-2": "oklch(0.45 0.05 60)",
    },
    dark: {
      primary: "oklch(0.72 0.06 190)",
      "primary-foreground": "oklch(0.20 0.03 190)",
      ring: "oklch(0.72 0.06 190)",
    },
    radius: "0.75rem",
    font: {
      sans: '"Nunito", system-ui, sans-serif',
    },
    pattern: { kind: "dots", opacity: 0.05 },
  },
  { source: "open-kirrberg/nollidogs/src/lib/theme" },
);
