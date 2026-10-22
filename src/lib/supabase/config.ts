export const SUPABASE_ENVIRONMENT_VARIABLES = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
] as const;

type SupabaseEnvironmentVariable =
  (typeof SUPABASE_ENVIRONMENT_VARIABLES)[number];

export type SupabaseConfig = {
  url: string;
  publishableKey: string;
};

export type SupabaseConfigCheck =
  | { isConfigured: true; config: SupabaseConfig }
  | {
      isConfigured: false;
      missingVariables: SupabaseEnvironmentVariable[];
      invalidVariables: SupabaseEnvironmentVariable[];
    };

export function checkSupabaseConfig(): SupabaseConfigCheck {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ?? "";
  const publishableKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim() ?? "";
  const missingVariables: SupabaseEnvironmentVariable[] = [];
  const invalidVariables: SupabaseEnvironmentVariable[] = [];

  if (!url) missingVariables.push("NEXT_PUBLIC_SUPABASE_URL");
  if (!publishableKey) {
    missingVariables.push("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY");
  }

  if (url) {
    try {
      const parsedUrl = new URL(url);
      if (!["http:", "https:"].includes(parsedUrl.protocol)) {
        invalidVariables.push("NEXT_PUBLIC_SUPABASE_URL");
      }
    } catch {
      invalidVariables.push("NEXT_PUBLIC_SUPABASE_URL");
    }
  }

  if (publishableKey && !publishableKey.startsWith("sb_publishable_")) {
    invalidVariables.push("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY");
  }

  if (missingVariables.length > 0 || invalidVariables.length > 0) {
    return { isConfigured: false, missingVariables, invalidVariables };
  }

  return {
    isConfigured: true,
    config: { url, publishableKey },
  };
}

export function getSupabaseConfig(): SupabaseConfig {
  const result = checkSupabaseConfig();

  if (!result.isConfigured) {
    const details = [
      result.missingVariables.length > 0
        ? `faltan: ${result.missingVariables.join(", ")}`
        : null,
      result.invalidVariables.length > 0
        ? `no válidas: ${result.invalidVariables.join(", ")}`
        : null,
    ]
      .filter(Boolean)
      .join("; ");

    throw new Error(`Configuración de Supabase incompleta (${details}).`);
  }

  return result.config;
}
