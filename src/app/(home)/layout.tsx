import { Footer } from '@/components/footer/footer-component'
import { NavBar } from '@/components/navbar/nav-component'
import React from 'react'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
