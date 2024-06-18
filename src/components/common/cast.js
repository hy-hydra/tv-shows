// Movie Details - Cast
import React, { useState } from 'react';

import useFetch from '../../common/hooks/useFetch';
import GetImage from '../utilities/get-image';
import AllCast from './all-cast';

const Cast = ({movieId, type = 'movie'}) => {

    const { data: movieCast } = useFetch(`/${type}/${movieId}/credits`, 'data');

    const [isAllCastOpen, setIsAllCastOpen] = useState(false);

    const viewAllCast = () => {
        setIsAllCastOpen(true);
    }

    return (
        <React.Fragment>

            {
                movieCast?.cast?.length !== 0 &&
                <div className="cf_single-movie__credits">
                    <h4 className="cf_single-movie__title">Cast</h4>
                    <ul>
                        {
                            movieCast?.cast?.slice(0, 5).map(cast => {
                                return (
                                    <li className="cf_single-movie__cast" key={cast?.id}>
                                        <div className="cf_single-movie__cast-avatar">
                                            <GetImage data={cast} path="profile_path" />
                                        </div>

                                        <div className="cf_single-movie__cast-name">
                                            { cast?.character?.split('/')?.[0] && <p>{cast?.character?.split('/')?.[0]}</p> }
                                            { cast?.original_name && <span>{cast?.original_name}</span> }
                                        </div>
                                    </li>
                                )
                            })
                        }
                        
                        {
                            movieCast?.cast?.length > 5 &&
                            <li className="cf_single-movie__cast">
                                <div className="cf_single-movie__cast-avatar view" onClick={viewAllCast}>
                                    <span>View All</span>
                                </div>
                            </li>
                        }
                    </ul>
                </div>
            }

            {
                isAllCastOpen && <AllCast cast={movieCast?.cast} close={() => setIsAllCastOpen(false)} />
            }

        </React.Fragment>
    )
}

export default Cast;