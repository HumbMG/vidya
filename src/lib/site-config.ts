import type { NavigationItem } from "@/types";

const navigation: NavigationItem[] = [
  { label: "Productos", href: "/productos" },
  { label: "Experiencias", href: "/experiencias" },
  { label: "Talento", href: "/talento" },
];

export const siteConfig = {
  name: "VIDYA",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  tagline: "Experiencia que se comparte.",
  description:
    "Productos y experiencias creados por personas que llevan toda una vida perfeccionando lo que hacen.",
  navigation,
} as const;
