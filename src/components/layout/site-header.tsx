"use client";

import Link from "next/link";
import { Menu, ShoppingBag } from "lucide-react";

import { useCart } from "@/components/cart/cart-provider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-brand-sand/80 bg-brand-ivory/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-[0.12em] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-terracotta"
          aria-label={`${siteConfig.name}, inicio`}
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="underline-offset-8 transition-colors hover:text-brand-terracotta focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-terracotta"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <Button
            render={
              <Link
                href="/carrito"
                aria-label={`Carrito, ${itemCount} artículos`}
              />
            }
            variant="ghost"
            size="icon-lg"
            className="relative rounded-full"
          >
            <ShoppingBag aria-hidden="true" />
            {itemCount > 0 ? (
              <span className="absolute -top-0.5 -right-0.5 grid min-h-5 min-w-5 place-items-center rounded-full bg-brand-terracotta px-1 text-[10px] font-bold text-brand-white">
                {itemCount}
              </span>
            ) : null}
          </Button>

          <Dialog>
            <DialogTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-lg"
                  className="rounded-full md:hidden"
                  aria-label="Abrir menú"
                />
              }
            >
              <Menu aria-hidden="true" />
            </DialogTrigger>
            <DialogContent className="top-4 right-4 left-auto w-[calc(100%-2rem)] max-w-sm translate-x-0 translate-y-0 p-6 sm:top-6 sm:right-6">
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl">Menú</DialogTitle>
                <DialogDescription>
                  Explora productos, experiencias y perfiles.
                </DialogDescription>
              </DialogHeader>
              <nav aria-label="Navegación móvil" className="mt-4">
                <ul className="grid gap-2">
                  {siteConfig.navigation.map((item) => (
                    <li key={item.href}>
                      <DialogClose
                        render={
                          <Link
                            href={item.href}
                            className="flex min-h-12 items-center border-b border-brand-sand font-serif text-xl"
                          />
                        }
                      >
                        {item.label}
                      </DialogClose>
                    </li>
                  ))}
                </ul>
              </nav>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
