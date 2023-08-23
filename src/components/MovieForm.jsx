import React,{useState} from 'react';

const MovieForm = ({addMovie}) => {
    const [movieTitle,setMovieTitle]=useState('');
    const [movieYear,setMovieYear]=useState('');
    const [titleError,setTitleError]=useState('');
    const [yearError,setYearError]=useState('');

    const resetForm=()=>{
        setMovieTitle('');  
        setMovieYear('');
    }

    const validateForm=()=>{
        resetError();
        
        let validated=true;
        if(!movieTitle){
            setTitleError('영화 제목을 입력해주세요')
            validated=false;
        }
        if(!movieYear){
            setYearError('상영 년도를 입력해주세요')
            validated=false;
        }

        return validated;
    }
    const resetError=()=>{
        setTitleError('');
        setYearError('');
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        if(validateForm()){
            addMovie(
                {
                    id:Date.now(),
                    title:movieTitle,   
                    year:movieYear  
                }
            );
            resetError();
            resetForm();
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder='영화제목' value={movieTitle} onChange={e=>setMovieTitle(e.target.value)}/> <br/>
            <div className='error'>{titleError}</div>
            <input type="text" placeholder='상영년도' value={movieYear} onChange={e=>setMovieYear(e.target.value)}/> <br/>
            <div className='error'>{yearError}</div>
            <button type='submit'>리스트에 추가</button>
        </form>
    );
};

export default MovieForm;