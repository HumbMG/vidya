import Link from "next/link";

import { Button } from "@/components/ui/button";

type PolicyPlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PolicyPlaceholder({
  eyebrow,
  title,
  description,
}: PolicyPlaceholderProps) {
  return (
    <main className="mx-auto flex min-h-[65vh] w-full max-w-3xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-3xl border bg-card p-8 shadow-sm sm:p-12">
        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {description}
        </p>
        <p className="mt-4 leading-7 text-muted-foreground">
          Este prototipo no procesa compras, pagos ni datos personales. El texto
          definitivo será preparado y revisado antes de habilitar operaciones
          reales.
        </p>
        <Button className="mt-8" render={<Link href="/" />}>
          Volver al inicio
        </Button>
      </section>
    </main>
  );
}
