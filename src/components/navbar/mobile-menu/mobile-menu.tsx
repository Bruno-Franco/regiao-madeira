'use client'

import { useMenuContext } from '@/context/navcontext/menu-context'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export function MobileMenu() {
  const {
    firstLevelDropdown,
    firstLevelDropdownDiv,
    firstIsOpenDiv,
    secondIsOpen,
    secondLevelDropdown,
    firstIsOpen,
    isOpenHamburguer,
    handleHamburguer,
  } = useMenuContext()
  return (
    <div
      className={`${
        isOpenHamburguer ? 'absolute' : 'h-0 opacity-0 absolute'
      } sm:hidden   transition-all  top-[70px] bg-white text-center text-azul-scout  w-screen left-[-24px] p-2 rounded-b-sm shadow-md`}
    >
      <ul className="flex flex-col gap-2">
        <li>
          <div className="flex gap-[2px] justify-center hover:bg-verde-scout/10 p-2 rounded-sm">
            <Link
              onClick={() => {
                firstLevelDropdown(false)
                firstLevelDropdownDiv(false)
                secondLevelDropdown(false)
                handleHamburguer(false)
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
                }text-azul-scout w-8 cursor-pointer transition-all delay-75`}
              />
            </span>
          </div>
          {firstIsOpen && (
            <div className="py-2 w-full bg-azul-scout/5">
              <ul className="flex flex-col gap-2">
                <li>
                  <div className="flex gap-[2px] justify-center hover:bg-verde-scout/10 p-2 rounded-sm">
                    <Link
                      href="/a-regiao-da-madeira/chefia-regional"
                      onClick={() => {
                        firstLevelDropdown()
                        handleHamburguer(false)
                      }}
                    >
                      Chefia Regional
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex gap-[2px] justify-center hover:bg-verde-scout/10 p-2 rounded-sm">
                    <Link
                      href="/a-regiao-da-madeira/conselho-regional"
                      onClick={() => {
                        firstLevelDropdown()
                        handleHamburguer(false)
                      }}
                    >
                      Conselho Regional
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex gap-[2px] justify-center hover:bg-verde-scout/10 p-2 rounded-sm">
                    <Link
                      onClick={() => {
                        firstLevelDropdown()
                        handleHamburguer(false)
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
                  </div>
                  {secondIsOpen && (
                    <div className="py-2 w-full bg-amber-100/10">
                      <ul className="flex flex-col gap-2">
                        <li>
                          <div className="   hover:bg-verde-scout/10 p-2 rounded-sm">
                            <Link
                              onClick={() => {
                                secondLevelDropdown()
                                firstLevelDropdown()
                                handleHamburguer(false)
                              }}
                              href="/a-regiao-da-madeira/grupos/grupo-24-funchal"
                            >
                              Grupo 24
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="  hover:bg-verde-scout/10 p-2 rounded-sm">
                            <Link
                              onClick={() => {
                                secondLevelDropdown()
                                firstLevelDropdown()
                                handleHamburguer(false)
                              }}
                              href="/a-regiao-da-madeira/grupos/grupo-92-funchal"
                            >
                              Grupo 92
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className=" hover:bg-verde-scout/10 p-2 rounded-sm">
                            <Link
                              onClick={() => {
                                secondLevelDropdown()
                                firstLevelDropdown()
                                handleHamburguer(false)
                              }}
                              href="/a-regiao-da-madeira/grupos/grupo-101-santa-luzia"
                            >
                              Grupo 101
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className=" hover:bg-verde-scout/10 p-2 rounded-sm">
                            <Link
                              onClick={() => {
                                secondLevelDropdown()
                                firstLevelDropdown()
                                handleHamburguer(false)
                              }}
                              href="/a-regiao-da-madeira/grupos/grupo-159-monte"
                            >
                              Grupo 159
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          )}
        </li>
        <li>
          <div className="flex gap-[2px] justify-center hover:bg-verde-scout/10 p-2 rounded-sm">
            <Link
              onClick={() => {
                firstLevelDropdown(false)
                firstLevelDropdownDiv(false)
                secondLevelDropdown(false)
                handleHamburguer(false)
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
                }text-azul-scout w-8 cursor-pointer transition-all delay-75`}
              />
            </span>
          </div>
          {firstIsOpenDiv && (
            <div className="py-2 w-full bg-amber-100/10">
              <ul className="flex flex-col gap-2">
                <li>
                  <div className="   hover:bg-verde-scout/10 p-2 rounded-sm">
                    <Link
                      href="/divisoes/alcateia"
                      onClick={() => {
                        firstLevelDropdownDiv()
                        handleHamburguer(false)
                      }}
                    >
                      Alcateia
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="  hover:bg-verde-scout/10 p-2 rounded-sm">
                    <Link
                      onClick={() => {
                        firstLevelDropdownDiv()
                        handleHamburguer(false)
                      }}
                      href="/divisoes/tribo-de-escoteiros"
                    >
                      Tribo de Escoteiros
                    </Link>
                  </div>
                </li>
                <li>
                  <div className=" hover:bg-verde-scout/10 p-2 rounded-sm">
                    <Link
                      onClick={() => {
                        firstLevelDropdownDiv()
                        handleHamburguer(false)
                      }}
                      href="/divisoes/tribo-de-exploradores"
                    >
                      Tribo de Exploradores
                    </Link>
                  </div>
                </li>
                <li>
                  <div className=" hover:bg-verde-scout/10 p-2 rounded-sm">
                    <Link
                      onClick={() => {
                        firstLevelDropdownDiv()
                        handleHamburguer(false)
                      }}
                      href="/divisoes/cla"
                    >
                      Clā
                    </Link>
                  </div>
                </li>
                <li>
                  <div className=" hover:bg-verde-scout/10 p-2 rounded-sm">
                    <Link
                      onClick={() => {
                        firstLevelDropdownDiv()
                        handleHamburguer(false)
                      }}
                      href="/divisoes/dirigentes"
                    >
                      Dirigentes
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li>
          <div className="flex gap-[2px] justify-center hover:bg-verde-scout/10 p-2 rounded-sm pr-6">
            <Link
              onClick={() => {
                firstLevelDropdown(false)
                firstLevelDropdownDiv(false)
                secondLevelDropdown(false)
                handleHamburguer(false)
              }}
              href="/institucional"
            >
              Institucional
            </Link>
          </div>
        </li>
      </ul>
    </div>
  )
}
