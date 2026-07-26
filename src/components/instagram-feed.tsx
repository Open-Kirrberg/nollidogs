import Image from "next/image";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";

/*
 * Instagram-Sektion.
 *
 * Statisches Hosting (GitHub Pages) hat keinen Server, und Instagram bietet
 * ohne API-Token / App-Review keinen freien Feed. Ein WIRKLICH automatisch
 * aktualisierter Feed läuft daher nur über ein clientseitiges Widget.
 *
 * → Live-Feed aktivieren (empfohlen: behold.so, DSGVO-freundlich, kostenlos):
 *   1. Account anlegen, Instagram @nollidogs verbinden, Feed-ID kopieren.
 *   2. <script> des Widgets in src/app/layout.tsx einbinden.
 *   3. Das untenstehende <div data-grid> durch das Widget-Element ersetzen,
 *      z. B. <behold-widget feed-id="DEINE_ID" />.
 *
 * Bis dahin: handgepflegte Galerie aus public/images (lädt schnell, kein
 * Tracking). Neue Bilder einfach in `tiles` ergänzen.
 */
const tiles = [
  { src: "/images/nolli-dog-black-white.jpg", alt: "Schwarz-weißer Hund in der Natur" },
  { src: "/images/nolli-dog-brown.jpg", alt: "Hund entspannt im Gras" },
];

export function InstagramFeed() {
  return (
    <section className="bg-accent/60">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="kicker mb-2">Aus dem Alltag</span>
            <h2 className="text-3xl sm:text-4xl">Folge uns auf Instagram</h2>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1.5 font-bold text-primary hover:underline"
            >
              <Instagram className="size-4" /> @nollidogs
            </a>
          </div>
          <Button asChild variant="outline" className="rounded-full border-primary/30">
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
              <Instagram className="size-4" /> Profil ansehen
            </a>
          </Button>
        </div>

        <div
          data-grid
          className="grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {tiles.map((t) => (
            <a
              key={t.src}
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.alt} – auf Instagram ansehen`}
              className="group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-black/5"
            >
              <Image
                src={asset(t.src)}
                alt={t.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                className="absolute inset-0 flex items-center justify-center bg-[oklch(0.30_0.04_190)]/0 text-white opacity-0 transition-all duration-300 group-hover:bg-[oklch(0.30_0.04_190)]/45 group-hover:opacity-100"
                aria-hidden
              >
                <Instagram className="size-7" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
