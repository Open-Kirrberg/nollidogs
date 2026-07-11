import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl sm:text-4xl">Datenschutzerklärung</h1>
      <div className="mt-6 space-y-6 text-sm leading-relaxed text-foreground/85">
        <section>
          <h2 className="text-lg font-bold text-foreground">
            1. Verantwortlicher
          </h2>
          <p className="mt-2">
            {site.owner} ({site.fullName}), {site.address.city}. E-Mail:{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            . {/* ⚠️ vollständige Anschrift siehe Impressum */}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">
            2. Hosting &amp; Server-Logs
          </h2>
          <p className="mt-2">
            Diese Website wird als statische Seite über GitHub Pages
            (GitHub Inc., USA) bereitgestellt. Beim Aufruf werden technisch
            notwendige Daten (z. B. IP-Adresse, Datum/Uhrzeit, abgerufene Datei)
            in Server-Logfiles verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1
            lit. f DSGVO (sicherer, störungsfreier Betrieb).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">
            3. Schriften (Google Fonts)
          </h2>
          <p className="mt-2">
            Die verwendeten Schriften werden lokal vom Server dieser Website
            ausgeliefert (self-hosted via Next.js). Es besteht dabei keine
            Verbindung zu Servern von Google.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">
            4. Kontaktaufnahme
          </h2>
          <p className="mt-2">
            Das Kontaktformular dieser Seite speichert keine Daten auf einem
            Server, sondern öffnet dein eigenes E-Mail-Programm mit einer
            vorausgefüllten Nachricht. Wenn du uns per E-Mail kontaktierst,
            verarbeiten wir deine Angaben zur Bearbeitung der Anfrage
            (Art. 6 Abs. 1 lit. b und f DSGVO).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">
            5. Cookies &amp; Tracking
          </h2>
          <p className="mt-2">
            Diese Website setzt keine Tracking- oder Marketing-Cookies und bindet
            keine Analyse-Dienste ein.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">6. Deine Rechte</h2>
          <p className="mt-2">
            Du hast das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch
            sowie ein Beschwerderecht bei einer Aufsichtsbehörde.
          </p>
        </section>

        <p className="text-xs text-muted-foreground">
          Hinweis: Dieser Entwurf ersetzt keine Rechtsberatung und ist vor dem
          Livegang zu prüfen und zu vervollständigen.
        </p>
      </div>
    </div>
  );
}
