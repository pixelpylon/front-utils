import capitalize from 'lodash-es/capitalize'
import {InfiniteData, useInfiniteQuery, useMutation, useQuery} from 'react-query'
import {CrudApi} from './CrudApi'
import {PaginatedListResponse, QueryOptions} from '../types'
import {ToasterProvider} from '../providers'
import {ListParams} from '@exp1/common-utils'

export class CrudHooks<
  CreateParams,
  UpdateParams extends {id: string},
  ListResponse extends unknown[],
  ItemResponse,
  CreateResponse,
  UpdateResponse,
> {
  constructor(
    private readonly entityName: string,
    private readonly crudApi: CrudApi<
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

  useItemQuery(id: string, options?: QueryOptions<ItemResponse>) {
    return useQuery<ItemResponse>([this.entityName, 'item', id], () => this.crudApi.item(id), options)
  }

  useListQuery({filters, ordering, limit}: ListParams = {}, options?: QueryOptions<ListResponse>) {
    return useQuery<ListResponse>([this.entityName, 'list', filters, ordering, limit], () => this.crudApi.list({filters, ordering, limit}), options)
  }

  usePaginatedListQuery({filters, ordering, limit}: ListParams = {}, options?: QueryOptions<InfiniteData<PaginatedListResponse<ListResponse>>>) {
    return useInfiniteQuery<PaginatedListResponse<ListResponse>>({
      queryKey: [this.entityName, 'paginatedList', filters, ordering, limit],
      queryFn: ({pageParam: cursor}) => this.crudApi.paginatedList({filters, ordering, limit, cursor}),
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      ...options,
    })
  }
}
