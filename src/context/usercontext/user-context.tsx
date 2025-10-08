'use client'

import { createContext, PropsWithChildren, useContext, useState } from 'react'

export interface UserState {
  email: string | null
  name: string | null
  image?: string | null
  role?: string | null
}
interface UserInterface {
  user: UserState | null
  isLoggedIn: boolean
  isAdmin: boolean
  setIsAdmin: (val: boolean) => void
  setIsLoggedIn: (val: boolean) => void
  handleUser: (user: UserState) => void
}

const UserContext = createContext<UserInterface>({
  user: {
    email: null,
    name: null,
    image: null,
    role: null,
  },
  isAdmin: false,
  isLoggedIn: false,
  setIsAdmin() {},
  setIsLoggedIn() {},
  handleUser() {},
})

export function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<UserState | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [isAdmin, setIsAdmin] = useState<boolean>(false)

  function handleUser(userUpdated: UserState) {
    setUser(userUpdated)
  }

  const value = {
    user,
    handleUser,
    setIsLoggedIn,
    isLoggedIn,
    isAdmin,
    setIsAdmin,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUserContext() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext must be used inside a UserContextProvider')
  }
  return context
}
