import { ListParams } from "@exp1/common-utils"
import { PaginatedListResponse, QueryOptions } from "../types"
import size from "lodash-es/size"
import debounce from "lodash-es/debounce"
import { useEffect } from "react"
import { InfiniteData, InfiniteQueryObserverResult } from "react-query"

type Params<ListResponse extends unknown[]> = ListParams & {
    usePaginatedListQuery: (
        params?: ListParams, 
        options?: QueryOptions<InfiniteData<PaginatedListResponse<ListResponse>>>
    ) => InfiniteQueryObserverResult<PaginatedListResponse<ListResponse>>
    options?: QueryOptions<InfiniteData<PaginatedListResponse<ListResponse>>>
}

export const useInfinitiveLoading = <ListResponse extends unknown[]>({
    limit = 50,
    ordering, 
    filters, 
    usePaginatedListQuery,
    options,
}: Params<ListResponse>) => {
    const paginatedListQuery = usePaginatedListQuery({limit, ordering, filters}, options)

    useEffect(() => {
        const handleScroll = debounce(() => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1) {
                return;
            }
    
            if (!paginatedListQuery.hasNextPage) {
                return 
            }
    
            paginatedListQuery.fetchNextPage()
        }, 100)

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [paginatedListQuery])

    if (!paginatedListQuery.data) {
        return {
            data: null,
            quantity: 0,
        }
    }

    const data = [] as unknown as ListResponse

    for (const page of paginatedListQuery.data.pages) {
        data.push(...page.list)
    }

    return {
        data,
        quantity: size(data),
    }
}