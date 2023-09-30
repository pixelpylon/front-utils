import { ListParams } from "@exp1/common-utils";
import { PaginatedListResponse, QueryOptions } from "../types";
import { InfiniteData, InfiniteQueryObserverResult } from "react-query";
type Params<ListResponse extends unknown[]> = ListParams & {
    usePaginatedListQuery: (params?: ListParams, options?: QueryOptions<InfiniteData<PaginatedListResponse<ListResponse>>>) => InfiniteQueryObserverResult<PaginatedListResponse<ListResponse>>;
    options?: QueryOptions<InfiniteData<PaginatedListResponse<ListResponse>>>;
};
export declare const useInfinitiveLoading: <ListResponse extends unknown[]>({ limit, ordering, filters, usePaginatedListQuery, options, }: Params<ListResponse>) => {
    data: null;
    quantity: number;
} | {
    data: ListResponse;
    quantity: number;
};
export {};
