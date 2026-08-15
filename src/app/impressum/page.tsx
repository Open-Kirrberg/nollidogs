import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="text-lg font-bold text-foreground">{children}</h2>
);

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl sm:text-4xl">Impressum</h1>
      <div className="mt-6 space-y-6 text-sm leading-relaxed text-foreground/85">
        <section>
          <H2>Angaben gemäß § 5 DDG</H2>
          <p className="mt-2">
            {site.fullName}
            <br />
            Inhaberin: {site.owner}
            <br />
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}
            <br />
            Deutschland
          </p>
        </section>

        <section>
          <H2>Kontakt</H2>
          <p className="mt-2">
            Telefon:{" "}
            <a className="underline" href={`tel:+${site.whatsapp}`}>
              {site.phone}
            </a>
            <br />
            E-Mail:{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </section>

        <section>
          <H2>Berufsrechtliche Angaben</H2>
          <p className="mt-2">
            Tätigkeit: gewerbsmäßige Ausbildung von Hunden für Dritte und
            Anleitung der Ausbildung der Hunde durch den Tierhalter.
            <br />
            Erlaubnis nach § 11 Abs. 1 Satz 1 Nr. 8 Buchst. f Tierschutzgesetz
            (TierSchG), erteilt in der Bundesrepublik Deutschland.
          </p>
        </section>

        <section>
          <H2>Umsatzsteuer</H2>
          <p className="mt-2">
            {site.vatId ? (
              <>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: {site.vatId}</>
            ) : (
              <>
                Als Kleinunternehmerin im Sinne von § 19 UStG wird keine
                Umsatzsteuer berechnet und ausgewiesen.
              </>
            )}
          </p>
        </section>

        <section>
          <H2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</H2>
          <p className="mt-2">
            {site.owner}
            <br />
            {site.address.street}, {site.address.postalCode} {site.address.city}
          </p>
        </section>

        <section>
          <H2>Verbraucherstreitbeilegung</H2>
          <p className="mt-2">
            Wir sind nicht bereit und nicht verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            im Sinne des Verbraucherstreitbeilegungsgesetzes (VSBG)
            teilzunehmen.
          </p>
        </section>

        <section>
          <H2>Haftung für Inhalte</H2>
          <p className="mt-2">
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen. Als Diensteanbieterin sind wir
            gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir
            als Diensteanbieterin jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
            Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
            diese Inhalte umgehend entfernen.
          </p>
        </section>

        <section>
          <H2>Haftung für Links</H2>
          <p className="mt-2">
            Unser Angebot enthält Links zu externen Websites Dritter (z. B.
            Instagram, Facebook, WhatsApp, Google Maps), auf deren Inhalte wir
            keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte
            auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten
            ist stets der jeweilige Anbieter oder Betreiber der Seiten
            verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige
            Inhalte waren zu diesem Zeitpunkt nicht erkennbar. Eine permanente
            inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete
            Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
            Bekanntwerden von Rechtsverletzungen werden wir derartige Links
            umgehend entfernen.
          </p>
        </section>

        <section>
          <H2>Urheberrecht</H2>
          <p className="mt-2">
            Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf
            diesen Seiten – insbesondere Texte, Fotos und Grafiken – unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
            Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
            Urheberrechts bedürfen der schriftlichen Zustimmung der
            Rechteinhaberin. Downloads und Kopien dieser Seite sind nur für den
            privaten, nicht kommerziellen Gebrauch gestattet. Soweit Inhalte
            nicht von der Betreiberin erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>
        </section>

        <p className="text-xs text-muted-foreground">Stand: {site.legalUpdated}</p>
      </div>
    </div>
  );
}
