'use client'

import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import { useEffect } from 'react'
import { useUserContext } from '@/context/usercontext/user-context'

export default function AreaReservada() {
  const router = useRouter()
  const { data: session, isPending } = authClient.useSession()
  const { handleUser, user } = useUserContext()

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push('/sign-in')
    }
  }, [isPending, session, router])

  useEffect(() => {
    if (session?.user) {
      const { user } = session

      handleUser(user)
    }
  }, [session, handleUser])
  if (isPending)
    return <p className="text-center mt-8 text-white">Carregando...</p>
  if (!session?.user)
    return <p className="text-center mt-8 text-white">Redirecionando...</p>

  return (
    <section className="max-w-7xl p-6  text-justify text-base/7  mx-auto text-zinc-700 sm:text-base/8 pb-24">
      <p>Welcome, {user?.name || 'User'}!</p>
      <p>Email: {user?.email}</p>
      <h1>Area reservada</h1>
    </section>
  )
}
