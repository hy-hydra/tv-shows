// Movie app

import React, { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';

// Pages
import Home from './home';

const SingleMovie = lazy(() => import('./movie/movie-details'));
const Movies = lazy(() => import('./movie/movies'));

const TVShows = lazy(() => import('./tv/tv-shows'));
const TVDetails = lazy(() => import('./tv/tv-details'));
const TVShowsAll = lazy(() => import('./tv/tv-shows-all'));

const MovieApp = () => {
    return (
        <React.Fragment>

            <Layout>
                <Suspense fallback={<div className="fb_preloader"><img src="/images/preloader.svg" alt="Loading..." /></div>}>
                    <Routes>
                        {/* Movies */}
                        <Route exact path="/" element={<Home />} />

                        <Route exact path="/movies" element={<Home />} />
                        <Route exact path="/movie/:id" element={<SingleMovie />} />
                        <Route path="/movies/*" element={<Movies />} />

                        {/* TV Shows */}
                        <Route exact path="/tv-shows" element={<TVShows />} />
                        <Route exact path="/tv/:id" element={<TVDetails />} />
                        <Route path="/tv-shows/*" element={<TVShowsAll />} />
                    </Routes>
                </Suspense>
            </Layout>

        </React.Fragment>
    )
}

export default MovieApp;