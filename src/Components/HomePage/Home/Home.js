import React from 'react';
import Header from '../../Shared/Header/Header';

import HomeInfo from '../HomeInfo/HomeInfo';
import HomeMain from '../HomeMain/HomeMain';
import './Home.css'
const Home = () => {
    return (
        <div className='home-container'>
            <Header>white</Header>
            <HomeMain></HomeMain>
            <HomeInfo></HomeInfo>
        </div>
    );
};

export default Home;