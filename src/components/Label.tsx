import {Text} from './Text'

type Props = {
  htmlFor?: string
  children: string
  className?: string
}

export const Label = ({htmlFor, children, className}: Props) => {
  return (
    <Text tag="label" htmlFor={htmlFor} weight="semibold" className={className}>{children}</Text>
  )
}
