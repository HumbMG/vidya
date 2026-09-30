import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[65vh] w-full max-w-3xl items-center px-4 py-16 text-center sm:px-6 lg:px-8">
      <section className="w-full rounded-3xl border bg-card p-8 shadow-sm sm:p-12">
        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
          Página no encontrada
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          Esta historia aún no está aquí
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
          El enlace puede haber cambiado o el contenido todavía no forma parte
          de este prototipo.
        </p>
        <Button className="mt-8" render={<Link href="/" />}>
          Explorar VIDYA
        </Button>
      </section>
    </main>
  );
}
