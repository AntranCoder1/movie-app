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
        const getRandomList = async () => {
            try {
                const res = await axios.get(
                    `/lists${type ? "?type=" + type : ""}${
                        genre ? "&genre=" + genre : ""
                        }`, {
                        headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOThiODdkMTM0MDQzMjU4ODMzYTAzYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzU3MTE3NCwiZXhwIjoxNjM4MDAzMTc0fQ.wnq-hedz-DICXwwQN4Utze63kvdC2aVvc99y6RWx8Z8"
                        }
                    }
                );
                setLists(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getRandomList();
    }, [type, genre]);

    return (
        <div className="home">
            <NavBar />
            <Featured type={type} />
            { lists.map(item => (
                <List list={item} />
            )) }
        </div>
    )
}

export default Home
