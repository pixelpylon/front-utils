import { ListParams } from "@exp1/common-utils"
import { QueryOptions } from "../types"
import size from "lodash-es/size"
import debounce from "lodash-es/debounce"
import { useEffect } from "react"
import { InfiniteQueryObserverResult } from "react-query"

type Params<ItemResponse> = Omit<ListParams, 'cursor'> & {
    usePaginatedQuery: (params?: Omit<ListParams, 'cursor'>, options?: QueryOptions) => InfiniteQueryObserverResult<{list: ItemResponse[], nextCursor?: string}>
}

export const useInfinitiveLoading = <ItemResponse>({
    limit = 50,
    ordering, 
    filters, 
    usePaginatedQuery
}: Params<ItemResponse>) => {
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