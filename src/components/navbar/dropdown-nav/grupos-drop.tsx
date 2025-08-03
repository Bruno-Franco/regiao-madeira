'use client'

import { useRegiaoContext } from '@/context/navcontext/menu-context'
import { ChevronDown, XIcon } from 'lucide-react'
import Link from 'next/link'

export function GruposDrop() {
  const {
    secondIsOpen,
    secondLevelDropdown,
    firstLevelDropdownDiv,
    firstLevelDropdown,
  } = useRegiaoContext()

  return (
    <>
      <span>
        <ChevronDown
          onClick={() => {
            secondLevelDropdown()
            firstLevelDropdownDiv(false)
          }}
          className="text-azul-scout w-8 cursor-pointer"
        />
      </span>
      <div
        className={` ${
          secondIsOpen ? 'flex flex-col' : 'hidden'
        }   bg-white absolute text-azul-scout top-[100px]  w-[200px] px-1 py-4 gap-2 rounded-sm shadow-md`}
      >
        <div className="flex content-center">
          <p
            className="text-xs cursor-pointer"
            onClick={() => {
              secondLevelDropdown()
            }}
          >
            Voltar
          </p>
          <XIcon
            className="ml-auto w-5 cursor-pointer"
            onClick={() => {
              secondLevelDropdown()
              firstLevelDropdown()
            }}
          />
        </div>
        <hr />
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
