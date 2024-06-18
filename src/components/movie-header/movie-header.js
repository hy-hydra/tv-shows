// Main Header
import React from 'react';
import { convertMinsToHrsMins, formatDate } from '../../common/functions';

import useFetch from '../../common/hooks/useFetch';

const MovieHeader = () => {

    const { data } = useFetch(`/movie/now_playing`, 'data');
    const { data: movie, loading } = useFetch(`/movie/${data?.results?.[0]?.id}`, 'data');

    console.log('data', movie);

    return (
        <React.Fragment>
            <div className="cf_header-movie">

                <div className="cf_header-movie__bg" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`}} />

                <div className="cf_header-movie__info">
                    
                    {/* Genres */}
                    {
                        movie?.genres?.length !== 0 &&
                        <ul className="cf_single-movie__genres">
                            {
                                movie?.genres?.map(genre => {
                                    return (
                                        <li key={genre?.id}>{genre?.name}</li>
                                        )
                                    })
                            }
                        </ul>
                    }

                    <h1>{movie?.title}</h1>

                    <div className="cf_header-movie__release">
                        <div>
                            <h5>Release Date</h5>
                            <p>{formatDate(movie?.release_date, 'Do, MMMM YYYY')}</p>
                        </div>
                        <div>
                            <h5>Runtime</h5>
                            <p>{convertMinsToHrsMins(movie?.runtime)}</p>
                        </div>
                    
                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}

export default MovieHeader;