'use client'

import { useMenuContext } from '@/context/navcontext/menu-context'

export function HamburguerMenu() {
  const { handleHamburguer, isOpenHamburguer } = useMenuContext()
  return (
    <button
      className="min-sm:hidden "
      onClick={() => handleHamburguer()}
    >
      <div className="text-white flex flex-col gap-1.5 w-[20px]">
        <div
          className={`border-b-2 transition-all border-b-white ${
            isOpenHamburguer && 'rotate-45 translate-y-2'
          }`}
        ></div>
        <div
          className={`border-b-2 transition-all border-b-white ${
            isOpenHamburguer && 'scale-x-0'
          }`}
        ></div>
        <div
          className={`border-b-2 transition-all border-b-white ${
            isOpenHamburguer && '-rotate-45 -translate-y-2'
          }`}
        ></div>
      </div>
    </button>
  )
}
