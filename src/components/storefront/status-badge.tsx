import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ExperienceStatus, ProductStatus } from "@/types";

const labels: Record<ProductStatus | ExperienceStatus, string> = {
  AVAILABLE: "Disponible",
  COMING_SOON: "Próximamente",
  SOLD_OUT: "Agotado",
  INTEREST_VALIDATION: "Próximamente",
  OPEN: "Inscripciones abiertas",
  CONFIRMED: "Confirmada",
  FULL: "Cupo completo",
};

const styles: Record<ProductStatus | ExperienceStatus, string> = {
  AVAILABLE: "bg-brand-olive text-brand-white",
  COMING_SOON: "bg-brand-sand text-brand-charcoal",
  SOLD_OUT: "bg-brand-charcoal text-brand-white",
  INTEREST_VALIDATION: "bg-brand-sand text-brand-charcoal",
  OPEN: "bg-brand-terracotta text-brand-white",
  CONFIRMED: "bg-brand-olive text-brand-white",
  FULL: "bg-brand-charcoal text-brand-white",
};

export function StatusBadge({
  status,
  className,
}: {
  status: ProductStatus | ExperienceStatus;
  className?: string;
}) {
  return (
    <Badge className={cn("h-6 border-0 px-2.5", styles[status], className)}>
      {labels[status]}
    </Badge>
  );
}
