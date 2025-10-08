'use server'
import { headers } from 'next/headers'
import { auth } from './auth'
import prisma from './prisma'

export async function getSessionRole() {
  const h = new Headers(await headers())
  const session = await auth.api.getSession({ headers: h })

  const userWithRole = await prisma.user.findUnique({
    where: { email: session?.user.email },
    select: { role: true },
  })
  return { ...session?.user, role: userWithRole?.role }
}
