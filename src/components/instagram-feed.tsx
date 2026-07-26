import Image from "next/image";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";
import { instagramPosts, postUrl, postLinkLabel } from "@/data/instagram";

/*
 * Instagram-Sektion. Inhalte und die Erklärung, warum der Feed handgepflegt
 * ist (und wie man ihn live schaltet), stehen in src/data/instagram.ts.
 */
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
          <Button
            asChild
            variant="outline"
            className="rounded-full border-primary/30"
          >
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="size-4" /> Profil ansehen
            </a>
          </Button>
        </div>

        <div data-grid className="grid grid-cols-2 gap-3 sm:grid-cols-4">
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
      </div>
    </section>
  );
}
