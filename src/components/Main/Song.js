import React from 'react';
import './Song.css'
const Song = (props) => {
    const { title, subtitle, share } = props.song;
    return (
        <div className='song'>
            <div className="img">
            <img src={share.image} alt={title} />
            </div>
            <p>{title.slice(0,15)}...</p>
            <h6>{subtitle.slice(0,20)}...</h6>
        </div>
    );
};

export default Song;