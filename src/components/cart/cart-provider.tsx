"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { CartItem } from "@/types";

const STORAGE_KEY = "vidya-demo-cart";

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (item: CartItem) => void;
  updateQuantity: (
    id: string,
    type: CartItem["type"],
    quantity: number,
  ) => void;
  removeItem: (id: string, type: CartItem["type"]) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved) setItems(JSON.parse(saved) as CartItem[]);
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      } finally {
        setHydrated(true);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (hydrated) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [hydrated, items]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      itemCount: items.reduce((total, item) => total + item.quantity, 0),
      subtotal: items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      ),
      addItem: (incoming) =>
        setItems((current) => {
          const existing = current.find(
            (item) => item.id === incoming.id && item.type === incoming.type,
          );
          if (!existing) return [...current, incoming];
          return current.map((item) =>
            item.id === incoming.id && item.type === incoming.type
              ? {
                  ...item,
                  quantity: Math.min(
                    item.quantity + incoming.quantity,
                    item.maximumQuantity,
                  ),
                }
              : item,
          );
        }),
      updateQuantity: (id, type, quantity) =>
        setItems((current) =>
          current.map((item) =>
            item.id === id && item.type === type
              ? {
                  ...item,
                  quantity: Math.max(
                    1,
                    Math.min(quantity, item.maximumQuantity),
                  ),
                }
              : item,
          ),
        ),
      removeItem: (id, type) =>
        setItems((current) =>
          current.filter((item) => item.id !== id || item.type !== type),
        ),
      clearCart: () => setItems([]),
    }),
    [items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
