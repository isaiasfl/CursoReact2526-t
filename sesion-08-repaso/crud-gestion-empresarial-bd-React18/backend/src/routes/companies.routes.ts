import { Router } from 'express';
import {
  getAllCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany,
  getCompanyContacts,
} from '../controllers/companies.controller.js';
import { requireAuth } from '../middleware/auth.middleware.js';

/**
 * Rutas de empresas
 * Base path: /api/companies
 *
 * Todas las rutas están protegidas por el middleware requireAuth,
 * que permite o requiere autenticación según AUTH_REQUIRED
 */

const router = Router();

// GET /api/companies - Listar todas las empresas
router.get('/', requireAuth, getAllCompanies);

// GET /api/companies/:id - Obtener una empresa por ID
router.get('/:id', requireAuth, getCompanyById);

// GET /api/companies/:id/contacts - Obtener contactos de una empresa
router.get('/:id/contacts', requireAuth, getCompanyContacts);

// POST /api/companies - Crear nueva empresa
router.post('/', requireAuth, createCompany);

// PUT /api/companies/:id - Actualizar empresa
router.put('/:id', requireAuth, updateCompany);

// DELETE /api/companies/:id - Eliminar empresa
router.delete('/:id', requireAuth, deleteCompany);

export default router;
