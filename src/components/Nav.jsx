import React from 'react';

const NavBar = (props) => {

    return (
        <div className="navbar-container">
           <div className="navbar-flex">
                <a href="#home">ABOUT</a>
                <a href="#discography">DISCOGRAPHY</a>
                <a href="#concerts">CONCERT TOURS</a>
                <a href="#compositions">LATTER COMPOSITIONS</a>
                <a href="#new-tracks">NEW TRACKS</a>
                <a href="#upcoming">UPCOMING EVENTS</a>
                <a href="#history">HISTORY</a>
                <a href="#contacts">CONTACTS</a>
            </div> 
        </div>       
    );
}

export default NavBar;