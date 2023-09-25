import { EntityItemResponse, EntityListResponse, ListParams } from "@exp1/common-utils";
import { QueryOptions } from "../types";
import { InfiniteData, InfiniteQueryObserverResult } from "react-query";
type Params<Entity> = Omit<ListParams, 'cursor'> & {
    usePaginatedQuery: (params?: Omit<ListParams, 'cursor'>, options?: QueryOptions<InfiniteData<EntityListResponse<Entity>>>) => InfiniteQueryObserverResult<EntityListResponse<Entity>>;
    options?: QueryOptions<InfiniteData<EntityListResponse<Entity>>>;
};
export declare const useInfinitiveLoading: <Entity>({ limit, ordering, filters, usePaginatedQuery, options, }: Params<Entity>) => {
    data: EntityItemResponse<Entity>[] | null;
    quantity: number;
};
export {};
