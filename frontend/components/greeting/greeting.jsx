import React from 'react';
import {Link} from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div className="top-bar-nav clearfix">
            <Link to="/signup"><button className="top-bar-nav-button">Sign up</button></Link>
            <Link to="/login" className="top-bar-nav-link">Sign in</Link>
        </div>
    );

    const personalizedGreeting = () => (
        <div className="top-bar-nav clearfix">
            <h3>Hi, {currentUser.fname}</h3>
            <button className="top-bar-nav-button sign-out" onClick={logout}>Sign Out</button>
        </div>
    );

    return currentUser ? personalizedGreeting() : sessionLinks();

};

export default Greeting;