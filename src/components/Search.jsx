import { BsSearch } from "react-icons/bs"; 
import React, { useState } from 'react';
import axios from 'axios';
import './Search.scss';
import { Link } from 'react-router-dom';
import SearchDetail from '../pages/SearchDetail';

const Search = () => {
    const apiKey = '6226250a5cf369ae485bb71106550d6f';
    const imgPath = 'https://image.tmdb.org/t/p/original/';

    const [searchWord, setSearchWord] = useState('');
    const [movies, setMovies] = useState([]);
    const [mode, setMode] = useState('list');
    const [detailInfo, setDetailInfo] = useState({});
    const [actors, setActors] = useState([]);
    const [selectedMovieID, setSelectedMovieID] = useState(null); 

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            search();
        }
    };

    const search = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=ko-KR&page=1&include_adult=false&query=${searchWord}`)
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch((error) => {
                console.error('Error fetching movies:', error);
            });
    };

    const showDetail = (movieID) => {
        setMode('detail');
        setSelectedMovieID(movieID);

        setDetailInfo({});
        axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=ko-KR`)
            .then((response) => {
                setDetailInfo(response.data);
                console.log(response);
            })
            .catch((error) => {
                console.error('Error fetching movie details:', error);
            });

        axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${apiKey}&language=ko-KR`)
            .then((response) => {
                setActors(response.data.cast);
            })
            .catch((error) => {
                console.error('Error fetching cast details:', error);
            });
    };

    return (
        <div className='search'>
            <div className="search-box">
                <input
                    type="text"
                    value={searchWord}
                    onChange={(e) => setSearchWord(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder='영화 제목을 입력하세요'
                />
                <button className="search-btn" onClick={search}>
                    <BsSearch className="search-icon"/>
                </button>
            </div>
            <div className="search-result" style={{ display: mode === 'list' ? 'block' : 'none' }}>
                <ul className="search-movieList">
                    {movies.map((movie) => (
                        <li key={movie.id}>
                            <Link to={`/search/${movie.id}`} onClick={() => showDetail(movie.id)}>
                                <div className='search-list'>
                                    <div className="img">
                                        <img src={`${imgPath}${movie.poster_path}`} alt="poster_image" />
                                    </div>
                                    <div className="info">
                                        <p className="title">{movie.title}</p>
                                        <p className="release">{movie.release_date}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {mode === 'detail' && <SearchDetail apiKey={apiKey} imgPath={imgPath} movieID={selectedMovieID} />} 
        </div>
    );
};

export default Search;



