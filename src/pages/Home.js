import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Appmovie from '../components/Appmovie';
import styles from './Home.module.scss';
import Mainslide from '../components/Mainslide';
import Footer from '../components/Footer';


const Home = () => {
    const [isLoading,setLoading]=useState(true);
    const [appMovie,setAppMovie]=useState([]);
    
    const getMovies = async () => {
        try {
        const response = await axios.get(
            'https://api.themoviedb.org/3/movie/now_playing?api_key=4ed08358326bfbef17487ba953a86239&language=ko-KR&region=KR'
        );
        setAppMovie(response.data.results);
        setLoading(false);
        console.log(response)
        } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
        }
    };

    useEffect(()=>{
        getMovies();
    },[])


    return (
        <div>
            <Mainslide />
            <h2 style={{textAlign:'center', color:'lavender', fontSize:50, '-webkit-text-stroke':'1px purple', marginTop:100 }}>BOX OFFICE</h2>
            <div>
                {isLoading ? (<div><span className='load'>Loading...</span></div>) : (
                    <div className={styles.appWrap}>
                        {appMovie.map((amovie) => (
                        <Appmovie id={amovie.id} title={amovie.title} subtitle={amovie.original_title
                        } posterPath={amovie.poster_path} date={amovie.release_date} />
                        ))}
                    </div>
                )}
                
            </div>
            <Footer/>
        </div>
        );
};

export default Home;