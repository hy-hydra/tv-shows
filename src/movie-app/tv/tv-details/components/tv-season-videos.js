// TV Season Details - Playlist
import React from 'react';

import { formatDate } from '../../../../common/functions';

import useFetch from '../../../../common/hooks/useFetch';
import RightArrowIcon from '../../../../icons/RightArrow';

const TVSeasonVideos = ({movieId, currentSeason}) => {

    const { data: tvShowSeasonVideos } = useFetch(`/tv/${movieId}/season/${currentSeason?.season_number}/videos`, 'data');

    const watchVideo = video => {
        window.open(`https://www.youtube.com/watch?v=${video?.key}`, '_blank');
    }

    return (
        <React.Fragment>            
            {
                tvShowSeasonVideos?.results?.length !== 0 ?
                <>
                    <h4 className="cf_single-movie__title">Playlist</h4>

                    <div className="cf_single-movie__videos seasons">
                        {
                            tvShowSeasonVideos?.results?.map(video => {
                                return (
                                    video?.site === 'YouTube' &&
                                    <div className="cf_single-movie__video" key={video?.id} onClick={() => watchVideo(video)}>
                                        <div className="cf_single-movie__video-thumb">

                                            <img src={`http://img.youtube.com/vi/${video?.key}/maxresdefault.jpg`} alt={video?.name} />

                                            <div className="cf_single-movie__video-details">
                                                <span>
                                                    <RightArrowIcon fill="#FFFFFF" />
                                                </span>

                                                <p>{formatDate(video?.published_at, 'YYYY')}</p>
                                            </div>
                                        </div>

                                        <div className="cf_single-movie__video-title">
                                            <p>{video?.name}</p>
                                        </div>                                        

                                    </div>
                                )
                            })
                        }

                    </div>
                </>
                :
                <h4 className="cf_single-movie__title">No Videos Found.</h4>
            }
        </React.Fragment>
    )
}

export default TVSeasonVideos;