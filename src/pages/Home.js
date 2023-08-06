import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Appmovie from '../components/Appmovie';
import styles from './Home.module.scss';
import Mainslide from '../components/Mainslide';
import Search from '../components/Search';
// import Footer from '../components/Footer';

const Home = () => {
    const [isLoading, setLoading] = useState(true);
    const [appMovie, setAppMovie] = useState([]);
    const [visibleMovies, setVisibleMovies] = useState(5); // Number of initially visible movies
    const moviesPerPage = 5; // Number of movies to show on each "더보기" (Load More) click

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

    // Event handler to show more movies
    const handleLoadMore = () => {
        setVisibleMovies((prevVisible) => prevVisible + moviesPerPage);
    };
    

    return (
        <div>
            <Mainslide />
            <Search/>
            <div className={styles.home_wrap}>
                <h2 className={styles.boxOffice}>BOX OFFICE</h2>
                {isLoading ? (
                    <div>
                        <span className='load'>Loading...</span>
                    </div>
                ) : (
                    <div className={styles.appWrap}>
                        {appMovie.slice(0, visibleMovies).map((amovie) => (
                            <Appmovie
                                key={amovie.id}
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
            {/* <Footer /> */}
        </div>
    );
};

export default Home;
