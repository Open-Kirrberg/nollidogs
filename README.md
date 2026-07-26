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
| Fotos (Alt-Texte, Slider-Auswahl) | `src/data/photos.ts`, Dateien in `public/images/hunde/` |
| Instagram-Galerie (Beitrags-Links) | `src/data/instagram.ts` |

Workshops werden anhand des Datums automatisch in „kommende“ und „vergangene“
getrennt (`partitionWorkshops`).

## Kontakt & Instagram

- **Kein E-Mail-Formular:** Kontakt läuft primär über **WhatsApp** (`whatsapp()`
  in `src/lib/site.ts`, Nummer `site.whatsapp` im Format `49…`) und **Instagram**.
  Telefon und E-Mail (für Impressum/DSGVO nötig) bleiben als Nebenkanäle.
- **Instagram-Sektion:** `src/components/instagram-cta.tsx` ist eine Einladung
  zum Folgen – **kein nachgebauter Feed**. Die Bilder sind eigene Fotos, keine
  Beiträge, und die Texte sagen das auch so. Bitte nicht zu „die neuesten
  Posts“ umschreiben, sonst verspricht die Seite etwas, das sie nicht hält.
  Auf `/kontakt` kommen vier Foto-Kacheln dazu (`withGallery`), auf der
  Startseite nicht – dort trägt schon der Slider die Fotos.
- **Einzelne Beiträge verlinken:** Trägst du in `src/data/instagram.ts` bei
  einer Kachel den `shortcode` ein (das Stück aus der Post-URL zwischen `/p/`
  und dem Slash), öffnet sie genau diesen Beitrag. Ohne Shortcode führt sie
  aufs Profil – bewusst so, damit nie ein falscher Beitrag verlinkt wird.
- **Warum kein automatischer Feed?** Instagram hat die öffentlichen Zugänge
  geschlossen: Die Profilseite liefert serverseitig keine Beitragsdaten,
  `/api/v1/users/web_profile_info/` antwortet mit 400, und ein Headless-Browser
  bekommt eine Fehlerseite. Ein Live-Feed braucht daher entweder ein Widget wie
  [behold.so](https://behold.so) (kostenlos, DSGVO-freundlich – dann aber
  Datenschutzerklärung um den Drittanbieter ergänzen) oder die Instagram Graph
  API mit Business-Account und App-Review. Details als Kommentar oben in
  `src/data/instagram.ts`.

## Offene Punkte vor dem Livegang

Impressum und Datenschutz sind vollständig, ohne Platzhalter. Zu prüfen bleibt:

- **Erteilende Behörde** der §11-Erlaubnis (`site.supervisoryAuthority`, aktuell
  „Saarpfalz-Kreis, Veterinäramt“) gegen Carmens Erlaubnisbescheid abgleichen.
- **Instagram-Shortcodes** in `src/data/instagram.ts` ergänzen, damit die
  Kacheln auf die echten Beiträge statt aufs Profil führen.
- Preise, kommende Termine und finales Logo – siehe `content.md`.

## Besonderheit (übernommen von swvkirrberg)

Komponenten immer aus `@/components/ui` importieren (nicht direkt aus
`@mind-studio/ui`): Im dist-Build fehlt einigen Komponenten die
`"use client"`-Direktive; der Re-Export-Barrel macht alle zu Client-Referenzen.
