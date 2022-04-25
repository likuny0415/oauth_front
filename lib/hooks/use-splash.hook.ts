import useDebounce from "./use-debounce.hook";
import useSWRInfinite from 'swr/infinite'
import fetcher from "../utils/fetcher";
import { useEffect } from "react";

export default function useUnsplash({ isVisible, query = "forest" }) {
    const searchValue = useDebounce(query, 1000);
    const { data, error, size, setSize } = useSWRInfinite(
        (index) => `/api/unsplash?page=${index + 1}&query=${searchValue}`,
        fetcher
    )
    

    const isError = !!error
    const isLoading = !data && !isError;
    const isEmpty = data?.[0]?.length === 0;
    const isLoadingMore = isLoading || (size > 0 && data && typeof data[size - 1] === 'undefined');

    const isReachingEnd = isEmpty || (data && data?.[data.length - 1]?.length <= size);

    useEffect(() => {
    if (!isLoading && !isLoadingMore && !isReachingEnd && isVisible) {
      setSize(size + 1);
    }
  }, [isVisible, isReachingEnd]);
  
  return {
      data: data?.map((item) => item?.results)?.flat(1),
      isError,
      isLoading,
      isLoadingMore,
      isReachingEnd
  }
}