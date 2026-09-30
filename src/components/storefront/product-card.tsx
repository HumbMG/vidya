import Image from "next/image";
import Link from "next/link";

import { StatusBadge } from "@/components/storefront/status-badge";
import { getTalentById } from "@/data";
import { formatCurrency } from "@/lib/utils";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  const talent = getTalentById(product.talentId);

  return (
    <article className="group min-w-0">
      <Link href={`/productos/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-brand-sand/40">
          <Image
            src={product.images[0]}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
          />
          {product.status !== "AVAILABLE" ? (
            <StatusBadge
              status={product.status}
              className="absolute top-4 left-4"
            />
          ) : null}
        </div>
        <div className="pt-4">
          <p className="text-xs font-semibold tracking-[0.14em] text-brand-olive uppercase">
            {product.category}
          </p>
          <h3 className="mt-1 font-serif text-xl leading-snug group-hover:text-brand-terracotta">
            {product.name}
          </h3>
          <div className="mt-2 flex items-start justify-between gap-3 text-sm">
            <p className="text-muted-foreground">por {talent?.name}</p>
            <p className="shrink-0 font-semibold">
              {formatCurrency(product.price)}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
