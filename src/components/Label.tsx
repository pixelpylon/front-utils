import {Text} from './Text'
import React from 'react'

type Props = {
  htmlFor?: string
  children: string
}

export const Label = (props: Props) => {
  return (
    <Text tag="label" htmlFor={props.htmlFor}>{props.children}</Text>
  )
}
