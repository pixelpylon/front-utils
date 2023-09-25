import {Field} from 'react-final-form'
import {Input} from '../components'

type Props = {
  id?: string
  label?: string
  name: string
  type?: string
  disabled?: boolean
  expanded?: boolean
  spellCheck?: boolean
  className?: string
}

export const InputField = ({id, label, name, type, disabled, expanded, className, spellCheck}: Props) => {
  return (
    <Field
      type={type}
      name={name}
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
          />
        )
      }}
    />
  )
}
