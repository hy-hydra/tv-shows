// Tv Details - TV Episodes
import React, { useState } from 'react';

import { convertMinsToHrsMins, formatDate } from '../../../../common/functions';
import useFetch from '../../../../common/hooks/useFetch';

import StarIcon from '../../../../icons/Star';

const TVEpisodes = ({movieId, currentSeason}) => {

    const [episodeLimit, setEpisodeLimit] = useState(8);
    const { data: tvShowSeason } = useFetch(`/tv/${movieId}/season/${currentSeason?.season_number}`, 'data');

    const loadMoreEpisodes = () => {
        setEpisodeLimit(episodeLimit + 8);
    }

    return (
        <React.Fragment>
            <div className="cf_tv-season__episode-list">

                <h4> {currentSeason?.episode_count} Episodes</h4>

                <div className="cf_tv-season__episode-list-wpr">
                    <ul>
                        {
                            tvShowSeason?.episodes?.slice(0, episodeLimit)?.map(episode => {
                                return (
                                    <li className="cf_tv-season__episode" key={episode?.id}>

                                        <div className="cf_tv-season__episode-image">

                                            <img src={`https://image.tmdb.org/t/p/original${episode?.still_path}`} />

                                            <div className="cf_single-movie__votes">
                                                <p>
                                                    <span>
                                                        <StarIcon />
                                                        {episode?.vote_average?.toFixed(1) }
                                                    </span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="cf_tv-season__episode-info">
                                            <h5 className="ellipsis ellipsis-1">E{episode?.episode_number}: {episode?.name}</h5>
                                            
                                            <div className="cf_single-movie__time">
                                                <p>Date: {formatDate(episode?.air_date, 'Do, MMM YYYY')}</p>
                                                <p>{convertMinsToHrsMins(episode?.runtime)}</p>
                                            </div>
                                        </div>
                                        
                                    </li>
                                )
                            })
                        }
                    </ul>
                    
                    {
                        tvShowSeason?.episodes?.length > 8 && episodeLimit <= tvShowSeason?.episodes?.length &&
                        <div className="d_flex d_align-center d_content-center mt-30">
                            <button className="cf_btn cf_btn-blue small" onClick={loadMoreEpisodes}>
                                Load more
                            </button>
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default TVEpisodes;