/*
 * Zentrale Fotoliste – eine Quelle für Galerie, Slider und Sektionsbilder.
 *
 * Die Dateien liegen in public/images/hunde/ als 800x800-WebP, bereits
 * quadratisch zugeschnitten (das Grid nutzt object-cover, das Beschneiden
 * passiert also einmalig beim Aufbereiten statt bei jedem Seitenaufruf).
 * Die beiden `-hoch`-Varianten sind Hochformat für Hero und Portrait.
 *
 * Alt-Texte beschreiben, was tatsächlich zu sehen ist. Bitte keine
 * Hundenamen erfinden: Carmens Rudel sind Ebby, Akira, Malia und Yaro –
 * die Hunde auf diesen Fotos sind Kundenhunde aus dem Training.
 */
export type Photo = {
  src: string;
  alt: string;
};

export const hundeFotos = [
  {
    src: "/images/hunde/pudel-wiese.webp",
    alt: "Apricotfarbener Pudel mit Geschirr steht auf der Wiese",
  },
  {
    src: "/images/hunde/aussie-red-merle.webp",
    alt: "Red-Merle Australian Shepherd sitzt aufmerksam im Gras",
  },
  {
    src: "/images/hunde/landseer-nestschaukel.webp",
    alt: "Landseer sitzt auf einer Nestschaukel",
  },
  {
    src: "/images/hunde/blonder-hund-geschirr.webp",
    alt: "Blonder Hund mit Geschirr sitzt aufmerksam auf der Wiese",
  },
  {
    src: "/images/hunde/wolfsgrauer-hund.webp",
    alt: "Wolfsgrauer Hund liegt entspannt im Gras",
  },
  {
    src: "/images/hunde/aussie-an-der-leine.webp",
    alt: "Brauner Australian Shepherd an der Leine auf der Wiese",
  },
  {
    src: "/images/hunde/schwarzer-zottelhund.webp",
    alt: "Schwarzer Zottelhund mit blauem Halstuch auf der Wiese",
  },
  {
    src: "/images/hunde/schaeferhund-mix.webp",
    alt: "Schäferhund-Mix mit Kopfhalfter liegt im Gras",
  },
  {
    src: "/images/hunde/lockenhund-portrait.webp",
    alt: "Dunkelbrauner Lockenhund mit rotem Halsband neben seinem Menschen",
  },
  {
    src: "/images/hunde/kleiner-schwarzer-hund.webp",
    alt: "Kleiner schwarzer Zottelhund liegt entspannt im Gras",
  },
  {
    src: "/images/hunde/gestromter-hund-maulkorb.webp",
    alt: "Gestromter Hund mit Maulkorb sitzt entspannt im Gras",
  },
  {
    src: "/images/hunde/landseer-im-gruenen.webp",
    alt: "Landseer liegt im Schatten unter einem Strauch",
  },
] as const satisfies readonly Photo[];

/** Foto im Über-mich-Teaser (Startseite) und auf /ueber-mich: das Rudel auf dem Trainingsgelände. */
export const ueberMichTeaser: Photo = {
  src: "/images/hunde/vier-hunde-trainingsgelaende.webp",
  alt: "Vier Hunde auf dem Trainingsgelände, im Hintergrund eine Hundewippe",
};

/*
 * Slider-Auswahl der Startseite: alles außer dem Teaser-Foto, das weiter
 * unten auf derselben Seite noch einmal groß kommt.
 */
export const sliderFotos: readonly Photo[] = hundeFotos.filter(
  (photo) => photo.src !== ueberMichTeaser.src
);

/*
 * Kleine Auswahl für das 3er-Band auf /training. Bewusst Motive mit Leine,
 * Geschirr und Mensch im Bild – das zeigt Training statt nur Hundeportraits.
 */
export const trainingImpressionen: readonly Photo[] = [
  hundeFotos[8], // Lockenhund neben seinem Menschen
  hundeFotos[3], // Blonder Hund mit Geschirr
  hundeFotos[5], // Aussie an der Leine
];
