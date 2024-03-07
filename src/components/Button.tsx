import cx from 'classnames'
import {ReactNode} from 'react'

type Color = 'default' | 'dark' | 'green' | 'red' | 'yellow' | 'purple'
export type ButtonSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl'

type Props = {
  onSubmit?: () => void
  onClick?: () => void
  children: ReactNode
  color?: Color
  size?: ButtonSize
  outline?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
  expanded?: boolean
  disabled?: boolean
}

const getColorClasses = (color: Color, outline: boolean) => {
  if (outline) {
    switch (color) {
      case 'default':
        return 'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-blue-300'
      case 'dark':
        return 'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-gray-300'
      case 'green':
        return 'text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-green-300'
      case 'red':
        return 'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-red-300'
      case 'yellow':
        return 'text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300'
      case 'purple':
        return 'text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-purple-300'
    }
  }

  switch (color) {
    case 'default':
      return 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 disabled:bg-blue-500'
    case 'dark':
      return 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 disabled:bg-gray-500'
    case 'green':
      return 'text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 disabled:bg-green-500'
    case 'red':
      return 'text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 disabled:bg-red-500'
    case 'yellow':
      return 'text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 disabled:bg-yellow-200'
    case 'purple':
      return 'text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 disabled:bg-purple-500'
  }
}

const getSizeClasses = (size: ButtonSize) => {
  switch (size) {
    case 'xs':
      return 'px-3 py-2 text-xs'
    case 'sm':
      return 'px-3 py-2 text-sm'
    case 'default':
      return 'px-5 py-2.5 text-sm'
    case 'lg':
      return 'px-5 py-3 text-base'
    case 'xl':
      return 'px-6 py-3.5 text-base'
  }
}

export const Button = ({
  onSubmit,
  onClick,
  children,
  outline = false,
  size = 'default',
  color = 'default',
  type,
  className,
  disabled,
  expanded,
}: Props) => {
  const colorClasses = getColorClasses(color, outline)
  const sizeClasses = getSizeClasses(size)
  const resultClassName = cx(
    'focus:ring-4 font-semibold rounded-lg focus:outline-none text-center disabled:cursor-default h-fit',
    {'w-full': expanded, 'w-fit': !expanded},
    colorClasses,
    sizeClasses,
    className
  )
  return (
    <button onSubmit={onSubmit} onClick={onClick} className={resultClassName} type={type} disabled={disabled}>
      {children}
    </button>
  )
}
