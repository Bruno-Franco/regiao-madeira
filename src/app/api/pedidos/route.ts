import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const pedidos = await prisma.pedido.findMany()
  return NextResponse.json({
    resp: pedidos,
  })
  // return NextResponse.json({
  //   resp: [
  //     {
  //       id: 'afsvg',
  //       title: 'Some Title1',
  //       description: 'kuyfcgb sacgfisua ssgfc luief iyxefgj',
  //       link: 'https://globo.com',
  //     },
  //     {
  //       id: 'affgsv',
  //       title: 'Some Title2',
  //       description: 'kuyfcgb sacgfisua ssgfc luief iyxefgj',
  //       link: 'https://globo.com',
  //     },
  //     {
  //       id: 'afgfsv',
  //       title: 'Some Title3',
  //       description: 'kuyfcgb sacgfisua ssgfc luief iyxefgj',
  //       link: 'https://globo.com',
  //     },
  //     {
  //       id: 'afrtsv',
  //       title: 'Some Title4',
  //       description: 'kuyfcgb sacgfisua ssgfc luief iyxefgj',
  //       link: 'https://globo.com',
  //     },
  //     {
  //       id: 'afsulikv',
  //       title: 'Some Title5',
  //       description: 'kuyfcgb sacgfisua ssgfc luief iyxefgj',
  //       link: 'https://globo.com',
  //     },
  //     {
  //       id: 'afswev',
  //       title: 'Some Title6',
  //       description: 'kuyfcgb sacgfisua ssgfc luief iyxefgj',
  //       link: 'https://globo.com',
  //     },
  //   ],
  // })
}

export async function POST(request: NextRequest) {
  try {
    const req = await request.json()

    // const { title, description, link } = req
    if (!req) throw new Error(`No body!!!`)

    const pedidoNaDB = await prisma.pedido.create({
      data: req,
    })

    return NextResponse.json({ pedidoNaDB })
  } catch (error) {
    console.log(error)
  }
}
