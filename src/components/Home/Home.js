import React from 'react';
import LeftBar from '../LetSideBar/LeftBar';
import Main from '../Main/Main';
import RightBar from '../RightSIdeBar/RightBar';
import './Home.css'
const Home = () => {
    return (
        <div className='home'>
            <LeftBar></LeftBar>
            <Main></Main>
            <RightBar></RightBar>
        </div>
    );
};

export default Home;