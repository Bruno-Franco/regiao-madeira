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
    <>
      <p>Welcome, {user?.name || 'User'}!</p>
      <p>Email: {user?.email}</p>
      {/* add-start: sign out button */}
      <button
        onClick={() => authClient.signOut()}
        className="w-full bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200"
      >
        Sign Out
      </button>

      <h1>Area reservada</h1>
    </>
  )
}
