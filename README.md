# VIDA NOVA Droguería

Frontend comercial estático en React, TypeScript y Vite para catálogo y listas de consulta. No procesa pagos, no confirma compras y no dispone de inventario ni backend. Los precios son datos iniciales editables.

## Requisitos y ejecución

- Node.js 22 o superior y npm.
- `npm ci`
- `npm run dev`
- `npm run typecheck`
- `npm run test -- --run`
- `npm run build`

## Estructura

- `src/data/products.ts`: catálogo inicial, categorías y precios COP.
- `src/data/promotions.ts`: promociones confirmadas (vacío mientras no existan). El precio se resuelve centralmente.
- `src/config/business.ts`: ciudad, WhatsApp, correo, dirección y horarios. Valores de contacto vacíos hasta verificación.
- `src/store/Cart.tsx`: estado y persistencia versionada en localStorage.
- `src/pages/Pages.tsx`: páginas comerciales y formularios.
- `public/videos/hero-pharmacy.mp4`: video adjunto del hero.
- `public/images/`: póster, ilustraciones y recursos locales.

## Editar información

Ajusta productos y textos en `src/data/products.ts`. Configura promociones con precio anterior, promocional y estado activo en `src/data/promotions.ts`; el porcentaje se calcula. Edita `src/config/business.ts` solo con datos verificados. El número WhatsApp debe estar en formato internacional con código de país y sin `+` ni espacios. Sustituye `public/videos/hero-pharmacy.mp4` para cambiar el video y actualiza `public/images/hero-poster.jpg` con un fotograma representativo.

## GitHub Pages

La base de Vite está configurada para `/vida-nova-drogueria/` y el enrutamiento usa `HashRouter`, de modo que las rutas se conservan al refrescar GitHub Pages. El workflow `.github/workflows/deploy.yml` valida, prueba y publica `dist` al hacer push a `main`. En GitHub, configura Pages con fuente **GitHub Actions** si el repositorio no lo hace automáticamente.

## Límites actuales y evolución

El formulario prepara `mailto:` si existe correo y, si no, permite copiar. El pedido local es una lista estimada para consulta; no se transmite, reserva inventario ni realiza compra. Para backend futuro, separar el repositorio de catálogo, reglas comerciales, pedidos, inventario, pagos y clientes; añadir autenticación y controles de seguridad del lado servidor antes de manejar datos personales o pagos.
