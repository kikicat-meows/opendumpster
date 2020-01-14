import React from 'react';
import { connect } from 'react-redux';
import { searchRestaurants } from '../../actions/restaurant_actions';

import SearchForm from './search_form';



const mDTP = dispatch => ({
    searchRestaurants: searchTerm => dispatch(searchRestaurants(searchTerm)),
})




export default connect(null, mDTP)(SearchForm);