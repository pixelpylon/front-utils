import { ListParams } from "@exp1/common-utils";
import { QueryOptions } from "../types";
import { InfiniteQueryObserverResult } from "react-query";
type Params<ItemResponse> = Omit<ListParams, 'cursor'> & {
    usePaginatedQuery: (params?: Omit<ListParams, 'cursor'>, options?: QueryOptions) => InfiniteQueryObserverResult<{
        list: ItemResponse[];
        nextCursor?: string;
    }>;
};
export declare const useInfinitiveLoading: <ItemResponse>({ limit, ordering, filters, usePaginatedQuery }: Params<ItemResponse>) => {
    data: ItemResponse[] | null;
    quantity: number;
};
export {};
