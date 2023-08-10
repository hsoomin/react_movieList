// import { NavLink } from 'react-router-dom';
// import { BsSearch } from "react-icons/bs"; 
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    // const activeStyle = {
    //     color:'#e23391'
    // }

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
            <div className='logo'><Link to="/"><img src={require("../img/logo_pink.png")} alt="logo" /></Link></div>
            {/* <div className='nav-item'>
                <NavLink onClick={showModal} to=''  style={({isActive}) => (isActive ? activeStyle : undefined)}><BsSearch/></NavLink>
            </div> */}
        </nav>
    );
};

export default Navbar;