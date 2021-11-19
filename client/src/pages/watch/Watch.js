import React from 'react';
import { ArrowBackOutlined } from "@material-ui/icons";
import './Watch.scss';

const Watch = () => {
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
                src="https://cdn.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_06B_Bali_1080p_013_preview.mp4"
            />
        </div>
    )
}

export default Watch
