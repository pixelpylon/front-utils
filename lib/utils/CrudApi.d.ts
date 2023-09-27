import { AxiosInstance } from 'axios';
import { ListParams } from '@exp1/common-utils';
export declare class CrudApi<CreateParams, UpdateParams extends {
    id: string;
}, ListResponse, ItemResponse, CreateResponse, UpdateResponse> {
    protected readonly entityApiPath: string;
    protected readonly axiosInstance: AxiosInstance;
    constructor(entityApiPath: string, axiosInstance: AxiosInstance);
    list(params: ListParams): Promise<ListResponse>;
    item(id: string): Promise<ItemResponse>;
    create(params: CreateParams): Promise<CreateResponse>;
    update(params: UpdateParams): Promise<UpdateResponse>;
    remove(id: string): Promise<void>;
}
