import React from 'react'
import {StandardLink} from './StandardLink'

type Props = {
  to: string
}

export const EditLink = ({to}: Props) => {
  return (
    <StandardLink to={to} className="text-right">
      Edit
    </StandardLink>
  )
}
