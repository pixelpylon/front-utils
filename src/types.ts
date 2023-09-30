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

export type QueryOptions<ResponseData> = {
  enabled?: boolean
  keepPreviousData?: boolean
  refetchOnMount?: boolean
  onSuccess?: (data: ResponseData) => void
}

export type PaginatedListResponse<ListResponse extends unknown[]> = {
  list: ListResponse
  nextCursor?: string
}