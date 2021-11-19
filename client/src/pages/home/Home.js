import React from 'react';
import Featured from '../../components/featured/Featured';
import NavBar from '../../components/navBar/NavBar';
import List from '../../components/list/List';
import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <Featured />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

export default Home
