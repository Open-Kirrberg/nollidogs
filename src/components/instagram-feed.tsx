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
  { src: "/images/dog-2710be2a-c57b-4b42-a854-8983c64436ef.jpg", alt: "Nolli im Gras" },
  { src: "/images/dog-2e102b10-93fe-48d0-b452-f13b3e8a0de3.jpg", alt: "Nolli in der Natur" },
  { src: "/images/dog-3ffcafb7-8f48-40b2-9185-19fd5cac09b8.jpg", alt: "Nolli draußen" },
  { src: "/images/dog-4a86cb57-53e9-4fde-a14a-3672d6f2365b.jpg", alt: "Nolli auf der Wiese" },
  { src: "/images/dog-628f6ae8-4d57-4a03-bc59-ff91f357ad8d.jpg", alt: "Nolli ganz nah" },
  { src: "/images/dog-9132b38b-1cc3-4769-9c90-751c36d94824.jpg", alt: "Nolli unterwegs" },
  { src: "/images/dog-abbd0db9-7610-4147-9ba5-c831d4f104d9.jpg", alt: "Nolli im Grünen" },
  { src: "/images/dog-ce37af73-b814-4689-a4b7-b44825e6e9b2.jpg", alt: "Nolli beim Spaziergang" },
  { src: "/images/dog-de0b4add-da64-400b-9121-3f86c80e053b.jpg", alt: "Nolli in der Sonne" },
  { src: "/images/dog-eb22b07f-ce22-417d-ae8f-aa0ceb5a15ac.jpg", alt: "Nolli im Alltag" },
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
