export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="border-b border-brand-sand bg-brand-white/40">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 sm:py-20 lg:px-12">
        <p className="text-xs font-semibold tracking-[0.2em] text-brand-terracotta uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-4xl font-serif text-4xl leading-tight tracking-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      </div>
    </header>
  );
}
