import capitalize from 'lodash-es/capitalize'
import {useMutation, useQuery} from 'react-query'
import {CrudApi} from './CrudApi'
import {QueryOptions} from '../types'
import {ToasterProvider} from '../providers'
import {BaseListParams} from '@exp1/common-utils'

export class CrudHooks<
  FilteredType,
  CreateParams,
  UpdateParams extends {id: string},
  ListResponse,
  ItemResponse,
  CreateResponse,
  UpdateResponse
> {
  constructor(
    private readonly entityName: string,
    private readonly crudApi: CrudApi<
      FilteredType,
      CreateParams,
      UpdateParams,
      ListResponse,
      ItemResponse,
      CreateResponse,
      UpdateResponse
    >
  ) {}

  useCreateMutation() {
    const add = ToasterProvider.useToasterMessageAdder()
    return useMutation<CreateResponse, unknown, CreateParams>((params: CreateParams) => this.crudApi.create(params), {
      onSuccess: () => {
        add({
          message: `${capitalize(this.entityName)} added`,
          type: 'success',
        })
      },
    })
  }

  useUpdateMutation() {
    const add = ToasterProvider.useToasterMessageAdder()
    return useMutation<UpdateResponse, unknown, UpdateParams>((params: UpdateParams) => this.crudApi.update(params), {
      onSuccess: () => {
        add({
          message: `${capitalize(this.entityName)} updated`,
          type: 'success',
        })
      },
    })
  }

  useRemoveMutation() {
    const add = ToasterProvider.useToasterMessageAdder()
    return useMutation<unknown, unknown, string>((id: string) => this.crudApi.remove(id), {
      onSuccess: () => {
        add({
          message: `${capitalize(this.entityName)} removed`,
          type: 'success',
        })
      },
    })
  }

  useItemQuery(id: string, options?: QueryOptions) {
    return useQuery<ItemResponse>([this.entityName, 'item', id], () => this.crudApi.item(id), options)
  }

  useListQuery(params: BaseListParams<FilteredType> = {}, options?: QueryOptions) {
    return useQuery<ListResponse>([this.entityName, 'list', params], () => this.crudApi.list(params), options)
  }
}
