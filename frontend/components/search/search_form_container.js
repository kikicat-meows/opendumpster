import React from 'react';
import { connect } from 'react-redux';
import { searchRestaurants } from '../../actions/restaurant_actions';
import { receiveSearch } from '../../actions/search_actions';

import SearchForm from './search_form';


const mSTP = ({search}) => ({
    searchTerm: search.searchTerm,
    date: search.date,
    time: search.time,
    seats: search.seats
})


const mDTP = dispatch => ({
    searchRestaurants: searchTerm => dispatch(searchRestaurants(searchTerm)),
    receiveSearch: (search) => dispatch(receiveSearch(search)),
})




export default connect(mSTP, mDTP)(SearchForm);