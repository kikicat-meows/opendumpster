import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


const Greeting = ({ currentUser, logout, openModal }) => {

    const toggleDropdown = () => {
        let dropDown = document.querySelector('.top-bar-dropdown-container');
        dropDown.classList.toggle('hidden');
    }

    const sessionLinks = () => (
        <div className="top-bar-nav clearfix">
            <button className="top-bar-nav-button" onClick={ () => openModal('signup') }>Sign up</button>
            <p className="top-bar-nav-link" onClick={ ()=> openModal('login') }>Sign in</p>
        </div>
    );

    const personalizedGreeting = () => (
        <div className="top-bar-nav clearfix">
            <h3>Hi, {currentUser.fname}</h3>
            <span onClick={() => openModal('dropdown')} className='drop-down'>
                <FontAwesomeIcon icon={faAngleDown}/>
            </span>
        </div>
    );

    return currentUser ? personalizedGreeting() : sessionLinks();

};

export default Greeting;