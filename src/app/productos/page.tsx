import type { Metadata } from "next";

import { PageIntro } from "@/components/storefront/page-intro";
import { ProductCatalog } from "@/components/storefront/product-catalog";
import { productCategories, products } from "@/data";

export const metadata: Metadata = {
  title: "Productos",
  description: "Piezas y ediciones pequeñas creadas por talento con oficio.",
};

export default function ProductsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Catálogo"
        title="Objetos con historia, oficio y experiencia."
        description="Descubre piezas textiles, fotografía, arte y objetos hechos en ediciones pequeñas desde Ciudad de México."
      />
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16 lg:px-12">
        <ProductCatalog products={products} categories={productCategories} />
      </section>
    </main>
  );
}
