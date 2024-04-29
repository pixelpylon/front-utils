import {Link} from 'react-router-dom'
import cx from 'classnames'

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
      <Link to={props.to} className={cx(props.className, 'cursor-pointer font-normal text-sm text-blue-700 hover:text-blue-500')}>
        {props.children}
      </Link>
    )
  }

  return (
    <div onClick={props.onClick} className={cx(props.className, 'cursor-pointer font-normal text-sm text-blue-700 hover:text-blue-500')}>
      {props.children}
    </div>
  )
}
