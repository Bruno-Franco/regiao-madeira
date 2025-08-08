'use client'

import { useMenuContext } from '@/context/navcontext/menu-context'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export function DivisoesLink() {
  const {
    firstLevelDropdown,
    firstLevelDropdownDiv,
    secondLevelDropdown,
    firstIsOpenDiv,
  } = useMenuContext()
  return (
    <div className="flex gap-[2px]">
      <Link
        onClick={() => {
          firstLevelDropdown(false)
          firstLevelDropdownDiv(false)
          secondLevelDropdown(false)
        }}
        href="/divisoes"
      >
        Divisōes
      </Link>
      <span>
        <ChevronDown
          onClick={() => {
            firstLevelDropdownDiv()
            firstLevelDropdown(false)
          }}
          className={`${
            firstIsOpenDiv ? 'rotate-180 ' : 'rotate-0'
          }text-white w-8 cursor-pointer transition-all delay-75`}
        />
      </span>
    </div>
  )
}
