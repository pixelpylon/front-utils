import cx from 'classnames'
import { ChangeEventHandler } from 'react'
import { Label } from './Label'
import { ControlSize } from '../types'
import Icon from '@mdi/react'
import { mdiMagnify } from '@mdi/js'

type Color = 'default' | 'green' | 'red'

type Props = {
  id?: string
  label?: string
  size?: ControlSize
  color?: Color
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  className?: string
  expanded?: boolean
  disabled?: boolean
}

const getColorClasses = (color: Color) => {
  switch (color) {
    case 'default':
      return 'bg-transparent border-gray-300 text-gray-900 focus-within:ring-blue-500 focus-within:border-blue-500 disabled:text-gray-500'
    case 'green':
      return 'bg-green-50 border-green-500 text-green-900 placeholder-green-700 focus-within:ring-green-500 focus-within:border-green-500 disabled:text-green-500'
    case 'red':
      return 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus-within:ring-red-500 focus-within:border-red-500 disabled:text-red-500'
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

export const SearchInput = ({
  id,
  label,
  color = 'default',
  size = 'default',
  value,
  onChange,
  className,
  expanded,
  disabled,
}: Props) => {
  const colorClasses = getColorClasses(color)
  const sizeClasses = getSizeClasses(size)
  const resultClassName = cx(
    'flex items-center gap-2 block border rounded-lg disabled:cursor-default disabled:bg-gray-50 focus-within:ring-1',
    { 'w-full': expanded },
    { 'w-fit': !expanded },
    colorClasses,
    sizeClasses,
    className
  )

  return (
    <div className={cx('flex flex-col gap-1', className)}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className={resultClassName}>
        <input
          id={id}
          value={value}
          type='text'
          className="outline-none"
          onChange={onChange}
          disabled={disabled}
          spellCheck={false}
        />
        <Icon path={mdiMagnify} className="w-6 h-6 text-gray-400" />
      </div>
    </div>
  )
}
