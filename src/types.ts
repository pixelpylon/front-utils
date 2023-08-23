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

type FilterValue = string | number | boolean
type NumberFilter = {
  value: number
  op: 'eq' | 'ge' | 'le'
}

type StringFilter = {
  value: string
  op: 'eq'
}

type BooleanFilter = {
  value: string | number
  op: 'is'
}

type ListFilter = {
  value: FilterValue[]
  op: 'in'
}

type Filter = FilterValue | FilterValue[] | NumberFilter | StringFilter | BooleanFilter | ListFilter

type Filters<FilteredType> = {[key in keyof Partial<FilteredType> | string]: Filter}

export type BaseListParams<FilteredType> = {
  page?: number
  limit?: number
  filters?: Filters<FilteredType>
}

export type QueryOptions = {
  enabled?: boolean
  keepPreviousData?: boolean
  onSuccess?: (data: any) => void
}
