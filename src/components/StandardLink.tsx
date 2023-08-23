import React from 'react'
import {Text} from './Text'
import {Link} from 'react-router-dom'

type Props = {
  to: string
  children: string
  className?: string
}

export const StandardLink = ({to, children, className}: Props) => {
  return (
    <Link to={to} className={className}>
      <Text color="blue">{children}</Text>
    </Link>
  )
}
