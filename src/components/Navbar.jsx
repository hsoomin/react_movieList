import { BsSearch } from "react-icons/bs"; 
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import SearchModal from "./SearchModal";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const activeStyle = {
        color:'#e23391'
    }

    // 모달창 노출 여부 state
    const [modalOpen, setModalOpen] = useState(false);

    // 모달창 노출
    const showModal = () => {
        setModalOpen(true);
    };

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={isScrolled ? 'scrolled' : ''}>
            <div className='logo'><img src={require("../img/logo_pink.png")} alt="logo" /></div>
            <ul>
                <li className='nav-item'>
                    <NavLink to='' style={({isActive}) => (isActive ? activeStyle : undefined)}>Home</NavLink>
                </li>
                {/* <li className='nav-item'>
                    <NavLink to='movies' style={({isActive}) => (isActive ? activeStyle : undefined)}>Movies</NavLink>
                </li> */}
                {/* <li className='nav-item'>
                    <NavLink to='users' style={({isActive}) => (isActive ? activeStyle : undefined)}>Users</NavLink>
                </li> */}
                <li className='nav-item'>
                    <NavLink onClick={showModal} /* to=''  */style={({isActive}) => (isActive ? activeStyle : undefined)}><BsSearch/></NavLink>
                    {modalOpen && <SearchModal setModalOpen={setModalOpen} />}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;




