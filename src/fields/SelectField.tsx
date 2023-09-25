import {Field} from 'react-final-form'
import {Select} from '../components'
import {SelectOption} from '../types'

type Props = {
  id?: string
  label?: string
  name: string
  options: SelectOption[]
  disabled?: boolean
  expanded?: boolean
  className?: string
}

export const SelectField = ({id, label, name, options, disabled, expanded, className}: Props) => {
  return (
    <Field
      name={name}
      type="select"
      render={({input}) => {
        return (
          <Select
            {...input}
            id={id}
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
