# Brand: Nolli Dogs

Corporate Identity für **Nolli Dogs** – Mensch-Hund-Training von Carmen Noll in
Homburg (Saarland). Grundlage für nollidogs.de, umgesetzt als eigenes Theme
(`nolli-dogs`) für **@mind-studio/ui** (siehe Theme-Snippet unten).

> Quellen: Instagram [@nollidogs](https://www.instagram.com/nollidogs/),
> [Facebook](https://www.facebook.com/p/Nollidogs-61550942548359/), Flyer-Vorlagen
> (`inspirations/`). Farben aus den Flyern gemessen.

---

## 1. Markenkern

- **Wer:** Carmen Noll, zertifizierte Hundetrainerin (Erlaubnis nach §11 Abs.1
  Nr.8f TierSchG), Hundetrainerin seit 2014, mit Nolli Dogs seit 2023. Eigenes Rudel:
  Ebby, Akira, Malia, Yaro.
- **Essenz:** *Individuell wie du und dein Hund.* Der Hund steht im Mittelpunkt.
- **Werte:** individuell · einfühlsam · partnerschaftlich · naturverbunden · fundiert · Beziehung vor Erziehung · Orientierung am Menschen
- **Claim:** „individuell wie du und dein Hund“
  (Sekundär: „Bei uns steht der Hund im Mittelpunkt.“)

## 2. Tonalität

- Deutsch, **Du/Ihr**-Ansprache, herzlich und persönlich (Carmen spricht in der
  Ich-Form: „Ich hole euch an eurem Standpunkt ab …“).
- Warm, ermutigend, ohne Fachjargon-Wand. Kurze Sätze, echte Beispiele.
- Termine/Workshops immer mit Datum, Uhrzeit, Dauer, Preis und Treffpunkt.
- Emojis sparsam auf der Website (anders als Social) – Wärme über Bild & Wort.

## 3. Logo

- **Handschrift-Schriftzug „Nolli Dogs“** in Brauntönen, mit stilisierter
  Hunde-Silhouette (sitzender Hund) als Bildmarke dahinter; darunter
  „Hundetraining“ und der Claim „individuell wie du und dein Hund“.
- To-do: als **SVG nachzeichnen** (aktuell nur Flyer-Pixel). Zusätzlich
  vereinfachtes **Symbol** (Hunde-Silhouette oder Pfote) für Favicon, Navbar
  klein, Social-Avatar.
- Schutzzone: mind. ½ Logohöhe umlaufend. Nie verzerren, nicht hart einfärben.

## 4. Farben

Aus den Flyern gemessen: ruhiges **Salbei-Petrol** als Fläche, **warmes Braun**
als Tinte/Pfoten. Fürs Web wird das Petrol für Text/Buttons abgedunkelt
(Kontrast), das helle Salbei bleibt Flächen-Tint.

| Token | Hex | OKLCH (≈) | Verwendung |
|---|---|---|---|
| Salbei-Petrol hell (tint) | `#96B8BA` | `oklch(0.74 0.03 195)` | Hero-Band, Flächen, Karten |
| **Petrol** (primary) | `#2F6D6B` | `oklch(0.50 0.06 190)` | Buttons, Links, Navigation aktiv |
| Petrol dunkel | `#214E4C` | `oklch(0.38 0.05 190)` | Hover, Footer |
| **Warmbraun** (accent) | `#6E4F3A` | `oklch(0.45 0.05 60)` | Pfoten-Motiv, Badges, Überschrift-Akzent |
| Sand (tint hell) | `#EFE9E2` | `oklch(0.93 0.01 70)` | sanfte Flächen, Trennbänder |
| Schiefer (foreground) | `#23211F` | `oklch(0.24 0.01 70)` | Text |
| Creme (background) | `#FBFAF7` | — | Grundfläche |
| Signalrot (destructive) | `#C42B1C` | `oklch(0.50 0.17 29)` | Fehler/Absage-Hinweise |

Regeln:
- Text auf Creme/Weiß in Petrol dunkel oder Schiefer (AA ≥ 4.5:1) – das helle
  Salbei `#96B8BA` **nie** als Textfarbe, nur als Fläche.
- Auf Salbei-Band: Schiefer- oder Warmbraun-Text (Kontrast prüfen).
- Max. eine Akzentfarbe (Warmbraun) pro Sektion.

## 5. Typografie

- **Display / Logo-Nähe:** **Caveat** (handschriftlich, Google Fonts, OFL) –
  nur für Hero-Claim, Sektions-Kicker, Logo-Schriftzug. Sparsam, nie für Fließtext.
- **Text/UI:** **Nunito** (rund, warm, gut lesbar, Google Fonts, OFL) –
  Überschriften 700, Fließtext 400, Labels 600.
- Fallback: `"Nunito", system-ui, sans-serif`.
- Beide via `next/font/google`.

## 6. Bildsprache

- Echte Fotos: Hunde in Bewegung, Training im Wald/auf der Wiese, Carmen mit
  Hunden, natürliches Licht, ruhige grüne Hintergründe.
- Warm, authentisch – keine sterilen Stockbilder, keine harten Studiofreisteller.
- Quer 3:2 / 16:9 für Hero & Karten; Porträt-Rund für „Über mich“.
- Flyer ergänzend (Workshops) – immer mit Textfassung daneben.

## 7. Gestaltungselemente

- Ecken: `0.75rem` Radius (weich, freundlich – passend zu Nunito/Caveat).
- **Pfoten-Motiv** (Warmbraun, dezent) als wiederkehrendes Element –
  z. B. kleine Pfötchen-Spur als Trenner oder im Hero (Opacity ≤ 0.1).
- Icons: Lucide Outline (`PawPrint`, `Dog`, `Bone`), 1 Farbton (Petrol/Schiefer).

## 8. Theme für @mind-studio/ui

```ts
// src/lib/theme.ts
import { parseTheme } from "@mind-studio/ui";

export const nolliDogs = parseTheme(
  {
    name: "nolli-dogs",
    label: "Nolli Dogs",
    light: {
      background: "#fbfaf7",
      primary: "oklch(0.50 0.06 190)",          // Petrol #2F6D6B
      "primary-foreground": "#ffffff",
      accent: "#efe9e2",                          // Sand
      "accent-foreground": "oklch(0.45 0.05 60)", // Warmbraun
      ring: "oklch(0.50 0.06 190)",
      destructive: "oklch(0.50 0.17 29)",
      "chart-1": "oklch(0.50 0.06 190)",          // Petrol
      "chart-2": "oklch(0.45 0.05 60)",           // Warmbraun
    },
    dark: {
      primary: "oklch(0.72 0.06 190)",
      "primary-foreground": "oklch(0.20 0.03 190)",
      ring: "oklch(0.72 0.06 190)",
    },
    radius: "0.75rem",
    font: { sans: '"Nunito", system-ui, sans-serif' },
    pattern: { kind: "dots", opacity: 0.05 },
  },
  { source: "open-kirrberg/nollidogs/brand" },
);
```

Hinweise:
- Nur abweichende Tokens definieren – Rest erbt vom Mind-Basistheme.
- Kontrast primary/primary-foreground in beiden Modi ≥ 4.5:1 sicherstellen.
- Dark Mode optional, Werte liegen aber bei.

## 9. Anwendungsbeispiele

- **Navbar:** Creme, Hunde-Symbol + „Nolli Dogs“ links, aktiver Punkt Petrol unterstrichen.
- **Hero:** Foto + Salbei/Petrol-Verlauf, Claim „individuell wie du und dein Hund“
  in Caveat (Weiß/Creme), dezente Pfoten-Spur.
- **Workshop-Karte:** Sand-Fläche, Datum/Uhrzeit/Preis als Fakten-Zeile, Warmbraun-Badge.
- **Footer:** Petrol dunkel, Creme-Schrift, Social-Links (Instagram, Facebook), §11-Hinweis.
