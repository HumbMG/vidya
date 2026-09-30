"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";

import { ProductCard } from "@/components/storefront/product-card";
import type { Product, ProductStatus } from "@/types";

const availabilityOptions: Array<{
  label: string;
  value: "ALL" | ProductStatus;
}> = [
  { label: "Toda disponibilidad", value: "ALL" },
  { label: "Disponible", value: "AVAILABLE" },
  { label: "Próximamente", value: "COMING_SOON" },
  { label: "Agotado", value: "SOLD_OUT" },
];

export function ProductCatalog({
  products,
  categories,
}: {
  products: Product[];
  categories: string[];
}) {
  const [category, setCategory] = useState("ALL");
  const [availability, setAvailability] = useState<"ALL" | ProductStatus>(
    "ALL",
  );

  const filtered = useMemo(
    () =>
      products.filter(
        (product) =>
          (category === "ALL" || product.category === category) &&
          (availability === "ALL" || product.status === availability),
      ),
    [availability, category, products],
  );

  return (
    <div>
      <div className="mb-10 grid gap-4 border-y border-brand-sand py-5 sm:grid-cols-[auto_1fr_1fr] sm:items-end">
        <div className="flex min-h-11 items-center gap-2 text-sm font-semibold">
          <SlidersHorizontal aria-hidden="true" className="size-4" />
          Filtrar
        </div>
        <label className="grid gap-2 text-xs font-semibold tracking-wide uppercase">
          Categoría
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="min-h-11 rounded-lg border border-brand-sand bg-brand-white px-3 text-sm font-normal normal-case outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
          >
            <option value="ALL">Todas las categorías</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-xs font-semibold tracking-wide uppercase">
          Disponibilidad
          <select
            value={availability}
            onChange={(event) =>
              setAvailability(event.target.value as "ALL" | ProductStatus)
            }
            className="min-h-11 rounded-lg border border-brand-sand bg-brand-white px-3 text-sm font-normal normal-case outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
          >
            {availabilityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="mb-5 text-sm text-muted-foreground" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "resultado" : "resultados"}
      </p>

      {filtered.length ? (
        <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="border border-brand-sand bg-brand-white p-10 text-center">
          <h2 className="font-serif text-2xl">
            No hay piezas con estos filtros
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Prueba otra categoría o disponibilidad.
          </p>
        </div>
      )}
    </div>
  );
}
