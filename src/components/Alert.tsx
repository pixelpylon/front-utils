import cx from 'classnames'
import React, {ReactNode} from 'react'
import {AlertType} from '../types'

type Props = {
  type: AlertType
  children: ReactNode
  className?: string
}

const getClassName = (type: AlertType) => {
  switch (type) {
    case 'info':
      return 'text-blue-800 bg-blue-50 border-blue-300 '
    case 'danger':
      return 'text-red-800 border-red-300 bg-red-50'
    case 'success':
      return 'text-green-800 border-green-300 bg-green-50'
    case 'warning':
      return 'text-yellow-800 border-yellow-300 bg-yellow-50'
    case 'dark':
      return 'text-gray-800 border-gray-300 bg-gray-50'
  }
}

export const Alert = ({type, children, className}: Props) => {
  const resultClassName = cx(getClassName(type), 'p-4 text-sm rounded-lg border', className)

  return (
    <div className={resultClassName} role="alert">
      {children}
    </div>
  )
}
