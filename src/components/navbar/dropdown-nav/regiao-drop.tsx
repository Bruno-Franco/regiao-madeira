'use client'

import { useMenuContext } from '@/context/navcontext/menu-context'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { GruposDrop } from './grupos-drop'

export function RegiaoDrop() {
  const {
    firstLevelDropdown,
    firstIsOpen,
    secondIsOpen,
    firstLevelDropdownDiv,
    secondLevelDropdown,
  } = useMenuContext()

  return (
    <>
      <div
        className={` ${
          firstIsOpen ? 'flex flex-col' : 'hidden'
        }    bg-white absolute text-azul-scout top-[70px]  w-[200px] px-1 py-4 gap-2 rounded-sm shadow-md`}
      >
        <Link
          className="hover:bg-verde-scout/10 p-2 rounded-sm"
          href="/a-regiao-da-madeira/chefia-regional"
          onClick={() => {
            firstLevelDropdown()
          }}
        >
          Chefia Regional
        </Link>
        <Link
          className="hover:bg-verde-scout/10 p-2  rounded-sm"
          href="/a-regiao-da-madeira/conselho-regional"
          onClick={() => {
            firstLevelDropdown()
          }}
        >
          Conselho Regional
        </Link>
        <div className="flex justify-between hover:bg-verde-scout/10 p-2 rounded-sm">
          <Link
            onClick={() => {
              firstLevelDropdown()
            }}
            href="/a-regiao-da-madeira/grupos"
          >
            Grupos
          </Link>
          <span>
            <ChevronDown
              onClick={() => {
                secondLevelDropdown()
                firstLevelDropdownDiv(false)
              }}
              className={`${
                secondIsOpen ? 'rotate-180 ' : 'rotate-0'
              } text-azul-scout w-8 cursor-pointer transition-all delay-75`}
            />
          </span>
          <GruposDrop />
        </div>
      </div>
    </>
  )
}
