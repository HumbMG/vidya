import type { Metadata } from "next";

import { PageIntro } from "@/components/storefront/page-intro";
import { TalentCard } from "@/components/storefront/talent-card";
import { talents } from "@/data";

export const metadata: Metadata = {
  title: "Talento",
  description: "Conoce a los creadores, maestros y especialistas de VIDYA.",
};

export default function TalentPage() {
  return (
    <main>
      <PageIntro
        eyebrow="El talento detrás"
        title="Personas que han hecho de la práctica un oficio."
        description="Creadores, maestros y especialistas que siguen explorando, produciendo y compartiendo lo que saben."
      />
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16 lg:px-12">
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {talents.map((talent) => (
            <TalentCard key={talent.id} talent={talent} />
          ))}
        </div>
      </section>
    </main>
  );
}
