import { AiOutlineCloseCircle } from "react-icons/ai"; 
import React from 'react';
import './SearchModal.scss';

function SearchModal({ setModalOpen, id, title, content, writer }) {
    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="SearchModal">
            <div className='container'>
                <div className='search-title'>
                    <p>검색</p>
                    <button className='search-close' onClick={closeModal}>
                        <AiOutlineCloseCircle className="close-icon"/>
                    </button>
                </div>
                <div className='search-form'>
                    <input type="text" className='search-input' />
                </div>
            </div>
        </div>
    );
}

export default SearchModal;