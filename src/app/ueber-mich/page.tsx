import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Dog, Heart, Sparkles } from "lucide-react";
import { Button, Card, CardContent } from "@/components/ui";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Carmen Noll – zertifizierte Hundetrainerin in Homburg mit über 13 Jahren Erfahrung. Die Geschichte und Philosophie hinter Nolli Dogs.",
};

const werte = [
  {
    icon: Heart,
    title: "Einfühlsam",
    text: "Ich schaue genau hin und gehe in eurem Tempo – ohne Druck, mit viel Geduld.",
  },
  {
    icon: Sparkles,
    title: "Individuell",
    text: "Kein Schema F: Training, das zu eurem Alltag und eurem Hund passt.",
  },
  {
    icon: BadgeCheck,
    title: "Fundiert",
    text: `${site.certification} – über ${site.experienceYears} Jahre Erfahrung.`,
  },
];

export default function UeberMichPage() {
  return (
    <>
      <PageHeader
        kicker="Wer hinter Nolli Dogs steckt"
        title="Hallo, ich bin Carmen"
        intro="Trainerin aus Leidenschaft – und Rudelchefin von vier ganz unterschiedlichen Charakteren."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-start gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lg ring-1 ring-black/5">
              <Image
                src={asset("/images/golden-puppy-grass.jpg")}
                alt="Carmen Noll mit Hund"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-4 leading-relaxed text-foreground/85 md:col-span-3">
            <p>
              Seit über {site.experienceYears} Jahren dreht sich mein Leben um
              Hunde – seit {site.foundedYear} hauptberuflich mit{" "}
              <strong className="text-foreground">Nolli Dogs</strong>. Den Namen
              verdanke ich meinem Rudel: {site.dogs.join(", ")}.
            </p>
            <p>
              So individuell jeder meiner Hunde ist, so individuell seid auch ihr,
              eure Hunde und euer Zusammenleben. Diese Individualität zu erkennen
              und zu fördern, ist mein Ziel im Mensch-Hund-Training.
            </p>
            <p>
              Gemeinsam mit euch will ich euren Weg zum Team gehen – ob ihr ganz
              am Anfang steht oder in einer Sackgasse stehengeblieben seid. Ich
              hole euch an eurem Standpunkt ab und gehe mit euch weiter, bis ihr
              an eurem Wohlfühlort angekommen seid.
            </p>

            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-accent/70 p-4">
              <Dog className="size-6 shrink-0 text-accent-foreground" />
              <p className="text-sm">
                <strong className="text-foreground">Mein Rudel:</strong>{" "}
                {site.dogs.join(" · ")} – meine besten Lehrmeister.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 text-center">
            <span className="kicker mb-2 justify-center">Wofür ich stehe</span>
            <h2 className="text-3xl sm:text-4xl">Meine Werte</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {werte.map((w) => (
              <Card key={w.title} className="border-border/60 text-center">
                <CardContent className="flex flex-col items-center gap-3 p-7">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <w.icon className="size-7" />
                  </span>
                  <h3 className="text-xl">{w.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {w.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl">Lust, euren Weg zu gehen?</h2>
        <p className="mt-3 text-muted-foreground">
          Erzähl mir von dir und deinem Hund – ich freue mich auf euch.
        </p>
        <Button asChild size="lg" className="mt-6 rounded-full">
          <Link href="/kontakt">
            Probetraining anfragen <ArrowRight className="size-4" />
          </Link>
        </Button>
      </section>
    </>
  );
}
