'use client'

import { useRegiaoContext } from '@/context/navcontext/menu-context'
import { ChevronDown, XIcon } from 'lucide-react'
import Link from 'next/link'

export function RegiaoDropMobile() {
  const {
    secondLevelDropdown,
    firstLevelDropdown,
    firstLevelDropdownDiv,
    firstIsOpen,
    secondIsOpen,
  } = useRegiaoContext()

  return (
    <>
      <span>
        <ChevronDown
          onClick={() => {
            firstLevelDropdown()
            firstLevelDropdownDiv(false)
          }}
          className="text-white w-8 cursor-pointer"
        />
      </span>
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
        </div>
      </div>
    </>
  )
}
