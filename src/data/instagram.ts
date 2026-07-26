import { site } from "@/lib/site";
import { hundeFotos, type Photo } from "@/data/photos";

/*
 * Instagram-Galerie für / und /kontakt.
 *
 * WARUM NICHT AUTOMATISCH?
 * Instagram hat seine öffentlichen Zugänge dichtgemacht: Die Profilseite
 * liefert ohne JavaScript keine Beitragsdaten, der interne Endpunkt
 * /api/v1/users/web_profile_info/ antwortet mit 400, und ein Headless-Browser
 * bekommt „Etwas ist schiefgelaufen“ statt des Feeds. Ein automatisch
 * aktualisierter Feed braucht deshalb zwingend eines von beidem:
 *
 *   A) Ein Widget-Dienst wie behold.so (kostenlos, DSGVO-freundlich):
 *      Account anlegen → Instagram @nollidogs verbinden → Feed-ID kopieren →
 *      Widget-Script in src/app/layout.tsx einbinden und das Grid in
 *      instagram-feed.tsx durch <behold-widget feed-id="…" /> ersetzen.
 *      Achtung: lädt von einem Drittanbieter → Datenschutzerklärung ergänzen.
 *
 *   B) Die Instagram Graph API mit Facebook-Business-Account und App-Review.
 *      Deutlich aufwendiger, für eine statische Seite selten sinnvoll.
 *
 * BIS DAHIN: handgepflegte Auswahl. Schnell, ohne Tracking, ohne fremde
 * Skripte – und mit ECHTEN Links auf die jeweiligen Beiträge, sobald unten
 * `shortcode` gefüllt ist.
 *
 * SO VERLINKST DU EINEN ECHTEN BEITRAG:
 * Der Shortcode ist das Stück aus der Post-URL zwischen /p/ und dem Slash:
 *   https://www.instagram.com/p/DAbCdEf1234/  →  shortcode: "DAbCdEf1234"
 * Ist er gesetzt, öffnet die Kachel genau diesen Beitrag. Fehlt er, führt sie
 * aufs Profil – bewusst so, damit nie ein falscher Beitrag verlinkt wird.
 */
export type InstagramPost = Photo & {
  shortcode?: string;
};

export const instagramPosts: readonly InstagramPost[] = [
  hundeFotos[1], // Red-Merle Aussie
  hundeFotos[2], // Landseer auf der Nestschaukel
  hundeFotos[0], // Pudel auf der Wiese
  hundeFotos[7], // Schäferhund-Mix mit Kopfhalfter
  hundeFotos[6], // Schwarzer Zottelhund
  hundeFotos[10], // Gestromter Hund mit Maulkorb
  hundeFotos[8], // Lockenhund-Portrait
  hundeFotos[4], // Wolfsgrauer Hund
];

/** Link zum konkreten Beitrag – oder aufs Profil, wenn kein Shortcode hinterlegt ist. */
export function postUrl(post: InstagramPost): string {
  return post.shortcode
    ? `https://www.instagram.com/p/${post.shortcode}/`
    : site.instagramUrl;
}

/** Für aria-label / Titel: verrät, wohin der Klick führt. */
export function postLinkLabel(post: InstagramPost): string {
  return post.shortcode
    ? `${post.alt} – Beitrag auf Instagram ansehen`
    : `${post.alt} – Profil auf Instagram ansehen`;
}
