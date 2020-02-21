import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    createReview,
    getRestaurantReviews,
    clearReviewErrors
} from '../../actions/review_actions';

import ReviewForm from './review_form';

const mSTP = state => ({
    formType: 'new',
    review: {
        user_id: state.entities.users[state.session.id],
        restaurant_id: ownProps.match.params.restaurantId,
        rating: 0,
        comment: '',
    },
    errors: state.errors.review,
})

const mDTP = dispatch => ({
    
})

export default withRouter(connect(mSTP, mDTP)(ReviewForm))