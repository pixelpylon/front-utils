import cx from 'classnames'
import { ChangeEventHandler, useEffect, useRef, useState } from 'react'
import { Label } from './Label'
import { Text } from './Text'
import { SelectOptions } from '../types'
import { isChildOf } from '../utils/isChildOf'
import { normalizeOptions } from '../utils/normalizeOptions'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

type Size = 'sm' | 'default' | 'lg'

type Props = {
  id?: string
  label?: string
  error?: string
  name?: string
  options: SelectOptions
  value?: string
  onChange?: ChangeEventHandler<HTMLSelectElement>
  className?: string
  size?: Size
  expanded?: boolean
  disabled?: boolean
  defaultValue?: string
  visibleNumber?: number
}

export const getTextClasses = (size: Size) => {
  switch (size) {
    case 'sm':
      return 'text-xs'
    case 'default':
      return 'text-sm'
    case 'lg':
      return 'text-base'
  }
}

export const getInputPaddingClasses = (size: Size) => {
  switch (size) {
    case 'sm':
      return 'p-1'
    case 'default':
      return 'p-1.5'
    case 'lg':
      return 'p-3'
  }
}

export const getOptionPaddingClasses = (size: Size) => {
  switch (size) {
    case 'sm':
      return 'p-2'
    case 'default':
      return 'p-2.5'
    case 'lg':
      return 'p-4'
  }
}

export const getIconClasses = (size: Size) => {
  switch (size) {
    case 'sm':
      return 'h-4 w-4'
    case 'default':
      return 'h-5 w-5'
    case 'lg':
      return 'h-6 w-6'
  }
}

export const getOptionHeight = (size: Size) => {
  switch (size) {
    case 'sm':
      return 32
    case 'default':
      return 40
    case 'lg':
      return 56
  }
}

export const Select = ({
  id,
  label,
  error,
  name,
  value: initialValue,
  options,
  onChange,
  visibleNumber = 10,
  className,
  size = 'default',
  expanded,
  disabled,
}: Props) => {
  const normalizedOptions = normalizeOptions(options)
  const [value, setValue] = useState(initialValue)
  const [collapsed, setCollapsed] = useState(true)
  const visibleSelectRef = useRef<HTMLDivElement | null>(null)
  const hiddenSelectRef = useRef<HTMLSelectElement | null>(null)

  const selectedOption = normalizedOptions.find((option) => option.value === value)

  const onOptionClick = (value: string) => {
    setValue(value)
    setCollapsed(true)
  }

  useEffect(() => {
    if (hiddenSelectRef && hiddenSelectRef.current) {
      hiddenSelectRef.current.dispatchEvent(new Event('change', { bubbles: true }))
    }
  }, [value])

  const onInputClick = () => setCollapsed((collapsed) => !collapsed)

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (visibleSelectRef && visibleSelectRef.current && !isChildOf(event.target, visibleSelectRef.current)) {
        setCollapsed(true)
      }
    }

    document.addEventListener('click', onClick)

    return () => document.removeEventListener('click', onClick)
  }, [])

  const textClasses = getTextClasses(size)
  const inputPaddingClasses = getInputPaddingClasses(size)
  const optionPaddingClasses = getOptionPaddingClasses(size)
  const iconClasses = getIconClasses(size)
  const optionHeight = getOptionHeight(size)

  const inputClasses = cx(
    'focus:ring-1 ring-inset outline-none bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block',
    { 'text-gray-900 pointer-events-none': disabled },
    { 'ring-blue-500 border-blue-500': !collapsed },
    inputPaddingClasses,
  )

  return (
    <div className={cx('flex flex-col gap-1', expanded ? 'w-full' : 'w-56', className)}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <select ref={hiddenSelectRef}
        name={name}
        value={value}
        onChange={onChange}
        className='hidden'
      >
        {normalizedOptions.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
      <div className={textClasses} ref={visibleSelectRef}>
        <div id={id} className={cx('flex justify-between', inputClasses)} onClick={onInputClick}>
          <div className='flex gap-1 grow-0 flex-wrap py-1 px-2 '>
            {selectedOption ? selectedOption.label : ''}
          </div>
          <div className="border-l py-1 pl-3 pr-2">
            <ChevronDownIcon className={cx(iconClasses, 'cursor-pointer')} />
          </div>
        </div>
        <div className={cx("relative w-full", { 'hidden': collapsed })}>
          <ul
            className="flex flex-col absolute w-full z-10 bg-white divide-y divide-gray-100 rounded-lg shadow block py-2 overflow-y-auto"
            style={{ maxHeight: (optionHeight + 1) * visibleNumber + 8 }}
          >
            {normalizedOptions.map((option) => {
              const selected = option.value === value
              return (
                <li
                  key={option.value}
                  value={option.value}
                  className={cx(
                    optionPaddingClasses,
                    "block px-4 text-nowrap cursor-pointer hover:bg-blue-200",
                    selected ? 'text-blue-500' : 'text-gray-900',
                  )}
                  onClick={() => onOptionClick(option.value)}
                >
                  {option.label}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {error && <Text color="red">{error}</Text>}
    </div>
  )
}
