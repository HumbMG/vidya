import type { Metadata } from "next";

import { ExperienceCard } from "@/components/storefront/experience-card";
import { PageIntro } from "@/components/storefront/page-intro";
import { experiences } from "@/data";

export const metadata: Metadata = {
  title: "Experiencias",
  description:
    "Talleres y experiencias para aprender directamente de especialistas.",
};

export default function ExperiencesPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Aprender haciendo"
        title="Experiencias para mirar, crear y cultivar."
        description="Encuentros presenciales en grupos pequeños, guiados por personas que conocen profundamente su práctica."
      />
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>
    </main>
  );
}
