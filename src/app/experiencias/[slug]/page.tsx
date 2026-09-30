import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  Clock,
  MapPin,
  Users,
} from "lucide-react";

import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { InterestDialog } from "@/components/storefront/interest-dialog";
import { StatusBadge } from "@/components/storefront/status-badge";
import { experiences, getExperienceBySlug, getTalentById } from "@/data";
import { siteConfig } from "@/lib/site-config";
import { formatCurrency } from "@/lib/utils";

type ExperiencePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export async function generateMetadata({
  params,
}: ExperiencePageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) return { title: "Experiencia no encontrada" };

  const image = new URL(experience.image, siteConfig.url).toString();
  return {
    title: experience.name,
    description: experience.shortDescription,
    openGraph: {
      title: experience.name,
      description: experience.shortDescription,
      images: [{ url: image, alt: experience.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: experience.name,
      description: experience.shortDescription,
      images: [image],
    },
  };
}

export default async function ExperienceDetailPage({
  params,
}: ExperiencePageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) notFound();

  const talent = getTalentById(experience.talentId);
  if (!talent) notFound();

  const availablePlaces = experience.maximumCapacity - experience.enrolled;
  const canReserve =
    (experience.status === "OPEN" || experience.status === "CONFIRMED") &&
    availablePlaces > 0 &&
    experience.price !== null;

  return (
    <main>
      <div className="mx-auto max-w-7xl px-6 py-6 sm:px-10 lg:px-12">
        <Link
          href="/experiencias"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-olive underline-offset-4 hover:underline"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Volver a experiencias
        </Link>
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12 lg:pb-24">
        <div className="relative aspect-[16/10] overflow-hidden bg-brand-sand/35 lg:aspect-[2/1]">
          <Image
            src={experience.image}
            alt={experience.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="grid gap-12 pt-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20 lg:pt-14">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs font-semibold tracking-[0.16em] text-brand-olive uppercase">
                {experience.category} · {experience.modality}
              </p>
              <StatusBadge status={experience.status} />
            </div>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight tracking-tight sm:text-6xl">
              {experience.name}
            </h1>
            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              {experience.description}
            </p>

            <section className="mt-10 border-t border-brand-sand pt-8">
              <h2 className="font-serif text-3xl">Qué aprenderás y vivirás</h2>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {experience.learnings.map((learning) => (
                  <li key={learning} className="flex gap-3 leading-6">
                    <Check
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-brand-terracotta"
                    />
                    {learning}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10 border-t border-brand-sand pt-8">
              <h2 className="font-serif text-3xl">Sesiones</h2>
              {experience.sessions.length ? (
                <div className="mt-5 space-y-3">
                  {experience.sessions.map((session) => (
                    <div
                      key={session.id}
                      className="grid gap-2 bg-brand-white p-5 sm:grid-cols-[8rem_1fr_1fr] sm:items-center"
                    >
                      <p className="font-semibold">{session.label}</p>
                      <p className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays aria-hidden="true" className="size-4" />
                        {session.date}
                      </p>
                      <p className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock aria-hidden="true" className="size-4" />
                        {session.time}
                      </p>
                    </div>
                  ))}
                  {experience.sessions.length > 1 ? (
                    <p className="text-sm font-semibold text-brand-olive">
                      Tu inscripción incluye todas las sesiones.
                    </p>
                  ) : null}
                </div>
              ) : (
                <p className="mt-4 text-muted-foreground">
                  Fecha por anunciar.
                </p>
              )}
            </section>

            <section className="mt-10 border-t border-brand-sand pt-8">
              <h2 className="font-serif text-3xl">Materiales incluidos</h2>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {experience.materialsIncluded.map((material) => (
                  <li key={material}>— {material}</li>
                ))}
              </ul>
            </section>

            <section className="mt-10 bg-brand-white p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-[0.16em] text-brand-olive uppercase">
                Imparte
              </p>
              <h2 className="mt-2 font-serif text-3xl">{talent.name}</h2>
              <p className="mt-2 leading-7 text-muted-foreground">
                {talent.shortBio}
              </p>
              <Link
                href={`/talento/${talent.slug}`}
                className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-brand-terracotta underline-offset-4 hover:underline"
              >
                Conocer su perfil
              </Link>
            </section>
          </div>

          <aside className="h-fit bg-brand-white p-6 lg:sticky lg:top-24 lg:p-8">
            {experience.status === "CONFIRMED" ? (
              <p className="mb-5 rounded-lg bg-brand-olive/10 p-3 text-sm font-semibold text-brand-olive">
                Experiencia confirmada
              </p>
            ) : null}
            <p className="text-2xl font-semibold">
              {experience.price
                ? formatCurrency(experience.price)
                : "Precio por definir"}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">por persona</p>

            <dl className="mt-6 space-y-4 border-y border-brand-sand py-6 text-sm">
              <div className="flex gap-3">
                <MapPin
                  aria-hidden="true"
                  className="size-5 shrink-0 text-brand-terracotta"
                />
                <div>
                  <dt className="font-semibold">Zona</dt>
                  <dd className="mt-1 text-muted-foreground">
                    {experience.zone}
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Users
                  aria-hidden="true"
                  className="size-5 shrink-0 text-brand-terracotta"
                />
                <div>
                  <dt className="font-semibold">Grupo</dt>
                  <dd className="mt-1 text-muted-foreground">
                    Mínimo {experience.minimumCapacity}, máximo{" "}
                    {experience.maximumCapacity}
                    {canReserve
                      ? ` · ${availablePlaces} lugares disponibles`
                      : ""}
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-6">
              {canReserve && experience.price ? (
                <AddToCartButton
                  item={{
                    id: experience.id,
                    type: "experience",
                    slug: experience.slug,
                    name: experience.name,
                    price: experience.price,
                    quantity: 1,
                    image: experience.image,
                    talentName: talent.name,
                    maximumQuantity: availablePlaces,
                  }}
                  label="Reservar mi lugar"
                  className="h-12 w-full rounded-full"
                />
              ) : (
                <InterestDialog
                  triggerLabel={
                    experience.status === "FULL"
                      ? "Unirme a la lista de espera"
                      : "Me interesa"
                  }
                  title={
                    experience.status === "FULL"
                      ? `Lista de espera: ${experience.name}`
                      : `Interés en ${experience.name}`
                  }
                  description={
                    experience.status === "FULL"
                      ? "Simula tu registro para recibir noticias si se libera un lugar."
                      : "Simula tu registro para enterarte cuando abramos inscripciones."
                  }
                  confirmation="Te avisaremos cuando abramos inscripciones."
                  className="h-12 w-full rounded-full"
                />
              )}
            </div>
            <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">
              Prototipo: no se realiza ningún cobro ni reserva real.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
