import React from 'react';
import Slider from '../Shared/Header/Slider';
import TopBanner from '../Shared/Header/TopBanner';
import HomeService from './HomeService/HomeServices';
import TeamDetails from './TeamDetails/TeamDetails';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <TeamDetails></TeamDetails>
            <HomeService></HomeService>
            <Slider></Slider>
        </div>
    );
};

export default Home;