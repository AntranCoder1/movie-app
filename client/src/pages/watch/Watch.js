import React from 'react';
import { ArrowBackOutlined } from "@material-ui/icons";
import './Watch.scss';
import { useLocation } from 'react-router';

const Watch = () => {

    const location = useLocation();
    const movie = location.movies;

    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video
                className="video"
                autoPlay
                progress
                controls
                src={movie.video}
            />
        </div>
    )
}

export default Watch
