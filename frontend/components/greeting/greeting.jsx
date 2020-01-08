import React from 'react';
import {Link} from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div className="top-bar-nav">
            <button className="top-bar-nav-button"><Link>Sign up</Link></button>
            <Link to="/login" className="top-bar-nav-link">Sign in</Link>
        </div>
    );

    const personalizedGreeting = () => (
        <div className="top-bar-nav">
            <h3>Hi, {currentUser.fname}</h3>
            <button className="top-bar-nav-button sign-out" onClick={logout}>Sign Out</button>
        </div>
    );

    return currentUser ? personalizedGreeting() : sessionLinks();

};

export default Greeting;