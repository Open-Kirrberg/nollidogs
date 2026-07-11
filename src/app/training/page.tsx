import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button, Card, CardContent } from "@/components/ui";
import { PageHeader } from "@/components/page-header";
import { WhatsAppIcon } from "@/components/icons";
import { trainingAngebote } from "@/data/training";
import { whatsapp } from "@/lib/site";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Einzeltraining, Gruppentraining, Zirkeltraining und Workshops bei Nolli Dogs in Homburg – individuell auf dich und deinen Hund abgestimmt.",
};

export default function TrainingPage() {
  return (
    <>
      <PageHeader
        kicker="Mein Angebot"
        title="Training, das zu euch passt"
        intro="Ob ganz am Anfang oder mittendrin – ich hole euch dort ab, wo ihr gerade steht. Such dir aus, was zu euch passt."
      />

      <section className="mx-auto max-w-5xl space-y-8 px-4 py-16">
        {trainingAngebote.map((a, i) => (
          <Card
            key={a.slug}
            id={a.slug}
            className="scroll-mt-24 overflow-hidden border-border/60"
          >
            <CardContent className="grid gap-6 p-7 md:grid-cols-[auto_1fr] md:p-9">
              <div className="flex md:flex-col md:items-center">
                <span className="flex size-16 items-center justify-center rounded-3xl bg-accent text-accent-foreground">
                  <a.icon className="size-8" />
                </span>
                <span
                  className="ml-4 self-center font-hand text-5xl text-primary/20 md:ml-0 md:mt-2"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl">{a.title}</h2>
                <p className="mt-1 font-hand text-xl text-accent-foreground">
                  {a.short}
                </p>
                <p className="mt-3 leading-relaxed text-foreground/80">
                  {a.description}
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {a.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm">
                      <Check className="size-4 shrink-0 text-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-accent/60">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl">Noch unsicher, was passt?</h2>
          <p className="mt-3 text-muted-foreground">
            Kein Problem. Schreib mir kurz, was euch beschäftigt – gemeinsam
            finden wir den richtigen Einstieg für dich und deinen Hund.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/kontakt">
                Kontakt aufnehmen <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary/30"
            >
              <a
                href={whatsapp(
                  "Hallo Carmen, ich habe eine Frage zum Training. "
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="size-4" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
