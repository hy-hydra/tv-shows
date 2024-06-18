// Movie app - Home
import React from 'react';

// Components
import LatestMovies from './components/latest';

import MoviesList from './components/movies-list';

const Home = () => {

    return (
        <React.Fragment>
            <div className="cf_home cf_movies">

                {/* Latest Movies */}
                {/* <LatestMovies /> */}

                {/* Playing Movies */}
                <MoviesList listType="now_playing" />

                {/* Popular Movies */}
                <MoviesList listType="popular" />

                {/* Upcoming Movies */}
                <MoviesList listType="upcoming" />

                {/* Top Rated Movies */}
                <MoviesList listType="top_rated" />

            </div>
        </React.Fragment>
    )
}

export default Home;