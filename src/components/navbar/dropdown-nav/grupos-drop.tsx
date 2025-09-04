'use client'

import { useMenuContext } from '@/context/navcontext/menu-context'
import Link from 'next/link'

export function GruposDrop() {
  const {
    secondIsOpen,
    secondLevelDropdown,

    firstLevelDropdown,
  } = useMenuContext()

  return (
    <>
      <div
        className={` ${
          secondIsOpen ? 'flex flex-col' : 'hidden'
        } z-10  bg-white absolute text-azul-scout top-[150px]  w-[200px] px-1 py-4 gap-2 rounded-sm shadow-md`}
      >
        <Link
          onClick={() => {
            secondLevelDropdown()
            firstLevelDropdown()
          }}
          className="hover:bg-verde-scout/10 p-2 rounded-sm"
          href="/a-regiao-da-madeira/grupos/grupo-24-funchal"
        >
          Grupo 24
        </Link>
        <Link
          onClick={() => {
            secondLevelDropdown()
            firstLevelDropdown()
          }}
          className="hover:bg-verde-scout/10 p-2  rounded-sm"
          href="/a-regiao-da-madeira/grupos/grupo-92-funchal"
        >
          Grupo 92
        </Link>

        <Link
          onClick={() => {
            secondLevelDropdown()
            firstLevelDropdown()
          }}
          className="hover:bg-verde-scout/10 p-2  rounded-sm"
          href="/a-regiao-da-madeira/grupos/grupo-101-santa-luzia"
        >
          Grupo 101
        </Link>
        <Link
          onClick={() => {
            secondLevelDropdown()
            firstLevelDropdown()
          }}
          className="hover:bg-verde-scout/10 p-2  rounded-sm"
          href="/a-regiao-da-madeira/grupos/grupo-159-monte"
        >
          Grupo 159
        </Link>
      </div>
    </>
  )
}
