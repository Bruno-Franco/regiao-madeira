import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    await prisma.pedido.delete({ where: { id } })
    return new NextResponse(null, { status: 204 })
  } catch (error) {
    console.log(error)
  }
}
