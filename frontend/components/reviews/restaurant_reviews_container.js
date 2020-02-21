import { connect } from 'react-redux';

import { 
    getRestaurantReviews,
    deleteReview
} from '../../actions/review_actions';

import RestaurantReviews from './restaurant_reviews';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    reviews: Object.values(state.entities.reviews),
});

const mDTP = dispatch => ({
    getRestaurantReviews: id => dispatch(getRestaurantReviews(id)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
});

export default connect(mSTP, mDTP)(RestaurantReviews);