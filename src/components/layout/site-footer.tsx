import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

const marketplaceLinks = [
  { label: "Productos", href: "/productos" },
  { label: "Experiencias", href: "/experiencias" },
  { label: "Talento", href: "/talento" },
];

const aboutLinks = [
  { label: "Quiero participar", href: "/#participa" },
  { label: "Nuestra historia", href: "/#nuestra-historia" },
  { label: "Contacto", href: "#contacto" },
];

const policyLinks = [
  { label: "Aviso de privacidad", href: "/aviso-privacidad" },
  { label: "Términos", href: "/terminos" },
  { label: "Compras y cancelaciones", href: "/compras-y-cancelaciones" },
];

export function SiteFooter() {
  return (
    <footer
      id="contacto"
      className="border-t border-brand-sand bg-brand-charcoal text-brand-ivory"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 sm:px-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-12">
        <div>
          <Link
            href="/"
            className="font-serif text-xl font-semibold tracking-[0.12em]"
          >
            {siteConfig.name}
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-6 text-brand-sand">
            {siteConfig.tagline}
          </p>
          <p className="mt-6 text-xs leading-5 text-brand-sand/80">
            Prototipo de marketplace · Ciudad de México
          </p>
        </div>
        <FooterList
          title="Explorar"
          links={[...marketplaceLinks, ...aboutLinks]}
        />
        <FooterList title="Información" links={policyLinks} />
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-brand-sand/80">
        © 2026 VIDYA · Nombre provisional
      </div>
    </footer>
  );
}

function FooterList({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h2 className="text-xs font-semibold tracking-[0.18em] uppercase">
        {title}
      </h2>
      <ul className="mt-4 space-y-3 text-sm text-brand-sand">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="underline-offset-4 hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
