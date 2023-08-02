import React, {useState} from 'react';
import Movie from '../components/Movie';
import MovieForm from '../components/MovieForm';

const Movies = () => {
    const [movies, setMovies]=useState([ ]) ;
        
    const removeMovie=(id) =>{
        setMovies(movies.filter(movie=>{
            return movie.id !==id;
        }))
    }

    const randerMovies =movies.length ? movies.map((movie) =>{
        return (
            <Movie movie={movie} key={movie.id} removeMovie={removeMovie}/>
        );
    }) : (<div className='lefttext'>영화가 없습니다. 영화를 추가해주세요</div>)

    const addMovie=(movie) =>{
        setMovies([
            ...movies,
            movie
        ])
    }
        
    return (
    <>
        <h1>🎬MOVIE LIST🎥</h1>
        <MovieForm addMovie={addMovie} />
        {randerMovies}
    </>
    );
};

export default Movies;