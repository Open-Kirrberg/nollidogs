# nollidogs.de

Website für **Nolli Dogs** – Mensch-Hund-Training von Carmen Noll in Homburg.
Aufbau nach `PRD.md`, `brand.md` und `content.md`.

## Stack

- **Next.js 16** (App Router, alle Seiten statisch vorgerendert via `output: "export"`)
- **@mind-studio/ui** (GitHub Packages) mit eigenem Theme `nolli-dogs` (`src/lib/theme.ts`)
- Tailwind v4, **Caveat** (Handschrift) + **Nunito** (Text) via `next/font`
- Hosting: GitHub Pages unter `basePath` `/nollidogs`

## Entwicklung

```bash
pnpm install        # @mind-studio/ui kommt aus GitHub Packages (Auth nötig)
pnpm dev            # http://localhost:3092
pnpm build          # statischer Produktions-Build nach out/
pnpm typecheck
```

## Inhalte pflegen

| Was | Wo |
|---|---|
| Name, Kontakt, WhatsApp, Social, Rudel, Trainingsgelände | `src/lib/site.ts` |
| Trainingsangebote | `src/data/training.ts` |
| Workshops (Termine) | `src/data/workshops.ts` |
| Markentheme / Farben | `src/lib/theme.ts` |
| Fotos / Instagram-Galerie | `public/images/` bzw. `src/components/instagram-feed.tsx` |

Workshops werden anhand des Datums automatisch in „kommende“ und „vergangene“
getrennt (`partitionWorkshops`).

## Kontakt & Instagram

- **Kein E-Mail-Formular:** Kontakt läuft primär über **WhatsApp** (`whatsapp()`
  in `src/lib/site.ts`, Nummer `site.whatsapp` im Format `49…`) und **Instagram**.
  Telefon und E-Mail (für Impressum/DSGVO nötig) bleiben als Nebenkanäle.
- **Instagram-Galerie:** `src/components/instagram-feed.tsx` zeigt eine schnelle,
  trackingfreie Galerie aus `public/images` und verlinkt aufs Profil.
- **Automatisch aktualisierter Feed** (statisches Hosting hat keinen Server,
  Instagram keinen freien API-Feed): clientseitiges Widget nötig. Empfehlung
  [behold.so](https://behold.so) (kostenlos, DSGVO-freundlich). Schritte stehen
  als Kommentar oben in `instagram-feed.tsx`.

## Offene Punkte vor dem Livegang

Siehe `content.md` (Abschnitt „Offene Punkte für Carmen“): **Impressums-Anschrift**
(die registrierte Geschäftsadresse – kann vom Trainingsgelände Vogelturm abweichen)
und die erteilende Behörde, Preise, kommende Termine, echte Fotos, finales Logo.
Mit `[ ]` markierte Stellen im Impressum sind Platzhalter. WhatsApp-Nummer
(0176 31623178) und Telefon sind bereits eingetragen.

## Besonderheit (übernommen von swvkirrberg)

Komponenten immer aus `@/components/ui` importieren (nicht direkt aus
`@mind-studio/ui`): Im dist-Build fehlt einigen Komponenten die
`"use client"`-Direktive; der Re-Export-Barrel macht alle zu Client-Referenzen.
