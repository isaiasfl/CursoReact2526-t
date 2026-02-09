import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.utils.js';

export function requireAuth(req: Request, res: Response, next: NextFunction): void {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({
        error: 'No autorizado',
        message: 'Token de autenticación requerido',
      });
      return;
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Token inválido';
    res.status(401).json({ error: 'No autorizado', message });
  }
}

export function requireAdmin(req: Request, res: Response, next: NextFunction): void {
  if (!req.user || req.user.role !== 'ADMIN') {
    res.status(403).json({
      error: 'Prohibido',
      message: 'Se requiere rol de administrador',
    });
    return;
  }
  next();
}
