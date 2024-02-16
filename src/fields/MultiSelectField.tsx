import {Field} from 'react-final-form'
import {ControlSize, SelectOptions} from '../types'
import {MultiSelect} from '../components'

type Props = {
  id?: string
  initialValue?: string[]
  label?: string
  name: string
  type?: string
  options: SelectOptions
  disabled?: boolean
  expanded?: boolean
  className?: string
  visibleNumber?: number
  size?: ControlSize
}

export const MultiSelectField = ({
  id,
  initialValue,
  label,
  name,
  options,
  disabled,
  expanded,
  className,
  visibleNumber,
  size,
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
            id={id}
            label={label}
            options={options}
            disabled={disabled}
            expanded={expanded}
            className={className}
            visibleNumber={visibleNumber}
            size={size}
          />
        )
      }}
    />
  )
}
