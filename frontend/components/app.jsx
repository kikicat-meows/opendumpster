import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
    <div>
        <div className="legacy-top-bar clearfix" />

        <header className='top-bar clearfix'>
            <div className='top-bar-logo'>
                <Link to="/">
                    <img src="/assets/trashcan-logo" alt="dumpster logo" className='top-bar-logo-img'/>
                </Link>
                <Link to="/">
                    <h1>OpenDumpster</h1>
                </Link>
            </div>

            <GreetingContainer />
        </header>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    
    </div>
);

export default App;