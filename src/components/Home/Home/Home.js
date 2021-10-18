import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Team from '../Team/Team';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Team></Team>
        </div>
    );
};

export default Home;