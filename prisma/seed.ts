// prisma/seed.ts
import { PrismaClient } from '../src/generated/prisma/index.js'

const prisma = new PrismaClient()

async function main() {
  const email = 'brunofrancco@gmail.com'

  await prisma.allowedUser.upsert({
    where: { email },
    create: { email, role: 'ADMIN' },
    update: { role: 'ADMIN' },
  })

  console.log('👑 AllowedUser criado/atualizado:', email)
}

main()
  .catch((e) => {
    console.error('❌ Seed falhou:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
