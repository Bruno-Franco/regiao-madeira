import Image from 'next/image'
import Link from 'next/link'

import { DivisoesDrop } from './dropdown-nav/divisao-drop'
import { RegiaoDrop } from './dropdown-nav/regiao-drop'
import { RegiaoDaMadeiraLink } from './links/regiao-da-madeira'
import { DivisoesLink } from './links/divisoes'
import { InstitucionalLink } from './links/institucional'
import { RegiaoDropMobile } from './dropdown-nav-mobile/regiao-drop-mobile'

export function NavBar() {
  return (
    <div className=" w-screen px-2 h-[70px] bg-azul-scout border-b-4 border-b-verde-scout">
      <nav className="max-w-5xl mx-auto flex justify-between items-center h-[70px]">
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
        <div className="absolute bg-white w-screen top-[70px] left-0 text-center">
          <RegiaoDaMadeiraLink />
          <RegiaoDropMobile />
        </div>
      </nav>
    </div>
  )
}
