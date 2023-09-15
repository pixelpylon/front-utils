import { BaseListParams } from "@exp1/common-utils"
import { QueryOptions } from "../types"
import size from "lodash-es/size"
import debounce from "lodash-es/debounce"
import { useEffect } from "react"
import { InfiniteQueryObserverResult } from "react-query"

type Params<FilteredType, ItemResponse> = BaseListParams<FilteredType> & {
    usePaginatedQuery: (params?: BaseListParams<FilteredType>, options?: QueryOptions) => InfiniteQueryObserverResult<{list: ItemResponse[], nextCursor?: string}>
}

export const useInfinitiveLoading = <FilteredType, ItemResponse>({
    limit = 50,
    ordering, 
    filters, 
    usePaginatedQuery
}: Params<FilteredType, ItemResponse>) => {
    const paginatedQuery = usePaginatedQuery({limit, ordering, filters})

    useEffect(() => {
        const handleScroll = debounce(() => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
                return;
            }
    
            if (!paginatedQuery.hasNextPage) {
                return 
            }
    
            paginatedQuery.fetchNextPage()
        }, 100)

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [paginatedQuery])
  
    const data = paginatedQuery.data ? paginatedQuery.data.pages.reduce((result: ItemResponse[], {list}) => {
        result.push(...list)
        return result
    }, []) : null

    return {
        data,
        quantity: size(data),
    }
}