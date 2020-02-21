import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    createReview,
    getRestaurantReviews,
    clearReviewErrors
} from '../../actions/review_actions';

import ReviewForm from './review_form';

const mSTP = (state, ownProps) => ({
    formType: 'new',
    review: {
        user_id: state.session.id,
        restaurant_id: ownProps.match.params.restaurantId,
        rating: 0,
        comment: '',
    },
    errors: state.errors.review,
    currentUser: state.entities.users[state.session.id],
})

const mDTP = dispatch => ({
    action: review => dispatch(createReview(review)),
    getRestaurantReviews: restaurantId => dispatch(getRestaurantReviews(restaurantId)),
    clearReviewErrors: () => dispatch(clearReviewErrors()),
})

export default withRouter(connect(mSTP, mDTP)(ReviewForm));