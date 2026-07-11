# PRD: nollidogs.de

**Stand:** 16.06.2026 · **Status:** Entwurf (v0)

> Kurz-PRD für die erste Version. Inhaltliche Details (Texte, Bilder, Kontakt)
> folgen in den nächsten Schritten.

---

## 1. Ziel

Eine schlanke, statische Website für **nollidogs.de** – moderne, mobil-first
Präsenz, gepflegt ohne Baukasten, kostenlos gehostet via GitHub Pages.

## 2. Zielgruppen

1. **Besucher / Interessenten** (mobil, oft über Google/Social) – wollen wissen,
   wer/was hinter Nolli Dogs steckt und wie man Kontakt aufnimmt.
2. **Pflegeperson** (nicht-technisch) – soll Inhalte ohne Entwickler aktualisieren.

## 3. Informationsarchitektur (Soll, v0)

```
/                Home / Startseite (Wer wir sind, Angebot, CTA Kontakt)
/about           Über uns
/leistungen      Leistungen / Angebot
/galerie         Fotos
/kontakt         Kontakt + Anfrageformular
/impressum       Pflicht
/datenschutz     Pflicht
```

> Seitenliste vorläufig – wird mit den Inhalten der nächsten Schritte finalisiert.

## 4. Anforderungen

- Alle Seiten statisch vorgerendert, voll responsiv, barrierearm, SEO-tauglich
  (echter Text statt Bild-Inhalte).
- Inhalte (Kontakt, Preise, Termine) zentral in `src/lib` / `src/data` pflegbar.
- DSGVO-konform: Impressum, Datenschutz, kein Tracking ohne Einwilligung.

**Nicht-Ziele (v0):** Online-Bezahlung, Login-Bereich, Shop, Mehrsprachigkeit.

## 5. Technischer Aufbau

Identisch zur Schwester-Site `../swvkirrberg`:

| Bereich | Wahl |
|---|---|
| Framework | Next.js 16, App Router, `output: "export"` (statisch) |
| Sprache | TypeScript (strict) |
| Styling | Tailwind v4 (`@tailwindcss/postcss`) |
| Design-System | `@mind-studio/ui` (GitHub Packages, eigenes Theme) |
| Package-Manager | pnpm |
| Fonts | via `next/font` |
| Hosting | GitHub Pages mit `basePath` (`/nollidogs`), `trailingSlash` |
| CI/CD | GitHub Actions → `actions/deploy-pages` |
| Bilder | `images.unoptimized` (Pages kann nicht optimieren) |

**Besonderheit (übernommen):** `@mind-studio/ui`-Komponenten immer über einen
lokalen `"use client"`-Re-Export-Barrel (`src/components/ui.ts`) importieren –
umgeht den fehlenden `"use client"`-Hinweis im dist-Build der Lib.

## 6. Offene Punkte (für nächste Schritte)

- Was genau bietet Nolli Dogs an? (Zucht / Training / Betreuung / …)
- Markenfarben, Logo, Schriften → eigenes `theme.ts`
- Reale Inhalte: Texte, Fotos, Kontaktdaten, Impressum-Angaben
