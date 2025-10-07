'use client'

import SignInGoogle from '@/components/button-sigin-page/button-signin'
import { useState } from 'react'

export default function SignIn() {
  const [emailForm, setEmailForm] = useState<string | null>(null)
  const [sending, setSending] = useState<boolean>(false)

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight  text-zinc-700">
          Olá, entre com Google!
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          // action="#"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-zinc-700"
            >
              Endereço de Email
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setEmailForm(e.target.value)}
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-zinc-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <SignInGoogle
              form={emailForm}
              isSending={sending}
              sending={setSending}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
