import { z } from 'zod';

export const createUserSchema = z.object({
  email: z
    .string({ required_error: 'El email es requerido' })
    .email('Email inválido')
    .toLowerCase()
    .trim(),
  password: z
    .string({ required_error: 'La contraseña es requerida' })
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .max(100, 'La contraseña es demasiado larga'),
  name: z
    .string({ required_error: 'El nombre es requerido' })
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(255, 'El nombre es demasiado largo')
    .trim(),
  role: z.enum(['USER', 'ADMIN']).optional().default('USER'),
});

export const updateUserSchema = z.object({
  email: z.string().email('Email inválido').toLowerCase().trim().optional(),
  name: z.string().min(2).max(255).trim().optional(),
  role: z.enum(['USER', 'ADMIN']).optional(),
  password: z.string().min(6).max(100).optional(),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
