import {Field} from 'react-final-form'
import {Input} from '../components'
import { ReactNode } from 'react'

type Props = {
  id?: string
  label?: string
  name: string
  type?: string
  disabled?: boolean
  expanded?: boolean
  spellCheck?: boolean
  className?: string
  min?: number
  max?: number
  parse?: (value: any) => any
}

export const InputField = ({id, label, name, type, disabled, expanded, className, spellCheck, min, max, parse}: Props) => {
  return (
    <Field
      type={type}
      name={name}
      parse={parse}
      render={({input}) => {
        return (
          <Input
            {...input}
            id={id}
            label={label}
            disabled={disabled}
            expanded={expanded}
            className={className}
            spellCheck={spellCheck}
            min={min}
            max={max}
          />
        )
      }}
    />
  )
}
