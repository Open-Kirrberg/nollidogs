import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, MapPin, Quote } from "lucide-react";
import { Badge, Button, Card, CardContent } from "@/components/ui";
import { WhatsAppIcon } from "@/components/icons";
import { InstagramCta } from "@/components/instagram-cta";
import { PhotoStrip } from "@/components/photo-strip";
import { trainingAngebote } from "@/data/training";
import { heroFoto, sliderFotos, ueberMichTeaser } from "@/data/photos";
import { partitionWorkshops } from "@/data/workshops";
import { site, whatsapp } from "@/lib/site";
import { asset } from "@/lib/asset";

export default function HomePage() {
  const { kommende } = partitionWorkshops(new Date());

  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative overflow-hidden bg-[oklch(0.96_0.01_190)]">
        <div className="dots absolute inset-0 opacity-[0.04]" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="rise">
            <span className="kicker mb-3">Hallo, schön dass du da bist</span>
            <h1 className="text-balance text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              <span className="-ml-0.5 block font-hand text-6xl leading-[0.9] text-primary sm:text-7xl lg:text-[5.5rem]">
                individuell
              </span>
              <span className="mt-2 block">wie du und dein Hund</span>
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-foreground/75">
              Mensch-Hund-Training in {site.address.city}. Ich hole euch dort ab,
              wo ihr gerade steht – und gehe euren Weg zum Team gemeinsam mit euch.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/kontakt">
                  Probetraining anfragen
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary/30"
              >
                <Link href="/training">Angebot ansehen</Link>
              </Button>
            </div>
          </div>

          <div className="rise relative" style={{ animationDelay: "120ms" }}>
            {/* organischer Salbei-Klecks hinter dem Foto */}
            <div
              className="absolute -inset-4 -z-0 bg-primary/15"
              style={{ borderRadius: "62% 38% 55% 45% / 48% 52% 48% 52%" }}
              aria-hidden
            />
            <div
              className="relative aspect-[4/3] overflow-hidden shadow-xl ring-1 ring-black/5"
              style={{ borderRadius: "62% 38% 55% 45% / 48% 52% 48% 52%" }}
            >
              <Image
                src={asset(heroFoto.src)}
                alt={heroFoto.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <Badge className="absolute -bottom-2 left-6 gap-1.5 rounded-full bg-accent px-4 py-1.5 text-accent-foreground shadow-md">
              <Heart className="size-3.5" /> mit Nolli Dogs seit {site.foundedYear}
            </Badge>
          </div>
        </div>
      </section>

      <div className="paw-trail" aria-hidden />

      {/* ──────────────────── Angebot / Training ──────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 max-w-2xl">
          <span className="kicker mb-2">Mein Angebot</span>
          <h2 className="text-3xl sm:text-4xl">Training, das zu euch passt</h2>
          <p className="mt-3 text-muted-foreground">
            Kein Training von der Stange: Jedes Mensch-Hund-Team ist anders. Such
            dir aus, was zu euch passt – oder frag mich einfach.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trainingAngebote.map((a) => (
            <Card
              key={a.slug}
              className="group h-full border-border/60 transition-shadow hover:shadow-lg"
            >
              <CardContent className="flex h-full flex-col gap-3 p-6">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <a.icon className="size-6" />
                </span>
                <h3 className="text-xl">{a.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {a.short}
                </p>
                <Link
                  href="/training"
                  className="inline-flex items-center gap-1 text-sm font-bold text-primary"
                >
                  Mehr erfahren
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ──────────────────── Foto-Slider ──────────────────── */}
      <PhotoStrip
        kicker="Aus dem Trainingsalltag"
        title="Hunde, mit denen ich arbeite"
        text="Jeder Hund bringt seine eigene Geschichte mit – vom aufgeregten Junghund bis zum Vierbeiner, der erst wieder Vertrauen fassen muss."
        photos={sliderFotos}
      />

      {/* ──────────────────── Über mich (Teaser) ──────────────────── */}
      <section className="bg-accent/60">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-5">
          <div className="relative md:col-span-2">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-lg ring-1 ring-black/5">
              <Image
                src={asset(ueberMichTeaser.src)}
                alt={ueberMichTeaser.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <span className="kicker mb-2">Wer hinter Nolli Dogs steckt</span>
            <h2 className="text-3xl sm:text-4xl">Hallo, ich bin Carmen</h2>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Seit {site.trainingSince} dreht sich mein Leben um Hunde – seit{" "}
              {site.foundedYear} mit Nolli Dogs. Den
              Namen verdanke ich meinem Rudel: {site.dogs.join(", ")}. Jeder von
              ihnen ist anders – und genau das hat mir gezeigt, dass es kein
              Training von der Stange gibt.
            </p>
            <p className="mt-3 text-sm font-semibold text-accent-foreground">
              {site.certification}
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-6 rounded-full border-primary/30"
            >
              <Link href="/ueber-mich">
                Mehr über mich <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ──────────────────── Philosophie-Zitat ──────────────────── */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <Quote className="mx-auto mb-4 size-8 text-primary/40" />
        <blockquote className="font-hand text-3xl leading-snug text-foreground sm:text-4xl">
          „Diese Individualität zu erkennen und zu fördern, ist mein Ziel im
          Mensch-Hund-Training.“
        </blockquote>
        <p className="mt-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
          Carmen Noll
        </p>
      </section>

      {/* ──────────────────── Workshops (Teaser) ──────────────────── */}
      {kommende.length > 0 && (
        <section className="bg-[oklch(0.96_0.01_190)]">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="kicker mb-2">Demnächst</span>
                <h2 className="text-3xl sm:text-4xl">Kommende Workshops</h2>
              </div>
              <Button asChild variant="ghost" className="rounded-full">
                <Link href="/workshops">
                  Alle Workshops <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {kommende.slice(0, 2).map((w) => (
                <Card key={w.title} className="border-border/60">
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-center gap-2 text-sm font-bold text-accent-foreground">
                      <span>{w.dateLabel}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground">{w.timeLabel}</span>
                    </div>
                    <h3 className="text-xl">{w.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {w.description}
                    </p>
                    <p className="mt-3 font-bold text-primary">{w.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Instagram: ohne Galerie, der Slider oben zeigt die Fotos schon ── */}
      <InstagramCta />

      {/* ──────────────────── Kontakt-CTA ──────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="relative overflow-hidden rounded-[2rem] bg-[oklch(0.30_0.04_190)] px-8 py-14 text-center text-white">
          <div className="paw-trail absolute inset-x-0 top-0 opacity-15" aria-hidden />
          <h2 className="text-balance text-3xl text-white sm:text-4xl">
            Bereit für den ersten Schritt?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/80">
            Erzähl mir von dir und deinem Hund – ich melde mich und wir finden den
            passenden Weg für euch.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white text-[oklch(0.30_0.04_190)] hover:bg-white/90"
            >
              <Link href="/kontakt">
                Jetzt Kontakt aufnehmen <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a
                href={whatsapp(
                  "Hallo Carmen, ich interessiere mich für ein Training mit meinem Hund. "
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="size-4" /> WhatsApp
              </a>
            </Button>
          </div>
          <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-white/60">
            <MapPin className="size-4" /> {site.address.city}, {site.address.region}
          </p>
        </div>
      </section>

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: site.fullName,
            founder: site.owner,
            foundingDate: String(site.foundedYear),
            email: site.email,
            telephone: site.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: site.trainingLocation.street,
              postalCode: site.trainingLocation.postalCode,
              addressLocality: site.trainingLocation.city,
              addressRegion: site.address.region,
              addressCountry: "DE",
            },
            sameAs: [site.instagramUrl, site.facebookUrl],
            url: "https://www.nollidogs.de",
          }),
        }}
      />
    </>
  );
}
