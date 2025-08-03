'use client'

import { useRegiaoContext } from '@/context/navcontext/menu-context'
import Link from 'next/link'

export function DivisoesLink() {
  const { firstLevelDropdown, firstLevelDropdownDiv, secondLevelDropdown } =
    useRegiaoContext()
  return (
    <Link
      onClick={() => {
        firstLevelDropdown(false)
        firstLevelDropdownDiv(false)
        secondLevelDropdown(false)
      }}
      href="/divisoes"
    >
      Divisōes{' '}
    </Link>
  )
}
