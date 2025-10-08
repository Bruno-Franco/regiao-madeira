'use server'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'

export default async function checkUser(user: string) {
  const normalizedEmail = user.toLowerCase().trim()
  const person = await prisma.allowedUser.findUnique({
    where: { email: normalizedEmail },
  })

  if (person) {
    return person
  }
  return redirect('/')
}

export async function updateUserRole(email: string) {
  const normalizedEmail = email.toLowerCase().trim()
  const data = await prisma.allowedUser.findUnique({
    where: { email: normalizedEmail },
  })
  const role = data?.role

  await prisma.user.update({ where: { email }, data: { role } })
}

export async function getOneUser(email: string) {
  const normalizedEmail = email.toLowerCase().trim()
  const data = await prisma.user.findUnique({
    where: { email: normalizedEmail },
  })
  return data
}
