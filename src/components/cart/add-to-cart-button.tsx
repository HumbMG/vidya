"use client";

import { useState } from "react";
import { Check, ShoppingBag } from "lucide-react";

import { useCart } from "@/components/cart/cart-provider";
import { Button } from "@/components/ui/button";
import type { CartItem } from "@/types";

export function AddToCartButton({
  item,
  label = "Agregar al carrito",
  className,
}: {
  item: CartItem;
  label?: string;
  className?: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <Button
      type="button"
      size="lg"
      className={className}
      onClick={() => {
        addItem(item);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1800);
      }}
    >
      {added ? (
        <Check aria-hidden="true" />
      ) : (
        <ShoppingBag aria-hidden="true" />
      )}
      {added ? "Agregado" : label}
    </Button>
  );
}
