import { z } from 'zod';

/**
 * Validadores Zod para endpoints de autenticación
 */

// Schema para registro de usuario
export const registerSchema = z.object({
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
});

// Schema para login
export const loginSchema = z.object({
  email: z
    .string({ required_error: 'El email es requerido' })
    .email('Email inválido')
    .toLowerCase()
    .trim(),
  password: z.string({ required_error: 'La contraseña es requerida' }),
});

// Tipos TypeScript inferidos de los schemas
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
