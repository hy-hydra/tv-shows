// Use Fetch Hook
import { useState, useEffect } from 'react';

import axios from 'axios';

const useFetch = (url, key, queryParams) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setData(null);
        setError(null);

        const source = axios.CancelToken.source();
        
        let API_URL = `${process.env.REACT_APP_TMDB_API}${url}?api_key=${process.env.REACT_APP_TMDB_KEY}`;
        
        API_URL += queryParams ? `&${queryParams}` : '';

        axios.get(API_URL, { cancelToken: source.token })
        .then(res => {
            setLoading(false);
            if(res) {
                // console.log('res', res);
                setData(res[key] || res);
            }
        })
        .catch(err => {
            setLoading(false);
            setError(err);
        })
        return () => {
            source.cancel();
        }
    }, [url, queryParams]);

    return { data, loading, error };
}

export default useFetch;