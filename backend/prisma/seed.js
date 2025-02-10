const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Delete existing tasks
  await prisma.task.deleteMany();

  // Create initial tasks
  await prisma.task.createMany({
    data: [
      { title: 'Learn Prisma', description: 'Read the Prisma documentation' },
      { title: 'Build a Vue app', description: 'Create a simple Vue.js application' },
      { title: 'Deploy to Vercel', description: 'Deploy your app to Vercel' },
    ],
  });

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });