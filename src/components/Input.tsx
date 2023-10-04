import Recat from 'react'
import cx from 'classnames'
import {ChangeEventHandler} from 'react'
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
  value?: string
  type?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  className?: string
  expanded?: boolean
  disabled?: boolean
  spellCheck?: boolean
  min?: number
  max?: number
}

const getColorClasses = (color: Color) => {
  switch (color) {
    case 'default':
      return 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 disabled:text-gray-500'
    case 'green':
      return 'bg-green-50 border-green-500 text-green-900 placeholder-green-700 focus:ring-green-500 focus:border-green-500 disabled:text-green-500'
    case 'red':
      return 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 disabled:text-red-500'
  }
}

const getSizeClasses = (size: Size) => {
  switch (size) {
    case 'sm':
      return 'text-xs p-2'
    case 'default':
      return 'text-sm p-2.5'
    case 'lg':
      return 'text-md p-4'
  }
}

export const Input = ({
  id,
  label,
  error,
  color = 'default',
  size = 'default',
  type,
  name,
  value,
  min,
  max,
  onChange,
  className,
  expanded,
  disabled,
  spellCheck,
}: Props) => {
  const colorClasses = getColorClasses(color)
  const sizeClasses = getSizeClasses(size)
  const resultClassName = cx(
    'block border rounded-lg disabled:cursor-default',
    {'w-full': expanded},
    {'w-fit': !expanded},
    colorClasses,
    sizeClasses,
    className
  )

  return (
    <div className={cx('flex flex-col gap-1', className)}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <input
        id={id}
        value={value}
        type={type}
        name={name}
        className={resultClassName}
        onChange={onChange}
        disabled={disabled}
        spellCheck={spellCheck}
        min={min}
        max={max}
      />
      {error && <Text color="red">{error}</Text>}
    </div>
  )
}
