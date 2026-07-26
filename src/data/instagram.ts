import { site } from "@/lib/site";
import { hundeFotos, type Photo } from "@/data/photos";

/*
 * Instagram-Sektion.
 *
 * WICHTIG – WAS DAS HIER IST UND WAS NICHT:
 * Das sind KEINE Instagram-Beiträge, sondern eigene Fotos aus public/images.
 * Die Sektion ist eine Einladung zum Folgen, kein Abbild des Feeds. Die Texte
 * in instagram-cta.tsx sagen das auch so – bitte nicht zu „die neuesten Posts“
 * umschreiben, sonst verspricht die Seite etwas, das sie nicht hält.
 *
 * WARUM KEIN ECHTER FEED?
 * Instagram hat seine öffentlichen Zugänge geschlossen. Geprüft am 2026-07-26:
 *   - Profilseite serverseitig geladen → nur App-Shell, keine Beitragsdaten
 *   - /api/v1/users/web_profile_info/ → HTTP 400
 *   - Headless-Browser → „Etwas ist schiefgelaufen“ statt Feed
 * Ein automatisch aktualisierter Feed braucht deshalb zwingend eines von beidem:
 *
 *   A) Ein Widget-Dienst wie behold.so (kostenlos, DSGVO-freundlich):
 *      Account anlegen → Instagram @nollidogs verbinden → Feed-ID kopieren →
 *      Widget-Script in src/app/layout.tsx einbinden und die Galerie unten
 *      durch <behold-widget feed-id="…" /> ersetzen.
 *      Achtung: lädt von einem Drittanbieter → Datenschutzerklärung ergänzen.
 *
 *   B) Instagram Graph API mit Facebook-Business-Account und App-Review.
 *      Aufwendig, für eine statische Seite selten sinnvoll.
 *
 * EINZELNE BEITRÄGE VERLINKEN (ohne Feed, jederzeit möglich):
 * Der Shortcode ist das Stück aus der Post-URL zwischen /p/ und dem Slash:
 *   https://www.instagram.com/p/DAbCdEf1234/  →  shortcode: "DAbCdEf1234"
 * Ist er gesetzt, öffnet die Kachel genau diesen Beitrag – und nur dann darf
 * die Kachel auch wie ein Beitrag beworben werden. Fehlt er, führt sie aufs
 * Profil, damit nie ein falscher Beitrag verlinkt wird.
 */
export type InstagramPost = Photo & {
  shortcode?: string;
};

/*
 * Kleine Auswahl für die Galerie auf /kontakt (die Startseite zeigt nur die
 * Karte, dort trägt schon der Slider die Fotos). Vier Kacheln reichen – und
 * bewusst vier verschiedene Fellfarben, sonst wirkt die Reihe monoton.
 */
export const instagramPosts: readonly InstagramPost[] = [
  hundeFotos[0], // Apricotfarbener Pudel
  hundeFotos[2], // Landseer auf der Nestschaukel
  hundeFotos[1], // Red-Merle Aussie
  hundeFotos[6], // Schwarzer Zottelhund mit Halstuch
];

/** Link zum konkreten Beitrag – oder aufs Profil, wenn kein Shortcode hinterlegt ist. */
export function postUrl(post: InstagramPost): string {
  return post.shortcode
    ? `https://www.instagram.com/p/${post.shortcode}/`
    : site.instagramUrl;
}

/** Für aria-label: verrät ehrlich, wohin der Klick führt. */
export function postLinkLabel(post: InstagramPost): string {
  return post.shortcode
    ? `${post.alt} – Beitrag auf Instagram ansehen`
    : `${post.alt} – Instagram-Profil von Nolli Dogs öffnen`;
}
