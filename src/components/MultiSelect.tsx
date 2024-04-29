import cx from 'classnames'
import { CSSProperties, ChangeEventHandler, useEffect, useRef, useState } from 'react'
import { Label } from './Label'
import { Text } from './Text'
import { ControlSize, SelectOptions } from '../types'
import Icon from '@mdi/react'
import { mdiChevronDown, mdiClose } from '@mdi/js'
import { isArray } from 'lodash-es'
import { isChildOf } from '../utils/isChildOf'
import { getControlClasses, getDistances, getIconClasses, getInputPaddingClasses, getOptionHeight, getOptionPaddingClasses, getTextClasses } from './Select'
import { normalizeOptions } from '../utils/normalizeOptions'

type Props = {
  id?: string
  label?: string
  error?: string
  name?: string
  options: SelectOptions
  value?: string[]
  onChange?: ChangeEventHandler<HTMLSelectElement>
  className?: string
  size?: ControlSize
  expanded?: boolean
  disabled?: boolean
  visibleNumber?: number
  hideSeparator?: boolean
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
  hideSeparator = false
}: Props) => {
  const normalizedOptions = normalizeOptions(options)
  const [values, setValues] = useState<string[]>(isArray(initialValues) ? initialValues : [])
  const [prevValues, setPrevValues] = useState(values)
  const [collapsed, setCollapsed] = useState(true)
  const [optionsStyles, setOptionsStyles] = useState<CSSProperties>({})
  const visibleSelectRef = useRef<HTMLDivElement | null>(null)
  const hiddenSelectRef = useRef<HTMLSelectElement | null>(null)

  const onOptionClick = (value: string) => {
    setValues((values) => {
      return values.includes(value) ? values.filter((item) => item !== value) : [...values, value]
    })
  }

  useEffect(() => {
    if (hiddenSelectRef && hiddenSelectRef.current) {
      if (values !== prevValues) {
        hiddenSelectRef.current.dispatchEvent(new Event('change', { bubbles: true }))
      }
      setPrevValues(values)
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

  const selectedOptions = normalizedOptions.filter((option) => values.includes(option.value))

  const textClasses = getTextClasses(size)
  const inputPaddingClasses = getInputPaddingClasses(size)
  const optionPaddingClasses = getOptionPaddingClasses(size)
  const iconClasses = getIconClasses(size)
  const optionHeight = getOptionHeight(size)
  const controlClasses = getControlClasses(size, hideSeparator)

  const inputClasses = cx(
    'ring-inset outline-none bg-transparent border border-gray-300 text-gray-900 rounded-lg block',
    { '!text-gray-500 pointer-events-none !bg-gray-50': disabled },
    { '!ring-1 !ring-blue-500 !border-blue-500': !collapsed },
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
  }, [normalizedOptions, visibleSelectRef.current])

  return (
    <div className={cx('flex flex-col gap-1 select-none', expanded ? 'w-full' : 'w-56', className)}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <select
        ref={hiddenSelectRef}
        className="hidden"
        multiple
        name={name}
        value={values}
        onChange={onChange}
      >
        {normalizedOptions.map((option) => {
          return (
            <option key={option.value} value={option.value} />
          )
        })}
      </select>
      <div className={textClasses} ref={visibleSelectRef}>
        <div id={id} className={cx('flex justify-between', inputClasses)} onClick={onInputClick}>
          <div className='flex gap-1 grow-0 flex-wrap'>
            {selectedOptions.length === 0 && (
              <span className="text-nowrap italic text-gray-500 py-1 px-2">None</span>
            )}
            {selectedOptions.length > 0 && selectedOptions.map((option) => {
              return (
                <div
                  className="py-1 px-2 bg-blue-300 rounded-full flex flex-nowrap gap-2 items-center"
                  key={option.value}
                >
                  <span className="text-nowrap">{option.label}</span>
                  <div onClick={() => onCloseClick(option.value)}>
                    <Icon path={mdiClose} className='w-4 h-4 cursor-pointer' />
                  </div>
                </div>
              )
            })}
          </div>
          <div className={controlClasses}>
            <Icon path={mdiChevronDown} className={cx(iconClasses, 'cursor-pointer')} />
          </div>
        </div>
        <div className={cx("relative w-full", { 'hidden': collapsed })}>
          <ul
            className="flex flex-col absolute w-full z-10 bg-white divide-y divide-gray-100 rounded-lg shadow block py-2 overflow-y-auto"
            style={optionsStyles}
          >
            {normalizedOptions.map((option) => {
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
