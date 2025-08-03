'use client'

import { useRegiaoContext } from '@/context/navcontext/menu-context'
import Link from 'next/link'

export function RegiaoDaMadeiraLink() {
  const { firstLevelDropdown, firstLevelDropdownDiv, secondLevelDropdown } =
    useRegiaoContext()
  return (
    <Link
      onClick={() => {
        firstLevelDropdown(false)
        firstLevelDropdownDiv(false)
        secondLevelDropdown(false)
      }}
      href="/a-regiao-da-madeira"
    >
      Regiāo da Madeira{' '}
    </Link>
  )
}
