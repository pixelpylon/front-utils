import {KeyedToasterEvent, Toaster, ToasterEvent} from '../components/Toaster'
import React, {ReactNode, useCallback, useContext, useEffect, useState} from 'react'

type Props = {
  children: ReactNode
}

type TimedToasterEvent = KeyedToasterEvent & {
  timeoutId: number
}

type ToasterContextValue = {
  events: TimedToasterEvent[]
  add: (event: ToasterEvent) => void
}

const ToasterContext = React.createContext<ToasterContextValue>({
  events: [],
  add: () => {},
})

export const ToasterProvider = ({children}: Props) => {
  const [events, setEvents] = useState<TimedToasterEvent[]>([])

  const remove = (eventKey: string) => {
    console.log('remove', eventKey)
    setEvents((events) => events.filter(({key}) => key !== eventKey))
  }

  const add = useCallback(
    (event: ToasterEvent) => {
      const key = Date.now().toString()
      const timeoutId = setTimeout(() => remove(key), 5000) as unknown as number
      setEvents((events) => [...events, {...event, timeoutId, key}])
    },
    [setEvents]
  )

  useEffect(() => {
    return () => {
      events.forEach(({timeoutId}) => clearTimeout(timeoutId))
    }
  }, [events])

  const contextValue = {
    events,
    add,
  }

  return (
    <ToasterContext.Provider value={contextValue}>
      <div className="fixed w-full pt-4 z-[1001]">
        <Toaster events={events} className="w-96 mx-auto" />
      </div>
      {children}
    </ToasterContext.Provider>
  )
}

ToasterProvider.useToasterMessageAdder = () => {
  const context = useContext(ToasterContext)
  return context.add
}
