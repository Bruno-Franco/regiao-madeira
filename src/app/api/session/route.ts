import { getSessionRole } from '@/lib/auth-server'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const sessionRole = await getSessionRole()
    return NextResponse.json(sessionRole)
  } catch (error) {
    console.error('GET /api/session — getSession falhou:', error)
    return NextResponse.json({ role: null }, { status: 200 })
  }
}
