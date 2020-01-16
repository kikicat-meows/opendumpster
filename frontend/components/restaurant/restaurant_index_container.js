import React from 'react';
import { connect } from 'react-redux';
import { 
    requestAllRestaurants,
    searchRestaurants
} from '../../actions/restaurant_actions';
import RestaurantIndex from './restaurant_index';

const mSTP = ({ session, entities: { restaurants }}) => ({
    currentUser: session.currentUser,
    restaurants: Object.values(restaurants),
})

const mDTP = dispatch => ({
    requestAllRestaurants: () => dispatch(requestAllRestaurants()),
    searchRestaurants: (keyword) => dispatch(searchRestaurants(keyword)),
})


export default connect(mSTP, mDTP)(RestaurantIndex);