import { CrudApi } from './CrudApi';
import { QueryOptions } from '../types';
import { BaseListParams } from '@exp1/common-utils';
export declare class CrudHooks<FilteredType, CreateParams, UpdateParams extends {
    id: string;
}, ListResponse extends {
    list: unknown[];
    nextCursor?: string;
}, ItemResponse, CreateResponse, UpdateResponse> {
    private readonly entityName;
    private readonly crudApi;
    constructor(entityName: string, crudApi: CrudApi<FilteredType, CreateParams, UpdateParams, ListResponse, ItemResponse, CreateResponse, UpdateResponse>);
    useCreateMutation(): import("react-query/types/").UseBaseMutationResult<CreateResponse, unknown, CreateParams, unknown>;
    useUpdateMutation(): import("react-query/types/").UseBaseMutationResult<UpdateResponse, unknown, UpdateParams, unknown>;
    useRemoveMutation(): import("react-query/types/").UseBaseMutationResult<unknown, unknown, string, unknown>;
    useItemQuery(id: string, options?: QueryOptions): import("react-query/types/").QueryObserverResult<ItemResponse, unknown>;
    useListQuery(params?: BaseListParams<FilteredType>, options?: QueryOptions): import("react-query/types/").QueryObserverResult<ListResponse, unknown>;
    usePaginatedQuery(params?: Omit<BaseListParams<FilteredType>, 'cursor'>, options?: QueryOptions): import("react-query/types/").InfiniteQueryObserverResult<ListResponse, unknown>;
}
