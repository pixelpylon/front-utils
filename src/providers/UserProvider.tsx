import React, {ReactNode, useContext, useState} from 'react'
import {User} from 'common-utils'

type Props = {
  children: ReactNode
}

type UserContextValue<Role, Permission> = User<Role, Permission> | null

export const createUserProvider = <Role, Permission>(useUserQuery: (params: {onSuccess: (user: User<Role, Permission>) => void}) => void) => {
  const UserContext = React.createContext<UserContextValue<Role, Permission>>(null)

  const UserProvider = ({children}: Props) => {
    const [claims, setClaims] = useState<User<Role, Permission> | null>(null)
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
