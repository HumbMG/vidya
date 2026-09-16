import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-sand/80 bg-brand-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-12">
        <a
          href="#top"
          className="font-serif text-xl font-semibold tracking-[0.12em]"
          aria-label={`${siteConfig.name}, inicio`}
        >
          {siteConfig.name}
        </a>

        <nav aria-label="Navegación principal">
          <ul className="flex items-center gap-4 text-xs font-medium sm:gap-7 sm:text-sm">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="underline-offset-8 transition-colors hover:text-brand-terracotta focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-terracotta"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
