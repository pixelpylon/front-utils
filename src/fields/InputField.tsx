import {Field} from 'react-final-form'
import {Input} from '../components'
import React from 'react'

type Props = {
  label?: string
  name: string
  type?: string
  disabled?: boolean
  expanded?: boolean
  spellCheck?: boolean
  className?: string
}

export const InputField = ({label, name, type, disabled, expanded, className, spellCheck}: Props) => {
  return (
    <Field
      type={type}
      name={name}
      render={({input}) => {
        return (
          <Input
            {...input}
            label={label}
            disabled={disabled}
            expanded={expanded}
            className={className}
            spellCheck={spellCheck}
          />
        )
      }}
    />
  )
}
