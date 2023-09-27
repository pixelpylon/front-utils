import {AxiosInstance, AxiosResponse} from 'axios'
import {ListParams} from '@exp1/common-utils'

export class CrudApi<
  CreateParams,
  UpdateParams extends {id: string},
  ListResponse,
  ItemResponse,
  CreateResponse,
  UpdateResponse
> {
  constructor(protected readonly entityApiPath: string, protected readonly axiosInstance: AxiosInstance) {}

  async list(params: ListParams): Promise<ListResponse> {
    const result = await this.axiosInstance.get<ListResponse>(this.entityApiPath, {
      params: {
        ...params,
        filters: params.filters ? JSON.stringify(params.filters) : undefined,
        ordering: params.ordering ? JSON.stringify(params.ordering) : undefined,
      },
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
