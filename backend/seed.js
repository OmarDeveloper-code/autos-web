import { PrismaClient } from '@prisma/client'

import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const password = await bcrypt.hash(
    'admin123',
    10
  )

  await prisma.admin.create({
    data: {
      usuario: 'admin',
      password,
    },
  })

  console.log('Admin creado')
}

main()