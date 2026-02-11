import { Request, Response, NextFunction } from 'express';
import { prisma } from '../lib/prisma.js';
import { createContactSchema, updateContactSchema } from '../validators/contacts.validator.js';

/**
 * Controlador de contactos
 * Maneja todas las operaciones CRUD sobre contactos
 */

/**
 * GET /api/contacts
 * Obtiene todos los contactos con información de su empresa
 */
export async function getAllContacts(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        company: {
          select: {
            id: true,
            name: true,
            industry: true,
          },
        },
      },
    });

    res.status(200).json({
      contacts,
      total: contacts.length,
    });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /api/contacts/:id
 * Obtiene un contacto por ID con información de su empresa
 */
export async function getContactById(
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

    const contact = await prisma.contact.findUnique({
      where: { id },
      include: {
        company: true,
      },
    });

    if (!contact) {
      res.status(404).json({
        error: 'No encontrado',
        message: 'Contacto no encontrado',
      });
      return;
    }

    res.status(200).json({
      contact,
    });
  } catch (error) {
    next(error);
  }
}

/**
 * POST /api/contacts
 * Crea un nuevo contacto
 */
export async function createContact(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    // Validar datos de entrada
    const data = createContactSchema.parse(req.body);

    // Si se proporciona company_id, verificar que la empresa existe
    if (data.companyId) {
      const companyExists = await prisma.company.findUnique({
        where: { id: data.companyId },
      });

      if (!companyExists) {
        res.status(400).json({
          error: 'Error de validación',
          message: 'La empresa especificada no existe',
        });
        return;
      }
    }

    // Crear contacto
    const contact = await prisma.contact.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone || null,
        position: data.position || null,
        companyId: data.companyId || null,
        linkedin: data.linkedin || null,
        notes: data.notes || null,
      },
      include: {
        company: {
          select: {
            id: true,
            name: true,
            industry: true,
          },
        },
      },
    });

    res.status(201).json({
      message: 'Contacto creado exitosamente',
      contact,
    });
  } catch (error) {
    next(error);
  }
}

/**
 * PUT /api/contacts/:id
 * Actualiza un contacto existente
 */
export async function updateContact(
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
    const data = updateContactSchema.parse(req.body);

    // Si se proporciona company_id, verificar que la empresa existe
    if (data.companyId) {
      const companyExists = await prisma.company.findUnique({
        where: { id: data.companyId },
      });

      if (!companyExists) {
        res.status(400).json({
          error: 'Error de validación',
          message: 'La empresa especificada no existe',
        });
        return;
      }
    }

    // Actualizar contacto
    const contact = await prisma.contact.update({
      where: { id },
      data: {
        ...(data.firstName && { firstName: data.firstName }),
        ...(data.lastName && { lastName: data.lastName }),
        ...(data.email && { email: data.email }),
        ...(data.phone !== undefined && { phone: data.phone || null }),
        ...(data.position !== undefined && { position: data.position || null }),
        ...(data.companyId !== undefined && { companyId: data.companyId || null }),
        ...(data.linkedin !== undefined && { linkedin: data.linkedin || null }),
        ...(data.notes !== undefined && { notes: data.notes || null }),
      },
      include: {
        company: {
          select: {
            id: true,
            name: true,
            industry: true,
          },
        },
      },
    });

    res.status(200).json({
      message: 'Contacto actualizado exitosamente',
      contact,
    });
  } catch (error) {
    next(error);
  }
}

/**
 * DELETE /api/contacts/:id
 * Elimina un contacto
 */
export async function deleteContact(
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

    // Eliminar contacto
    await prisma.contact.delete({
      where: { id },
    });

    res.status(200).json({
      message: 'Contacto eliminado exitosamente',
    });
  } catch (error) {
    next(error);
  }
}
