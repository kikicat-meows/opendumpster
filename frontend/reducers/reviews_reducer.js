import {
    RECEIVE_RESTAURANT_REVIEWS,
    RECEIVE_REVIEW
} from '../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
      case RECEIVE_RESTAURANT_REVIEWS:
        return action.reviews;

      case RECEIVE_REVIEW:
        nextState[action.review.id] = action.review;
        return nextState;
        
      default:
          return state;
    }

}

export default reviewsReducer;