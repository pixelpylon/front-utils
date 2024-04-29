import {Text} from './Text'
import {Link} from 'react-router-dom'

type LinkProps = {
  to: string
}

type ButtonProps = {
  onClick: () => void
}

type Props = (LinkProps | ButtonProps) & {
  children: string
  className?: string
}

export const StandardLink = (props: Props) => {
  if ('to' in props) {
    return (
      <Link to={props.to} className={props.className}>
        <Text color="blue">{props.children}</Text>
      </Link>
    )
  }

  return (
    <div onClick={props.onClick} className={props.className}>
      <Text color="blue">{props.children}</Text>
    </div>
  )
}
