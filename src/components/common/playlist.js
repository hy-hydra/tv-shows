// Movie Details - Playlist
import React, { useRef } from 'react';

import { formatDate } from '../../common/functions';

import Slider from "react-slick";

import RightArrow from "../../icons/RightArrow";

const PlayList = ({movieVideos}) => {

    const sliderRef = useRef();
    
    const settings = {
        arrow: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: movieVideos?.results?.length > 4 ? 4 : movieVideos?.results?.length,
        slidesToScroll: 1
    };

    const watchVideo = video => {
        window.open(`https://www.youtube.com/watch?v=${video?.key}`, '_blank');
    }

    return (
        <React.Fragment>            
            {
                movieVideos?.results?.length !== 0 &&
                <div className="cf_single-movie__videos">

                    <h4 className="cf_single-movie__title">Playlist</h4>

                    <Slider ref={sliderRef} {...settings}>
                        {
                            movieVideos?.results?.map(video => {
                                return (
                                    video?.site === 'YouTube' &&
                                    <div className="cf_single-movie__video" key={video?.id} onClick={() => watchVideo(video)}>
                                        <div className="cf_single-movie__video-thumb">

                                            <img src={`http://img.youtube.com/vi/${video?.key}/maxresdefault.jpg`} alt={video?.name} />

                                            <div className="cf_single-movie__video-details">
                                                <span>
                                                    <RightArrow fill="#FFFFFF" />
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
                    </Slider>

                    {
                        movieVideos?.results?.length > 4 &&
                        <div className="cf_single-movie__videos-btns">
                            <button className="cf_single-movie__videos-btn left" onClick={() => sliderRef?.current?.slickPrev()}>
                                <RightArrow fill="#FFFFFF" />
                            </button>
                            <button className="cf_single-movie__videos-btn right" onClick={() => sliderRef?.current?.slickNext()}>
                                <RightArrow fill="#FFFFFF" />
                            </button>
                        </div>
                    }

                </div>
            }
        </React.Fragment>
    )
}

export default PlayList;