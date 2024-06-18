// Movie app - All Movies
import React, { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

// Pages
const AllMovies = lazy(() => import('./all-movies'));

const Movies = () => {

    return (
        <React.Fragment>
            <Suspense fallback={<div className="fb_preloader"><img src="/images/preloader.svg" alt="Loading..." /></div>}>
                <Routes>
                    <Route path={`/now-playing`} element={<AllMovies listType="now_playing" />} />
                    <Route path={`/popular`} element={<AllMovies listType="popular" />} />
                    <Route path={`/upcoming`} element={<AllMovies listType="upcoming" />} />
                    <Route path={`/top-rated`} element={<AllMovies listType="top_rated" />} />
                </Routes>
            </Suspense>

        </React.Fragment>
    )
}

export default Movies;