export type Workshop = {
  title: string;
  /** ISO-Datum (Start) */
  date: string;
  dateLabel: string;
  timeLabel: string;
  price: string;
  location: string;
  description: string;
  /** Flyer-Bild (public/images). ⚠️ Zuordnung der beiden Flyer ggf. tauschen. */
  image?: string;
};

// Aus den Flyern (siehe inspirations/). ⚠️ Kommende Termine + Anmeldeweg von
// Carmen einholen. kommende/vergangene werden anhand des Datums getrennt.
export const workshops: Workshop[] = [
  {
    title: "Spielend das Team stärken",
    date: "2026-05-16",
    dateLabel: "16. Mai 2026",
    timeLabel: "13:00 – ca. 15:30 Uhr",
    price: "40 €",
    location: "Treffpunkt nach Anmeldung",
    description:
      "Spielen ist mehr als Beschäftigung – es verbindet, fördert Vertrauen und macht einfach Spaß! Du lernst verschiedene Spielideen mit und ohne Spielzeug kennen, erfährst, welche Regeln für ein entspanntes Miteinander wichtig sind, und entdeckst, wie du das Spiel individuell auf deinen Hund abstimmst.",
    image: "/images/workshop-1.jpg",
  },
  {
    title: "Spielend das Team stärken 2",
    date: "2026-06-13",
    dateLabel: "13. Juni 2026",
    timeLabel: "13:00 – ca. 15:30 Uhr",
    price: "40 €",
    location: "Draußen im Wald, Treffpunkt nach Anmeldung",
    description:
      "Im Aufbau-Workshop vertiefen wir die Erfahrungen aus Teil 1 – diesmal draußen im Wald. Bei einem gemeinsamen Spaziergang und vielfältigen Beschäftigungen in der Natur stärken wir spielerisch Teamgeist, Kommunikation und Vertrauen.",
    image: "/images/workshop-2.jpg",
  },
];

export function partitionWorkshops(today: Date) {
  const t = today.toISOString().slice(0, 10);
  const sorted = [...workshops].sort((a, b) => a.date.localeCompare(b.date));
  return {
    kommende: sorted.filter((w) => w.date >= t),
    vergangene: sorted.filter((w) => w.date < t).reverse(),
  };
}
