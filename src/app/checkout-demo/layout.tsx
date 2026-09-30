import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout de demostración",
  description: "Flujo de checkout conceptual sin cargos ni envío de datos.",
};

export default function CheckoutDemoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
