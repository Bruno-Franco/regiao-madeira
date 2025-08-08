'use client'

import { useMenuContext } from '@/context/navcontext/menu-context'
import Link from 'next/link'

export function InstitucionalLink() {
  const { firstLevelDropdown, firstLevelDropdownDiv, secondLevelDropdown } =
    useMenuContext()
  return (
    <div>
      <Link
        onClick={() => {
          firstLevelDropdown(false)
          firstLevelDropdownDiv(false)
          secondLevelDropdown(false)
        }}
        href="/institucional"
      >
        Institucional{' '}
      </Link>
    </div>
  )
}
