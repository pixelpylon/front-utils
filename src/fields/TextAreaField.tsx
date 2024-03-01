import {Field} from 'react-final-form'
import { ControlSize } from '../types'
import { TextArea } from '../components/TextArea'

type Props = {
  id?: string
  label?: string
  name: string
  type?: string
  disabled?: boolean
  expanded?: boolean
  spellCheck?: boolean
  className?: string
  size?: ControlSize
}

export const TextAreaField = ({id, label, name, type, disabled, expanded, className, spellCheck, size}: Props) => {
  return (
    <Field
      type={type}
      name={name}
      render={({input}) => {
        return (
          <TextArea
            {...input}
            id={id}
            label={label}
            disabled={disabled}
            expanded={expanded}
            className={className}
            spellCheck={spellCheck}
            size={size}
          />
        )
      }}
    />
  )
}
