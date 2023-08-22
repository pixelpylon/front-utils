import cx from 'classnames'
import React, {ChangeEventHandler} from 'react'
import {Label} from './Label'
import {Text} from './Text'
import {SelectOption} from '../types'

type Size = 'sm' | 'default' | 'lg'

type Props = {
  label?: string
  error?: string
  name?: string
  options: SelectOption[]
  value?: string
  onChange?: ChangeEventHandler<HTMLSelectElement>
  className?: string
  size?: Size
  expanded?: boolean
  disabled?: boolean
  defaultValue?: string
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

const NOT_SELECTED = {
  value: '',
  label: '-- Not Selected --',
}

export const Select = ({
  label,
  error,
  name,
  value,
  options,
  onChange,
  className,
  size = 'default',
  expanded,
  disabled,
}: Props) => {
  const resultOptions = [NOT_SELECTED, ...options]
  const sizeClasses = getSizeClasses(size)
  const resultClassName = cx(
    'bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block disabled:cursor-default disabled:text-gray-500',
    sizeClasses,
    {'w-full': expanded}
  )
  return (
    <div className={cx('flex flex-col gap-1', className)}>
      {label && <Label>{label}</Label>}
      <select name={name} value={value} onChange={onChange} className={resultClassName} disabled={disabled}>
        {resultOptions.map((option) => {
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
