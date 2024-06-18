
import React, { useMemo, useState } from 'react';
import useFetch from '../../../common/hooks/useFetch';

// Components
import MovieCard from '../../../components/common/movie-card';
import Pagination from '../../../components/utilities/pagination';

const TVShowsList = ({listType}) => {
    
    const [page, setPage] = useState(1);

    const { data, loading } = useFetch(`/tv/${listType}`, 'data', `&page=${page}`);

    const getTitle = useMemo(() => {
        return listType?.split('_').join(' ');
    }, [listType]);

    const onPageChange = page => {
        setPage(page);
    }

    return (
        <React.Fragment>
            <div className="cf_home">

                <div className="cf_movies-sec">

                    <div className="cf_container">

                        <div className="cf_movies-sec__header">
                            <h3 className="cf_text-c">{getTitle} Shows</h3>
                        </div>
                        
                        <div className="cf_movies-sec__group">
                            {
                                (data?.length !== 0 || loading) &&

                                    data?.results?.map(movie => {
                                        return (
                                            <MovieCard movie={movie} key={movie?.id} loading={loading} showType="tv" type={listType}  />
                                        )
                                    })
                            }
                        </div>

                        <Pagination onPageChange={onPageChange} page={data?.page} pageCount={data?.total_results} />
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TVShowsList;