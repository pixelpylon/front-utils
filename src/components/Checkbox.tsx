import cx from 'classnames'
import React, {ChangeEventHandler} from 'react'
import {Label} from './Label'
import {Text} from './Text'

type Color = 'default' | 'green' | 'red'
type Size = 'sm' | 'default' | 'lg'

type Props = {
  id?: string
  label?: string
  error?: string
  size?: Size
  color?: Color
  name?: string
  checked?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
  className?: string
  disabled?: boolean
}

const getColorClasses = (color: Color) => {
  switch (color) {
    case 'default':
      return 'text-blue-600 focus:ring-blue-500'
    case 'green':
      return 'text-green-600 focus:ring-green-500'
    case 'red':
      return 'text-red-600 focus:ring-red-500'
  }
}

const getSizeClasses = (size: Size) => {
  switch (size) {
    case 'sm':
      return 'w-3 h-3'
    case 'default':
      return 'w-4 h-4'
    case 'lg':
      return 'w-5 h-5'
  }
}

export const Checkbox = ({
  id,
  label,
  error,
  color = 'default',
  size = 'default',
  name,
  checked = false,
  onChange,
  className,
  disabled,
}: Props) => {
  const colorClasses = getColorClasses(color)
  const sizeClasses = getSizeClasses(size)
  const resultClassName = cx(
    'rounded focus:ring-2 bg-gray-100 border-gray-300',
    colorClasses,
    sizeClasses,
    className
  )

  return (
    <div className={cx('flex flex-col gap-1', className)}>
      {label && <Label for={id}>{label}</Label>}
      <input
        id={id}
        checked={checked}
        type="checkbox"
        name={name}
        className={resultClassName}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <Text color="red">{error}</Text>}
    </div>
  )
}
