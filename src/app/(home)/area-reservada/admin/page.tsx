'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import React, { useEffect, useState } from 'react'
import { createUser } from '@/app/_routes/manage-users'
import { useUserContext } from '@/context/usercontext/user-context'

type UserData = {
  name: string
  id: string
  role: string
  email: string
}
type Pedido = {
  title: string
  description: string
  link: string
}

export default function Admin() {
  const router = useRouter()
  const { user } = useUserContext()
  const { data: session, isPending } = authClient.useSession()
  const [userCreated, setUserCreated] = useState<UserData>({} as UserData)
  const [pedidoCreated, setPedidoCreated] = useState<Pedido>({} as Pedido)
  const [userAllowed, setUserAllowed] = useState<'Idle' | 'Created' | 'Error'>(
    'Idle'
  )

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    setUserCreated((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  function handleChangeSelection(e: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target

    setUserCreated((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleCriarPedido(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const { name, value } = e.target
    setPedidoCreated((prev) => ({ ...prev, [name]: value }))
  }

  async function submitPedido(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    new FormData(form)

    try {
      const response = await fetch('../../api/pedidos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pedidoCreated),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(`HTTP response.${response.status}`)
      if (data) {
        form.reset()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isPending) return
    if (!isPending && !session?.user) {
      router.replace('/')
    }
    if (user?.role !== 'ADMIN') {
      return router.replace('/area-reservada')
    }
  }, [isPending, session, router, user?.role])

  if (isPending)
    return <p className="text-center mt-8 text-white">Carregando...</p>
  if (!session?.user) return null
  if (user?.role && user.role !== 'ADMIN') return null

  return (
    <section className="max-w-7xl p-6  text-justify text-base/7  mx-auto text-zinc-700 sm:text-base/8 pb-24">
      <h2 className="text-right text-sm font-bold">Admin</h2>
      <div className="flex items-center justify-center gap-4 my-8">
        <h2 className="">Bem vindo, {user?.name || 'User'}!</h2>
        {user?.image && (
          <Image
            alt="Avatar"
            width={50}
            height={50}
            src={user?.image}
            className="rounded-full"
          />
        )}
      </div>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const form = e.currentTarget
          new FormData(form)
          const yes = await createUser(userCreated)
          if (yes) {
            form.reset()
            setUserAllowed('Created')
          } else {
            setUserAllowed('Error')
          }
        }}
      >
        {userAllowed === 'Created' && (
          <p className="text-green-600 text-sm text-justify">
            Grupo adicionado as permissões
          </p>
        )}
        {userAllowed === 'Error' && (
          <p className="text-red-600 text-sm text-justify">Grupo existente!</p>
        )}
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
              Criar Novo Grupo
            </h2>
            <p className="mt-1 text-sm/6 text-gray-600">
              Preencha os dados necessários para autorizar um novo Grupo de
              Escoteiros!
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* <div className="sm:col-span-4">
                <label
                  htmlFor="name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Nome
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      required
                      onChange={(e) => handleChange(e)}
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Grupo 0000 - Funchal"
                      className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div> */}
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      required
                      onChange={(e) => handleChange(e)}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="grupo@scouts.com"
                      className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="role"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Papel, User ou ADMIN. Selecionar abaixo
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    required
                    onChange={(e) => handleChangeSelection(e)}
                    name="role"
                    autoComplete="role-name"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option></option>
                    <option>USER</option>
                    <option>ADMIN</option>
                  </select>
                </div>
              </div>
              <div className="col-span-full"></div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-azul-scout px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Criar Grupo
          </button>
        </div>
      </form>
      <form onSubmit={submitPedido}>
        {userAllowed === 'Created' && (
          <p className="text-green-600 text-sm text-justify">
            Grupo adicionado as permissões
          </p>
        )}
        {userAllowed === 'Error' && (
          <p className="text-red-600 text-sm text-justify">Grupo existente!</p>
        )}
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
              Criar Novo Pedido
            </h2>
            <p className="mt-1 text-sm/6 text-gray-600">
              Preencha os dados necessários para criar um novo pedido
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="title"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Título
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      required
                      onChange={handleCriarPedido}
                      id="title"
                      name="title"
                      type="text"
                      placeholder="Título do pedido"
                      className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="description"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Breve Descição
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      required
                      onChange={handleCriarPedido}
                      id="description"
                      name="description"
                      type="text"
                      placeholder="Seja breve na dercrição do pedido"
                      className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="link"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Link Google
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      required
                      onChange={handleCriarPedido}
                      id="link"
                      name="link"
                      type="text"
                      placeholder="Cole aqui o link do Google"
                      className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full"></div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-azul-scout px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Criar Pedido
          </button>
        </div>
      </form>
    </section>
  )
}
