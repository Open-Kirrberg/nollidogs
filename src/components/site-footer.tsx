import Link from "next/link";
import { Instagram, Facebook, Phone } from "lucide-react";
import { PawMark } from "@/components/logo";
import { WhatsAppIcon } from "@/components/icons";
import { site, whatsapp } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-[oklch(0.30_0.04_190)] text-white/90">
      <div className="paw-trail opacity-20" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <PawMark className="size-8 text-white" />
            <span className="font-hand text-3xl text-white">Nolli Dogs</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/75">
            Mensch-Hund-Training in {site.address.city} – individuell, einfühlsam
            und mit dem Hund im Mittelpunkt.
          </p>
          <p className="mt-3 text-xs text-white/55">{site.certification}</p>
        </div>

        <div className="text-sm leading-relaxed">
          <p className="mb-2 font-bold text-white">Kontakt</p>
          <p>{site.owner}</p>
          <p>
            {site.trainingLocation.name}
            <br />
            {site.trainingLocation.street}, {site.trainingLocation.postalCode}{" "}
            {site.trainingLocation.city}
          </p>
          <a
            href={whatsapp("Hallo Carmen, ")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1.5 inline-flex items-center gap-1.5 py-1 underline-offset-2 hover:text-white hover:underline"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </a>
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 py-1 underline-offset-2 hover:text-white hover:underline"
          >
            <Phone className="size-4" />
            {site.phone}
          </a>
        </div>

        <div className="text-sm leading-relaxed">
          <p className="mb-2 font-bold text-white">Folgen & Mehr</p>
          <ul className="-my-1">
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 py-1.5 hover:text-white"
              >
                <Instagram className="size-4" /> Instagram
              </a>
            </li>
            <li>
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 py-1.5 hover:text-white"
              >
                <Facebook className="size-4" /> Facebook
              </a>
            </li>
            <li>
              <Link
                href="/impressum"
                className="inline-block py-1.5 hover:text-white"
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutz"
                className="inline-block py-1.5 hover:text-white"
              >
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15 py-4 text-center text-xs text-white/55">
        © {new Date().getFullYear()} {site.fullName} · {site.owner}
      </div>
    </footer>
  );
}
