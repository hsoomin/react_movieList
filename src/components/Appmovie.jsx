import { AiFillHeart } from "react-icons/ai"; 
import React from 'react';
import {Link} from 'react-router-dom';
import "./Appmovie.scss"


const Appmovie = ({id,title,posterPath,date, average }) => {
    
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
                        <button className='amovie-heartIcon'>
                            <AiFillHeart />
                        </button>
                    </div>
                    <div className='amovie-info'>
                        <h2 className="amovie-title">{title}</h2>
                        <div className="amovie-date">{date}</div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Appmovie;




