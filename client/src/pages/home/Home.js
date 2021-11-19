import React from 'react';
import Featured from '../../components/featured/Featured';
import NavBar from '../../components/navBar/NavBar';
import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <Featured />
        </div>
    )
}

export default Home
