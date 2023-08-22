import {Text} from './Text'
import React from 'react'

type Props = {
  children: string
}

export const Label = ({children}: Props) => {
  return (
    <Text tag="label">{children}</Text>
  )
}
