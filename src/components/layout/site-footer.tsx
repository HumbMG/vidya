import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-sand bg-brand-charcoal text-brand-ivory">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
        <p className="font-serif text-lg font-semibold tracking-[0.12em]">
          {siteConfig.name}
        </p>
        <p className="text-sm text-brand-sand">{siteConfig.tagline}</p>
      </div>
    </footer>
  );
}
