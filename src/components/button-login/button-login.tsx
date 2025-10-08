'use client'
import Link from 'next/link'
import { useUserContext } from '@/context/usercontext/user-context'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ButtonLogin() {
  const router = useRouter()
  const { setIsLoggedIn, isLoggedIn } = useUserContext()
  const [loading, setLoading] = useState(false)

  async function handleSignOut() {
    try {
      setLoading(true)
      await authClient.signOut()
      setIsLoggedIn(false)
      router.replace('/')
      router.refresh()
    } finally {
      setLoading(false)
    }
  }
  if (isLoggedIn) {
    return (
      <button
        onClick={handleSignOut}
        className=" bg-verde-scout text-sm text-azul-scout font-bold px-8 py-0  rounded-sm hover:bg-verde-scout/50 hover:text-white transition"
      >
        {loading ? 'Saindo...' : 'Sair'}
      </button>
    )
  }
  return (
    <Link
      href={'/sign-in'}
      className=" bg-verde-scout text-sm text-azul-scout font-bold px-8 py-0  rounded-sm hover:bg-verde-scout/50 hover:text-white transition"
    >
      Entrar
    </Link>
  )
}
