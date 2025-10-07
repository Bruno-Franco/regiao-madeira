import { NextRequest, NextResponse } from 'next/server'
import { getCookieCache } from 'better-auth/cookies'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/area-reservada')) {
    const session = await getCookieCache(request)

    if (!session) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/area-reservada/:path*'],
}
