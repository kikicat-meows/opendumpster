import { RECEIVE_USER_FAVORITES } from '../actions/favorite_actions';
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const favoritesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_USER_FAVORITES:
            return action.favorites;            
    
        case LOGOUT_CURRENT_USER:
            return {};

        default:
            return state;
    }
}

export default favoritesReducer;