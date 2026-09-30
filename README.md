# VIDYA

Prototipo local de un marketplace B2C para productos físicos y experiencias creados por Talento Senior.

> Estado: Hito 3 — storefront visual y navegable con datos ficticios.

El nombre **VIDYA** es provisional. La configuración de marca está centralizada para facilitar un cambio posterior sin acoplar la lógica de negocio.

## Stack actual

- Next.js con App Router
- React y TypeScript
- Tailwind CSS
- shadcn/ui
- ESLint y Prettier
- pnpm como único gestor de paquetes

Supabase, Stripe, Resend, Vercel y otros servicios cloud todavía no están configurados.

## Requisitos

- Node.js 24 LTS
- pnpm 12

## Desarrollo

```bash
pnpm install
pnpm dev
```

La aplicación estará disponible normalmente en [http://localhost:3000](http://localhost:3000).

## Rutas del prototipo

- `/` — portada editorial
- `/productos` y `/productos/[slug]`
- `/experiencias` y `/experiencias/[slug]`
- `/talento` y `/talento/[slug]`
- `/carrito`
- `/checkout-demo`

El carrito persiste únicamente en `localStorage`. Los formularios de interés y el checkout son demostraciones: no envían ni guardan datos y no procesan pagos.

## Validación

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm format:check
```

## Estructura

```text
src/
  app/                 Rutas, layouts y estilos globales
  components/
    cart/              Estado y acciones del carrito local
    layout/            Header y footer reutilizables
    storefront/        Cards y bloques del marketplace
    ui/                Componentes de shadcn/ui
  data/                Datos mock centralizados
  lib/                 Configuración y utilidades compartidas
  types/               Tipos de dominio compartidos
public/images/          Recursos visuales locales
```

## Variables de entorno

`.env.example` documenta variables previstas sin contener credenciales. No copies ni completes valores hasta configurar cada servicio en un hito posterior.
