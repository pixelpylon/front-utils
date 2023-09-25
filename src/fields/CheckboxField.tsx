import {Field} from 'react-final-form'
import {Checkbox} from '../components'

type Props = {
  id?: string
  label?: string
  name: string
  disabled?: boolean
  className?: string
}

export const CheckboxField = ({id, label, name, disabled, className}: Props) => {
  return (
    <Field
      type="checkbox"
      name={name}
      render={({input}) => {
        return (
          <Checkbox
            {...input}
            id={id}
            label={label}
            disabled={disabled}
            className={className}
          />
        )
      }}
    />
  )
}
