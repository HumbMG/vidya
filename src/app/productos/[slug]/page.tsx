import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, PackageCheck, Truck } from "lucide-react";

import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { InterestDialog } from "@/components/storefront/interest-dialog";
import { StatusBadge } from "@/components/storefront/status-badge";
import { getProductBySlug, getTalentById, products } from "@/data";
import { formatCurrency } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Producto no encontrado" };

  const image = new URL(product.images[0], siteConfig.url).toString();
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: image, alt: product.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.shortDescription,
      images: [image],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const talent = getTalentById(product.talentId);
  if (!talent) notFound();

  return (
    <main>
      <div className="mx-auto max-w-7xl px-6 py-6 sm:px-10 lg:px-12">
        <Link
          href="/productos"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-olive underline-offset-4 hover:underline"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Volver a productos
        </Link>
      </div>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 sm:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-12 lg:pb-24">
        <div className="relative aspect-[4/5] overflow-hidden bg-brand-sand/35 lg:sticky lg:top-24">
          <Image
            src={product.images[0]}
            alt={product.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover"
          />
        </div>

        <div className="py-2 lg:py-10">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand-olive uppercase">
              {product.category}
            </p>
            <StatusBadge status={product.status} />
          </div>
          <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-6xl">
            {product.name}
          </h1>
          <p className="mt-5 text-2xl font-semibold">
            {formatCurrency(product.price)}
          </p>
          <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
            {product.description}
          </p>

          <div className="mt-8">
            {product.status === "AVAILABLE" ? (
              <AddToCartButton
                item={{
                  id: product.id,
                  type: "product",
                  slug: product.slug,
                  name: product.name,
                  price: product.price,
                  quantity: 1,
                  image: product.images[0],
                  talentName: talent.name,
                  maximumQuantity: product.stock,
                }}
                className="h-12 w-full rounded-full sm:w-auto sm:px-8"
              />
            ) : (
              <InterestDialog
                triggerLabel={
                  product.status === "COMING_SOON"
                    ? "Avísame cuando esté disponible"
                    : "Avísame si vuelve a estar disponible"
                }
                title={`Novedades sobre ${product.name}`}
                description="Simula el registro para recibir una notificación sobre esta pieza."
                className="h-12 w-full rounded-full sm:w-auto sm:px-8"
              />
            )}
          </div>

          {product.status === "AVAILABLE" ? (
            <p className="mt-3 text-sm text-muted-foreground">
              {product.stock === 1
                ? "Última pieza disponible."
                : `${product.stock} piezas disponibles en esta edición.`}
            </p>
          ) : null}

          <div className="mt-10 grid gap-4 border-y border-brand-sand py-6 sm:grid-cols-2">
            <div className="flex gap-3">
              <Truck
                aria-hidden="true"
                className="mt-0.5 size-5 text-brand-terracotta"
              />
              <div>
                <h2 className="text-sm font-semibold">Envío en CDMX</h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Costo y fecha se calcularán conceptualmente en checkout.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <PackageCheck
                aria-hidden="true"
                className="mt-0.5 size-5 text-brand-terracotta"
              />
              <div>
                <h2 className="text-sm font-semibold">Edición pequeña</h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Preparada con cuidado por quien la creó.
                </p>
              </div>
            </div>
          </div>

          <section className="mt-10">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand-terracotta uppercase">
              Historia de la pieza
            </p>
            <p className="mt-3 leading-7 text-muted-foreground">
              {product.story}
            </p>
          </section>

          <section className="mt-10 bg-brand-white p-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand-olive uppercase">
              Creado por
            </p>
            <h2 className="mt-2 font-serif text-3xl">{talent.name}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {talent.shortBio}
            </p>
            <Link
              href={`/talento/${talent.slug}`}
              className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-brand-terracotta underline-offset-4 hover:underline"
            >
              Conocer su historia
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
