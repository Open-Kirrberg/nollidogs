import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, MapPin, Tag } from "lucide-react";
import { Badge, Button, Card, CardContent } from "@/components/ui";
import { PageHeader } from "@/components/page-header";
import { partitionWorkshops, type Workshop } from "@/data/workshops";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Workshops bei Nolli Dogs – Themen-Tage in der Natur rund um Spiel, Bindung und Teamarbeit zwischen Mensch und Hund.",
};

function WorkshopCard({ w, past }: { w: Workshop; past?: boolean }) {
  return (
    <Card className={`overflow-hidden border-border/60 ${past ? "opacity-75" : ""}`}>
      {w.image && (
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-accent/40">
          <Image
            src={asset(w.image)}
            alt={`Flyer zum Workshop „${w.title}“`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>
      )}
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl">{w.title}</h3>
          {past && (
            <Badge variant="secondary" className="shrink-0">
              vergangen
            </Badge>
          )}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {w.description}
        </p>
        <dl className="mt-4 grid gap-2 text-sm">
          <div className="flex items-center gap-2">
            <CalendarDays className="size-4 text-primary" /> {w.dateLabel}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4 text-primary" /> {w.timeLabel}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-primary" /> {w.location}
          </div>
          <div className="flex items-center gap-2 font-bold text-foreground">
            <Tag className="size-4 text-primary" /> {w.price}
          </div>
        </dl>
        {!past && (
          <Button asChild className="mt-5 w-full rounded-full">
            <Link href="/kontakt">Anmelden</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export default function WorkshopsPage() {
  const { kommende, vergangene } = partitionWorkshops(new Date());

  return (
    <>
      <PageHeader
        kicker="Gemeinsam mehr erleben"
        title="Workshops"
        intro="Themen-Tage in kleiner Runde – oft draußen in der Natur. Bewegung, Miteinander und jede Menge Spaß für euer Team."
      />

      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="mb-6 text-2xl sm:text-3xl">Kommende Workshops</h2>
        {kommende.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {kommende.map((w) => (
              <WorkshopCard key={w.title} w={w} />
            ))}
          </div>
        ) : (
          <Card className="border-dashed border-border/70 bg-accent/40">
            <CardContent className="flex flex-col items-center gap-3 p-10 text-center">
              <CalendarDays className="size-8 text-primary/50" />
              <p className="max-w-md text-muted-foreground">
                Aktuell sind keine Termine ausgeschrieben. Neue Workshops werden
                hier und auf Instagram angekündigt – oder frag einfach direkt nach.
              </p>
              <Button asChild variant="outline" className="rounded-full border-primary/30">
                <Link href="/kontakt">
                  Termin anfragen <ArrowRight className="size-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </section>

      {vergangene.length > 0 && (
        <section className="bg-accent/40">
          <div className="mx-auto max-w-5xl px-4 py-16">
            <h2 className="mb-2 text-2xl sm:text-3xl">Schon gelaufen</h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Ein Eindruck, was euch erwartet.
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {vergangene.map((w) => (
                <WorkshopCard key={w.title} w={w} past />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="font-hand text-2xl text-accent-foreground">
          Du willst keinen Termin verpassen?
        </p>
        <h2 className="mt-1 text-3xl sm:text-4xl">Folge mir auf Social Media</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="rounded-full">
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-primary/30"
          >
            <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
