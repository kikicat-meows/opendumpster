import { connect } from 'react-redux';

import { 
    getRestaurantReviews,
} from '../../actions/review_actions';
import {
    openModal
} from '../../actions/modal_actions';

import RestaurantReviews from './restaurant_reviews';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    reviews: Object.values(state.entities.reviews),
});

const mDTP = dispatch => ({
    getRestaurantReviews: id => dispatch(getRestaurantReviews(id)),
    openModal: ctx => dispatch(openModal(ctx)),
});

export default connect(mSTP, mDTP)(RestaurantReviews);