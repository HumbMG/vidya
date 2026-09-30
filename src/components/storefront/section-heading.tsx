import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-5 border-b border-brand-sand pb-6 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-brand-terracotta uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-2 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {href && linkLabel ? (
        <Link
          href={href}
          className="inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-brand-olive underline-offset-4 hover:underline sm:self-auto"
        >
          {linkLabel}
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
      ) : null}
    </div>
  );
}
