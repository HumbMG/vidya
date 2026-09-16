import { ArrowDownRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const highlights = [
  {
    id: "productos",
    number: "01",
    title: "Productos",
    description: "Objetos con historia, oficio y experiencia.",
  },
  {
    id: "experiencias",
    number: "02",
    title: "Experiencias",
    description: "Aprende directamente de quienes llevan años haciéndolo.",
  },
  {
    id: "talento",
    number: "03",
    title: "Talento",
    description: "Conoce a las personas detrás de cada creación y experiencia.",
  },
];

export default function Home() {
  return (
    <main id="top">
      <section className="relative isolate overflow-hidden border-b border-brand-sand/80">
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 -z-10 h-full w-1/3 border-l border-brand-sand/60 bg-brand-white/35"
        />
        <div
          aria-hidden="true"
          className="absolute top-24 right-[10%] -z-10 size-40 rounded-full border border-brand-terracotta/25 sm:size-64"
        />

        <div className="mx-auto grid min-h-[68vh] max-w-7xl items-end gap-12 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1fr_18rem] lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-7 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-brand-olive uppercase">
              <span className="h-px w-8 bg-brand-olive" />
              Oficio · conocimiento · experiencia
            </p>

            <h1 className="font-serif text-[clamp(3.25rem,8vw,7.5rem)] leading-[0.92] font-medium tracking-[-0.045em] text-balance">
              Hay cosas que solo los años enseñan.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Productos y experiencias creados por personas que llevan toda una
              vida perfeccionando lo que hacen.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                type="button"
                size="lg"
                className="h-12 rounded-full px-6 text-sm shadow-none"
              >
                Explorar productos
                <ArrowDownRight aria-hidden="true" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-brand-charcoal/35 bg-transparent px-6 text-sm hover:bg-brand-white/60"
              >
                Descubrir experiencias
              </Button>
            </div>
          </div>

          <div className="hidden border-t border-brand-charcoal/30 pt-5 lg:block">
            <p className="font-serif text-2xl leading-snug text-brand-olive italic">
              Experiencia que se comparte.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="que-encontraras"
        className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24 lg:px-12"
      >
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-brand-sand pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-terracotta uppercase">
              Una primera mirada
            </p>
            <h2
              id="que-encontraras"
              className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl"
            >
              Lo que encontrarás aquí
            </h2>
          </div>
          <p className="w-fit rounded-full border border-brand-olive/30 px-3 py-1.5 text-xs font-medium tracking-wide text-brand-olive uppercase">
            MVP en construcción
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <Card
              key={item.title}
              id={item.id}
              className="min-h-64 scroll-mt-24 justify-between rounded-none border-0 bg-brand-white/75 py-0 shadow-none ring-1 ring-brand-sand transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between border-b border-brand-sand px-6 py-4 text-xs font-semibold tracking-[0.18em] text-brand-olive uppercase">
                <span>{item.number}</span>
                <ArrowDownRight aria-hidden="true" className="size-4" />
              </div>
              <CardHeader className="gap-4 px-6 py-7">
                <CardTitle className="font-serif text-3xl font-medium">
                  {item.title}
                </CardTitle>
                <CardDescription className="max-w-xs text-base leading-7 text-muted-foreground">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
