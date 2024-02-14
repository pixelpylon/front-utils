import {Field} from 'react-final-form'
import {SelectOptions} from '../types'
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
          />
        )
      }}
    />
  )
}
