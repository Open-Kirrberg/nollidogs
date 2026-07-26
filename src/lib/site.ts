export const site = {
  name: "Nolli Dogs",
  fullName: "Nolli Dogs – Hundetraining",
  owner: "Carmen Noll",
  claim: "individuell wie du und dein Hund",
  subClaim: "Bei uns steht der Hund im Mittelpunkt.",
  foundedYear: 2023,
  trainingSince: 2014,
  certification: "Erlaubnis nach §11 Abs. 1 Nr. 8f TierSchG",
  email: "Nolli-Dogs@web.de",
  phone: "0176 31623178",
  // Internationales Format für wa.me-Links (ohne führende 0, +49).
  whatsapp: "4917631623178",
  address: {
    street: "Mispelweg 16",
    postalCode: "66424",
    city: "Homburg",
    region: "Saarland",
  },
  // Erteilende Behörde der §11-Erlaubnis (Pflichtangabe nach § 5 DDG).
  supervisoryAuthority: "Saarpfalz-Kreis, Veterinäramt",
  // Trainingsgelände (öffentlich) – für Impressums-Anschrift ggf. abweichend.
  trainingLocation: {
    name: "Trainingsgelände Vogelturm",
    street: "Bierbacher Str. 44",
    postalCode: "66424",
    city: "Homburg",
  },
  dogs: ["Ebby", "Akira", "Malia", "Yaro"],
  instagramUrl: "https://www.instagram.com/nollidogs/",
  facebookUrl: "https://www.facebook.com/p/Nollidogs-61550942548359/",
} as const;

// Vorausgefüllter WhatsApp-Chat. Funktioniert auf Mobil & Desktop (web.whatsapp).
export function whatsapp(text = ""): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
