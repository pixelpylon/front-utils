import cx from 'classnames'
import React from 'react'
import {Alert} from './Alert'
import {AlertType} from '../types'

export type ToasterEvent = {
  type: AlertType
  message: string
}

export type KeyedToasterEvent = ToasterEvent & {
  key: string
}

type Props = {
  events: KeyedToasterEvent[]
  className?: string
}

export const Toaster = ({events, className}: Props) => {
  return (
    <div className={cx('flex flex-col gap-4', className)}>
      {events.map((event) => {
        return (
          <Alert type={event.type} key={event.key} className="z-100">
            {event.message}
          </Alert>
        )
      })}
    </div>
  )
}
