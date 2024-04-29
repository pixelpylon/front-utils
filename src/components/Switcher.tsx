import cx from 'classnames'
import {ChangeEvent, ReactNode, useRef, useState} from 'react'
import { Label } from './Label'

type Props = {
  name?: string
  leftLabel?: ReactNode
  rightLabel?: ReactNode
  checked?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Switcher = ({name, leftLabel, rightLabel, checked: initialChecked = false, onChange}: Props) => {
  const hiddenInputRef = useRef<HTMLInputElement>(null)

  const [checked, setChecked] = useState(initialChecked)

  const onClick = () => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.click()
      setChecked(hiddenInputRef.current.checked)
    }
  }

  return (
    <div className="flex gap-2 items-center">
      {leftLabel ? typeof leftLabel === 'string' ? <Label>{leftLabel}</Label> : leftLabel : null}

      <input
        name={name}
        type="checkbox"
        defaultChecked={initialChecked}
        onChange={onChange}
        className="hidden"
        ref={hiddenInputRef}
      />
      <div
        className={cx(
          'flex items-center w-11 h-6 rounded-full p-0.5 cursor-pointer',
          checked ? 'justify-end bg-blue-200' : 'justify-start bg-gray-200'
        )}
        onClick={onClick}
      >
        <div className="w-5 h-5 rounded-full bg-white" />
      </div>

      {rightLabel ? (
        typeof rightLabel === 'string' ? (
          <Label>{rightLabel}</Label>
        ) : (
          rightLabel
        )
      ) : null}
    </div>
  )
}
