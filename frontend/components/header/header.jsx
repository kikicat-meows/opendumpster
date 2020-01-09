import React from 'react';
import {Link} from 'react-router-dom';

import GreetingContainer from '../greeting/greeting_container';

const Header = () => (
    <header>
        <div className="legacy-top-bar clearfix" />

        <div className='top-bar clearfix'>
            
            <div className='top-bar-logo'>
                <Link to="/">
                    <img src="/assets/trashcan-logo" alt="dumpster logo" className='top-bar-logo-img' />
                </Link>
                <Link to="/">
                    <h1>OpenDumpster</h1>
                </Link>
            </div>

            <GreetingContainer />
        </div>
    </header>
);

export default Header;