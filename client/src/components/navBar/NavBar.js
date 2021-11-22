import React, { useState } from 'react';
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={ isScrolled ? "navBar scrolled" : "navBar"}>
            <div className="container">
                <div className="left">
                    <img 
                        src="https://cdn.popsww.com/popsapp/assets/images/icons/logo-pops.png" 
                        alt="" 
                    />
                    <Link to='/'>
                        <span>Homepage</span>
                    </Link>
                    <Link to='/series'>
                        <span>Series</span>
                    </Link>
                    <Link to='/movies'>
                        <span>Movies</span>
                    </Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img  
                        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
