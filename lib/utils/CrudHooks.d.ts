import { InfiniteData } from 'react-query';
import { CrudApi } from './CrudApi';
import { PaginatedListResponse, QueryOptions } from '../types';
import { ListParams } from '@exp1/common-utils';
export declare class CrudHooks<CreateParams, UpdateParams extends {
    id: string;
}, ListResponse extends unknown[], ItemResponse, CreateResponse, UpdateResponse> {
    private readonly entityName;
    private readonly crudApi;
    constructor(entityName: string, crudApi: CrudApi<CreateParams, UpdateParams, ListResponse, ItemResponse, CreateResponse, UpdateResponse>);
    useCreateMutation(): import("react-query").UseMutationResult<CreateResponse, unknown, CreateParams, unknown>;
    useUpdateMutation(): import("react-query").UseMutationResult<UpdateResponse, unknown, UpdateParams, unknown>;
    useRemoveMutation(): import("react-query").UseMutationResult<unknown, unknown, string, unknown>;
    useItemQuery(id: string, options?: QueryOptions<ItemResponse>): import("react-query").UseQueryResult<ItemResponse, unknown>;
    useListQuery({ filters, ordering, limit }?: ListParams, options?: QueryOptions<ListResponse>): import("react-query").UseQueryResult<ListResponse, unknown>;
    usePaginatedListQuery({ filters, ordering, limit }?: ListParams, options?: QueryOptions<InfiniteData<PaginatedListResponse<ListResponse>>>): import("react-query").UseInfiniteQueryResult<PaginatedListResponse<ListResponse>, unknown>;
}
