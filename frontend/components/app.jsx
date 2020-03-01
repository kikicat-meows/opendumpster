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
import PermissionDenied from './permission_denied';

import RestaurantIndexContainer from './restaurant/restaurant_index_container';
import RestaurantShowContainer from './restaurant/restaurant_show_container';
import BookReservationFormContainer from './reservations/book_reservation_form_container';
import ReservationShowContainer from './reservations/reservation_show_container';
import ConfirmReservationUpdateContainer from './reservations/confirm_reservation_update_container';

import UserReservationsContainer from './user_profile/user_reservations_container';
import UserFavoritesContainer from './user_profile/user_favorite_restaurants_container';

const App = () => (
    <div>
        <Modal />
        <main>
        <Header />
        <Switch>
            <ProtectedRoute exact path='/my/profile' component={UserReservationsContainer}/>
            <ProtectedRoute exact path='/my/favorites' component={UserFavoritesContainer}/>
            <Route exact path='/reservations/new' component={BookReservationFormContainer}/>
            <Route exact path='/reservations/change' component={ConfirmReservationUpdateContainer}/>
            <Route exact path='/reservations/:reservationId' component={ReservationShowContainer}/>
            <Route exact path="/restaurants/:restaurantId" component={RestaurantShowContainer}/>
            <Route exact path="/restaurants" component={RestaurantIndexContainer} />
            <Route exact path="/" component={Homepage}/>
            <Route path='/denied' component={PermissionDenied} />
            <Route path='/error' component={ErrorPage} />
            <Route component={ErrorPage} />
        </Switch>
        </main>
    
        <Footer />
    </div>
);

export default App;