import Link from 'next/link'
import { useUserContext } from '@/context/usercontext/user-context'
import { authClient } from '@/lib/auth-client'

export default function ButtonLogin() {
  const { setIsLoggedIn, isLoggedIn } = useUserContext()

  return (
    <Link href={'/sign-in'}>
      <button
        onClick={() => {
          if (isLoggedIn) {
            authClient.signOut()
            setIsLoggedIn(false)
          }
        }}
        className=" bg-verde-scout text-sm text-azul-scout font-bold px-8 py-0  rounded-sm hover:bg-verde-scout/50 hover:text-white transition"
      >
        {isLoggedIn ? 'Sair' : 'Entrar'}
      </button>
    </Link>
  )
}
