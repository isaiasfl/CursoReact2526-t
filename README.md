# Curso React 2526

## Profesor
**D. Isaías Fernández Lozano**  
![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white) [@isaiasfl](https://github.com/isaiasfl)

---

## Stack Tecnológico del Repositorio

![Stack](https://skillicons.dev/icons?i=react,ts,vite,tailwind,js,html,css,nodejs,express,postgresql,prisma,docker,git)

Tecnologías trabajadas durante el curso: **React 19**, **TypeScript**, **Vite**, **TailwindCSS**, **Hooks**, **React Router DOM**, **Context API**, **autenticación JWT**, **Express**, **Prisma** y **PostgreSQL**.

---

## Índice

1. [Visión general](#visión-general)
2. [Sesión 01 - Fundamentos de React + TypeScript](#sesión-01---fundamentos-de-react--typescript)
3. [Sesión 02 - Estado local y formularios](#sesión-02---estado-local-y-formularios)
4. [Sesión 03 - Datos asíncronos y React 19](#sesión-03---datos-asíncronos-y-react-19)
5. [Sesión 04 - Routing con react-router-dom](#sesión-04---routing-con-react-router-dom)
6. [Sesión 05 - Context API y prop drilling](#sesión-05---context-api-y-prop-drilling)
7. [Sesión 06 - Auth y rutas protegidas (laboratorio)](#sesión-06---auth-y-rutas-protegidas-laboratorio)
8. [Sesión 07 - Login con roles (frontend + backend)](#sesión-07---login-con-roles-frontend--backend)
9. [Sesión 08 - Repaso final CRUD empresarial](#sesión-08---repaso-final-crud-empresarial)
10. [Aprendizajes clave del curso](#aprendizajes-clave-del-curso)

---

## Visión general
Este repositorio recoge una progresión completa desde los conceptos básicos de componentes en React hasta un sistema con autenticación, roles y CRUD real contra backend.

Estructura principal:
- `sesion-01` a `sesion-06`: progresión de fundamentos, estado, asincronía, rutas y contexto.
- `sesion-07-login`: proyecto completo con frontend + backend (JWT, roles, Prisma, PostgreSQL).
- `sesion-08-repaso`: repaso final con enfoque profesional y 3 versiones de app.

---

## Sesión 01 - Fundamentos de React + TypeScript
Contenido trabajado:
- Arranque de proyecto con **Vite + React + TypeScript**.
- Primeros componentes (`Header`, `Saludo`, `Tarjeta`).
- Uso de **props tipadas** con `interface`.
- Renderizado condicional (`favorite` en tarjetas).
- Ejercicios de TypeScript en `utils` (tipos primitivos, interfaces, funciones y union types).
- Estilos con utilidades de **TailwindCSS**.

Objetivo de la sesión: construir base sólida de componentes y tipado.

---

## Sesión 02 - Estado local y formularios
Contenido trabajado:
- Introducción a **hooks** con `useState`.
- Componente reusable de botón con tipos literales (`primario`, `secundario`, `peligro`).
- `ContadorBasico` para operaciones de estado.
- `FormularioLogin` con estado controlado de credenciales.
- Estructura inicial de validación de formulario.

Objetivo de la sesión: dominar estado local y formularios controlados.

---

## Sesión 03 - Datos asíncronos y React 19
Contenido trabajado:
- Consumo de API con `fetch` (`utils/api.ts`).
- Tipado de respuestas (`Plato`, `API_CONFIG`).
- Uso de `Suspense` para fallback de carga.
- Uso del hook `use(...)` de React 19 para resolver promesas en componentes.
- Composición de listas y tarjetas (`PlatosList`, `PlatoCard`).

Objetivo de la sesión: integrar asincronía real y patrones modernos de renderizado.

---

## Sesión 04 - Routing con react-router-dom
Contenido trabajado en ejemplos separados:
- **01-rutas-basicas**: `Routes`, `Route`, páginas y `NotFound`.
- **02-navegacion**: navegación con `Link/NavLink` y barra de navegación.
- **03-parametros-dinamicos**: rutas con parámetros (`/saludo/:nombre`).
- **04-layouts-anidados**: rutas anidadas con layout de administración.

Objetivo de la sesión: estructurar SPA con navegación declarativa y rutas escalables.

---

## Sesión 05 - Context API y prop drilling
Contenido trabajado:
- Creación de contexto global (`FamilyContext`).
- Implementación de `Provider` y estado compartido.
- Hook personalizado `useFamily` para encapsular acceso al contexto.
- Ejemplo multi-generación (`Bisabuelo -> Abuelo -> Padre -> Hijo -> Nieto`) sin pasar props manualmente.
- Actualización de estado global desde componentes profundos.

Objetivo de la sesión: resolver prop drilling y centralizar estado compartido.

---

## Sesión 06 - Auth y rutas protegidas (laboratorio)
Contenido trabajado:
- Estructura inicial para autenticación con contexto.
- Definición de páginas públicas y privadas con React Router.
- Preparación de `ProtectedRoute`, `Navbar`, login y dashboard.
- Práctica de formularios y estado local para flujo de acceso.

Nota: esta sesión contiene código de laboratorio y borradores para preparar la sesión 07.

---

## Sesión 07 - Login con roles (frontend + backend)
### Frontend
- `AuthContext` con persistencia de token en `localStorage`.
- Hook `useAuth`.
- Rutas protegidas por nivel de acceso: `guest`, `private`, `admin`.
- Vistas:
  - Pública (`/`)
  - Login (`/login`)
  - Dashboard usuario (`/dashboard`)
  - Administración usuarios (`/admin/users`)
  - Detalle de usuario (`/admin/users/:id`)
- Cliente API para login, perfil y CRUD de usuarios.

### Backend
- API REST con **Express + TypeScript**.
- Validación con **Zod**.
- Persistencia con **Prisma + PostgreSQL**.
- Seguridad:
  - Hash de contraseñas con `bcrypt`.
  - JWT (`generateToken`, `verifyToken`).
  - Middlewares `requireAuth` y `requireAdmin`.
- Endpoints principales:
  - `/api/auth/register`
  - `/api/auth/login`
  - `/api/auth/me`
  - `/api/users` (CRUD admin)
- Seed de usuarios demo y soporte Docker.

Objetivo de la sesión: implementar autenticación real con control de roles extremo a extremo.

---

## Sesión 08 - Repaso final CRUD empresarial
Proyecto `crud-gestion-empresarial-bd-React18/frontend` con enfoque docente progresivo:

- **App1Simple**: CRUD básico sin router.
- **App2Router**: navegación por rutas para empresas y contactos.
- **App3Professional**: auth + rutas protegidas + dashboard.

Elementos tratados:
- Contextos desacoplados (`Auth`, `Companies`, `Contacts`).
- Hooks personalizados (`useAuth`, `useCompanies`, `useContacts`).
- Capa de servicios API (`services/api.ts`).
- Componentización completa (`forms`, `cards`, `lists`, `navbar`, `loading`).
- Notificaciones con **Sonner**.
- Estilado con **TailwindCSS**.

Objetivo de la sesión: consolidar arquitectura frontend profesional y reusable.

---

## Aprendizajes clave del curso

1. **React con TypeScript**: tipar props, estados, eventos y respuestas API para reducir errores en tiempo de ejecución.
2. **Vite como tooling moderno**: arranque rápido, DX ágil y configuración simple para proyectos React.
3. **TailwindCSS en flujo real**: maquetación rápida y consistente por utilidades.
4. **Hooks**: `useState`, `useEffect`, hooks personalizados y patrones de composición.
5. **React Router DOM**: rutas básicas, dinámicas, anidadas y protegidas.
6. **Context API**: compartir estado global sin prop drilling.
7. **Arquitectura por capas**: separación entre UI, contexto/hooks y servicios.
8. **Autenticación JWT + roles**: control de acceso completo en frontend y backend.
9. **Buenas prácticas fullstack**: validación con Zod, ORM con Prisma y persistencia en PostgreSQL.

---

## Autoría docente
Material del curso preparado e impartido por:  
**D. Isaías Fernández Lozano**  
GitHub: [@isaiasfl](https://github.com/isaiasfl)
