import { useEffect, useState } from "react";

export function useFetch(fetchFn, errorMessage, initialValue) {
    const [isFetching, setIsFetching] = useState()
    const [error, setError] = useState()
    const [fetchedData, setFetchData] = useState(initialValue)

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const data = await fetchFn();
                setFetchData(data);
            setIsFetching(false);

            } catch (error) {
                setError({
                    message:
                        error.message || errorMessage,
                });
                setIsFetching(false);
            
            }

        }

        fetchData();
    }, [fetchFn, errorMessage]);

    return {
        isFetching,
        fetchedData,
        setFetchData,
        error
    }
}