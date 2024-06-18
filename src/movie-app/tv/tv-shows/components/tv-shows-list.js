// TV Shows - List
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import useFetch from '../../../../common/hooks/useFetch';

// Icons
import RightArrowIcon from '../../../../icons/RightArrow';

// Components
import MovieCard from '../../../../components/common/movie-card';

const TvShowsList = ({listType}) => {

    const { data, loading } = useFetch(`/tv/${listType}`, 'data');
   
    const getTitle = useCallback((joinBy) => {
        return listType?.split('_').join(joinBy);
    }, [listType]);

    return (
        <React.Fragment>
            <div className="cf_movies-sec">

                <div className="cf_container">

                    <div className="cf_movies-sec__header">
                        <h3 className="cf_text-c">{getTitle(' ')} Shows</h3>

                        <Link to={`/tv-shows/${getTitle('-')}`} className="cf_movies-sec__header-view">
                            View All
                            <RightArrowIcon />
                        </Link>
                    </div>
                    
                    <div className="cf_movies-sec__group">
                        {
                            (data?.length !== 0 || loading) &&

                                data?.results?.slice(0, 5)?.map(movie => {
                                    return (
                                        <MovieCard movie={movie} key={movie?.id} loading={loading} showType="tv" type={listType} />
                                    )
                                })
                        }
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default TvShowsList;
