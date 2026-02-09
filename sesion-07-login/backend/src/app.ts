import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import usersRoutes from './routes/users.routes.js';
import { errorHandler } from './middleware/errorHandler.middleware.js';

const app = express();

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
  res.json({
    message: 'API Login + Roles funcionando',
    endpoints: {
      auth: '/api/auth (login, register, me)',
      users: '/api/users (CRUD - solo admin)',
    },
  });
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);

app.use((_req, res) => {
  res.status(404).json({ error: 'No encontrado', message: 'Ruta no existe' });
});

app.use(errorHandler);

export default app;
