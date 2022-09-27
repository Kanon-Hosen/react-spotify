import React, { useEffect, useState } from 'react';
import './Main.css';
import Song from './Song';
const Main = () => {
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'b51c6fca05msha0943a9f08dbf7dp10ca3cjsne0ad2549f1d7',
              'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
            }
          };
          
          fetch('https://shazam-core.p.rapidapi.com/v1/charts/genre-world?genre_code=POP', options)
            .then(response => response.json())
            .then(data => setSongs(data))
            .catch(err => console.error(err));
    },[])
    return (
        <div className='main'>
            <div className="main-title">
                <h2>Dicover Soul</h2>
                <select name="filter" id="filter">
                    <option value="volvo">Top</option>
                    <option value="saab">Pop</option>
                    <option value="opel">Rock</option>
                    <option value="audi">Hip Hop</option>
                 </select>
            </div>
            <div className="song-display">
                {
                    songs.map(song=><Song key={song.key} song={song}></Song>)
                }
            </div>
        </div>
    );
};

export default Main;