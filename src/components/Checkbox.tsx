import cx from 'classnames'
import { ChangeEventHandler, useRef, useState } from 'react'
import { Label } from './Label'
import { Text } from './Text'
import Icon from '@mdi/react'
import { mdiCheckboxBlankOutline, mdiCheckboxMarked } from '@mdi/js'

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
      return 'text-blue-500'
    case 'green':
      return 'text-green-500'
    case 'red':
      return 'text-red-500'
  }
}

const getSizeClasses = (size: Size) => {
  switch (size) {
    case 'sm':
      return 'w-5 h-5'
    case 'default':
      return 'w-6 h-6'
    case 'lg':
      return 'w-7 h-7'
  }
}

export const Checkbox = ({
  id,
  label,
  error,
  color = 'default',
  size = 'default',
  name,
  checked: initialChecked = false,
  onChange,
  className,
  disabled,
}: Props) => {
  const hiddenInputRef = useRef<HTMLInputElement>(null)
  const [checked, setChecked] = useState(initialChecked)

  const colorClasses = getColorClasses(color)
  const sizeClasses = getSizeClasses(size)
  const resultClassName = cx(
    'bg-transparent cursor-pointer flex items-center justify-center',
    colorClasses,
    sizeClasses,
    className,
    {"opacity-70": !checked}
  )

  const onClick = () => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.click()
      setChecked(hiddenInputRef.current.checked)
    }
  }

  return (
    <div className={cx('flex flex-col gap-1', className)}>
      <div className="flex gap-1 items-center cursor-pointer select-none" onClick={onClick}>
        <input
          id={id}
          defaultChecked={initialChecked}
          type="checkbox"
          name={name}
          className='hidden'
          onChange={onChange}
          disabled={disabled}
          ref={hiddenInputRef}
        />
        <div className={resultClassName}>
          {checked ? <Icon path={mdiCheckboxMarked} /> : <Icon path={mdiCheckboxBlankOutline} />}
        </div>  
        {label && <Label htmlFor={id} className="cursor-pointer">{label}</Label>}
      </div>
      {error && <Text color="red">{error}</Text>}
    </div>
  )
}
