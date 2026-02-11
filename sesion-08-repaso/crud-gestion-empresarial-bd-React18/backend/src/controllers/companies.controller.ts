import { Request, Response, NextFunction } from 'express';
import { prisma } from '../lib/prisma.js';
import { createCompanySchema, updateCompanySchema } from '../validators/companies.validator.js';

/**
 * Controlador de empresas
 * Maneja todas las operaciones CRUD sobre empresas
 */

/**
 * GET /api/companies
 * Obtiene todas las empresas
 */
export async function getAllCompanies(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const companies = await prisma.company.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        _count: {
          select: { contacts: true },
        },
      },
    });

    res.status(200).json({
      companies,
      total: companies.length,
    });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /api/companies/:id
 * Obtiene una empresa por ID
 */
export async function getCompanyById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      res.status(400).json({
        error: 'Error de validación',
        message: 'El ID debe ser un número válido',
      });
      return;
    }

    const company = await prisma.company.findUnique({
      where: { id },
      include: {
        contacts: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            position: true,
          },
        },
      },
    });

    if (!company) {
      res.status(404).json({
        error: 'No encontrado',
        message: 'Empresa no encontrada',
      });
      return;
    }

    res.status(200).json({
      company,
    });
  } catch (error) {
    next(error);
  }
}

/**
 * POST /api/companies
 * Crea una nueva empresa
 */
export async function createCompany(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    // Validar datos de entrada
    const data = createCompanySchema.parse(req.body);

    // Crear empresa
    const company = await prisma.company.create({
      data: {
        name: data.name,
        industry: data.industry || null,
        website: data.website || null,
      },
    });

    res.status(201).json({
      message: 'Empresa creada exitosamente',
      company,
    });
  } catch (error) {
    next(error);
  }
}

/**
 * PUT /api/companies/:id
 * Actualiza una empresa existente
 */
export async function updateCompany(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      res.status(400).json({
        error: 'Error de validación',
        message: 'El ID debe ser un número válido',
      });
      return;
    }

    // Validar datos de entrada
    const data = updateCompanySchema.parse(req.body);

    // Actualizar empresa
    const company = await prisma.company.update({
      where: { id },
      data: {
        ...(data.name && { name: data.name }),
        ...(data.industry !== undefined && { industry: data.industry || null }),
        ...(data.website !== undefined && { website: data.website || null }),
      },
    });

    res.status(200).json({
      message: 'Empresa actualizada exitosamente',
      company,
    });
  } catch (error) {
    next(error);
  }
}

/**
 * DELETE /api/companies/:id
 * Elimina una empresa
 */
export async function deleteCompany(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      res.status(400).json({
        error: 'Error de validación',
        message: 'El ID debe ser un número válido',
      });
      return;
    }

    // Eliminar empresa (los contactos se quedan con company_id = null por la relación onDelete: SetNull)
    await prisma.company.delete({
      where: { id },
    });

    res.status(200).json({
      message: 'Empresa eliminada exitosamente',
    });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /api/companies/:id/contacts
 * Obtiene todos los contactos de una empresa específica
 */
export async function getCompanyContacts(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      res.status(400).json({
        error: 'Error de validación',
        message: 'El ID debe ser un número válido',
      });
      return;
    }

    // Verificar que la empresa existe
    const company = await prisma.company.findUnique({
      where: { id },
    });

    if (!company) {
      res.status(404).json({
        error: 'No encontrado',
        message: 'Empresa no encontrada',
      });
      return;
    }

    // Obtener contactos de la empresa
    const contacts = await prisma.contact.findMany({
      where: { companyId: id },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json({
      company: {
        id: company.id,
        name: company.name,
      },
      contacts,
      total: contacts.length,
    });
  } catch (error) {
    next(error);
  }
}
