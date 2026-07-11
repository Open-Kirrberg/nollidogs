import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl sm:text-4xl">Impressum</h1>
      <div className="mt-6 space-y-6 text-sm leading-relaxed text-foreground/85">
        <section>
          <h2 className="text-lg font-bold text-foreground">
            Angaben gemäß § 5 DDG
          </h2>
          <p className="mt-2">
            {site.fullName}
            <br />
            {site.owner}
            <br />
            {/* ⚠️ Straße & PLZ von Carmen ergänzen */}
            [Straße &amp; Hausnummer]
            <br />
            [PLZ] {site.address.city}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Kontakt</h2>
          <p className="mt-2">
            Telefon: {site.phone}
            <br />
            E-Mail:{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">
            Berufsrechtliche Angaben
          </h2>
          <p className="mt-2">
            Erlaubnis zur gewerbsmäßigen Ausbildung von Hunden und der Ausbildung
            der Hundehalter gemäß § 11 Abs. 1 Nr. 8f Tierschutzgesetz.
            <br />
            {/* ⚠️ erteilende Behörde ergänzen */}
            Erteilt durch: [zuständige Behörde]
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="mt-2">
            {site.owner}, Anschrift wie oben.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Haftung für Links</h2>
          <p className="mt-2">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
          </p>
        </section>

        <p className="text-xs text-muted-foreground">
          Hinweis: Mit [ ] markierte Angaben sind noch zu ergänzen, bevor die
          Seite live geht.
        </p>
      </div>
    </div>
  );
}
