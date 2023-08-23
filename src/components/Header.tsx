import cx from "classnames";
import React from 'react'

// type Color = 'default' | 'green' | 'red'
type Size = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type Props = {
  children: string
  size: Size
  className?: string
}

const getSizeClasses = (size: Size) => {
  switch (size) {
    case 'h1':
      return 'text-6xl'
    case 'h2':
      return 'text-5xl'
    case 'h3':
      return 'text-4xl'
    case 'h4':
      return 'text-3xl'
    case 'h5':
      return 'text-2xl'
    case 'h6':
      return 'text-xl'
  }
}

export const Header = ({size, children, className}: Props) => {
  const Component = size as keyof JSX.IntrinsicElements
  const sizeClasses = getSizeClasses(size)
  const resultClasses = cx(sizeClasses, className)
  return (
    <Component className={resultClasses}>
      {children}
    </Component>
  )
}

type HeaderProps = {
  children: string
  className?: string
}

Header.H1 = ({children, className}: HeaderProps) => {
  return <Header size='h1' className={className}>{children}</Header>
}

Header.H2 = ({children, className}: HeaderProps) => {
  return <Header size='h2' className={className}>{children}</Header>
}

Header.H3 = ({children, className}: HeaderProps) => {
  return <Header size='h3' className={className}>{children}</Header>
}

Header.H4 = ({children, className}: HeaderProps) => {
  return <Header size='h4' className={className}>{children}</Header>
}

Header.H5 = ({children, className}: HeaderProps) => {
  return <Header size='h5' className={className}>{children}</Header>
}

Header.H6 = ({children, className}: HeaderProps) => {
  return <Header size='h6' className={className}>{children}</Header>
}
