// TV Shows - Seasons
import React, { useEffect, useState } from 'react';

import useFetch from '../../common/hooks/useFetch';

import ChevronDownIcon from '../../icons/ChevronDown';
import TVEpisodes from '../../movie-app/tv/tv-details/components/tv-episodes';
import TVSeasonCast from '../../movie-app/tv/tv-details/components/tv-season-cast';
import TVSeasonVideos from '../../movie-app/tv/tv-details/components/tv-season-videos';

const Seasons = ({movieDetails}) => {

    const [currentSeason, setCurrentSeason] = useState(null);
    const [isSeasonsOpen, setIsSeasonsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('episodes');

    const [seasonTabs, setSeasonTabs] = useState([
        { title: 'Episodes', key: 'episodes', isActive: true },
        { title: 'Overview', key: 'details', isActive: false },
        { title: 'Cast', key: 'cast', isActive: false },
        { title: 'Videos', key: 'videos', isActive: false },
    ]);

    const { data: tvShowSeason } = useFetch(`/tv/${movieDetails?.id}/season/${currentSeason?.season_number}`, 'data');

    useEffect(() => {
        const allSeasons = movieDetails?.seasons?.filter(season => season?.episode_count > 0);
        setCurrentSeason(allSeasons?.[allSeasons?.length - 1]);
    }, [movieDetails]);
    
    const changeSeason = season => {
        setIsSeasonsOpen(false);
        setCurrentSeason(season);
    }

    const setActiveTabs = tab => {
        let tabs = [...seasonTabs]; 
        tabs.forEach(seasonTab => {
            seasonTab.isActive = false;
            if(seasonTab?.title === tab?.title) {
                seasonTab.isActive = true;
            }
        })
        setActiveTab(tab?.key);
        setSeasonTabs(tabs);
    }

    const showAllSeason = () => {
        setIsSeasonsOpen(!isSeasonsOpen);
    }

    return (
        <React.Fragment>
            
            <div className="cf_tv-season">
                
                <div className="cf_tv-season__select">

                    <button className="cf_tv-season__select-current" onClick={showAllSeason}>
                        { currentSeason?.name }

                        <ChevronDownIcon fill="#FFFFFF" />
                    </button>

                    {
                        isSeasonsOpen &&
                        <ul className="cf_tv-season__list">
                            {
                                movieDetails?.seasons?.map(season => {
                                    return (
                                        season?.episode_count > 0 &&
                                        <li 
                                            key={season?.id} 
                                            onClick={() => changeSeason(season)}
                                            className={`${season?.season_number !== currentSeason?.season_number ? '' : 'cf_pointer-none'}`}
                                        >
                                            { season?.name }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </div>


                <div className="cf_tv-season__section">
                
                    <div className="cf_tv-season__tabs">
                        <ul>
                            {
                                seasonTabs?.map(tab => {
                                    return (
                                        <li className={`${tab?.isActive ? 'active' : ''}`} onClick={() => setActiveTabs(tab)}>{tab?.title}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    
                    <div className="cf_tv-season__section-content">
                        {
                            activeTab === 'episodes' && <TVEpisodes movieId={movieDetails?.id} currentSeason={currentSeason} />
                        }
                        
                        {
                            activeTab === 'details' && 
                            <div className="cf_tv-season__details">
                                <h4 className="cf_single-movie__title mb-10">Overview</h4>
                                <p>{tvShowSeason?.overview || '-'}</p>
                            </div>
                        }

                        {
                            activeTab === 'cast' && <TVSeasonCast movieId={movieDetails?.id} currentSeason={currentSeason} />
                        }

                        {
                            activeTab === 'videos' && <TVSeasonVideos movieId={movieDetails?.id} currentSeason={currentSeason} />
                        }
                    </div>
                </div>


            </div>

        </React.Fragment>
    )
}

export default Seasons;