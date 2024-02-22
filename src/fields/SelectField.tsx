import {Field} from 'react-final-form'
import {Select} from '../components'
import {ControlSize, SelectOptions, SelectOption} from '../types'

type Props = {
  id?: string
  label?: string
  name: string
  options: SelectOptions
  disabled?: boolean
  expanded?: boolean
  className?: string
  size?: ControlSize
  notSelectedOption?: boolean | SelectOption
}

export const SelectField = ({name, ...other}: Props) => {
  return (
    <Field
      name={name}
      type="select"
      render={({input}) => {
        return (
          <Select
            {...input}
            {...other}
          />
        )
      }}
    />
  )
}
