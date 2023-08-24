import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
        </nav>
    );
};

export default Navbar;