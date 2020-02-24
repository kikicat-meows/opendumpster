import {
    RECEIVE_RESTAURANT_REVIEWS,
    RECEIVE_USER_REVIEWS,
    RECEIVE_REVIEW,
    REMOVE_REVIEW
} from '../actions/review_actions';
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const reviewsReducer = (state = { user: null, restaurant: {} }, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
      case RECEIVE_RESTAURANT_REVIEWS:
        nextState.restaurant = action.reviews;
        return nextState;

      case RECEIVE_USER_REVIEWS:
        nextState.user = action.reviews;
        return nextState;

      case RECEIVE_REVIEW:
        nextState.restaurant[action.review.id] = action.review;
        return nextState;

      case REMOVE_REVIEW:
        delete nextState.restaurant[action.reviewId];
        return nextState;

      case LOGOUT_CURRENT_USER:
        nextState.user = null;
        return nextState;
        
      default:
          return state;
    }

}

export default reviewsReducer;