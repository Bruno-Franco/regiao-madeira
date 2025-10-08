'use client'
import Link from 'next/link'
import { TrashIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import { useUserContext } from '@/context/usercontext/user-context'

type Pedidos = {
  id: string
  title: string
  description: string
  link: string
}

export default function Pedidos() {
  const router = useRouter()
  const { user, setIsLoggedIn } = useUserContext()
  const [pedidos, setPedidos] = useState<Pedidos[]>([])
  const { data: session, isPending } = authClient.useSession()
  const [userRole, setUserRole] = useState<'ADMIN' | 'USER'>('USER')

  async function handleDelete(id: string) {
    setPedidos((prev) => prev.filter((pedido) => id !== pedido.id))
    await fetch(`/api/pedidos/${id}`, {
      method: 'DELETE',
    })
  }

  useEffect(() => {
    ;(async () => {
      const response = await fetch('/api/session')
      const data = await response.json()
      const role = data.role
      setUserRole(role)
    })()
    setIsLoggedIn(user ? true : false)
  }, [setUserRole, user, setIsLoggedIn])

  useEffect(() => {
    if (isPending) return
    if (!session) {
      return router.replace('/')
    }
  }, [router, session, isPending])

  useEffect(() => {
    if (isPending || !session?.user) return
    ;(async () => {
      const response = await fetch('/api/pedidos')
      const data = await response.json()
      setPedidos(data.resp)
    })()
  }, [session, isPending])

  if (isPending) {
    return <p className="text-center mt-8">Carregando…</p>
  }
  if (!session?.user) {
    return <p className="text-center mt-8">Redirecionando…</p>
  }

  return (
    <section className="max-w-7xl p-6  text-justify text-base/7  mx-auto text-zinc-700 sm:text-base/8 pb-24">
      <div className="flex flex-col items-center gap-8 border-b border-gray-900/10 pb-12">
        <h2 className="text-right text-sm font-bold">Pedidos e sugestões</h2>
        <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 gap-6 mx-auto">
          {pedidos.length === 0 && <p>Não existem pedidos!</p>}
          {pedidos &&
            pedidos.map((pedido) => {
              return (
                <div
                  key={pedido.id}
                  className="trasition hover:shadow-gray-300 hover:shadow-md flex flex-col gap-2 border-1 border-zinc-100 rounded-lg px-6 py-3"
                >
                  <p className="text-zinc-700 font-bold">{pedido.title}</p>
                  <p className="text-zinc-700 font-light">
                    {pedido.description}
                  </p>
                  <Link
                    href={pedido.link}
                    target="_blank"
                    className="transition hover:bg-azul-scout/50 bg-azul-scout text-white text-sm font-bold px-6 py-2 rounded-md text-center"
                  >
                    Fazer pedido
                  </Link>
                  {userRole === 'ADMIN' && (
                    <div className="flex justify-end gap-2 items-center text-sm">
                      Apagar Pedido da Base de Dados
                      <TrashIcon
                        onClick={() => {
                          handleDelete(pedido.id)
                        }}
                        size={20}
                        className="hover:cursor-pointer"
                      />
                    </div>
                  )}
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}
