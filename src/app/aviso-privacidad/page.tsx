import type { Metadata } from "next";

import { PolicyPlaceholder } from "@/components/storefront/policy-placeholder";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Aviso informativo del prototipo VIDYA.",
};

export default function PrivacyNoticePage() {
  return (
    <PolicyPlaceholder
      eyebrow="Documento en preparación"
      title="Aviso de privacidad"
      description="Esta sección se completará cuando se definan los tratamientos de datos, responsables y proveedores del marketplace."
    />
  );
}
