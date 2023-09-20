import React from 'react'
import cx from "classnames";

type Color = 'default' | 'green' | 'red' | 'blue'
type Size = 'sm' | 'default' | 'lg'

type Props = {
  children: string
  size?: Size
  className?: string
  tag?: string
  color?: Color
  for?: string
}

const getColorClasses = (color: Color) => {
  switch (color) {
    case 'default':
      return 'text-black'
    case 'green':
      return 'text-green-700'
    case 'red':
      return 'text-red-700'
    case 'blue':
      return 'text-blue-700'
  }
}

const getSizeClasses = (size: Size) => {
  switch (size) {
    case 'sm':
      return 'text-xs'
    case 'default':
      return 'text-sm'
    case 'lg':
      return 'text-base'
  }
}

export const Text = ({tag = 'div', color = 'default', size = 'default', children, className, ...other}: Props) => {
  const Component = tag as keyof JSX.IntrinsicElements
  const colorClasses = getColorClasses(color)
  const sizeClasses = getSizeClasses(size)
  const resultClasses = cx(sizeClasses, colorClasses, className)
  return (
    <Component className={resultClasses} {...other}>
      {children}
    </Component>
  )
}
