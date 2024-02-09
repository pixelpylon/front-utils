import cx from 'classnames'
import { ChangeEventHandler, useEffect, useRef, useState } from 'react'
import { Label } from './Label'
import { Text } from './Text'
import { SelectOption } from '../types'
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { isArray } from 'lodash-es'
import { isChildOf } from '../utils/isChildOf'
import { getIconClasses, getInputPaddingClasses, getOptionHeight, getOptionPaddingClasses, getTextClasses } from './Select'

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
  visibleNumber?: number
}

export const MultiSelect = ({
  id,
  label,
  error,
  name,
  value: initialValues,
  options,
  onChange,
  visibleNumber = 10,
  className,
  size = 'default',
  expanded,
  disabled,
}: Props) => {
  const [values, setValues] = useState<string[]>(isArray(initialValues) ? initialValues : [])
  const [collapsed, setCollapsed] = useState(true)
  const visibleSelectRef = useRef<HTMLDivElement | null>(null)
  const hiddenSelectRef = useRef<HTMLSelectElement | null>(null)

  const onOptionClick = (value: string) => {
    setValues((values) => {
      return values.includes(value) ? values.filter((item) => item !== value) : [...values, value]
    })
  }

  useEffect(() => {
    if (hiddenSelectRef && hiddenSelectRef.current) {
      hiddenSelectRef.current.dispatchEvent(new Event('change', { bubbles: true }))
    }
  }, [values])

  const onInputClick = () => setCollapsed((collapsed) => !collapsed)
  const onCloseClick = (value: string) => setValues((values) => values.filter((item) => item !== value))

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (visibleSelectRef && visibleSelectRef.current && !isChildOf(event.target, visibleSelectRef.current)) {
        setCollapsed(true)
      }
    }

    document.addEventListener('click', onClick)

    return () => document.removeEventListener('click', onClick)
  }, [])

  const selectedOptions = options.filter((option) => values.includes(option.value))

  const textClasses = getTextClasses(size)
  const inputPaddingClasses = getInputPaddingClasses(size)
  const optionPaddingClasses = getOptionPaddingClasses(size)
  const iconClasses = getIconClasses(size)
  const optionHeight = getOptionHeight(size)

  const inputClasses = cx(
    'focus:ring-1 ring-inset outline-none bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block',
    { 'text-gray-900 pointer-events-none': disabled},
    { 'ring-blue-500 border-blue-500': !collapsed },
    inputPaddingClasses,
  )

  return (
    <div className={cx('flex flex-col gap-1', expanded ? 'w-full' : 'w-56', className)}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <select
        ref={hiddenSelectRef}
        className="hidden"
        multiple
        name={name}
        value={values}
        onChange={onChange}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value} />
          )
        })}
      </select>
      <div className={textClasses} ref={visibleSelectRef}>
        <div id={id} className={cx('flex justify-between', inputClasses)} onClick={onInputClick}>
          <div className='flex gap-1 grow-0 flex-wrap'>
            {selectedOptions.map((option) => {
              return (
                <div
                  className="py-1 px-2 bg-blue-300 rounded-full flex flex-nowrap gap-2 items-center"
                  key={option.value}
                >
                  <span className="text-nowrap">{option.label}</span>
                  <XMarkIcon className='w-4 h-4 cursor-pointer' onClick={() => onCloseClick(option.value)} />
                </div>
              )
            })}
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
            {options.map((option) => {
              const selected = values.includes(option.value)
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
