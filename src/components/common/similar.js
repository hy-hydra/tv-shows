// Movie Details - Similar Movies
import React from 'react';

import useFetch from '../../common/hooks/useFetch';
import MovieCard from './movie-card';

const SimilarMovies = ({movieId, type = 'movie'}) => {
        
    const { data, loading } = useFetch(`/${type}/${movieId}/similar`, 'data');
   
    return (
        <React.Fragment>
            <div className="cf_movies-sec">
                <div className="cf_container">

                    <div className="cf_movies-sec__header">
                        <h3>Similar {type === 'movie' ? 'Movies' : 'Shows'}</h3>
                    </div>
                    
                    <div className="cf_movies-sec__group">
                        {
                            (data?.length !== 0 || loading) &&

                                data?.results?.slice(0, 5)?.map(movie => {
                                    return (
                                        <MovieCard movie={movie} key={movie?.id} loading={loading} showType={type} type="similar" />
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SimilarMovies;
