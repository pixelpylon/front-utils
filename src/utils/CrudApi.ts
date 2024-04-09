import { AxiosInstance, AxiosResponse } from 'axios'
import { ListParams, PaginatedListParams } from '@exp1/common-utils'
import { PaginatedListResponse } from '../types'

export class CrudApi<
  CreateParams,
  UpdateParams extends { id: string },
  ListResponse extends unknown[],
  ItemResponse,
  CreateResponse,
  UpdateResponse
> {
  constructor(protected readonly entityApiPath: string, protected readonly axiosInstance: AxiosInstance) { }

  async list({ filters, ordering, limit }: ListParams): Promise<ListResponse> {
    const result = await this.axiosInstance.get<PaginatedListResponse<ListResponse>>(this.entityApiPath, {
      params: { q: JSON.stringify({ limit, filters, ordering }) },
    })
    return result.data.list
  }

  async paginatedList({ filters, ordering, limit, cursor }: PaginatedListParams): Promise<PaginatedListResponse<ListResponse>> {
    const result = await this.axiosInstance.get<PaginatedListResponse<ListResponse>>(this.entityApiPath, {
      params: { q: JSON.stringify({ limit, filters, ordering, cursor }) },
    })
    return result.data
  }

  async item(id: string): Promise<ItemResponse> {
    const result = await this.axiosInstance.get<ItemResponse>(`${this.entityApiPath}/${id}`)
    return result.data
  }

  async create(params: CreateParams): Promise<CreateResponse> {
    const result = await this.axiosInstance.post<CreateResponse>(this.entityApiPath, params)
    return result.data
  }

  async update(params: UpdateParams): Promise<UpdateResponse> {
    const result = await this.axiosInstance.patch<UpdateResponse>(`${this.entityApiPath}/${params.id}`, params)
    return result.data
  }

  async remove(id: string): Promise<void> {
    await this.axiosInstance.delete<unknown, AxiosResponse<unknown>>(`${this.entityApiPath}/${id}`)
  }
}
