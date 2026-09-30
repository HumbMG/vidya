import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { ExperienceCard } from "@/components/storefront/experience-card";
import { InterestDialog } from "@/components/storefront/interest-dialog";
import { ProductCard } from "@/components/storefront/product-card";
import { SectionHeading } from "@/components/storefront/section-heading";
import { TalentCard } from "@/components/storefront/talent-card";
import { buttonVariants } from "@/components/ui/button";
import { experiences, products, talents } from "@/data";
import { cn } from "@/lib/utils";

export default function Home() {
  const featuredExperiences = experiences
    .filter((item) => item.featured)
    .slice(0, 3);
  const featuredProducts = products.filter((item) => item.featured).slice(0, 4);
  const upcomingExperience = experiences.find(
    (item) => item.status === "INTEREST_VALIDATION",
  );

  return (
    <main id="top">
      <section className="border-b border-brand-sand">
        <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl lg:grid-cols-[1.08fr_0.92fr]">
          <div className="flex items-end px-6 py-16 sm:px-10 sm:py-24 lg:px-12 lg:py-20">
            <div className="max-w-3xl">
              <p className="mb-7 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-brand-olive uppercase">
                <span className="h-px w-8 bg-brand-olive" />
                Oficio · conocimiento · experiencia
              </p>
              <h1 className="font-serif text-[clamp(3.25rem,7vw,6.6rem)] leading-[0.93] font-medium tracking-[-0.045em] text-balance">
                Hay cosas que solo los años enseñan.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Descubre productos y experiencias creados por personas que
                llevan toda una vida perfeccionando lo que hacen.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/productos"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 rounded-full px-6",
                  )}
                >
                  Explorar productos
                  <ArrowRight aria-hidden="true" />
                </Link>
                <Link
                  href="/experiencias"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 rounded-full border-brand-charcoal/30 bg-transparent px-6",
                  )}
                >
                  Descubrir experiencias
                </Link>
              </div>
            </div>
          </div>
          <div className="relative min-h-[28rem] overflow-hidden bg-brand-sand/30 lg:min-h-full">
            <Image
              src="/images/products/textiles.png"
              alt="Piezas textiles contemporáneas creadas a mano"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute right-5 bottom-5 left-5 bg-brand-ivory/92 p-4 backdrop-blur-sm sm:right-auto sm:max-w-xs">
              <p className="font-serif text-xl italic">
                Experiencia que se comparte.
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Piezas, talleres e historias desde CDMX.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-white/55 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <SectionHeading
            eyebrow="Para aprender haciendo"
            title="Experiencias destacadas"
            description="Encuentros en grupos pequeños para aprender directamente de quienes dominan su oficio."
            href="/experiencias"
            linkLabel="Ver todas"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <SectionHeading
            eyebrow="Hecho con intención"
            title="Productos con oficio"
            description="Ediciones pequeñas y piezas hechas con tiempo, materiales honestos y una historia detrás."
            href="/productos"
            linkLabel="Explorar catálogo"
          />
          <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="nuestra-historia"
        className="bg-brand-olive py-16 text-brand-white sm:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-sand uppercase">
            La idea detrás de VIDYA
          </p>
          <div>
            <h2 className="max-w-4xl font-serif text-3xl leading-tight sm:text-5xl">
              La edad no es el producto. El valor está en lo que una persona
              sabe, sabe hacer y puede compartir.
            </h2>
            <p className="mt-6 max-w-2xl leading-7 text-brand-ivory/80">
              Este marketplace presenta a cada participante como creador,
              maestro y especialista. Compra una pieza, toma un taller y conoce
              la práctica que hay detrás.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <SectionHeading
            eyebrow="Personas detrás del oficio"
            title="Conoce el talento"
            description="Historias profesionales que se siguen escribiendo a través de objetos, imágenes y experiencias."
            href="/talento"
            linkLabel="Conocer perfiles"
          />
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {talents.slice(0, 3).map((talent) => (
              <TalentCard key={talent.id} talent={talent} />
            ))}
          </div>
        </div>
      </section>

      {upcomingExperience ? (
        <section className="border-y border-brand-sand bg-brand-sand/25">
          <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-2">
            <div className="relative min-h-[24rem]">
              <Image
                src={upcomingExperience.image}
                alt={upcomingExperience.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex items-center px-6 py-14 sm:px-10 lg:px-16">
              <div className="max-w-xl">
                <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-brand-terracotta uppercase">
                  <Sparkles aria-hidden="true" className="size-4" />
                  Próximamente · validando interés
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                  {upcomingExperience.name}
                </h2>
                <p className="mt-5 leading-7 text-muted-foreground">
                  {upcomingExperience.shortDescription} Queremos saber cuántas
                  personas se sumarían antes de definir fecha y sede.
                </p>
                <InterestDialog
                  triggerLabel="Me interesa"
                  title={`Interés en ${upcomingExperience.name}`}
                  description="Déjanos tus datos para simular el registro de interés en esta experiencia."
                  confirmation="Te avisaremos cuando abramos inscripciones."
                  className="mt-8 h-12 rounded-full px-7"
                />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section id="participa" className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-terracotta uppercase">
            Comparte tu experiencia
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">
            ¿Hay algo que sabes hacer muy bien?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Estamos construyendo una comunidad de personas con oficio, práctica
            y ganas de compartir. Cuéntanos qué haces y qué te gustaría ofrecer.
          </p>
          <InterestDialog
            triggerLabel="Quiero participar"
            title="Quiero compartir lo que sé"
            description="Este formulario simula el primer contacto con futuros participantes del marketplace."
            confirmation="En una siguiente fase, el equipo podrá contactarte para conocer tu propuesta."
            variant="secondary"
            className="mt-8 h-12 rounded-full px-7"
          />
        </div>
      </section>
    </main>
  );
}
