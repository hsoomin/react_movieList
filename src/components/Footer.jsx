import React from 'react';
import { FaTiktok,FaInstagram,FaTwitter } from 'react-icons/fa';
import "./Footer.scss"

const Footer = () => {
    return (
        <div className='footer'>
            <h2>SNS</h2>
            <ul>
                <li>
                    <FaInstagram className='footer-sns'/>
                </li>
                <li>
                    <FaTiktok className='footer-sns'/>
                </li>
                <li>
                    <FaTwitter className='footer-sns'/>
                </li>
            </ul>
            <div className='footer-copy'>
                <p>COPYRIGHT© SOOMIN ALL RIGHT RESERVED.</p>
            </div>
        </div>
    );
};

export default Footer;