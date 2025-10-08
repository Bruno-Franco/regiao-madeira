'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import { useUserContext } from '@/context/usercontext/user-context'
import {
  getOneUser,
  updateUserRole,
} from '@/components/button-sigin-page/check-user'

export default function AreaReservada() {
  const router = useRouter()
  const { handleUser, user } = useUserContext()
  const { data: session, isPending } = authClient.useSession()

  useEffect(() => {
    if (isPending) return
    if (!session?.user) {
      router.replace('/')
    }
    async function updateUserWithRole() {
      const email = session?.user?.email
      if (!email) return

      const userUpdatedWithRole = await getOneUser(email)
      const finalUser = {
        email: userUpdatedWithRole?.email as string,
        name: userUpdatedWithRole?.name as string,
        image: userUpdatedWithRole?.image,
        role: userUpdatedWithRole?.role,
      }

      if (!user?.role) {
        await updateUserRole(email)
        handleUser(finalUser)
      }
    }
    updateUserWithRole()
  }, [session, handleUser, user?.role, user, isPending, router])
  if (isPending)
    return <p className="text-center mt-8 text-white">Carregando...</p>
  if (!session?.user) return null

  return (
    <section className="max-w-7xl p-6  text-justify text-base/7  mx-auto text-zinc-700 sm:text-base/8 pb-24">
      <h2 className="text-right text-sm font-bold">Area reservada</h2>
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
      <div className="grig md:grid-cols-2 gap-2">
        <h3>Grupos de Escoteiros na Ilha da Madeira</h3>
      </div>
      <div className="w-full mx-auto">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=brunofrancco%40gmail.com&ctz=Europe%2FLisbon"
          className="border-0 mx-auto"
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </section>
  )
}
