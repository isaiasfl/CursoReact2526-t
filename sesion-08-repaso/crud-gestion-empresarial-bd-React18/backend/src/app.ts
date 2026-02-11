import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import companiesRoutes from './routes/companies.routes.js';
import contactsRoutes from './routes/contacts.routes.js';
import { errorHandler } from './middleware/errorHandler.middleware.js';

/**
 * Configuración de la aplicación Express
 */

const app = express();

// ========================================
// MIDDLEWARES GLOBALES
// ========================================

// CORS - Permite peticiones desde cualquier origen (desarrollo)
// En producción, configurar allowedOrigins específicos
app.use(
  cors({
    origin: '*', // Permite cualquier origen (ideal para desarrollo)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Parser de JSON - Convierte el body de las peticiones a JSON
app.use(express.json());

// Parser de URL-encoded - Para formularios
app.use(express.urlencoded({ extended: true }));

// ========================================
// RUTAS
// ========================================

// Ruta de health check
app.get('/', (req, res) => {
  res.json({
    message: '🚀 API de Gestión Empresarial funcionando correctamente',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      companies: '/api/companies',
      contacts: '/api/contacts',
    },
    docs: 'Ver README.md para documentación completa',
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Rutas de la API
app.use('/api/auth', authRoutes);
app.use('/api/companies', companiesRoutes);
app.use('/api/contacts', contactsRoutes);

// ========================================
// MANEJO DE ERRORES
// ========================================

// Ruta no encontrada (404)
app.use((req, res) => {
  res.status(404).json({
    error: 'No encontrado',
    message: `La ruta ${req.method} ${req.path} no existe`,
  });
});

// Middleware de manejo de errores (debe ir al final)
app.use(errorHandler);

export default app;
