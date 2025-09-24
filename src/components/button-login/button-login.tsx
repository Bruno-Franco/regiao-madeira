'use client'

export default function ButtonLogin() {
  function handleLogin() {
    console.log('Login!')
  }

  return (
    <button
      onClick={handleLogin}
      className="bg-verde-scout text-sm text-azul-scout font-bold px-8 py-0  rounded-sm hover:bg-verde-scout/50 hover:text-white transition"
    >
      Login
    </button>
  )
}
