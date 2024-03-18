import {Field} from 'react-final-form'
import { TextArea, TextAreaProps } from '../components/TextArea'

type Props = Omit<TextAreaProps, 'value' | 'onChange' | 'error' | 'name'> & {
  name: string
}

export const TextAreaField = ({name, ...other}: Props) => {
  return (
    <Field
      type='textarea'
      name={name}
      render={(props) => {
        return (
          <TextArea
            {...props.input}
            {...other}
          />
        )
      }}
    />
  )
}
