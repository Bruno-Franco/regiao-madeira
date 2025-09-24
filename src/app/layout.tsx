import type { Metadata } from 'next'
import { Merriweather_Sans, Open_Sans } from 'next/font/google'
import './globals.css'
import { MenuProvider } from '@/context/navcontext/menu-context'

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
})
const merriweatherSans = Merriweather_Sans({
  variable: '--font-merriweatherSans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Escoteiros AEP - Reagiāo da Madeira',
  description: 'Escotismo para todos | Por uma regiāo mais Forte!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${openSans.variable} ${merriweatherSans.variable} antialiased`}
    >
      <MenuProvider>
        <body id="main-body">{children}</body>
      </MenuProvider>
    </html>
  )
}
