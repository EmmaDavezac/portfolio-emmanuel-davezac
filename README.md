# Luciano Emmanuel Davezac — Fullstack Developer Portfolio

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel&logoColor=white)](https://portfolio-emmanuel.vercel.app)

Portafolio web profesional de **Luciano Emmanuel Davezac**, Analista Universitario en Sistemas y estudiante avanzado de Ingeniería en Sistemas de Información (UTN FRCU). Especializado en arquitectura y desarrollo fullstack con **React**, **Django** y **.NET**.

🌐 **Sitio web en producción:** [portfolio-emmanuel.vercel.app](https://portfolio-emmanuel.vercel.app)

---

## ⚡ Características Principales

- **Diseño Ultra Moderno & Estética Dark Mode**: Paleta cuidada con fondos profundos (`#0a0e17`), acentos en ámbar (`#f2b134`) y tipografía técnica (*Space Grotesk* + *JetBrains Mono*).
- **100% Responsive & Adaptable**:
  - **Móvil / Tablet**: Navegación fluida a una columna, soporte para gestos táctiles y diseño *mobile-first*.
  - **Escritorio**: Cuadrícula dinámica con proyecto principal destacado en ancho completo y galería 2x2 alineada al píxel.
- **Carrusel de Proyectos de Alto Rendimiento**:
  - Carga instantánea a 0 ms con imágenes pre-renderizadas en DOM.
  - Transición suave a 60/120 fps acelerada por GPU (`transform: translateX`).
  - Navegación por botones translúcidos, puntos (*dots*) interactivos y soporte para deslizamiento táctil (*swipe*).
- **Experiencia de Usuario Interactiva**:
  - Botón de **"Copiar Email"** al portapapeles con confirmación visual animada.
  - Enlace directo a **WhatsApp** con mensaje de apertura preconfigurado.
  - Descarga directa de **Curriculum Vitae (PDF)**.
  - Línea de tiempo estructurada para trayectoria laboral, investigación académica y certificaciones.
- **Optimización & SEO**:
  - Metaetiquetas completas para Open Graph (Facebook/LinkedIn) y Twitter Cards.
  - Generación de rutas estáticas ultrarrápidas con Astro.
  - Favicon SVG vectorial personalizado con la identidad visual de la marca (`LD.`).

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
| :--- | :--- |
| **Framework** | [Astro](https://astro.build) (Generación de sitios estáticos ultrarrápidos) |
| **Estilos** | [Tailwind CSS v4](https://tailwindcss.com) + `@tailwindcss/vite` |
| **Tipografía** | `@fontsource/space-grotesk` & `@fontsource/jetbrains-mono` |
| **Iconografía** | [Lucide Astro](https://lucide.dev) |
| **Optimización** | [Sharp](https://sharp.pixelplumbing.com/) (Conversión y compresión a WebP) |
| **Despliegue** | [Vercel](https://vercel.com) |

---

## 📂 Proyectos Destacados

1. **SGA — Sistema de Gestión de Operaciones Aduaneras** *(Proyecto Final de Carrera)*
   - Plataforma fullstack para empresa real de comercio exterior (~100 operaciones/mes, 74+ clientes).
   - *Stack:* React, Django REST, JWT, Docker Compose, PostgreSQL.
2. **Secure Campus IA** *(Seguridad Informática)*
   - Plataforma web con chat de IA, autenticación OAuth, Web Application Firewall y defensa multicapa contra inyecciones de prompt.
   - *Stack:* Next.js, TypeScript, Supabase, NextAuth.
3. **Evolet Nails — Sistema de Gestión** *(Freelance en Producción)*
   - PWA para digitalización operativa completa de un salón de belleza (turnos, caja, gastos y métricas).
   - *Stack:* React, Vite, Supabase, PWA.
4. **GIBD — Grupo de Investigación en Bases de Datos** *(Investigación UTN)*
   - Plataforma institucional para divulgación de papers científicos, investigaciones y demostradores interactivos.
   - *Stack:* React, TypeScript, Vite, Supabase.
5. **E-Library — Sistema de Gestión de Préstamos** *(Proyecto Final de Cátedra)*
   - Sistema de escritorio para gestión bibliotecaria integral, integración con Open Library API y reportes automatizados.
   - *Stack:* C#, .NET, WinForms, SQL Server.

---

## 🚀 Instalación y Desarrollo Local

### Prerrequisitos
- **Node.js**: `>= 22.12.0`
- **npm**

### Pasos

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/EmmaDavezac/portfolio-emmanuel.git
   cd portfolio-emmanuel
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   El sitio estará disponible en `http://localhost:4321`.

4. Compilar para producción:
   ```bash
   npm run build
   ```

5. Previsualizar la compilación de producción:
   ```bash
   npm run preview
   ```

---

## 📁 Estructura del Proyecto

```text
portfolio-emmanuel/
├── public/
│   ├── favicon.svg          # Favicon vectorial con marca LD.
│   ├── favicon.ico          # Fallback para navegadores antiguos
│   ├── cv.pdf               # Curriculum Vitae descargable
│   ├── profile.webp         # Foto de perfil oficial
│   └── projects/            # Capturas optimizadas en WebP de cada proyecto
├── src/
│   ├── components/
│   │   └── ProjectCarousel.astro  # Slider táctil acelerado por GPU
│   ├── pages/
│   │   └── index.astro            # Página principal del portafolio
│   └── styles/
│       └── global.css             # Configuración de Tailwind v4 y variables CSS
├── convert-images.mjs       # Script auxiliar para procesar imágenes con Sharp
├── astro.config.mjs         # Configuración de Astro y plugin Tailwind Vite
└── package.json
```

---

## 📬 Contacto

- **Email:** [lucianodavezac@gmail.com](mailto:lucianodavezac@gmail.com)
- **LinkedIn:** [linkedin.com/in/emmanueldavezac](https://linkedin.com/in/emmanueldavezac)
- **GitHub:** [github.com/EmmaDavezac](https://github.com/EmmaDavezac)
- **WhatsApp:** [+54 9 343 847-1858](https://wa.me/5493438471858)
- **Ubicación:** Concepción del Uruguay, Entre Ríos, Argentina
