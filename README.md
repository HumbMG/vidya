# VIDYA

Base técnica del marketplace web B2C para productos físicos y experiencias o talleres ofrecidos por Talento Senior.

> Estado: MVP en desarrollo.

El nombre **VIDYA** es provisional. La configuración de marca está centralizada para facilitar un cambio posterior sin acoplar innecesariamente la lógica de la aplicación.

## Stack actual

- Next.js con App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- ESLint
- Prettier
- pnpm como único gestor de paquetes

Supabase, Stripe, Resend, Vercel y otros servicios cloud todavía no están configurados.

## Requisitos

- Node.js 24 LTS
- pnpm 12

## Instalación

```bash
pnpm install
```

## Desarrollo

```bash
pnpm dev
```

La aplicación estará disponible normalmente en [http://localhost:3000](http://localhost:3000).

## Validación

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Formato

```bash
pnpm format
pnpm format:check
```

## Estructura básica

```text
src/
  app/                 Rutas, layout y estilos globales
  components/
    layout/            Header y footer reutilizables
    ui/                Componentes de shadcn/ui
  lib/                 Configuración y utilidades compartidas
  types/               Tipos compartidos
public/                 Archivos estáticos
```

## Variables de entorno

`.env.example` documenta las variables previstas sin contener credenciales. No copies ni completes valores hasta configurar cada servicio en un hito posterior.
