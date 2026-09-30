import type { Metadata } from "next";

import { PolicyPlaceholder } from "@/components/storefront/policy-placeholder";

export const metadata: Metadata = {
  title: "Compras y cancelaciones",
  description: "Información de compras del prototipo VIDYA.",
};

export default function PurchasesPage() {
  return (
    <PolicyPlaceholder
      eyebrow="Documento en preparación"
      title="Compras y cancelaciones"
      description="Aquí se detallarán envíos, cambios, cancelaciones y reembolsos cuando el flujo comercial esté definido."
    />
  );
}
