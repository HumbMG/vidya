# VIDYA

Prototipo local de un marketplace B2C para productos físicos y experiencias creados por Talento Senior.

> Estado: Hito 5.1 — storefront visual con integración de Supabase preparada, todavía sin tablas ni consultas.

El nombre **VIDYA** es provisional. La configuración de marca está centralizada para facilitar un cambio posterior sin acoplar la lógica de negocio.

## Stack actual

- Next.js con App Router
- React y TypeScript
- Tailwind CSS
- shadcn/ui
- Supabase JS y SSR (clientes preparados, sin consultas)
- Supabase CLI local
- ESLint y Prettier
- pnpm como único gestor de paquetes

Stripe y Resend todavía no están configurados. La estructura local de Supabase está inicializada, pero no está vinculada a un proyecto remoto y no contiene tablas de negocio.

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
supabase/
  migrations/          Migraciones SQL futuras (vacía en este hito)
  config.toml           Configuración local generada por Supabase CLI
```

## Variables de entorno

`.env.example` documenta las variables previstas sin contener credenciales. Los archivos `.env*`, salvo `.env.example`, están excluidos por Git.

Para preparar el entorno de desarrollo, crea `.env.local` en la raíz del proyecto a partir del ejemplo y completa localmente estos valores desde el panel **Connect** del proyecto Supabase de desarrollo:

```dotenv
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

No compartas esos valores en el chat ni los agregues al repositorio. La clave publicable puede usarse en el navegador y queda protegida por las políticas RLS que se definirán con el modelo SQL. No uses una clave secreta o `service_role` en código cliente.

## Supabase local

La CLI está instalada como dependencia de desarrollo y su versión queda fijada en `package.json`:

```bash
pnpm exec supabase --version
```

`supabase init` ya fue ejecutado. No se ejecutaron `supabase start`, `login`, `link`, migraciones ni comandos contra la base remota. Cuando se autorice el entorno local completo, podrá iniciarse con Docker mediante:

```bash
pnpm exec supabase start
```

Los clientes están separados en:

- `src/lib/supabase/client.ts` para componentes que se ejecutan en el navegador.
- `src/lib/supabase/server.ts` para Server Components, Server Actions y Route Handlers.
- `src/lib/supabase/config.ts` para comprobar que la URL y la clave publicable están configuradas correctamente.

No se añadió `proxy.ts`: será necesario cuando se implemente autenticación y renovación de sesiones, que quedan fuera del Hito 5.1.
