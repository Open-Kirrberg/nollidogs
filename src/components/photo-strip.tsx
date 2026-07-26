import Image from "next/image";
import { asset } from "@/lib/asset";
import { type Photo } from "@/data/photos";

/*
 * Horizontaler Foto-Slider.
 *
 * Bewusst ohne Carousel-Library: reines CSS-Scroll-Snapping. Das funktioniert
 * auch ohne JavaScript, ist auf dem Handy die gewohnte Wischgeste und spart
 * das Client-Bundle. Auf breiten Screens sind ~5 Kacheln sichtbar, der Rest
 * wird gescrollt.
 */
/** Linker Einzug = Rand des zentrierten 72rem-Rasters (max-w-6xl) plus dessen px-4. */
const EDGE_INSET = "max(1rem, calc((100vw - 72rem) / 2 + 1rem))";

type PhotoStripProps = {
  kicker: string;
  title: string;
  text?: string;
  photos: readonly Photo[];
};

export function PhotoStrip({ kicker, title, text, photos }: PhotoStripProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <span className="kicker mb-2">{kicker}</span>
        <h2 className="text-3xl sm:text-4xl">{title}</h2>
        {text && (
          <p className="mt-3 max-w-2xl text-muted-foreground">{text}</p>
        )}
      </div>

      <ul
        className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        // Erste Kachel bündig zur Überschrift (72rem-Raster + 1rem Innen-
        // abstand); nach rechts läuft der Slider bewusst aus dem Bild – das
        // signalisiert, dass es weitergeht. scrollPadding hält das Snapping
        // an derselben Kante.
        style={{ paddingInline: EDGE_INSET, scrollPaddingInline: EDGE_INSET }}
      >
        {photos.map((photo) => (
          <li
            key={photo.src}
            className="relative aspect-square w-52 shrink-0 snap-start overflow-hidden rounded-[1.75rem] shadow-sm ring-1 ring-black/5 sm:w-60"
          >
            <Image
              src={asset(photo.src)}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 13rem, 15rem"
              className="object-cover"
            />
          </li>
        ))}
      </ul>

      <p
        className="mx-auto max-w-6xl px-4 text-xs text-muted-foreground sm:hidden"
        aria-hidden
      >
        Zum Blättern seitlich wischen
      </p>
    </section>
  );
}
