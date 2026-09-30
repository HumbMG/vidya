import type { Metadata } from "next";

import { PolicyPlaceholder } from "@/components/storefront/policy-placeholder";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos informativos del prototipo VIDYA.",
};

export default function TermsPage() {
  return (
    <PolicyPlaceholder
      eyebrow="Documento en preparación"
      title="Términos y condiciones"
      description="Las condiciones de uso y contratación se publicarán antes de abrir el marketplace a transacciones reales."
    />
  );
}
