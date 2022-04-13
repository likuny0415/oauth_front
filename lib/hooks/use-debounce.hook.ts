import { useEffect, useState } from "react"

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebounced] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounced(value);
        }, delay);
        
        return () => {
            clearTimeout(handler);
        }
    }, [value, delay]);

    return debouncedValue
}

export default useDebounce