import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const activeStyle = {
        color:'turquoise'
    }

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
            <div className='logo'><img src={require("../img/logo.png")} alt="logo" /></div>
            <ul>
                    <li className='nav-item'>
                        <NavLink to='' style={({isActive}) => (isActive ? activeStyle : undefined)}>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='movies' style={({isActive}) => (isActive ? activeStyle : undefined)}>Movies</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='users' style={({isActive}) => (isActive ? activeStyle : undefined)}>Users</NavLink>
                    </li>
                </ul>
        </nav>
    );
};

export default Navbar;


