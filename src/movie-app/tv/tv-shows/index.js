// Movie app - TV Shows
import React from 'react';

// Components
import TvShowsList from './components/tv-shows-list';

const TVShows = () => {

    return (
        <React.Fragment>
            <div className="cf_home cf_tv">

                {/* Today Airing Shows */}
                {/* <TvShowsList listType="airing_today" /> */}

                {/* On Air Shows */}
                <TvShowsList listType="on_the_air" />

                {/* Top Rated Shows */}
                <TvShowsList listType="top_rated" />

                {/* Popular Shows */}
                <TvShowsList listType="popular" />

            </div>
        </React.Fragment>
    )
}

export default TVShows;