import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import Appmovie from '../components/Appmovie';
import Search from '../components/Search';
import Upcoming from '../components/Upcoming';
import Footer from '../components/Footer';

const Home = () => {
    const [isLoading, setLoading] = useState(true);
    const [appMovie, setAppMovie] = useState([]);
    const [visibleMovies, setVisibleMovies] = useState(5); // 처음에 보이는거
    const moviesPerPage = 5; // 버튼 클릭하면 5개씩

    const getMovies = async () => {
        try {
        const response = await axios.get(
            'https://api.themoviedb.org/3/movie/now_playing?api_key=6226250a5cf369ae485bb71106550d6f&language=ko-KR&region=KR'
        );
        setAppMovie(response.data.results);
        setLoading(false);
        console.log(response);
        } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    const handleLoadMore = () => {
        setVisibleMovies((prevVisible) => prevVisible + moviesPerPage);
    };

    return (
        <div>
            <Upcoming/>
            <Search/>
            <div className={styles.home_wrap}>
                <h2 className={styles.boxOffice}>현재 상영 목록</h2>
                {isLoading ? (<div><span className='load'>Loading...</span></div>) : (
                    <div className={styles.appWrap}>
                        {appMovie.slice(0, visibleMovies)
                        .map((amovie) => (
                            <Appmovie
                                key={amovie.id}
                                id={amovie.id}
                                title={amovie.title}
                                subtitle={amovie.original_title}
                                posterPath={amovie.poster_path}
                                date={amovie.release_date}
                                average={amovie.vote_average}
                            />
                        ))}
                    </div>
                )}
                {appMovie.length > visibleMovies && (
                    <div style={{width:'100%', textAlign:'center'}}>
                        <button onClick={handleLoadMore} className={styles.loadMoreBtn}>더보기</button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
