'use client'

import { createContext, PropsWithChildren, useContext, useState } from 'react'

interface MenuContextIterface {
  firstIsOpen: boolean
  secondIsOpen: boolean
  firstIsOpenDiv: boolean
  isOpenHamburguer: boolean
  firstLevelDropdown: (val?: boolean) => void
  secondLevelDropdown: (val?: boolean) => void
  firstLevelDropdownDiv: (val?: boolean) => void
  handleHamburguer: () => void
}

const MenuContext = createContext<MenuContextIterface>({
  firstIsOpen: false,
  secondIsOpen: false,
  firstIsOpenDiv: false,
  isOpenHamburguer: false,
  firstLevelDropdown() {},
  secondLevelDropdown() {},
  firstLevelDropdownDiv() {},
  handleHamburguer() {},
})

export function MenuProvider({ children }: PropsWithChildren) {
  const [firstIsOpen, setFirstIsOpen] = useState<boolean>(false)
  const [firstIsOpenDiv, setFirstIsOpenDiv] = useState<boolean>(false)
  const [secondIsOpen, setsecondIsOpen] = useState<boolean>(false)
  const [isOpenHamburguer, setIsOpenHamburguer] = useState<boolean>(false)

  function handleHamburguer() {
    setIsOpenHamburguer((prev) => !prev)
  }

  function firstLevelDropdown(val?: boolean) {
    if (typeof val === 'boolean') {
      setFirstIsOpen(val)
    } else {
      setFirstIsOpen((prev) => !prev)
    }
  }

  function firstLevelDropdownDiv(val?: boolean) {
    if (typeof val === 'boolean') {
      setFirstIsOpenDiv(val)
    } else {
      setFirstIsOpenDiv((prev) => !prev)
    }
  }

  function secondLevelDropdown(val?: boolean) {
    if (typeof val === 'boolean') {
      setsecondIsOpen(val)
    } else {
      setsecondIsOpen((prev) => !prev)
    }
  }

  const value = {
    firstIsOpen,
    firstIsOpenDiv,
    secondIsOpen,
    isOpenHamburguer,
    firstLevelDropdown,
    secondLevelDropdown,
    firstLevelDropdownDiv,
    handleHamburguer,
  }

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

export const useRegiaoContext = () => useContext(MenuContext)
