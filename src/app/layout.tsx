import type { Metadata } from "next";
import { Caveat, Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  variable: "--font-nunito",
});

const caveat = Caveat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-caveat",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nollidogs.de"),
  title: {
    default: `${site.name} – Hundetraining ${site.address.city}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Nolli Dogs – Mensch-Hund-Training von Carmen Noll in Homburg. Einzel- und Gruppentraining, Zirkeltraining und Workshops. Individuell wie du und dein Hund.",
  openGraph: {
    siteName: site.name,
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      suppressHydrationWarning
      className={`${nunito.variable} ${caveat.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <Providers>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
