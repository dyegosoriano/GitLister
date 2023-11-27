import React, { createContext, useState } from 'react'
import { IUser } from '../types/IUser'

interface IUserContext {
  saveUser: (data: IUser) => void
  removeUser: () => void
  user: IUser | null
}

interface IUserProviderProps {
  children: React.ReactNode
}

const UserContext = createContext<IUserContext>({} as IUserContext)

const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null)

  const saveUser = (data: IUser) => setUser(data)
  const removeUser = () => setUser(null)

  return (
    <UserContext.Provider
      value={{
        removeUser,
        saveUser,
        user
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }
