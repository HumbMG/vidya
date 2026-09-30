"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import { useCart } from "@/components/cart/cart-provider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatCurrency } from "@/lib/utils";

export default function CheckoutDemoPage() {
  const { items, subtotal } = useCart();
  const [completed, setCompleted] = useState(false);
  const hasProducts = items.some((item) => item.type === "product");
  const productsTotal = items
    .filter((item) => item.type === "product")
    .reduce((total, item) => total + item.price * item.quantity, 0);
  const experiencesTotal = items
    .filter((item) => item.type === "experience")
    .reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-16 lg:px-12">
      <Link
        href="/carrito"
        className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-olive underline-offset-4 hover:underline"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        Volver al carrito
      </Link>
      <div className="mt-5 flex flex-col gap-3 border-b border-brand-sand pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-terracotta uppercase">
            Flujo conceptual
          </p>
          <h1 className="mt-2 font-serif text-4xl sm:text-6xl">Checkout</h1>
        </div>
        <p className="w-fit rounded-full bg-brand-sand/55 px-4 py-2 text-xs font-semibold">
          Demostración — no se realizará ningún cargo
        </p>
      </div>

      {items.length === 0 ? (
        <div className="py-16 text-center">
          <h2 className="font-serif text-3xl">
            No hay elementos para continuar
          </h2>
          <Link
            href="/productos"
            className="mt-4 inline-flex min-h-11 items-center font-semibold text-brand-terracotta underline-offset-4 hover:underline"
          >
            Explorar el catálogo
          </Link>
        </div>
      ) : (
        <form
          className="mt-10 grid gap-10 lg:grid-cols-[1fr_24rem] lg:gap-16"
          onSubmit={(event) => {
            event.preventDefault();
            setCompleted(true);
          }}
        >
          <div className="space-y-10">
            <CheckoutSection title="Contacto">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="checkout-name" label="Nombre" autoComplete="name" />
                <Field
                  id="checkout-email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                />
                <Field
                  id="checkout-phone"
                  label="Teléfono"
                  type="tel"
                  autoComplete="tel"
                  className="sm:col-span-2"
                />
              </div>
            </CheckoutSection>

            {hasProducts ? (
              <CheckoutSection title="Entrega en CDMX">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="checkout-address"
                    label="Dirección"
                    autoComplete="street-address"
                    className="sm:col-span-2"
                  />
                  <Field id="checkout-borough" label="Alcaldía" />
                  <Field
                    id="checkout-postal-code"
                    label="Código postal"
                    inputMode="numeric"
                    autoComplete="postal-code"
                  />
                </div>
              </CheckoutSection>
            ) : null}

            <p className="rounded-xl bg-brand-sand/30 p-4 text-xs leading-5 text-muted-foreground">
              Los datos escritos viven únicamente en este formulario mientras la
              página está abierta. No se envían ni se guardan.
            </p>
          </div>

          <aside className="h-fit bg-brand-white p-6 lg:sticky lg:top-24">
            <h2 className="font-serif text-2xl">Tu selección</h2>
            <div className="mt-5 space-y-4">
              {items.map((item) => (
                <div key={`${item.type}-${item.id}`} className="flex gap-3">
                  <div className="relative size-14 shrink-0 overflow-hidden bg-brand-sand/30">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold leading-tight">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.quantity} × {formatCurrency(item.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <dl className="mt-6 space-y-3 border-y border-brand-sand py-5 text-sm">
              {productsTotal > 0 ? (
                <div className="flex justify-between gap-4">
                  <dt>Productos</dt>
                  <dd>{formatCurrency(productsTotal)}</dd>
                </div>
              ) : null}
              {experiencesTotal > 0 ? (
                <div className="flex justify-between gap-4">
                  <dt>Experiencias</dt>
                  <dd>{formatCurrency(experiencesTotal)}</dd>
                </div>
              ) : null}
              <div className="flex justify-between gap-4 text-muted-foreground">
                <dt>Envío</dt>
                <dd>{hasProducts ? "Por calcular" : "No aplica"}</dd>
              </div>
            </dl>
            <div className="mt-5 flex justify-between text-lg font-semibold">
              <span>Total provisional</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <Button
              type="submit"
              size="lg"
              className="mt-6 h-12 w-full rounded-full"
            >
              Continuar al pago
            </Button>
          </aside>
        </form>
      )}

      <Dialog open={completed} onOpenChange={setCompleted}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="items-center text-center">
            <CheckCircle2
              aria-hidden="true"
              className="size-10 text-brand-olive"
            />
            <DialogTitle className="font-serif text-3xl">
              Checkout de demostración
            </DialogTitle>
            <DialogDescription className="leading-6">
              En la siguiente fase esta operación se conectará al proveedor de
              pagos. No se realizó ningún cargo ni se guardaron tus datos.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
}

function CheckoutSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-serif text-3xl">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Field({
  id,
  label,
  className,
  ...props
}: React.ComponentProps<typeof Input> & { label: string }) {
  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={id} required className="mt-2" {...props} />
    </div>
  );
}
