// import React from 'react';
import { Link } from 'react-router-dom';
import logoSpotify from '../assets/logo/spotify-logo.png';

const Header = () => {
    return <div className="header">
        <Link to="/">
            <img src={logoSpotify} alt="Spotify-Logo" />
        </Link>
        
        <Link className="header_link" to="/">
            <h1>Spotify</h1>
        </Link>
    </div>;
}

export default Header;