import React, { createContext, useState } from 'react'
import { IauthProvider, Icontext, Iuser } from './types'
import { LoginRequest } from './utils'

export const AuthContext = createContext<Icontext>({} as Icontext)

export const AuthProvider = ({ children }: IauthProvider) => {
  const [user, setUser] = useState<Iuser | null>()

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password)

    const payload = { token: response.token, email }

    setUser(payload)
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
