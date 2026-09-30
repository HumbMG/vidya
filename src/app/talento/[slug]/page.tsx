import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { ExperienceCard } from "@/components/storefront/experience-card";
import { ProductCard } from "@/components/storefront/product-card";
import { SectionHeading } from "@/components/storefront/section-heading";
import { experiences, getTalentBySlug, products, talents } from "@/data";
import { siteConfig } from "@/lib/site-config";

type TalentPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return talents.map((talent) => ({ slug: talent.slug }));
}

export async function generateMetadata({
  params,
}: TalentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const talent = getTalentBySlug(slug);
  if (!talent) return { title: "Perfil no encontrado" };

  const image = new URL(talent.image, siteConfig.url).toString();
  return {
    title: talent.name,
    description: talent.shortBio,
    openGraph: {
      title: talent.name,
      description: talent.shortBio,
      images: [{ url: image, alt: talent.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: talent.name,
      description: talent.shortBio,
      images: [image],
    },
  };
}

export default async function TalentDetailPage({ params }: TalentPageProps) {
  const { slug } = await params;
  const talent = getTalentBySlug(slug);
  if (!talent) notFound();

  const relatedProducts = products.filter((product) =>
    talent.productIds.includes(product.id),
  );
  const relatedExperiences = experiences.filter((experience) =>
    talent.experienceIds.includes(experience.id),
  );

  return (
    <main>
      <div className="mx-auto max-w-7xl px-6 py-6 sm:px-10 lg:px-12">
        <Link
          href="/talento"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-olive underline-offset-4 hover:underline"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Volver a talento
        </Link>
      </div>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12 lg:pb-24">
        <div className="relative aspect-[4/5] overflow-hidden bg-brand-sand/35">
          <Image
            src={talent.image}
            alt={talent.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
        <div className="self-center py-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-terracotta uppercase">
            {talent.specialty}
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-none tracking-tight sm:text-7xl">
            {talent.name}
          </h1>
          <p className="mt-6 font-serif text-2xl leading-snug text-brand-olive italic sm:text-3xl">
            {talent.experiencePhrase}
          </p>
          <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {talent.story}
          </p>
          <div className="mt-10 grid max-w-lg grid-cols-2 gap-4 border-y border-brand-sand py-6">
            <div>
              <p className="text-3xl font-semibold text-brand-terracotta">
                {talent.experienceYears}+
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                años de práctica
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-brand-terracotta">
                {relatedProducts.length + relatedExperiences.length}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                propuestas en VIDYA
              </p>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length ? (
        <section className="border-t border-brand-sand py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
            <SectionHeading
              eyebrow="Piezas"
              title={`Creaciones de ${talent.name.split(" ")[0]}`}
            />
            <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {relatedExperiences.length ? (
        <section className="bg-brand-white/55 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
            <SectionHeading
              eyebrow="Aprender juntos"
              title="Experiencias relacionadas"
            />
            <div className="grid gap-6 md:grid-cols-2">
              {relatedExperiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
