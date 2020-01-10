import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './modal';
import Header from './header/header';
import Footer from './footer/footer';

// import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
    <div>
        <Modal />
        <Header />

        <Switch>
            {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
            {/* <AuthRoute path="/signup" component={SignupFormContainer} /> */}
            {/* <Route>{'404'}</Route> */}
        </Switch>
    
        <Footer />
    </div>
);

export default App;