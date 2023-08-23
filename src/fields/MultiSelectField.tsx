import {Field} from 'react-final-form'
import {SelectOption} from '../types'
import {MultiSelect} from '../components'
import React from 'react'

type Props = {
  initialValue?: string[]
  label?: string
  name: string
  type?: string
  options: SelectOption[]
  disabled?: boolean
  expanded?: boolean
  className?: string
  visibleNumber?: number
}

export const MultiSelectField = ({
  initialValue,
  label,
  name,
  options,
  disabled,
  expanded,
  className,
  visibleNumber,
}: Props) => {
  return (
    <Field
      initialValue={initialValue}
      name={name}
      type="select"
      render={({input}) => {
        return (
          <MultiSelect
            {...input}
            label={label}
            options={options}
            disabled={disabled}
            expanded={expanded}
            className={className}
            visibleNumber={visibleNumber}
          />
        )
      }}
    />
  )
}
