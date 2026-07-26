import Image from "next/image";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";
import { instagramPosts, postUrl, postLinkLabel } from "@/data/instagram";

/*
 * Instagram-Sektion: Einladung zum Folgen.
 *
 * Bewusst KEIN nachgebauter Feed. Die Bilder sind eigene Fotos, keine
 * Beiträge – deshalb steht hier „die neuesten Bilder gibt es drüben“ statt
 * so zu tun, als wären das die letzten Posts. Hintergrund und die Wege zu
 * einem echten Feed: src/data/instagram.ts.
 *
 * Kompakte Karte statt großer Sektion: Auf beiden Seiten folgt direkt danach
 * ein Haupt-CTA, und zwei gleich große Handlungsaufforderungen hintereinander
 * heben sich gegenseitig auf.
 *
 * `withGallery` blendet vier Foto-Kacheln ein. Auf Seiten, die schon eigene
 * Fotos zeigen (Startseite mit Slider), bleibt es beim reinen Aufruf – sonst
 * sieht man dieselben Hunde zweimal.
 */
type InstagramCtaProps = {
  withGallery?: boolean;
};

export function InstagramCta({ withGallery = false }: InstagramCtaProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-[2rem] bg-accent/60 px-7 py-8 sm:px-10">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <Instagram className="size-7" />
            </span>
            <div>
              <h2 className="text-2xl sm:text-3xl">Folge uns auf Instagram</h2>
              <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground">
                Die neuesten Bilder und kurzen Trainingsmomente teile ich dort –
                schau gern vorbei.
              </p>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="shrink-0 rounded-full bg-[oklch(0.30_0.04_190)] text-white hover:bg-[oklch(0.30_0.04_190)]/90"
          >
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="size-4" /> @nollidogs folgen
            </a>
          </Button>
        </div>

        {withGallery && (
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {instagramPosts.map((post) => (
              <a
                key={post.src}
                href={postUrl(post)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={postLinkLabel(post)}
                className="group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-black/5"
              >
                <Image
                  src={asset(post.src)}
                  alt={post.alt}
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
        )}
      </div>
    </section>
  );
}
