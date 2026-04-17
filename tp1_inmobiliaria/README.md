Este es un desarrollo web moderno construido con *Next.js*, diseñado para la gestión y visualización de propiedades inmobiliarias de manera eficiente y escalable.

## 📝 Descripción del Proyecto
El proyecto consiste en una plataforma inmobiliaria que permite a los usuarios navegar por un catálogo de inmuebles y acceder a información detallada de cada uno. 

### Características principales:
* *Rutas Dinámicas:* Implementación de rutas dinámicas en /propiedades/[id] para renderizar los detalles específicos de cada unidad desde el servidor.
* *Rutas Anidadas:* Estructura organizada para la información institucional, incluyendo una sección especializada en /nosotros/equipo.
* *Interfaz Moderna:* Diseño enfocado en la experiencia de usuario (UX) utilizando componentes de servidor (Server Components) para un rendimiento óptimo.

---

## 👥 Información del Equipo
* *Número de Grupo:* 3
* *Nombre del Equipo:* The Coders

### Integrantes:
* *Alonso Arias*, Tomas
* *Ambrogio*, Francisco
* *Lejtneker*, Agustin
* *Lacroix*, Nicolas
* *Lopez*, Maximiliano

---

## 📂 Estructura del Proyecto (Tree)

La organización de carpetas sigue la convención de *Next.js App Router*:

```text
├── app
│   ├── contacto           # Formulario de contacto y atención
│   ├── nosotros           # Información institucional
│   │   └── equipo         # Ruta anidada: Staff de la inmobiliaria
│   └── propiedades        # Catálogo principal
│       └── [id]           # Ruta dinámica: Detalle de propiedad
└── public                 # Activos estáticos (imágenes, iconos)


-------------------------------------------------------------------------------------------------------------------------------------
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
