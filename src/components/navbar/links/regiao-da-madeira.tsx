'use client'

import { useMenuContext } from '@/context/navcontext/menu-context'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export function RegiaoDaMadeiraLink() {
  const {
    firstLevelDropdown,
    firstLevelDropdownDiv,
    secondLevelDropdown,
    firstIsOpen,
  } = useMenuContext()
  return (
    <div className="flex gap-[2px]">
      <Link
        onClick={() => {
          firstLevelDropdown(false)
          firstLevelDropdownDiv(false)
          secondLevelDropdown(false)
        }}
        href="/a-regiao-da-madeira"
      >
        Regiāo da Madeira
      </Link>
      <span>
        <ChevronDown
          onClick={() => {
            firstLevelDropdown()
            firstLevelDropdownDiv(false)
          }}
          className={`${
            firstIsOpen ? 'rotate-180 ' : 'rotate-0'
          }text-white w-8 cursor-pointer transition-all delay-75`}
        />
      </span>
    </div>
  )
}
