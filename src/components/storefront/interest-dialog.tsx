"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InterestDialog({
  triggerLabel,
  title,
  description,
  confirmation = "Te avisaremos cuando haya novedades.",
  variant = "default",
  className,
}: {
  triggerLabel: string;
  title: string;
  description: string;
  confirmation?: string;
  variant?: "default" | "outline" | "secondary";
  className?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Dialog onOpenChange={(open) => !open && setSubmitted(false)}>
      <DialogTrigger
        render={<Button variant={variant} size="lg" className={className} />}
      >
        {triggerLabel}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div className="py-6 text-center">
            <CheckCircle2
              aria-hidden="true"
              className="mx-auto size-10 text-brand-olive"
            />
            <DialogTitle className="mt-4 font-serif text-2xl">
              Interés registrado en esta demostración
            </DialogTitle>
            <DialogDescription className="mt-3 leading-6">
              {confirmation} Este prototipo no envió ni almacenó tus datos.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl">{title}</DialogTitle>
              <DialogDescription className="leading-6">
                {description}
              </DialogDescription>
            </DialogHeader>
            <form
              className="mt-2 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="interest-name">Nombre</Label>
                <Input
                  id="interest-name"
                  name="name"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="interest-email">Email</Label>
                <Input
                  id="interest-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="interest-phone">Teléfono (opcional)</Label>
                <Input
                  id="interest-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                />
              </div>
              <p className="rounded-lg bg-brand-sand/35 p-3 text-xs leading-5 text-muted-foreground">
                Demostración: la información no se envía a un servidor ni se
                conserva al cerrar este formulario.
              </p>
              <Button type="submit" size="lg" className="h-11 w-full">
                Confirmar interés
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
