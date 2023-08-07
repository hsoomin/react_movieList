import { AiFillHeart } from "react-icons/ai"; 
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
// import styles from './Appmovie.module.scss'
import "./Appmovie.scss"


const Appmovie = ({id,title,posterPath,date, average }) => {
    
    //하트아이콘 클릭하면 색깔 바뀌게 ->실행안됨/ 수정하기
    const [isHeartRed, setIsHeartRed] = useState(false);
    const handleHeartClick = () => {setIsHeartRed(!isHeartRed);};
    
    return (
        <div key={id} className="amovie">
            <div className='amovie-card'>
                <Link to={`/about/${id}`}>
                    <div className='amovie-imgBox'>
                        <img className="amovie-img"
                            src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
                            alt={title}
                        />
                        <span className='amovie-average'>{average}</span> 
                        <button
                        className={`amovie-heartIcon ${isHeartRed ? 'red' : ''}`}
                        onClick={handleHeartClick}
                        >
                        <AiFillHeart />
                        </button>
                    </div>
                    <div className='amovie-info'>
                        <h2 className="amovie-title">{title}</h2>
                        <div className="amovie-date">{date}</div>
                    </div>
                    {/* <div className="amovie-bg">
                        <button>상세보기</button>
                    </div> */}
                </Link>
            </div>
        </div>
    );
};

export default Appmovie;




