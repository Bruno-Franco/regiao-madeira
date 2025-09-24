import Image from 'next/image'
import Link from 'next/link'

import { DivisoesDrop } from './dropdown-nav/divisao-drop'
import { RegiaoDrop } from './dropdown-nav/regiao-drop'
import { RegiaoDaMadeiraLink } from './links/regiao-da-madeira'
import { DivisoesLink } from './links/divisoes'
import { InstitucionalLink } from './links/institucional'

import { HamburguerMenu } from './hamburguer-menu/hamburguer-menu'
import { MobileMenu } from './mobile-menu/mobile-menu'
import ButtonLogin from '../button-login/button-login'

export function NavBar() {
  return (
    <header className=" w-screen  bg-azul-scout border-b-4 border-b-verde-scout h-[100px]">
      <div className="w-full mx-auto bg-azul-scout border-b-1 border-b-verde-scout h-[30px]">
        <nav className="max-w-7xl px-6 mx-auto flex justify-between items-center relative h-full">
          <div className="ml-auto flex flex-row-reverse gap-4 justify-center items-center">
            <ButtonLogin />
            <ul className="flex items-center justify-center gap-4 text-sm text-white">
              <li>Admin</li>
              <li>Pedidos</li>
              <li>Submissões</li>
            </ul>
          </div>
        </nav>
      </div>
      <nav className="max-w-7xl px-6 mx-auto flex justify-between items-center h-[70px] relative">
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
