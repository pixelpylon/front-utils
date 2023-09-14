import React, {ReactNode, useContext, useState} from 'react'
import {User} from '@exp1/common-utils'

type Props = {
  children: ReactNode
}

type UserContextValue = User | null

export const createUserProvider = (useUserQuery: (params: {onSuccess: (user: User) => void}) => void) => {
  const UserContext = React.createContext<UserContextValue>(null)

  const UserProvider = ({children}: Props) => {
    const [claims, setClaims] = useState<User | null>(null)
    useUserQuery({onSuccess: setClaims})
    return <UserContext.Provider value={claims}>{claims === null ? null : children}</UserContext.Provider>
  }

  UserProvider.useUser = () => {
    const user = useContext(UserContext)
    if (!user) {
      throw new Error('User is not defined')
    }
    return user
  }

  return UserProvider
}
