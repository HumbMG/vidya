import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Talent } from "@/types";

export function TalentCard({ talent }: { talent: Talent }) {
  return (
    <article className="group">
      <Link href={`/talento/${talent.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-brand-sand/40">
          <Image
            src={talent.image}
            alt={talent.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <div className="pt-4">
          <p className="text-xs font-semibold tracking-[0.14em] text-brand-terracotta uppercase">
            {talent.specialty}
          </p>
          <div className="mt-1 flex items-center justify-between gap-3">
            <h3 className="font-serif text-2xl group-hover:text-brand-terracotta">
              {talent.name}
            </h3>
            <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
          </div>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {talent.experiencePhrase}
          </p>
        </div>
      </Link>
    </article>
  );
}
