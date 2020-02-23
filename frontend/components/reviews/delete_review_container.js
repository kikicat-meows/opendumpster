import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    deleteReview
} from '../../actions/review_actions';
import {
    updateUser
} from '../../actions/session_actions';
import {
    requestARestaurant
} from '../../actions/restaurant_actions';
import {
    closeModal
} from '../../actions/modal_actions';

import DeleteReview from './delete_review';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
})

const mDTP = dispatch => ({
    deleteReview: id => dispatch(deleteReview(id)),
    updateUser: id => dispatch(updateUser(id)),
    requestARestaurant: id => dispatch(requestARestaurant(id)),
    closeModal: () => dispatch(closeModal()),
})

export default withRouter(connect(mSTP, mDTP)(DeleteReview));