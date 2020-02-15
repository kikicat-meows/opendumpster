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
// import SignupFormContainer from './session_form/signup_form_container';

import Homepage from './homepage/homepage';
import ErrorPage from './404';
import RestaurantIndexContainer from './restaurant/restaurant_index_container';
import RestaurantShowContainer from './restaurant/restaurant_show_container';
import BookReservationFormContainer from './reservations/book_reservation_form_container';
import ReservationShowContainer from './reservations/reservation_show_container';


const App = () => (
    <div>
        <Modal />
        <main>
        <Header />
        <Switch>
            {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
            {/* <AuthRoute path="/signup" component={SignupFormContainer} /> */}
            {/* <Route>{'404'}</Route> */}
            <Route exact path='/reservations/new' component={BookReservationFormContainer}/>
            <Route exact path='/reservations/:reservationId' component={ReservationShowContainer}/>
            <Route exact path="/restaurants/:restaurantId" component={RestaurantShowContainer}/>
            <Route path="/restaurants" component={RestaurantIndexContainer} />
            <Route path='/error' component={ErrorPage} />
            <Route path="/" component={Homepage}/>
        </Switch>
        </main>
    
        <Footer />
    </div>
);

export default App;