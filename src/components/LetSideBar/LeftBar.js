import React from 'react';
import './LeftBar.css';
import Logo from '../../images/logo.png'
const LeftBar = () => {
    return (
        <div className='leftBar'>
            <div className="logo">
             <img src={Logo} alt="" />
            </div>
            <div className="navLink">
                
            </div>
        </div>
    );
};

export default LeftBar;