import { EntityItemResponse, EntityListResponse, ListParams } from "@exp1/common-utils"
import { QueryOptions } from "../types"
import size from "lodash-es/size"
import debounce from "lodash-es/debounce"
import { useEffect } from "react"
import { InfiniteData, InfiniteQueryObserverResult } from "react-query"

type Params<Entity> = Omit<ListParams, 'cursor'> & {
    usePaginatedQuery: (params?: Omit<ListParams, 'cursor'>, options?: QueryOptions<InfiniteData<EntityListResponse<Entity>>>) => InfiniteQueryObserverResult<EntityListResponse<Entity>>
    options?: QueryOptions<InfiniteData<EntityListResponse<Entity>>>
}

export const useInfinitiveLoading = <Entity>({
    limit = 50,
    ordering, 
    filters, 
    usePaginatedQuery,
    options,
}: Params<Entity>) => {
    const paginatedQuery = usePaginatedQuery({limit, ordering, filters}, options)

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
  
    const data = paginatedQuery.data ? paginatedQuery.data.pages.reduce((result: EntityItemResponse<Entity>[], {list}) => {
        result.push(...list)
        return result
    }, []) : null

    return {
        data,
        quantity: size(data),
    }
}