// Home - Movie Card
import React from 'react';
import { useNavigate } from 'react-router-dom';

import GetImage from '../utilities/get-image';
import { formatDate } from '../../common/functions';

import Skeleton from '../utilities/skeleton';

const MovieCard = ({movie, loading, showType = 'movie', type}) => {

    const navigate = useNavigate();

    const getMovieDetails = () => {
        navigate(`/${showType}/${movie?.id}`);
    }

    return (
        <React.Fragment>
            
            <div className="cf_movie-card" onClick={() => !loading && getMovieDetails()}>
                <div className="cf_movie-card__rating">

                    <p>
                        { type !== 'upcoming' && formatDate(movie?.release_date, 'YYYY')}
                    </p> 

                    <span>{movie?.vote_average?.toFixed(1)}</span>
                </div>
                
                <div className="cf_movie-card__image">
                    {
                        loading ? 
                        <Skeleton width='100%' height='100%' />
                        :
                        <GetImage data={movie} path="poster_path" />
                    }
                </div>

                <div className="cf_movie-card__info">      
                    {
                        loading ? 
                        <Skeleton width='100%' height='18px' />
                        :
                        <>
                            <h5>{movie?.title}</h5>                            
                            { type === 'upcoming' && <p>{formatDate(movie?.release_date, 'Do, MMM YYYY')}</p> }
                        </>
                    }
                </div>
                
            </div>

        </React.Fragment>
    )
}

export default MovieCard;