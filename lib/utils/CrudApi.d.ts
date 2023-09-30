import { AxiosInstance } from 'axios';
import { ListParams, PaginatedListParams } from '@exp1/common-utils';
import { PaginatedListResponse } from '../types';
export declare class CrudApi<CreateParams, UpdateParams extends {
    id: string;
}, ListResponse extends unknown[], ItemResponse, CreateResponse, UpdateResponse> {
    protected readonly entityApiPath: string;
    protected readonly axiosInstance: AxiosInstance;
    constructor(entityApiPath: string, axiosInstance: AxiosInstance);
    list({ filters, ordering, limit }: ListParams): Promise<ListResponse>;
    paginatedList({ filters, ordering, limit, cursor }: PaginatedListParams): Promise<PaginatedListResponse<ListResponse>>;
    item(id: string): Promise<ItemResponse>;
    create(params: CreateParams): Promise<CreateResponse>;
    update(params: UpdateParams): Promise<UpdateResponse>;
    remove(id: string): Promise<void>;
}
