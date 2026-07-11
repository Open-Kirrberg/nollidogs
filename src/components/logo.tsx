import { cn } from "@/components/ui";

/*
 * Wortmarke „Nolli Dogs" als Handschrift (Caveat) mit Pfoten-Bildmarke.
 * Vektor & Schrift → scharf in jeder Größe, konsistent mit Favicon und der
 * Pfotenspur. Platzhalter, bis Carmen ein finales Logo liefert (content.md).
 */
export function Logo({
  className,
  withTagline = false,
}: {
  className?: string;
  withTagline?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <PawMark className="size-9 shrink-0 text-accent-foreground" />
      <span className="flex flex-col leading-none">
        <span className="font-hand text-2xl text-foreground">Nolli Dogs</span>
        {withTagline ? (
          <span className="text-[0.7rem] font-semibold tracking-wide text-muted-foreground">
            individuell wie du und dein Hund
          </span>
        ) : (
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary">
            Hundetraining
          </span>
        )}
      </span>
    </span>
  );
}

export function PawMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className} aria-hidden>
      <ellipse cx="30" cy="32" rx="9" ry="12" transform="rotate(-18 30 32)" />
      <ellipse cx="50" cy="24" rx="9" ry="13" />
      <ellipse cx="70" cy="32" rx="9" ry="12" transform="rotate(18 70 32)" />
      <path d="M50 46c-13 0-23 9-23 21 0 9 7 14 15 14 4 0 6-2 8-2s4 2 8 2c8 0 15-5 15-14 0-12-10-21-23-21z" />
    </svg>
  );
}
