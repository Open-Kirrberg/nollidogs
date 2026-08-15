import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false },
};

const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="text-lg font-bold text-foreground">{children}</h2>
);
const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="mt-4 font-bold text-foreground">{children}</h3>
);
const Ext = ({ href, children }: { href: string; children: ReactNode }) => (
  <a className="underline" href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default function DatenschutzPage() {
  const dpa = site.dataProtectionAuthority;
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl sm:text-4xl">Datenschutzerklärung</h1>
      <div className="mt-6 space-y-6 text-sm leading-relaxed text-foreground/85">
        <section>
          <H2>1. Überblick</H2>
          <p className="mt-2">
            Der Schutz deiner persönlichen Daten ist uns wichtig. Diese
            Datenschutzerklärung informiert dich darüber, welche
            personenbezogenen Daten beim Besuch dieser Website und bei der
            Kontaktaufnahme verarbeitet werden, zu welchem Zweck das geschieht
            und welche Rechte du hast. Diese Website ist eine rein
            informative, statische Website: Sie setzt keine Cookies, verwendet
            keine Analyse- oder Tracking-Dienste und bindet keine Inhalte von
            Drittanbietern (z. B. Karten, Videos, Social-Media-Plugins) ein.
          </p>
        </section>

        <section>
          <H2>2. Verantwortliche</H2>
          <p className="mt-2">
            Verantwortliche im Sinne der Datenschutz-Grundverordnung (DSGVO)
            ist:
          </p>
          <p className="mt-2">
            {site.owner} ({site.fullName})
            <br />
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}
            <br />
            Telefon: {site.phone}
            <br />
            E-Mail:{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p className="mt-2">
            Ein Datenschutzbeauftragter ist gesetzlich nicht erforderlich und
            wurde nicht benannt.
          </p>
        </section>

        <section>
          <H2>3. Hosting und Server-Logfiles</H2>
          <p className="mt-2">
            Diese Website wird als statische Seite über den Dienst GitHub Pages
            der GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco,
            CA 94107, USA (nachfolgend „GitHub“) bereitgestellt.
          </p>
          <p className="mt-2">
            Beim Aufruf der Website übermittelt dein Browser automatisch
            technische Daten an den Server von GitHub. Dazu gehören insbesondere
            die IP-Adresse deines Endgeräts, Datum und Uhrzeit des Zugriffs,
            die aufgerufene Seite bzw. Datei, die übertragene Datenmenge, die
            Website, von der aus der Zugriff erfolgt (Referrer), sowie Browsertyp
            und -version und das verwendete Betriebssystem. GitHub kann diese
            Daten in Server-Logfiles speichern, um die Sicherheit und Integrität
            des Dienstes zu gewährleisten und rechtlichen Verpflichtungen
            nachzukommen. Wir selbst haben auf diese Logfiles keinen Zugriff.
          </p>
          <p className="mt-2">
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
            DSGVO. Unser berechtigtes Interesse liegt in der sicheren,
            zuverlässigen und kostengünstigen Bereitstellung dieser Website.
          </p>
          <p className="mt-2">
            GitHub verarbeitet Daten auch in den USA. GitHub ist unter dem
            EU-US Data Privacy Framework zertifiziert; die Übermittlung stützt
            sich daher auf den Angemessenheitsbeschluss der Europäischen
            Kommission (Art. 45 DSGVO). Weitere Informationen findest du in der{" "}
            <Ext href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement">
              Datenschutzerklärung von GitHub
            </Ext>
            .
          </p>
        </section>

        <section>
          <H2>4. Schriftarten</H2>
          <p className="mt-2">
            Die verwendeten Schriften (Caveat, Nunito) werden lokal von den
            Servern dieser Website ausgeliefert. Beim Aufruf der Seite wird
            keine Verbindung zu Servern von Google oder anderen
            Schriftanbietern hergestellt; es werden keine Daten an diese
            übermittelt.
          </p>
        </section>

        <section>
          <H2>5. Kontaktaufnahme</H2>
          <p className="mt-2">
            Diese Website enthält kein Kontaktformular. Du kannst uns per
            WhatsApp, E-Mail oder Telefon erreichen. Wenn du mit uns Kontakt
            aufnimmst, verarbeiten wir die von dir mitgeteilten Daten (z. B.
            Name, Telefonnummer, E-Mail-Adresse, Angaben zu deinem Hund und der
            Inhalt deiner Nachricht) ausschließlich zur Bearbeitung deiner
            Anfrage und für den Fall, dass sich daraus ein Trainingsverhältnis
            ergibt, zu dessen Durchführung.
          </p>
          <p className="mt-2">
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung und
            Durchführung eines Vertrags) sowie im Übrigen Art. 6 Abs. 1 lit. f
            DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
            Wir speichern deine Anfrage, bis sie abschließend bearbeitet ist
            und keine weiteren Rückfragen zu erwarten sind, längstens jedoch bis
            zum Ablauf gesetzlicher Aufbewahrungsfristen, sofern die Daten
            Bestandteil eines Vertragsverhältnisses geworden sind.
          </p>

          <H3>WhatsApp</H3>
          <p className="mt-2">
            Die Kontaktaufnahme per WhatsApp erfolgt über einen Link, der den
            Messenger auf deinem Gerät mit einer vorausgefüllten Nachricht
            öffnet. Erst wenn du diesen Link anklickst und eine Nachricht
            sendest, werden Daten (deine Telefonnummer, ggf. dein Profilname und
            der Nachrichteninhalt) über die Server von WhatsApp Ireland Limited,
            4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland,
            übertragen. Die Nachrichten sind Ende-zu-Ende-verschlüsselt; WhatsApp
            verarbeitet jedoch Metadaten (z. B. Telefonnummern und Zeitpunkte)
            auch außerhalb der EU. Auf diese Verarbeitung haben wir keinen
            Einfluss. Nutzt du WhatsApp nicht, kannst du uns jederzeit per
            E-Mail oder Telefon erreichen. Weitere Informationen:{" "}
            <Ext href="https://www.whatsapp.com/legal/privacy-policy-eea">
              Datenschutzrichtlinie von WhatsApp
            </Ext>
            .
          </p>
        </section>

        <section>
          <H2>6. Links zu Instagram, Facebook und Google Maps</H2>
          <p className="mt-2">
            Diese Website verlinkt auf unser Profil bei Instagram und Facebook
            (Meta Platforms Ireland Limited, Merrion Road, Dublin 4, Irland)
            sowie – zur Anfahrt zum Trainingsgelände – auf Google Maps (Google
            Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Es
            handelt sich um reine Verlinkungen; beim Aufruf unserer Website
            werden keine Inhalte dieser Anbieter geladen und keine Daten an sie
            übermittelt. Erst wenn du einen dieser Links anklickst, verlässt du
            unsere Website, und der jeweilige Anbieter verarbeitet Daten in
            eigener Verantwortung. Es gelten dann die Datenschutzhinweise von{" "}
            <Ext href="https://privacycenter.instagram.com/policy">Instagram</Ext>
            ,{" "}
            <Ext href="https://www.facebook.com/privacy/policy">Facebook</Ext>{" "}
            bzw. <Ext href="https://policies.google.com/privacy">Google</Ext>.
          </p>
        </section>

        <section>
          <H2>7. Cookies, Analyse und Tracking</H2>
          <p className="mt-2">
            Diese Website setzt keine Cookies und verwendet keine Analyse-,
            Tracking- oder Marketing-Dienste. Es werden keine Nutzerprofile
            erstellt. Aus diesem Grund ist auch kein Cookie-Banner erforderlich.
          </p>
        </section>

        <section>
          <H2>8. Empfänger und Weitergabe</H2>
          <p className="mt-2">
            Eine Weitergabe deiner personenbezogenen Daten an Dritte findet nur
            statt, soweit dies zur Bereitstellung der Website (Hosting durch
            GitHub, siehe Ziffer 3) oder für den von dir gewählten
            Kommunikationsweg (z. B. WhatsApp, siehe Ziffer 5) technisch
            erforderlich ist, du eingewilligt hast oder wir gesetzlich dazu
            verpflichtet sind. Ein Verkauf deiner Daten findet nicht statt.
          </p>
        </section>

        <section>
          <H2>9. Speicherdauer</H2>
          <p className="mt-2">
            Wir verarbeiten personenbezogene Daten nur so lange, wie es für den
            jeweiligen Zweck erforderlich ist. Danach werden die Daten gelöscht,
            sofern keine gesetzlichen Aufbewahrungspflichten (z. B. nach dem
            Handels- oder Steuerrecht, in der Regel sechs bzw. zehn Jahre)
            entgegenstehen.
          </p>
        </section>

        <section>
          <H2>10. Deine Rechte</H2>
          <p className="mt-2">Du hast gegenüber uns folgende Rechte:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Recht auf Auskunft über die zu deiner Person gespeicherten Daten (Art. 15 DSGVO),</li>
            <li>Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
            <li>Recht auf Löschung (Art. 17 DSGVO),</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO),</li>
            <li>
              Recht, eine erteilte Einwilligung jederzeit mit Wirkung für die
              Zukunft zu widerrufen (Art. 7 Abs. 3 DSGVO).
            </li>
          </ul>
          <p className="mt-3 rounded-lg border border-border bg-muted/40 p-3">
            <strong className="text-foreground">Widerspruchsrecht (Art. 21 DSGVO):</strong>{" "}
            Soweit wir deine Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
            verarbeiten, hast du das Recht, aus Gründen, die sich aus deiner
            besonderen Situation ergeben, jederzeit Widerspruch gegen diese
            Verarbeitung einzulegen. Wir verarbeiten die Daten dann nicht mehr,
            es sei denn, wir können zwingende schutzwürdige Gründe für die
            Verarbeitung nachweisen, die deine Interessen, Rechte und
            Freiheiten überwiegen, oder die Verarbeitung dient der
            Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
          </p>
          <p className="mt-3">
            Zur Ausübung deiner Rechte genügt eine formlose Nachricht an die
            oben genannten Kontaktdaten.
          </p>
        </section>

        <section>
          <H2>11. Beschwerderecht bei einer Aufsichtsbehörde</H2>
          <p className="mt-2">
            Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde über
            die Verarbeitung deiner personenbezogenen Daten zu beschweren
            (Art. 77 DSGVO). Die für uns zuständige Aufsichtsbehörde ist:
          </p>
          <p className="mt-2">
            {dpa.name}
            <br />
            {dpa.street}
            <br />
            {dpa.postalCode} {dpa.city}
            <br />
            <Ext href={dpa.url}>
              {dpa.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </Ext>
          </p>
        </section>

        <section>
          <H2>12. Keine Pflicht zur Bereitstellung, keine automatisierte Entscheidungsfindung</H2>
          <p className="mt-2">
            Du bist weder gesetzlich noch vertraglich verpflichtet, uns
            personenbezogene Daten bereitzustellen. Ohne deine Kontaktdaten
            können wir deine Anfrage jedoch nicht beantworten. Eine
            automatisierte Entscheidungsfindung einschließlich Profiling im
            Sinne von Art. 22 DSGVO findet nicht statt.
          </p>
        </section>

        <section>
          <H2>13. Änderungen dieser Datenschutzerklärung</H2>
          <p className="mt-2">
            Wir passen diese Datenschutzerklärung an, sobald sich die
            Verarbeitung auf dieser Website oder die Rechtslage ändert. Es gilt
            jeweils die hier veröffentlichte Fassung.
          </p>
        </section>

        <p className="text-xs text-muted-foreground">Stand: {site.legalUpdated}</p>
      </div>
    </div>
  );
}
