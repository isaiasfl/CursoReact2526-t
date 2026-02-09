import dotenv from 'dotenv';
import app from './app.js';
import { prisma } from './lib/prisma.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

async function startServer(): Promise<void> {
  try {
    await prisma.$connect();
    console.log('Conectado a PostgreSQL');

    app.listen(PORT, () => {
      console.log(`Servidor en http://localhost:${PORT}`);
      console.log('Endpoints:');
      console.log(`  POST /api/auth/register`);
      console.log(`  POST /api/auth/login`);
      console.log(`  GET  /api/auth/me`);
      console.log(`  GET  /api/users (admin)`);
      console.log(`  POST /api/users (admin)`);
      console.log(`  PUT  /api/users/:id (admin)`);
      console.log(`  DELETE /api/users/:id (admin)`);
    });
  } catch (error) {
    console.error('Error al iniciar:', error);
    process.exit(1);
  }
}

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

startServer();
