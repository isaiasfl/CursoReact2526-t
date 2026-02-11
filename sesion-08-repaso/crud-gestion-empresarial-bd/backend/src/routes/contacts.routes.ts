import { Router } from 'express';
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} from '../controllers/contacts.controller.js';
import { requireAuth } from '../middleware/auth.middleware.js';

/**
 * Rutas de contactos
 * Base path: /api/contacts
 *
 * Todas las rutas están protegidas por el middleware requireAuth,
 * que permite o requiere autenticación según AUTH_REQUIRED
 */

const router = Router();

// GET /api/contacts - Listar todos los contactos
router.get('/', requireAuth, getAllContacts);

// GET /api/contacts/:id - Obtener un contacto por ID
router.get('/:id', requireAuth, getContactById);

// POST /api/contacts - Crear nuevo contacto
router.post('/', requireAuth, createContact);

// PUT /api/contacts/:id - Actualizar contacto
router.put('/:id', requireAuth, updateContact);

// DELETE /api/contacts/:id - Eliminar contacto
router.delete('/:id', requireAuth, deleteContact);

export default router;
