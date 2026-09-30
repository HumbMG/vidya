"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

import { useCart } from "@/components/cart/cart-provider";
import { Button, buttonVariants } from "@/components/ui/button";
import { formatCurrency, cn } from "@/lib/utils";

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();

  return (
    <main className="mx-auto min-h-[60vh] max-w-7xl px-6 py-12 sm:px-10 sm:py-16 lg:px-12">
      <p className="text-xs font-semibold tracking-[0.2em] text-brand-terracotta uppercase">
        Compra conceptual
      </p>
      <h1 className="mt-3 font-serif text-4xl sm:text-6xl">Tu carrito</h1>

      {items.length === 0 ? (
        <div className="mt-12 border border-brand-sand bg-brand-white p-10 text-center sm:p-16">
          <ShoppingBag
            aria-hidden="true"
            className="mx-auto size-10 text-brand-olive"
          />
          <h2 className="mt-5 font-serif text-3xl">Tu carrito está vacío</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            Explora productos o reserva un lugar en una experiencia para probar
            el flujo del prototipo.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/productos"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 rounded-full px-6",
              )}
            >
              Ver productos
            </Link>
            <Link
              href="/experiencias"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 rounded-full px-6",
              )}
            >
              Ver experiencias
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_22rem] lg:gap-16">
          <div className="divide-y divide-brand-sand border-y border-brand-sand">
            {items.map((item) => (
              <article
                key={`${item.type}-${item.id}`}
                className="grid grid-cols-[5.5rem_1fr] gap-4 py-6 sm:grid-cols-[7rem_1fr_auto] sm:items-center"
              >
                <Link
                  href={`/${item.type === "product" ? "productos" : "experiencias"}/${item.slug}`}
                  className="relative aspect-square overflow-hidden bg-brand-sand/30"
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </Link>
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-wide text-brand-olive uppercase">
                    {item.type === "product" ? "Producto" : "Experiencia"}
                  </p>
                  <Link
                    href={`/${item.type === "product" ? "productos" : "experiencias"}/${item.slug}`}
                    className="mt-1 block font-serif text-xl leading-tight hover:text-brand-terracotta"
                  >
                    {item.name}
                  </Link>
                  <p className="mt-1 text-sm text-muted-foreground">
                    por {item.talentName}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {item.type === "product"
                      ? "Envío calculado en checkout."
                      : "No requiere envío."}
                  </p>
                </div>
                <div className="col-span-2 flex items-center justify-between gap-4 sm:col-span-1 sm:flex-col sm:items-end">
                  <p className="font-semibold">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                  <div
                    className="flex items-center gap-1"
                    aria-label={`Cantidad de ${item.name}`}
                  >
                    <Button
                      type="button"
                      variant="outline"
                      size="icon-sm"
                      aria-label="Reducir cantidad"
                      disabled={item.quantity <= 1}
                      onClick={() =>
                        updateQuantity(item.id, item.type, item.quantity - 1)
                      }
                    >
                      <Minus aria-hidden="true" />
                    </Button>
                    <span
                      className="min-w-8 text-center text-sm"
                      aria-live="polite"
                    >
                      {item.quantity}
                    </span>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon-sm"
                      aria-label="Aumentar cantidad"
                      disabled={item.quantity >= item.maximumQuantity}
                      onClick={() =>
                        updateQuantity(item.id, item.type, item.quantity + 1)
                      }
                    >
                      <Plus aria-hidden="true" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-sm"
                      aria-label={`Eliminar ${item.name}`}
                      onClick={() => removeItem(item.id, item.type)}
                    >
                      <Trash2 aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="h-fit bg-brand-white p-6 lg:sticky lg:top-24">
            <h2 className="font-serif text-2xl">Resumen</h2>
            <div className="mt-5 flex justify-between border-y border-brand-sand py-4">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="font-semibold">{formatCurrency(subtotal)}</span>
            </div>
            <p className="mt-4 text-xs leading-5 text-muted-foreground">
              Los costos de entrega de productos se definirán en un checkout
              real.
            </p>
            <Link
              href="/checkout-demo"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-6 h-12 w-full rounded-full",
              )}
            >
              Continuar
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}
