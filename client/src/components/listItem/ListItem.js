import React, { useEffect, useState } from 'react';
import {
    PlayArrow,
    Add,
    ThumbUpAltOutlined,
    ThumbDownOutlined,
} from "@material-ui/icons";
import axios from 'axios';
import './ListItem.scss';
import { Link } from 'react-router-dom';

const ListItem = ({ index, item }) => {

    const [isHovered, setIsHovered] = useState(false);
    const [movies, setMovies] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get('/movies/find/' + item, {
                    headers: {
                        token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                });
                setMovies(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getMovie();
    }, [item])

    return (
        <Link to={{ pathname: '/watch', movies: movies }}>
            <div className="listItem"
                style={{left: isHovered && index * 225 - 50 + index * 2.5}}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img 
                    src={movies.img}
                    alt=""
                />
                { isHovered && (
                    <>
                        <video src={movies.trailer} autoPlay={true} loop />
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className="icon" />
                                <Add className="icon" />
                                <ThumbUpAltOutlined className="icon" />
                                <ThumbDownOutlined className="icon" />
                            </div>
                            <div className="itemInfoTop">
                                <span>{movies.duration}</span>
                                <span className="limit">+{item.limit}</span>
                                <span>{movies.year}</span>
                            </div>
                            <div className="desc">{movies.desc}</div>
                            <div className="genre">{movies.genre}</div>
                        </div>
                    </>
                ) }
            </div>
        </Link>
    )
}

export default ListItem
