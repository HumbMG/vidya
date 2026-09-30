import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carrito",
  description: "Carrito local del prototipo VIDYA.",
};

export default function CartLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
