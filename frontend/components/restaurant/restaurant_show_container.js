import React from 'react';
import { connect } from 'react-redux';
import {
    requestARestaurant
} from '../../actions/restaurant_actions';

import RestaurantShow from './restaurant_show';


const mSTP = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
});


const mDTP = dispatch => ({
    requestARestaurant: (id) => 
                dispatch(requestARestaurant(id)),
});


export default connect(mSTP, mDTP)(RestaurantShow);