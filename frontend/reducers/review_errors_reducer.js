import {
    RECEIVE_REVIEW,
    RECEIVE_REV_ERRORS,
    CLEAR_REV_ERRORS
} from '../actions/review_actions';

const reviewErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_REV_ERRORS:
            return action.errors

        case RECEIVE_REVIEW:
            return [];

        case CLEAR_REV_ERRORS:
            return [];    

        default:
            return state;
    }
}

export default reviewErrorsReducer;