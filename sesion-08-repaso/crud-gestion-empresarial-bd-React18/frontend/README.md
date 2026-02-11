# 🚀 Frontend CRUD - Gestión Empresarial

Frontend con **React 19 + TypeScript + TailwindCSS** para gestionar contactos y empresas. Incluye 3 versiones progresivas para practicar desde lo más básico hasta autenticación JWT.

---

## ✨ Características

- ✅ **React 19** (última versión)
- ✅ **TypeScript** moderno
- ✅ **TailwindCSS 4** con @tailwindcss/vite
- ✅ **3 versiones de App** (simple, con router, con auth)
- ✅ **Context API** para estado global
- ✅ **Custom Hooks** (useContacts, useCompanies, useAuth)
- ✅ **Mini componentes** modulares
- ✅ **Sonner** para notificaciones
- ✅ **React Router Dom** para navegación

---

## 📦 Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| React | 19.0.0 | Librería UI |
| TypeScript | 5.7+ | Tipado estático |
| Vite | 6.0+ | Build tool |
| TailwindCSS | 4.0+ | Estilos |
| React Router | 7.1+ | Navegación |
| Sonner | 1.7+ | Notificaciones/Toasts |

---

## 🚀 Instalación

### 1. Instalar dependencias

```bash
cd frontend
npm install
```

### 2. Configurar variables de entorno

El proyecto ya viene con `.env` configurado. Si necesitas cambiarlo:

```env
VITE_API_URL=http://localhost:3000/api
```

### 3. Levantar el proyecto

```bash
npm run dev
```

Abre http://localhost:5173

---

## 🎯 Las 3 Versiones de App

### App 1: Simple (Sin rutas) ⭐ POR DEFECTO

**Archivo:** [src/apps/App1Simple.tsx](src/apps/App1Simple.tsx)

**Para:** Alumnos principiantes

**Características:**
- ❌ Sin React Router
- ❌ Sin autenticación
- ✅ Navegación con botones (useState)
- ✅ CRUD completo
- ✅ Contextos globales

**Cómo activarla:**
Ya está activada por defecto en `main.tsx`.

---

### App 2: Con React Router

**Archivo:** [src/apps/App2Router.tsx](src/apps/App2Router.tsx)

**Para:** Alumnos intermedios

**Características:**
- ✅ React Router Dom
- ✅ Rutas para cada vista
- ✅ Navegación con Links
- ❌ Sin autenticación

**Cómo activarla:**

Edita [src/main.tsx](src/main.tsx):

```typescript
// Comentar App1Simple
// import App1Simple from './apps/App1Simple';

// Descomentar App2Router
import App2Router from './apps/App2Router';

const App = App2Router; // <-- Cambiar aquí
```

**Rutas disponibles:**
- `/` - Home
- `/companies` - Empresas
- `/contacts` - Contactos

---

### App 3: Profesional (Auth + Rutas Protegidas)

**Archivo:** [src/apps/App3Professional.tsx](src/apps/App3Professional.tsx)

**Para:** Alumnos avanzados

**Características:**
- ✅ React Router Dom
- ✅ Autenticación JWT
- ✅ Rutas protegidas
- ✅ Login/Logout
- ✅ Contexto de Auth

**Cómo activarla:**

Edita [src/main.tsx](src/main.tsx):

```typescript
// Comentar App1Simple
// import App1Simple from './apps/App1Simple';

// Descomentar App3Professional
import App3Professional from './apps/App3Professional';

const App = App3Professional; // <-- Cambiar aquí
```

**IMPORTANTE:** Activar autenticación en el backend:

Editar `backend/.env`:
```env
AUTH_REQUIRED=true
```

**Rutas disponibles:**
- `/login` - Login
- `/dashboard` - Dashboard (protegida)
- `/companies` - Empresas (protegida)
- `/contacts` - Contactos (protegida)

**Credenciales de prueba:**
- Email: `demo@example.com`
- Password: `Demo123!`

---

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── apps/                  # 3 versiones de App
│   │   ├── App1Simple.tsx     # Sin rutas
│   │   ├── App2Router.tsx     # Con router
│   │   └── App3Professional.tsx # Con auth
│   │
│   ├── components/            # Componentes modulares
│   │   ├── companies/
│   │   │   ├── CompanyList.tsx
│   │   │   ├── CompanyCard.tsx
│   │   │   └── CompanyForm.tsx
│   │   ├── contacts/
│   │   │   ├── ContactList.tsx
│   │   │   ├── ContactCard.tsx
│   │   │   └── ContactForm.tsx
│   │   ├── auth/
│   │   │   └── LoginForm.tsx
│   │   └── common/
│   │       ├── Navbar.tsx
│   │       └── LoadingSpinner.tsx
│   │
│   ├── contexts/              # Estado global
│   │   ├── CompaniesContext.tsx
│   │   ├── ContactsContext.tsx
│   │   └── AuthContext.tsx
│   │
│   ├── services/
│   │   └── api.ts             # Peticiones HTTP
│   │
│   ├── types/
│   │   └── index.ts           # Tipos TypeScript
│   │
│   ├── index.css              # Estilos globales + Tailwind
│   └── main.tsx               # Entry point
│
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🧩 Componentes Disponibles

### Empresas

| Componente | Ubicación | Descripción |
|------------|-----------|-------------|
| CompanyList | `components/companies/CompanyList.tsx` | Lista todas las empresas |
| CompanyCard | `components/companies/CompanyCard.tsx` | Tarjeta individual de empresa |
| CompanyForm | `components/companies/CompanyForm.tsx` | Formulario para crear empresa |

### Contactos

| Componente | Ubicación | Descripción |
|------------|-----------|-------------|
| ContactList | `components/contacts/ContactList.tsx` | Lista todos los contactos |
| ContactCard | `components/contacts/ContactCard.tsx` | Tarjeta individual de contacto |
| ContactForm | `components/contacts/ContactForm.tsx` | Formulario para crear contacto |

### Autenticación

| Componente | Ubicación | Descripción |
|------------|-----------|-------------|
| LoginForm | `components/auth/LoginForm.tsx` | Formulario de login |

### Comunes

| Componente | Ubicación | Descripción |
|------------|-----------|-------------|
| Navbar | `components/common/Navbar.tsx` | Barra de navegación |
| LoadingSpinner | `components/common/LoadingSpinner.tsx` | Spinner de carga |

---

## 🎣 Hooks Personalizados

### useCompanies()

Ubicación: [src/contexts/CompaniesContext.tsx](src/contexts/CompaniesContext.tsx)

```typescript
import { useCompanies } from './contexts/CompaniesContext';

function MyComponent() {
  const {
    companies,       // Company[]
    loading,         // boolean
    error,           // string | null
    fetchCompanies,  // () => Promise<void>
    createCompany,   // (data) => Promise<Company | null>
    updateCompany,   // (id, data) => Promise<Company | null>
    deleteCompany,   // (id) => Promise<boolean>
  } = useCompanies();

  // ...
}
```

### useContacts()

Ubicación: [src/contexts/ContactsContext.tsx](src/contexts/ContactsContext.tsx)

```typescript
import { useContacts } from './contexts/ContactsContext';

function MyComponent() {
  const {
    contacts,        // Contact[]
    loading,         // boolean
    error,           // string | null
    fetchContacts,   // () => Promise<void>
    createContact,   // (data) => Promise<Contact | null>
    updateContact,   // (id, data) => Promise<Contact | null>
    deleteContact,   // (id) => Promise<boolean>
  } = useContacts();

  // ...
}
```

### useAuth()

Ubicación: [src/contexts/AuthContext.tsx](src/contexts/AuthContext.tsx)

```typescript
import { useAuth } from './contexts/AuthContext';

function MyComponent() {
  const {
    user,            // User | null
    token,           // string | null
    loading,         // boolean
    isAuthenticated, // boolean
    login,           // (data) => Promise<boolean>
    register,        // (data) => Promise<boolean>
    logout,          // () => void
    checkAuth,       // () => Promise<void>
  } = useAuth();

  // ...
}
```

---

## 🎨 Estilos con TailwindCSS

### Clases de utilidad personalizadas

Definidas en [src/index.css](src/index.css):

```css
/* Botones */
.btn              /* Base de botón */
.btn-primary      /* Botón primario (azul) */
.btn-danger       /* Botón de peligro (rojo) */
.btn-secondary    /* Botón secundario (gris) */

/* Inputs */
.input            /* Input estilizado */
```

### Ejemplo de uso

```tsx
<button className="btn btn-primary">
  Guardar
</button>

<input type="text" className="input" />
```

### Estilos inline con Tailwind

El proyecto usa estilos inline muy básicos para facilitar el aprendizaje:

```tsx
<div style={{ padding: '2rem', textAlign: 'center' }}>
  Contenido
</div>
```

---

## 📝 Ejemplos de Uso

### Ejemplo 1: Crear un componente que liste empresas

```tsx
import { useCompanies } from '../contexts/CompaniesContext';

function MiListaEmpresas() {
  const { companies, loading } = useCompanies();

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
      {companies.map((company) => (
        <div key={company.id}>
          <h3>{company.name}</h3>
          <p>{company.industry}</p>
        </div>
      ))}
    </div>
  );
}
```

### Ejemplo 2: Crear un formulario de contacto

```tsx
import { useState } from 'react';
import { useContacts } from '../contexts/ContactsContext';

function MiFormulario() {
  const { createContact } = useContacts();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await createContact({ firstName, lastName, email });
    if (success) {
      setFirstName('');
      setLastName('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="input"
        placeholder="Nombre"
      />
      <button type="submit" className="btn btn-primary">
        Crear
      </button>
    </form>
  );
}
```

---

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev        # Inicia el servidor de desarrollo

# Build
npm run build      # Compila para producción

# Preview
npm run preview    # Preview del build de producción

# Lint
npm run lint       # Ejecuta ESLint
```

---

## 🎓 Para Alumnos

### Ejercicio 1: App Simple (Principiantes)

1. Usar App1Simple (ya está activada)
2. Explorar los componentes en `src/components`
3. Modificar estilos en las tarjetas
4. Añadir nuevos campos al formulario

### Ejercicio 2: App con Router (Intermedios)

1. Cambiar a App2Router en `main.tsx`
2. Añadir una nueva ruta (ej: `/about`)
3. Crear un componente para esa ruta
4. Practicar navegación con Links

### Ejercicio 3: App Profesional (Avanzados)

1. Cambiar a App3Professional en `main.tsx`
2. Activar `AUTH_REQUIRED=true` en el backend
3. Implementar el flujo de login
4. Entender rutas protegidas
5. Manejar el token en localStorage

---

## 🐛 Troubleshooting

### El backend no responde

Verifica que el backend esté corriendo:
```bash
cd ../backend
docker-compose ps
```

### CORS errors

Verifica que `VITE_API_URL` en `.env` apunte al backend correcto.

### Auth no funciona

1. Verifica que `AUTH_REQUIRED=true` esté en `backend/.env`
2. Reinicia el backend: `docker-compose restart backend`
3. Verifica que el token esté en localStorage (DevTools → Application → Local Storage)

### Componentes no se ven

1. Verifica que estés usando la App correcta en `main.tsx`
2. Asegúrate de que el backend tenga datos de seed
3. Revisa la consola del navegador para errores

---

## 📚 Recursos

- [React 19 Docs](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Sonner](https://sonner.emilkowal.ski/)

---

## 📄 Licencia

MIT

---

¡Listo para empezar a programar! 🚀
