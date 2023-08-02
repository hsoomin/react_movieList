import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './About.module.scss';

const About = () => {

    const {id} = useParams();
    const [m, setAppm] =useState(null)
    const [loading, setLoading] =useState(true)

    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4ed08358326bfbef17487ba953a86239&language=ko-KR`)
        .then(res => {
            console.log(res)
            setAppm(res.data)
            setLoading(false)
        });
    }, []);

    const movieDetail= loading ? (<div className={`${styles.loading}`}>로딩중...</div>):(
    <div className={styles.about}>
        <div className={styles.box}>
            <div className={styles.title}>{m.title}</div>
            <div className={styles.subtitle}>{m.original_title}</div>
            <img className={styles.img}
                src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} alt={m.title}/>
            <div className={styles.overview}>{m.overview}</div>
            <div className={styles.date}>개봉: {m.release_date}</div>
            <div className={styles.voteAverage}>🍅 {m.vote_average}</div>
        </div>
    </div>
    )

    return (
        <div>
            {movieDetail}
        </div>
    );
};

export default About;