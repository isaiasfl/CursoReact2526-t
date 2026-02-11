import { z } from 'zod';

/**
 * Validadores Zod para endpoints de empresas
 */

// Schema para crear empresa
export const createCompanySchema = z.object({
  name: z
    .string({ required_error: 'El nombre es requerido' })
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(255, 'El nombre es demasiado largo')
    .trim(),
  industry: z
    .string()
    .max(255, 'La industria es demasiado larga')
    .trim()
    .optional()
    .or(z.literal('')),
  website: z
    .string()
    .url('URL inválida')
    .max(255, 'La URL es demasiado larga')
    .optional()
    .or(z.literal('')),
});

// Schema para actualizar empresa (todos los campos opcionales)
export const updateCompanySchema = createCompanySchema.partial();

// Tipos TypeScript inferidos de los schemas
export type CreateCompanyInput = z.infer<typeof createCompanySchema>;
export type UpdateCompanyInput = z.infer<typeof updateCompanySchema>;
