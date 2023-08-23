import { AxiosInstance } from 'axios';
import { BaseListParams } from '../types';
export declare class CrudApi<FilteredType, CreateParams, UpdateParams extends {
    id: string;
}, ListResponse, ItemResponse, CreateResponse, UpdateResponse> {
    protected readonly entityName: string;
    protected readonly axiosInstance: AxiosInstance;
    constructor(entityName: string, axiosInstance: AxiosInstance);
    list(params: BaseListParams<FilteredType>): Promise<ListResponse>;
    item(id: string): Promise<ItemResponse>;
    create(params: CreateParams): Promise<CreateResponse>;
    update(params: UpdateParams): Promise<UpdateResponse>;
    remove(id: string): Promise<void>;
}
