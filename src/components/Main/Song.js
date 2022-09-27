import React from 'react';

const Song = (props) => {
    return (
        <div>
            <h1>{props.song.title}</h1>
        </div>
    );
};

export default Song;