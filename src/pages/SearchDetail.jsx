import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
import './SearchDetail.scss'

const SearchDetail = ( ) => {  
    const APIKEY = process.env.REACT_APP_TMDB_API_KEY;
    const imgPath = 'https://image.tmdb.org/t/p/original/';
    
    const { movieId } = useParams(); 
    const [detailInfo, setDetailInfo] = useState({});
    const [actors, setActors] = useState([]);

    useEffect(() => {
        fetchMovieDetails();
    }, []);

    const fetchMovieDetails = async () => {
        try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKEY}&language=ko-KR`
        );
        setDetailInfo(response.data);
        } catch (error) {
        console.error('Error fetching movie details:', error);
        }

        try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${APIKEY}&language=ko-KR`
        );
        setActors(response.data.cast);
        } catch (error) {
        console.error('Error fetching cast details:', error);
    }
};


    return (
        <div className="searchDetail">
            <div className="movieInfo">
                <div className="search-backImg">
                    <img src={`${imgPath}${detailInfo.backdrop_path}`} alt="" />
                </div>
                <div className="search-info">
                    <p className="search-title">{detailInfo.title}</p>
                    <p className="search-originTit">{detailInfo.original_title}</p>
                    <p className="search-desc">{detailInfo.overview}</p>
                    <p className="search-release">{detailInfo.release_date}</p>
                </div>
            </div>
            <div className="creditInfo">
                <div className="search-actors">
                    <h3>Actors</h3>
                    <ul className="actor-list">
                        {actors.slice(0, 14).map((actor) => (
                            <li key={actor.id} className="actor-item">
                                <div className="search-img">
                                    <img src={`${imgPath}${actor.profile_path}`} alt=''/>
                                </div>
                                <div className="search-info">
                                    <p className="actor-name">{actor.name}</p>
                                    <p className="actor-char">{actor.character}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SearchDetail;
