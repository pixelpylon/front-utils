import {Text} from './Text'
import React from 'react'

type Props = {
  for?: string
  children: string
}

export const Label = (props: Props) => {
  return (
    <Text tag="label" for={props.for}>{props.children}</Text>
  )
}
