import cx from 'classnames'
import React, {ChangeEventHandler} from 'react'
import {Label} from './Label'
import {Text} from './Text'
import {SelectOption} from '../types'

type Size = 'sm' | 'default' | 'lg'

type Props = {
  id?: string
  label?: string
  error?: string
  name?: string
  options: SelectOption[]
  value?: string[]
  onChange?: ChangeEventHandler<HTMLSelectElement>
  className?: string
  size?: Size
  expanded?: boolean
  disabled?: boolean
  defaultValue?: string
  visibleNumber?: number
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

export const MultiSelect = ({
  id,
  label,
  error,
  name,
  value,
  options,
  onChange,
  visibleNumber,
  className,
  size = 'default',
  expanded,
  disabled,
}: Props) => {
  const sizeClasses = getSizeClasses(size)
  const resultClassName = cx(
    'bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block disabled:cursor-default',
    sizeClasses,
    {'text-gray-900': disabled, 'w-full': expanded},
    className
  )
  return (
    <div className={cx('flex flex-col gap-1', className)}>
      {label && <Label for={id}>{label}</Label>}
      <select
        id={id}
        multiple
        size={visibleNumber}
        name={name}
        value={value}
        onChange={onChange}
        className={resultClassName}
        disabled={disabled}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
      {error && <Text color="red">{error}</Text>}
    </div>
  )
}
