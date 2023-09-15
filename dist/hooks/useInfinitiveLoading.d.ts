import { BaseListParams } from "@exp1/common-utils";
import { QueryOptions } from "../types";
import { InfiniteQueryObserverResult } from "react-query";
declare type Params<FilteredType, ItemResponse> = BaseListParams<FilteredType> & {
    usePaginatedQuery: (params?: BaseListParams<FilteredType>, options?: QueryOptions) => InfiniteQueryObserverResult<{
        list: ItemResponse[];
        nextCursor?: string;
    }>;
};
export declare const useInfinitiveLoading: <FilteredType, ItemResponse>({ limit, ordering, filters, usePaginatedQuery }: Params<FilteredType, ItemResponse>) => {
    data: ItemResponse[] | null;
    quantity: number;
};
export {};
