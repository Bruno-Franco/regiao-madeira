import Image from 'next/image'
import Link from 'next/link'

import { DivisoesDrop } from './dropdown-nav/divisao-drop'
import { RegiaoDrop } from './dropdown-nav/regiao-drop'
import { RegiaoDaMadeiraLink } from './links/regiao-da-madeira'
import { DivisoesLink } from './links/divisoes'
import { InstitucionalLink } from './links/institucional'

import { HamburguerMenu } from './hamburguer-menu/hamburguer-menu'
import { MobileMenu } from './mobile-menu/mobile-menu'

export function NavBar() {
  return (
    <header className=" w-screen px-6 h-[70px] bg-azul-scout border-b-4 border-b-verde-scout">
      <nav className="max-w-7xl mx-auto flex justify-between items-center h-[70px] relative">
        <div>
          <Link href="/">
            <Image
              src="/madeira-logo.jpeg"
              alt="Logo AEP Madeira"
              width={180}
              height={60}
              priority
            />
          </Link>
        </div>

        <div className="max-sm:hidden flex gap-4 text-white font-semibold">
          <div className="flex">
            <RegiaoDaMadeiraLink />
            <RegiaoDrop />
          </div>
          <div className="flex">
            <DivisoesLink />

            <DivisoesDrop />
          </div>

          <InstitucionalLink />
        </div>
        {/* /mobile menu */}
        <HamburguerMenu />
        <MobileMenu />
      </nav>
    </header>
  )
}
