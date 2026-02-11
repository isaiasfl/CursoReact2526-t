import { Router } from 'express';
import { register, login, getMe } from '../controllers/auth.controller.js';
import { requireAuth } from '../middleware/auth.middleware.js';

/**
 * Rutas de autenticación
 * Base path: /api/auth
 */

const router = Router();

// POST /api/auth/register - Registrar nuevo usuario
router.post('/register', register);

// POST /api/auth/login - Iniciar sesión
router.post('/login', login);

// GET /api/auth/me - Obtener información del usuario autenticado
// Esta ruta siempre requiere autenticación (incluso con AUTH_REQUIRED=false)
router.get('/me', requireAuth, getMe);

export default router;
