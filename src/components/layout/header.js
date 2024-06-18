// Header
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Icons
import SearchIcon from '../../icons/Search';
import CloseIcon from '../../icons/Close';
import useFetch from '../../common/hooks/useFetch';
import GetImage from '../utilities/get-image';

const Header = () => {

    const inputRef = useRef(null);
    const navigate = useNavigate();

    const [search, setSearch] = useState('');
    const [isSearchActive, SetIsSearchActive] = useState(false);

    const { data: searchResults } = useFetch(`/search/multi`, 'data', `query=${search}`);
        
    const handle = {
        search: e => {
            setSearch(e?.target?.value?.length > 3 ? e?.target?.value : '');            
        },
        getSearchBar: value => {
            setTimeout(() => {
                value && inputRef?.current?.focus();
            }, 400);
            SetIsSearchActive(value);
            setSearch('');
        },
        viewMovie: movie => {
            SetIsSearchActive(false);
            const showType = movie?.media_type === 'movie' ? 'movie' : 'tv';
            navigate(`/${showType}/${movie?.id}`);
            setSearch('');
        }
    }

    return (
        <React.Fragment>

            <header>
                <div className="cf_container">
                    <div className="cf_header d_flex">

                        <nav>
                            <div className="cf_logo">
                                <Link to="/">
                                    <h4>Cinefic</h4>
                                </Link>
                            </div>

                            <ul className="d_flex">
                                <li>
                                    <Link to={'/movies'}> Movies </Link>
                                </li>
                                <li>
                                    <Link to={'/tv-shows'}> TV Shows </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="cf_search-movie">

                            <span className="cf_search-movie__icon" onClick={() => handle.getSearchBar(true)}>
                                <SearchIcon />
                            </span>

                            <div className={`cf_search-movie__input ${isSearchActive ? 'active' : ''}`}>
                                <input type="text" placeholder="Search series or movie..." onChange={handle.search} ref={inputRef} />
                                
                                <span onClick={() => handle.getSearchBar(false)}>
                                    <CloseIcon fill="#171717" />
                                </span>
                            </div>
                            
                            {
                                searchResults?.results?.length > 0 && isSearchActive &&
                                <div className="cf_search-movie__results">
                                    <ul>
                                        {
                                            searchResults?.results?.map(result => {
                                                return (
                                                    ['movie', 'tv']?.includes(result?.media_type) && 
                                                    <li key={result.id} onClick={() => handle.viewMovie(result)}>
                                                        <div className="cf_search-movie__image">
                                                            <GetImage data={result} path="poster_path" />
                                                        </div>
                                                        <div className="cf_search-movie__info">
                                                            <p>{result?.name || result?.title} </p>
                                                            <span>({result?.media_type === 'movie' ? 'Movie' : 'TV'})</span>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </header>
            
        </React.Fragment>
    )
}

export default Header;