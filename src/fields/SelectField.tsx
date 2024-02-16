import {Field} from 'react-final-form'
import {Select} from '../components'
import {ControlSize, SelectOptions} from '../types'

type Props = {
  id?: string
  label?: string
  name: string
  options: SelectOptions
  disabled?: boolean
  expanded?: boolean
  className?: string
  size?: ControlSize
}

export const SelectField = ({id, label, name, options, disabled, expanded, className, size}: Props) => {
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
            size={size}
          />
        )
      }}
    />
  )
}
