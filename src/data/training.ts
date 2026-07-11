import type { LucideIcon } from "lucide-react";
import { PawPrint, Users, Repeat, GraduationCap } from "lucide-react";

export type TrainingAngebot = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  description: string;
  points: string[];
};

// Aus Social Media bestätigtes Angebot (siehe content.md). Preise/Details
// stehen unter Vorbehalt und werden von Carmen ergänzt.
export const trainingAngebote: TrainingAngebot[] = [
  {
    slug: "einzeltraining",
    icon: PawPrint,
    title: "Einzeltraining",
    short: "Ganz auf dich und deinen Hund zugeschnitten.",
    description:
      "Im Einzeltraining hole ich euch genau dort ab, wo ihr gerade steht – ob ganz am Anfang oder in einer scheinbaren Sackgasse. Wir arbeiten in eurem Tempo an genau den Themen, die für euren Alltag zählen.",
    points: [
      "Individuelle Trainingsplanung",
      "Alltagsthemen & Leinenführigkeit",
      "Aufbau einer entspannten Bindung",
    ],
  },
  {
    slug: "gruppentraining",
    icon: Users,
    title: "Gruppentraining",
    short: "Gemeinsam lernen – mit anderen Mensch-Hund-Teams.",
    description:
      "Im Gruppentraining trainiert ihr mit anderen Teams zusammen. Das fördert Konzentration trotz Ablenkung, schafft Routine und macht in der Gemeinschaft einfach Spaß.",
    points: [
      "Training mit Ablenkung",
      "Soziales Miteinander",
      "Feste Gruppen, klare Themen",
    ],
  },
  {
    slug: "zirkeltraining",
    icon: Repeat,
    title: "Zirkeltraining",
    short: "Abwechslungsreiche Stationen mit viel Spaß und Lachen.",
    description:
      "Beim Zirkeltraining geht es an verschiedenen Stationen reihum – körperlich und geistig auslastend, und vor allem mit viel Spaß und Lachen für Mensch und Hund.",
    points: [
      "Körperliche & geistige Auslastung",
      "Abwechslungsreiche Stationen",
      "Spaß in der Gruppe",
    ],
  },
  {
    slug: "workshops",
    icon: GraduationCap,
    title: "Workshops",
    short: "Themen-Termine in der Natur – z. B. „Spielend das Team stärken“.",
    description:
      "In meinen Workshops vertiefen wir gemeinsam ein Thema – oft draußen im Wald. Bewegung, Natur und Miteinander stehen im Mittelpunkt, damit euer Team gestärkt nach Hause geht.",
    points: [
      "Fokussierte Themen-Tage",
      "Meist draußen in der Natur",
      "Begrenzte Teilnehmerzahl",
    ],
  },
];
