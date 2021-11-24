import React from 'react';
import './ProductEdit.css';
import { Publish } from '@material-ui/icons';
import { Link, useLocation } from "react-router-dom"; 

export default function ProductEdit () {

    const location = useLocation();
    const movie = location.movie;
    console.log(location)

    return (
        <div className="productEdit">
            <div className="productEditContainer">
                <h1 className="productEditTitle">Movie</h1>
                <Link to="/newProduct">
                    <button className="productEditAddButton">Create</button>
                </Link>
            </div>
            <div className="productEditTop">
                <div className="productEditTopRight">
                    <div className="productEditInfoTop">
                        <img src={movie.img} alt="" className="productEditImg" />
                        <span className="productEditName">{movie.title}</span>
                    </div>
                    <div className="productEditInfoBottom">
                        <div className="productEditInfoItem">
                            <span className="productEditInfoKey">id:</span>
                            <span className="productEditInfoValue">{movie._id}</span>
                        </div>
                        <div className="productEditInfoItem">
                            <span className="productEditInfoKey">genre:</span>
                            <span className="productEditInfoValue">{movie.genre}</span>
                        </div>
                        <div className="productEditInfoItem">
                            <span className="productEditInfoKey">year:</span>
                            <span className="productEditInfoValue">{movie.year}</span>
                        </div>
                        <div className="productEditInfoItem">
                            <span className="productEditInfoKey">limit:</span>
                            <span className="productEditInfoValue">{movie.limit}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productEditBottom">
                <form className="productEditForm">
                    <div className="productEditFormLeft">
                        <label>Movie Title</label>
                        <input type="text" placeholder={movie.title} />
                        <label>Year</label>
                        <input type="text" placeholder={movie.year} />
                        <label>Genre</label>
                        <input type="text" placeholder={movie.genre} />
                        <label>Limit</label>
                        <input type="text" placeholder={movie.limit} />
                        <label>Trailer</label>
                        <input type="file" placeholder={movie.trailer} />
                        <label>Video</label>
                        <input type="file" placeholder={movie.video} />
                    </div>
                    <div className="productEditFormRight">
                        <div className="productEditUpload">
                            <img src={movie.img} alt="" className="productEditUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: 'none' }} />
                        </div>
                        <button className="productEditButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
