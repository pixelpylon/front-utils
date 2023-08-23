import uniq from 'lodash/uniq'
import noop from 'lodash/noop'
import React, {ReactNode, useCallback, useContext, useState} from 'react'

type Props = {
  children: ReactNode
}

type WaitingContextValue = {
  isWaiting: number
  addWaiter: (name: string) => void
  removeWaiter: (name: string) => void
}

const WaitingContext = React.createContext<WaitingContextValue>({
  isWaiting: 0,
  addWaiter: noop,
  removeWaiter: noop,
})

export const WaitingProvider = ({children}: Props) => {
  const [waiters, setWaiters] = useState<string[]>([])

  const addWaiter = useCallback((name: string) => setWaiters((prev) => uniq([...prev, name])), [])

  const removeWaiter = useCallback((name: string) => setWaiters((prev) => prev.filter((item) => item !== name)), [])

  const isWaiting = waiters.length

  const contextValue = {
    isWaiting,
    addWaiter,
    removeWaiter,
  }

  return <WaitingContext.Provider value={contextValue}>{children}</WaitingContext.Provider>
}

WaitingProvider.useIsWaiting = () => {
  const context = useContext(WaitingContext)
  return Boolean(context.isWaiting)
}

WaitingProvider.useWaitingMutation = () => {
  const context = useContext(WaitingContext)
  return {
    addWaiter: context.addWaiter,
    removeWaiter: context.removeWaiter,
  }
}
