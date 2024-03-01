import { InfiniteData, useInfiniteQuery, useMutation, useQuery } from 'react-query'
import { CrudApi } from './CrudApi'
import { PaginatedListResponse, QueryOptions } from '../types'
import { ToasterProvider } from '../providers'
import { ListParams } from '@exp1/common-utils'
import {omit} from 'lodash-es'

type WithAdditionalQueryKeyPart<T> = T & {additionalQueryKeyPart?: any}

export class CrudHooks<
  CreateParams,
  UpdateParams extends { id: string },
  ListResponse extends unknown[],
  ItemResponse,
  CreateResponse,
  UpdateResponse,
  CrudApiInstance extends CrudApi<
    CreateParams,
    UpdateParams,
    ListResponse,
    ItemResponse,
    CreateResponse,
    UpdateResponse
  > = CrudApi<
    CreateParams,
    UpdateParams,
    ListResponse,
    ItemResponse,
    CreateResponse,
    UpdateResponse
  >
> {
  constructor(
    protected readonly entityKey: string,
    protected readonly entityName: string,
    protected readonly crudApi: CrudApiInstance,
  ) { }

  useCreateMutation() {
    const add = ToasterProvider.useToasterMessageAdder()
    return useMutation<CreateResponse, unknown, CreateParams>((params: CreateParams) => this.crudApi.create(params), {
      onSuccess: () => {
        add({
          message: `${this.entityName} added`,
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
          message: `${this.entityName} updated`,
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
          message: `${this.entityName} removed`,
          type: 'success',
        })
      },
    })
  }

  useItemQuery(id: string, options?: QueryOptions<ItemResponse>) {
    return useQuery<ItemResponse>([this.entityKey, 'item', id], () => this.crudApi.item(id), options)
  }

  useListQuery({ filters, ordering, limit }: ListParams = {}, options?: WithAdditionalQueryKeyPart<QueryOptions<ListResponse>>) {
    return useQuery<ListResponse>(
      [this.entityKey, 'list', filters, ordering, limit, options?.additionalQueryKeyPart], 
      () => this.crudApi.list({ filters, ordering, limit }), 
      omit(options, 'additionalQueryKeyPart')
    )
  }

  usePaginatedListQuery({ filters, ordering, limit }: ListParams = {}, options?: WithAdditionalQueryKeyPart<QueryOptions<InfiniteData<PaginatedListResponse<ListResponse>>>>) {
    return useInfiniteQuery<PaginatedListResponse<ListResponse>>({
      queryKey: [this.entityKey, 'paginatedList', filters, ordering, limit, options?.additionalQueryKeyPart],
      queryFn: ({ pageParam: cursor }) => this.crudApi.paginatedList({ filters, ordering, limit, cursor }),
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      ...omit(options, 'additionalQueryKeyPart'),
    })
  }
}
