import cx from 'classnames'
import { CSSProperties, ChangeEventHandler, MutableRefObject, useEffect, useRef, useState } from 'react'
import { Label } from './Label'
import { Text } from './Text'
import { ControlSize, SelectOptions, SelectOption } from '../types'
import { isChildOf } from '../utils/isChildOf'
import { normalizeOptions } from '../utils/normalizeOptions'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

type Props = {
  id?: string
  label?: string
  error?: string
  name?: string
  options: SelectOptions
  value?: string
  onChange?: ChangeEventHandler<HTMLSelectElement>
  className?: string
  size?: ControlSize
  expanded?: boolean
  disabled?: boolean
  defaultValue?: string
  visibleNumber?: number
  notSelectedOption?: boolean | SelectOption
}

export const getDistances = (selectRef: MutableRefObject<HTMLDivElement | null>) => {
  if (!selectRef.current) {
    return {
      toTop: 0,
      toBottom: 0,
    }
  }

  const rect = selectRef.current.getBoundingClientRect()

  const toTop = rect.top + document.body.scrollTop
  const toBottom = document.body.scrollHeight - toTop - rect.height

  return {
    toTop,
    toBottom,
  }
}

export const getTextClasses = (size: ControlSize) => {
  switch (size) {
    case 'sm':
      return 'text-xs'
    case 'default':
      return 'text-sm'
    case 'lg':
      return 'text-base'
  }
}

export const getInputPaddingClasses = (size: ControlSize) => {
  switch (size) {
    case 'sm':
      return 'p-1'
    case 'default':
      return 'p-1.5'
    case 'lg':
      return 'p-3'
  }
}

export const getOptionPaddingClasses = (size: ControlSize) => {
  switch (size) {
    case 'sm':
      return 'p-2'
    case 'default':
      return 'p-2.5'
    case 'lg':
      return 'p-4'
  }
}

export const getIconClasses = (size: ControlSize) => {
  switch (size) {
    case 'sm':
      return 'h-4 w-4'
    case 'default':
      return 'h-5 w-5'
    case 'lg':
      return 'h-6 w-6'
  }
}

export const getOptionHeight = (size: ControlSize) => {
  switch (size) {
    case 'sm':
      return 32
    case 'default':
      return 40
    case 'lg':
      return 56
  }
}

const getNotSelectedOption = (option: boolean | SelectOption) => {
  return typeof option === 'boolean'
    ? {
      value: '',
      label: 'None',
    }
    : option
}

export const Select = ({
  id,
  label,
  error,
  name,
  value: initialValue = '',
  options,
  onChange,
  visibleNumber = 10,
  className,
  size = 'default',
  expanded,
  disabled,
  notSelectedOption,
}: Props) => {
  const notSeletedOption = getNotSelectedOption(notSelectedOption || false)

  const normalizedOptions = notSelectedOption
    ? [notSeletedOption, ...normalizeOptions(options)]
    : normalizeOptions(options)

  const [value, setValue] = useState(initialValue)
  const [collapsed, setCollapsed] = useState(true)
  const [optionsStyles, setOptionsStyles] = useState<CSSProperties>({})
  const visibleSelectRef = useRef<HTMLDivElement | null>(null)
  const hiddenSelectRef = useRef<HTMLSelectElement | null>(null)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

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
    'focus:ring-1 ring-inset outline-none bg-transparent border border-gray-300 text-gray-900 rounded-lg block',
    { '!text-gray-500 pointer-events-none !bg-gray-50': disabled },
    { 'ring-blue-500 border-blue-500': !collapsed },
    inputPaddingClasses,
  )

  useEffect(() => {
    if (!visibleSelectRef.current) {
      return
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const distances = getDistances(visibleSelectRef)
        const desiredOptionsHeight = (optionHeight + 1) * Math.min(visibleNumber, normalizedOptions.length) + 8 * 2
        const resultOptionsHeight = Math.min(Math.max(distances.toTop, distances.toBottom), desiredOptionsHeight)
        const optionsPosition = resultOptionsHeight <= distances.toBottom ? { top: 0 } : { bottom: entry.contentRect.height }
        setOptionsStyles({ maxHeight: resultOptionsHeight, ...optionsPosition })
      }
    })

    resizeObserver.observe(visibleSelectRef.current)

    return () => {
      if (visibleSelectRef.current) {
        resizeObserver.unobserve(visibleSelectRef.current)
      }
    }
  }, [visibleSelectRef.current])

  const selectedOptionLabel = selectedOption ? selectedOption.label : notSeletedOption.label
  const selectedOptionValue = selectedOption ? selectedOption.value : notSeletedOption.value

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
          <div className={cx('flex gap-1 grow-0 flex-wrap py-1 px-2', { 'italic text-gray-500': selectedOptionValue === notSeletedOption.value })}>
            {selectedOptionLabel}
          </div>
          <div className="border-l py-1 pl-3 pr-2">
            <ChevronDownIcon className={cx(iconClasses, 'cursor-pointer')} />
          </div>
        </div>
        <div className={cx("relative w-full", { 'hidden': collapsed })}>
          <ul
            className="flex flex-col absolute w-full z-10 bg-white divide-y divide-gray-100 rounded-lg shadow block py-2 overflow-y-auto"
            style={optionsStyles}
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
                    { 'italic': option.value === notSeletedOption.value },
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
