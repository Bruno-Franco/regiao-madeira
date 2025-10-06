'use client'

import { createContext, PropsWithChildren, useContext, useState } from 'react'

export interface UserState {
  email: string | null
  name: string | null
  image?: string | null
}
interface UserInterface {
  user: UserState | null
  isLoggedIn: boolean
  setIsLoggedIn: (val: boolean) => void
  handleUser: (user: UserState) => void
}

const UserContext = createContext<UserInterface>({
  user: {
    email: null,
    name: null,
    image: null,
  },
  isLoggedIn: false,
  setIsLoggedIn() {},
  handleUser() {},
})

export function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<UserState | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  function handleUser(userUpdated: UserState) {
    setUser(userUpdated)
  }

  const value = { user, handleUser, setIsLoggedIn, isLoggedIn }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUserContext() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext must be used inside a UserContextProvider')
  }
  return context
}
