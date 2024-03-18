import cx from 'classnames'
import {ChangeEventHandler} from 'react'
import {Label} from './Label'
import {Text} from './Text'
import { ControlSize } from '../types'

type Color = 'default' | 'green' | 'red'

export type TextAreaProps = {
  id?: string
  label?: string
  error?: string
  size?: ControlSize
  color?: Color
  name?: string
  value?: string
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  className?: string
  expanded?: boolean
  disabled?: boolean
  spellCheck?: boolean
  rows?: number,
  cols?: number,
}

const getColorClasses = (color: Color) => {
  switch (color) {
    case 'default':
      return 'bg-transparent border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 disabled:text-gray-500'
    case 'green':
      return 'bg-green-50 border-green-500 text-green-900 placeholder-green-700 focus:ring-green-500 focus:border-green-500 disabled:text-green-500'
    case 'red':
      return 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 disabled:text-red-500'
  }
}

const getSizeClasses = (size: ControlSize) => {
  switch (size) {
    case 'sm':
      return 'text-xs p-2'
    case 'default':
      return 'text-sm p-2.5'
    case 'lg':
      return 'text-md p-4'
  }
}

export const TextArea = ({
  id,
  label,
  error,
  color = 'default',
  size = 'default',
  name,
  value,
  onChange,
  className,
  expanded,
  disabled,
  spellCheck,
  rows,
  cols,
}: TextAreaProps) => {
  const colorClasses = getColorClasses(color)
  const sizeClasses = getSizeClasses(size)
  const resultClassName = cx(
    'focus:ring-1 outline-none block border rounded-lg disabled:cursor-default disabled:bg-gray-50',
    {'w-full': expanded},
    {'w-fit': !expanded},
    colorClasses,
    sizeClasses,
    className
  )

  return (
    <div className={cx('flex flex-col gap-1', className)}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <textarea
        id={id}
        value={value}
        name={name}
        className={resultClassName}
        onChange={onChange}
        disabled={disabled}
        spellCheck={spellCheck}
        rows={rows}
        cols={cols}
      />
      {error && <Text color="red">{error}</Text>}
    </div>
  )
}
