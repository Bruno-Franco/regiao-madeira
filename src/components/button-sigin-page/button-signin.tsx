'use client'

import React from 'react'
import { authClient } from '../../lib/auth-client'

interface GoogleForm {
  form: string | null
  isSending: boolean
  sending: (bool: boolean) => void
}

export default function SignInGoogle({
  form,
  isSending = false,
  sending,
}: GoogleForm) {
  async function handleLogin() {
    console.log(form)
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    form ? sending(true) : ''
    try {
      await authClient.signIn.social({
        provider: 'google',
        callbackURL: '/area-reservada',
      })
    } catch (error) {
      console.log(error)
    } finally {
      sending(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleLogin}
      className="flex w-full justify-center rounded-md bg-azul-scout px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {isSending ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Enviando...
        </>
      ) : (
        'Sign in'
      )}
    </button>
  )
}
