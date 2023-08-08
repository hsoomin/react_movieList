import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useParams } from 'react-router-dom'; 
import './SearchDetail.scss'

const SearchDetail = ( { apiKey, imgPath } ) => {  //{ apiKey, imgPath } 확인하기
    const { movieId } = useParams(); 
    const [detailInfo, setDetailInfo] = useState({});
    const [actors, setActors] = useState([]);

    useEffect(() => {
        fetchMovieDetails();
    }, []);

    const fetchMovieDetails = async () => {
        try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${'6226250a5cf369ae485bb71106550d6f'}&language=ko-KR`
        );
        setDetailInfo(response.data);
        } catch (error) {
        console.error('Error fetching movie details:', error);
        }

        try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${'6226250a5cf369ae485bb71106550d6f'}&language=ko-KR`
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
                    <img src={`${'https://image.tmdb.org/t/p/original/'}${detailInfo.backdrop_path}`} alt="" />
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
                    <h3>actors</h3>
                    <Swiper 
                    slidesPerView={5}
                    spaceBetween={10}
                    className="mySwiper"
                    >
                        {actors.map((actor) => (
                            <SwiperSlide key={actor.id} className="Swiper-Slide">
                                <div className="search-img">
                                    <img src={`${'https://image.tmdb.org/t/p/original/'}${actor.profile_path}`} alt="" />
                                </div>
                                <div className="search-info">
                                    <p className="actor-name">{actor.name}</p>
                                    <p className="actor-char">{actor.character}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default SearchDetail;





