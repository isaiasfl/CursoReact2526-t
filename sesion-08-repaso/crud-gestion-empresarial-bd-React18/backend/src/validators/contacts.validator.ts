import { z } from 'zod';

/**
 * Validadores Zod para endpoints de contactos
 */

// Schema para crear contacto
export const createContactSchema = z.object({
  firstName: z
    .string({ required_error: 'El nombre es requerido' })
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(255, 'El nombre es demasiado largo')
    .trim(),
  lastName: z
    .string({ required_error: 'El apellido es requerido' })
    .min(2, 'El apellido debe tener al menos 2 caracteres')
    .max(255, 'El apellido es demasiado largo')
    .trim(),
  email: z
    .string({ required_error: 'El email es requerido' })
    .email('Email inválido')
    .toLowerCase()
    .trim(),
  phone: z
    .string()
    .max(50, 'El teléfono es demasiado largo')
    .trim()
    .optional()
    .or(z.literal('')),
  position: z
    .string()
    .max(255, 'El cargo es demasiado largo')
    .trim()
    .optional()
    .or(z.literal('')),
  companyId: z
    .number({ invalid_type_error: 'El ID de empresa debe ser un número' })
    .int('El ID de empresa debe ser un número entero')
    .positive('El ID de empresa debe ser positivo')
    .optional()
    .nullable(),
  linkedin: z
    .string()
    .url('URL de LinkedIn inválida')
    .max(255, 'La URL es demasiado larga')
    .optional()
    .or(z.literal('')),
  notes: z.string().optional().or(z.literal('')),
});

// Schema para actualizar contacto (todos los campos opcionales)
export const updateContactSchema = createContactSchema.partial();

// Tipos TypeScript inferidos de los schemas
export type CreateContactInput = z.infer<typeof createContactSchema>;
export type UpdateContactInput = z.infer<typeof updateContactSchema>;
