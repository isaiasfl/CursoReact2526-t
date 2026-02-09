import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { Prisma } from '@prisma/client';

export function errorHandler(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  console.error('Error:', error);

  if (error instanceof ZodError) {
    res.status(400).json({
      error: 'Error de validación',
      details: error.errors.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      })),
    });
    return;
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === 'P2002') {
      const field = (error.meta?.target as string[])?.[0] || 'campo';
      res.status(409).json({
        error: 'Conflicto',
        message: `Ya existe un registro con ese ${field}`,
      });
      return;
    }
    if (error.code === 'P2025') {
      res.status(404).json({
        error: 'No encontrado',
        message: 'El registro solicitado no existe',
      });
      return;
    }
  }

  res.status(500).json({
    error: 'Error interno del servidor',
    message: process.env.NODE_ENV === 'development' ? error.message : 'Error inesperado',
  });
}
