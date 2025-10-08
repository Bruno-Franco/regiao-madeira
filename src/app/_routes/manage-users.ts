'use server'

import prisma from '@/lib/prisma'

type User = {
  name: string
  email: string
  role: string
}

export async function allUsers() {
  try {
    const users = await prisma.user.findMany()
    return users
  } catch (error) {
    console.error(error)
    throw new Error('Usuários não encontrados!')
  }
}

export async function createUser(user: User) {
  const email = user.email.toLowerCase().trim()

  const unique = await prisma.allowedUser.findUnique({ where: { email } })
  console.log(unique?.email)

  if (!unique?.email) {
    await prisma.allowedUser.create({
      data: { email, role: user.role },
    })

    return true
  }

  return false
}
