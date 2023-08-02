import React from 'react';
import { FaTiktok,FaInstagram,FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div style={{width:'100%', height:200, paddingBottom:20 , background:'#fff'}}>
            <h2 style={{textAlign:'center', fontSize:30, paddingTop:30, color: '#333'}}>SNS</h2>
            <ul style={{listStyle:'none', display:'flex', justifyContent:'center', alignItems:'center', padding:0, borderBottom: '1px solid #b2b2b2', paddingBottom:30}}>
                <li style={{margin:'0 10px'}}>
                    <FaInstagram style={{fontSize:20}}/>
                </li>
                <li style={{margin:'0 10px'}}>
                    <FaTiktok style={{fontSize:20}}/>
                </li>
                <li style={{margin:'0 10px'}}>
                    <FaTwitter style={{fontSize:20}}/>
                </li>
            </ul>
            <div>
                <p style={{textAlign:'center'}}>COPYRIGHT© SOOMIN ALL RIGHT RESERVED.</p>
            </div>
        </div>
    );
};

export default Footer;