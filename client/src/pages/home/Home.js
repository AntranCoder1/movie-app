import React, { useEffect, useState } from 'react';
import Featured from '../../components/featured/Featured';
import NavBar from '../../components/navBar/NavBar';
import List from '../../components/list/List';
import axios from 'axios';
import './Home.scss';

const Home = ({ type }) => {

    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `/lists${type ? "?type=" + type : ""}${
                        genre ? "&genre=" + genre : ""
                    }`,
                    {
                        headers: {
                            token:
                                "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
                            },
                    }
                );
                setLists(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomLists();
    }, [type, genre]);

    return (
        <div className="home">
            <NavBar />
            <Featured type={type} setGenre={setGenre} />
            { lists.map(item => (
                <List list={item} />
            )) }
        </div>
    )
}

export default Home
