import { InfiniteData } from 'react-query';
import { CrudApi } from './CrudApi';
import { QueryOptions } from '../types';
import { ListParams } from '@exp1/common-utils';
export declare class CrudHooks<CreateParams, UpdateParams extends {
    id: string;
}, ListResponse extends {
    list: unknown[];
    nextCursor?: string;
}, ItemResponse, CreateResponse, UpdateResponse> {
    private readonly entityName;
    private readonly crudApi;
    constructor(entityName: string, crudApi: CrudApi<CreateParams, UpdateParams, ListResponse, ItemResponse, CreateResponse, UpdateResponse>);
    useCreateMutation(): import("react-query").UseMutationResult<CreateResponse, unknown, CreateParams, unknown>;
    useUpdateMutation(): import("react-query").UseMutationResult<UpdateResponse, unknown, UpdateParams, unknown>;
    useRemoveMutation(): import("react-query").UseMutationResult<unknown, unknown, string, unknown>;
    useItemQuery(id: string, options?: QueryOptions<ItemResponse>): import("react-query").UseQueryResult<ItemResponse, unknown>;
    useListQuery(params?: Omit<ListParams, 'cursor'>, options?: QueryOptions<ListResponse>): import("react-query").UseQueryResult<ListResponse, unknown>;
    usePaginatedQuery(params?: Omit<ListParams, 'cursor'>, options?: QueryOptions<InfiniteData<ListResponse>>): import("react-query").UseInfiniteQueryResult<ListResponse, unknown>;
}
