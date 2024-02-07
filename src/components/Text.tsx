import cx from "classnames";

type Color = 'default' | 'green' | 'red' | 'blue'
type Size = 'sm' | 'default' | 'lg'
type Weight = 'normal' | 'medium' | 'semibold'

type Props = {
  children: string
  size?: Size
  className?: string
  tag?: string
  color?: Color
  htmlFor?: string
  weight?: Weight
}

const getColorClasses = (color: Color) => {
  switch (color) {
    case 'default':
      return 'text-black'
    case 'green':
      return 'text-green-700'
    case 'red':
      return 'text-red-700'
    case 'blue':
      return 'text-blue-700'
  }
}

const getSizeClasses = (size: Size) => {
  switch (size) {
    case 'sm':
      return 'text-xs'
    case 'default':
      return 'text-sm'
    case 'lg':
      return 'text-base'
  }
}

const getWeightClasses = (weight: Weight) => {
  switch (weight) {
    case 'normal':
      return 'font-normal'
    case 'medium':
      return 'font-medium'
    case 'semibold':
      return 'font-semibold'
  }
}

export const Text = ({ tag = 'div', color = 'default', size = 'default', weight = 'normal',children, className, ...other }: Props) => {
  const Component = tag as keyof JSX.IntrinsicElements
  const colorClasses = getColorClasses(color)
  const sizeClasses = getSizeClasses(size)
  const weightClasses = getWeightClasses(weight)
  const resultClasses = cx(sizeClasses, colorClasses, weightClasses, className)
  return (
    <Component className={resultClasses} {...other}>
      {children}
    </Component>
  )
}
