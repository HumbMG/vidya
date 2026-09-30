import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";

import { StatusBadge } from "@/components/storefront/status-badge";
import { getTalentById } from "@/data";
import { formatCurrency } from "@/lib/utils";
import type { Experience } from "@/types";

export function ExperienceCard({ experience }: { experience: Experience }) {
  const talent = getTalentById(experience.talentId);
  const firstSession = experience.sessions[0];
  const availablePlaces = experience.maximumCapacity - experience.enrolled;

  return (
    <article className="group overflow-hidden bg-brand-white">
      <Link href={`/experiencias/${experience.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-sand/40">
          <Image
            src={experience.image}
            alt={experience.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
          />
          <StatusBadge
            status={experience.status}
            className="absolute top-4 left-4"
          />
        </div>
        <div className="p-5 sm:p-6">
          <p className="text-xs font-semibold tracking-[0.14em] text-brand-olive uppercase">
            {experience.category} · {talent?.name}
          </p>
          <h3 className="mt-2 font-serif text-2xl leading-tight group-hover:text-brand-terracotta">
            {experience.name}
          </h3>
          <div className="mt-5 space-y-2 text-sm text-muted-foreground">
            <p className="flex items-start gap-2">
              <CalendarDays
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0"
              />
              {firstSession?.date ?? "Fecha por anunciar"}
            </p>
            <p className="flex items-start gap-2">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
              {experience.zone}
            </p>
          </div>
          <div className="mt-5 flex items-end justify-between gap-4 border-t border-brand-sand pt-4">
            <p className="font-semibold">
              {experience.price
                ? formatCurrency(experience.price)
                : "Precio por definir"}
            </p>
            {experience.status === "OPEN" ||
            experience.status === "CONFIRMED" ? (
              <p className="text-xs text-muted-foreground">
                {availablePlaces} {availablePlaces === 1 ? "lugar" : "lugares"}
              </p>
            ) : null}
          </div>
        </div>
      </Link>
    </article>
  );
}
