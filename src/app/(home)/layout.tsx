import { Footer } from '@/components/footer/footer-component'
import { NavBar } from '@/components/navbar/nav-component'
import React from 'react'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />

      {children}
      <Footer />
    </>
  )
}
