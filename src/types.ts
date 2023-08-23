import {ChangeEventHandler} from 'react'

export type SelectOption = {
  value: string
  label: string
}

export type SelectSize = 'sm' | 'default' | 'lg'

export type SelectProps = {
  name?: string
  options: SelectOption[]
  value?: string
  onChange?: ChangeEventHandler<HTMLSelectElement>
  className?: string
  size?: SelectSize
  expanded?: boolean
  disabled?: boolean
  defaultValue?: string
}

export type AlertType = 'info' | 'danger' | 'success' | 'warning' | 'dark'

type Permissions<Role, Permission> = Record<keyof Role, Permission>

export type User<Role, Permission> = {
  id: string
  name: string
  email: string
  locations: string[]
  permissions: Permissions<Role, Permission>
}

