import { RECEIVE_SEARCH } from '../actions/search_actions';

let today = new Date().toISOString().substr(0, 10);

const defaultSearch = Object.freeze({
    searchTerm: 'San Francisco',
    date: today,
    time: 19,
    seats: 2,
});

const searchReducer = (state = defaultSearch, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SEARCH:
            return action.search;
        default:
            return state;
    }
}

export default searchReducer;