import React from 'react';
import Featured from '../../components/featured/Featured';
import NavBar from '../../components/navBar/NavBar';
import List from '../../components/list/List';
import './Home.scss';

const Home = ({ type }) => {
    return (
        <div className="home">
            <NavBar />
            <Featured type={type} />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

export default Home
