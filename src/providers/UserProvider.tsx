import React, {ReactNode, useContext, useState} from 'react'
import {User} from '@exp1/common-utils'
import { AxiosError } from 'axios'
import { Failure } from '../components/Failure'

type Props = {
  children: ReactNode
}

type UserContextValue = User | null

export const createUserProvider = (ssoDomain: string, useUserQuery: (params: {onSuccess: (user: User) => void, onError: (error: AxiosError) => void}) => void) => {
  const UserContext = React.createContext<UserContextValue>(null)

  const UserProvider = ({children}: Props) => {
    const [claims, setClaims] = useState<User | null>(null)
    const [forbidden, setForbidden] = useState(false)

    useUserQuery({
      onSuccess: setClaims,
      onError: (error: AxiosError) => {
        if (error.response?.status === 401) {
          window.location.href = `https://${ssoDomain}/sign-in?redirect=${window.location.href}`
          return
        }

        if (error.response?.status === 403) {
          setForbidden(true)
        }
      },
    })

    if (forbidden) {
      return <Failure error="Access is denied" className="m-4"/>
    }

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
