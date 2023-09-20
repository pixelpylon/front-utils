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
  constructor(protected readonly entityName: string, protected readonly axiosInstance: AxiosInstance) {}

  async list(params: ListParams): Promise<ListResponse> {
    const result = await this.axiosInstance.get<ListResponse>(`/api/${this.entityName}`, {
      params: {
        ...params,
        filters: params.filters ? JSON.stringify(params.filters) : undefined,
        ordering: params.ordering ? JSON.stringify(params.ordering) : undefined,
      },
    })
    return result.data
  }

  async item(id: string): Promise<ItemResponse> {
    const result = await this.axiosInstance.get<ItemResponse>(`/api/${this.entityName}/${id}`)
    return result.data
  }

  async create(params: CreateParams): Promise<CreateResponse> {
    const result = await this.axiosInstance.post<CreateResponse>(`/api/${this.entityName}`, params)
    return result.data
  }

  async update(params: UpdateParams): Promise<UpdateResponse> {
    const result = await this.axiosInstance.patch<UpdateResponse>(`/api/${this.entityName}/${params.id}`, params)
    return result.data
  }

  async remove(id: string): Promise<void> {
    await this.axiosInstance.delete<unknown, AxiosResponse<unknown>>(`/api/${this.entityName}/${id}`)
  }
}
