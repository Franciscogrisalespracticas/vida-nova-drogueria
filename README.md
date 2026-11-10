# VIDA NOVA Droguería

Sitio frontend multipágina construido con React, TypeScript, Vite, GSAP y React Router. Diseño adaptable con portada cinematográfica y catálogo de 10 productos.

## Instalación

```bash
npm ci
npm run dev
```

Para generar la versión estática: `npm run build`. Para previsualizar: `npm run preview`.

## Video de portada

El paquete incluye `public/videos/hero-pharmacy.mp4`: video H.264 de 1280 × 720 y aproximadamente 8 segundos. La portada lo reproduce en bucle, sin sonido, y utiliza `public/images/hero-poster.svg` como póster.

## Datos comerciales

`src/data.ts` contiene productos, precios, dirección, horarios y contacto. Todos los datos comerciales son ficticios y deben verificarse antes de usar el sitio para un negocio real. Para activar WhatsApp, coloca el número en formato internacional sin `+` en `business.whatsapp`.

## Funcionamiento

La lista de pedido y los favoritos se guardan localmente en el navegador. No hay pagos, inventario real, formularios enviados al servidor ni backend. Si no hay WhatsApp configurado, el botón copia el resumen. El formulario de contacto prepara y copia el mensaje.

## GitHub Pages

El repositorio previsto es `vida-nova-drogueria`; `vite.config.ts` ya contiene la base `/vida-nova-drogueria/`. Habilita GitHub Pages con fuente **GitHub Actions**. El workflow `.github/workflows/deploy.yml` compila y despliega al hacer push a `main`.

## Backend futuro

Separar la fuente de productos en una capa de servicios, sustituir la persistencia local por API y agregar autenticación, inventario y pagos mediante backend independiente. No exponer credenciales en el frontend.

## Nota de alcance

El proyecto es una presentación comercial ficticia. No se han validado dirección, correo, precios, productos ni permisos regulatorios. No representa una droguería operativa ni ofrece recomendaciones médicas.

## Publicacion

El workflow `.github/workflows/deploy.yml` prepara el sitio para GitHub Pages desde la rama `main`, pero la publicacion requiere un repositorio existente y Pages habilitado para GitHub Actions. El ZIP no equivale a una publicacion y los archivos deben subirse descomprimidos al repositorio.

## Validación

`npm run build` comprueba TypeScript y genera `dist`. El paquete original no incluye pruebas automatizadas de Vitest.
