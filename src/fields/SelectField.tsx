import {Field} from 'react-final-form'
import React from 'react'
import {Select} from '../components'
import {SelectOption} from '../types'

type Props = {
  label?: string
  name: string
  options: SelectOption[]
  disabled?: boolean
  expanded?: boolean
  className?: string
}

export const SelectField = ({label, name, options, disabled, expanded, className}: Props) => {
  return (
    <Field
      name={name}
      type="select"
      render={({input}) => {
        return (
          <Select
            {...input}
            label={label}
            options={options}
            disabled={disabled}
            expanded={expanded}
            className={className}
          />
        )
      }}
    />
  )
}
