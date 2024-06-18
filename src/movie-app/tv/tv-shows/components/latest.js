// Home - Latest Movies
import React from 'react';
import { useNavigate } from 'react-router-dom';

import useFetch from '../../../../common/hooks/useFetch';
import GetImage from '../../../../components/get-image';

const LatestMovies = () => {

    const navigate = useNavigate();
    const { data, loading } = useFetch('/movie/latest', 'data');

    const getMovieDetails = (id) => {
        navigate(`movie/${id}`);
    }
   
    return (
        <React.Fragment>
            <div>
                <h2>Latest Movie</h2>

                <div>
                    {
                        data?.length !== 0 || loading ?
                            loading ?
                                <div>Loading</div>
                            :
                            <div key={data?.id} onClick={() => getMovieDetails(data?.id)}>
                                <GetImage data={data} path="poster_path" />
                                <p>{data?.title}</p>
                            </div>
                        :

                        <div>
                            No data found
                        </div>

                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default LatestMovies;