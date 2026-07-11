import type { Metadata } from "next";
import { Instagram, Facebook, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui";
import { PageHeader } from "@/components/page-header";
import { WhatsAppIcon } from "@/components/icons";
import { InstagramFeed } from "@/components/instagram-feed";
import { site, whatsapp } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zu Nolli Dogs – Carmen Noll, Hundetraining in Homburg. Schreib mir per WhatsApp oder Instagram für ein Probetraining oder eine Workshop-Anmeldung.",
};

const waText =
  "Hallo Carmen, ich interessiere mich für ein Training mit meinem Hund. ";

const { trainingLocation: loc } = site;
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${loc.street}, ${loc.postalCode} ${loc.city}`
)}`;

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        kicker="Lass uns reden"
        title="Kontakt"
        intro="Am schnellsten erreichst du mich per WhatsApp. Erzähl mir kurz von dir und deinem Hund – ich melde mich und wir finden gemeinsam den passenden Weg."
      />

      <section className="mx-auto max-w-5xl px-4 py-16">
        {/* ── Primärer Kanal: WhatsApp ── */}
        <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-accent/40 p-7 sm:p-10">
          <div
            className="absolute -right-16 -top-16 size-56 bg-primary/10"
            style={{ borderRadius: "62% 38% 55% 45% / 48% 52% 48% 52%" }}
            aria-hidden
          />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <WhatsAppIcon className="size-8" />
              </span>
              <div>
                <h2 className="text-2xl sm:text-3xl">Schreib mir per WhatsApp</h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Unkompliziert und meistens am schnellsten beantwortet. Ich
                  schicke dir direkt einen vorausgefüllten Chat – du musst nur noch
                  „Senden“ tippen.
                </p>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="shrink-0 rounded-full bg-[#128C7E] text-white shadow-md hover:bg-[#0d7367]"
            >
              <a href={whatsapp(waText)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-4" /> Chat starten
              </a>
            </Button>
          </div>
        </div>

        {/* ── Weitere Wege ── */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 rounded-2xl border border-border/60 p-5 text-sm transition-colors hover:bg-accent/40"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Instagram className="size-5" />
            </span>
            <span>
              <span className="block font-bold text-foreground">Instagram</span>
              @nollidogs – DM &amp; Alltag
            </span>
          </a>

          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="flex items-start gap-3 rounded-2xl border border-border/60 p-5 text-sm transition-colors hover:bg-accent/40"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Phone className="size-5" />
            </span>
            <span>
              <span className="block font-bold text-foreground">Telefon</span>
              {site.phone}
            </span>
          </a>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 rounded-2xl border border-border/60 p-5 text-sm transition-colors hover:bg-accent/40"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <MapPin className="size-5" />
            </span>
            <span>
              <span className="block font-bold text-foreground">
                Trainingsgelände
              </span>
              {loc.name}
              <br />
              {loc.street}, {loc.postalCode} {loc.city}
            </span>
          </a>

          <a
            href={site.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 rounded-2xl border border-border/60 p-5 text-sm transition-colors hover:bg-accent/40"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Facebook className="size-5" />
            </span>
            <span>
              <span className="block font-bold text-foreground">Facebook</span>
              Nolli Dogs
            </span>
          </a>
        </div>

        <p className="mt-6 px-1 text-xs text-muted-foreground">
          {site.certification}
        </p>
      </section>

      <InstagramFeed />
    </>
  );
}
