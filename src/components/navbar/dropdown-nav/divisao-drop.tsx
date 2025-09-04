'use client'

import { useMenuContext } from '@/context/navcontext/menu-context'

import Link from 'next/link'

export function DivisoesDrop() {
  const { firstIsOpenDiv, firstLevelDropdownDiv } = useMenuContext()

  return (
    <>
      <div
        className={` ${
          firstIsOpenDiv ? 'flex flex-col' : 'hidden'
        } z-10  bg-white absolute text-azul-scout top-[70px]  w-[200px] px-1 py-4 gap-2 rounded-sm shadow-md`}
      >
        <Link
          className="hover:bg-verde-scout/10 p-2 rounded-sm"
          href="/divisoes/alcateia"
          onClick={() => {
            firstLevelDropdownDiv()
          }}
        >
          Alcateia
        </Link>
        <Link
          className="hover:bg-verde-scout/10 p-2  rounded-sm"
          onClick={() => {
            firstLevelDropdownDiv()
          }}
          href="/divisoes/tribo-de-escoteiros"
        >
          Tribo de Escoteiros
        </Link>

        <Link
          className="hover:bg-verde-scout/10 p-2  rounded-sm"
          onClick={() => {
            firstLevelDropdownDiv()
          }}
          href="/divisoes/tribo-de-exploradores"
        >
          Tribo de Exploradores
        </Link>
        <Link
          className="hover:bg-verde-scout/10 p-2  rounded-sm"
          onClick={() => {
            firstLevelDropdownDiv()
          }}
          href="/divisoes/cla"
        >
          Clā
        </Link>
        <Link
          className="hover:bg-verde-scout/10 p-2  rounded-sm"
          onClick={() => {
            firstLevelDropdownDiv()
          }}
          href="/divisoes/dirigentes"
        >
          Dirigentes
        </Link>
      </div>
    </>
  )
}
