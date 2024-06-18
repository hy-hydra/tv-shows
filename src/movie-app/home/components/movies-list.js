// Movies - Movies List
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import useFetch from '../../../common/hooks/useFetch';

// Icons
import RightArrowIcon from '../../../icons/RightArrow';

// Components
import MovieCard from '../../../components/common/movie-card';

const MoviesList = ({listType}) => {

    const { data, loading } = useFetch(`/movie/${listType}`, 'data');
   
    const getTitle = useCallback((joinBy) => {
        return listType?.split('_').join(joinBy);
    }, [listType]);

    return (
        <React.Fragment>
            <div className="cf_movies-sec">

                <div className="cf_container">

                    <div className="cf_movies-sec__header">
                        <h3 className="cf_text-c">{getTitle(' ')} Movies</h3>

                        <Link to={`/movies/${getTitle('-')}`} className="cf_movies-sec__header-view">
                            View All
                            <RightArrowIcon />
                        </Link>
                    </div>
                    
                    <div className="cf_movies-sec__group">
                        {
                            (data?.length !== 0 || loading) &&

                                data?.results?.slice(0, 5)?.map(movie => {
                                    return (
                                        <MovieCard movie={movie} key={movie?.id} loading={loading} showType="movie" type={listType} />
                                    )
                                })
                        }
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default MoviesList;
