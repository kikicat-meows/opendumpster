import React from 'react';
import {Link} from 'react-router-dom';


const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <div className="top-bar-nav clearfix">
            <button className="top-bar-nav-button" onClick={ () => openModal('signup') }>Sign up</button>
            <p className="top-bar-nav-link" onClick={ ()=> openModal('login') }>Sign in</p>
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