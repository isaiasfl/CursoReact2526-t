import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando seed...');

  await prisma.user.deleteMany();
  console.log('Datos anteriores eliminados');

  const adminPassword = await bcrypt.hash('admin123', 10);
  const userPassword = await bcrypt.hash('user123', 10);

  const admin = await prisma.user.create({
    data: {
      email: 'admin@dwec.com',
      passwordHash: adminPassword,
      name: 'Administrador',
      role: 'ADMIN',
    },
  });

  const user1 = await prisma.user.create({
    data: {
      email: 'user@dwec.com',
      passwordHash: userPassword,
      name: 'Usuario Normal',
      role: 'USER',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'maria@dwec.com',
      passwordHash: userPassword,
      name: 'María García',
      role: 'USER',
    },
  });

  const user3 = await prisma.user.create({
    data: {
      email: 'pedro@dwec.com',
      passwordHash: userPassword,
      name: 'Pedro López',
      role: 'USER',
    },
  });

  console.log('Usuarios creados:');
  console.log(`  ADMIN: ${admin.email} / admin123`);
  console.log(`  USER:  ${user1.email} / user123`);
  console.log(`  USER:  ${user2.email} / user123`);
  console.log(`  USER:  ${user3.email} / user123`);
  console.log('Seed completado!');
}

main()
  .catch((e) => {
    console.error('Error en seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
