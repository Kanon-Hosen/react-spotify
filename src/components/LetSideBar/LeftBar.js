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
                <p>Discover</p>
                <p>Around You</p>
                <p>Top Artists</p>
                <p>Top Charts</p>
            </div>
        </div>
    );
};

export default LeftBar;