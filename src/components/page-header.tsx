export function PageHeader({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="relative overflow-hidden bg-[oklch(0.96_0.01_190)]">
      <div className="dots absolute inset-0 opacity-[0.04]" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-4 py-14 text-center md:py-20">
        <span className="kicker mb-3 justify-center">{kicker}</span>
        <h1 className="text-balance text-4xl sm:text-5xl">{title}</h1>
        {intro && (
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {intro}
          </p>
        )}
      </div>
    </header>
  );
}
