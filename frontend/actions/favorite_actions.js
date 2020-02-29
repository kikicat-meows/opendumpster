import * as FavoriteAPIUtil from '../util/favorite_api_util';

import { receiveCurrentUser } from './session_actions';

export const RECEIVE_USER_FAVORITES = 'RECEIVE_USER_FAVORITES';

const receiveUserFavorites = favorites => ({
    type: RECEIVE_USER_FAVORITES,
    favorites
})

export const requestUserFavorites = userId => dispatch => (
    FavoriteAPIUtil.fetchUserFavoriteRestaurants(userId)
        .then(favorites => dispatch(receiveUserFavorites(favorites)))
);

export const createNewFavorite = favorite => dispatch => (
    FavoriteAPIUtil.createNewFavorite(favorite)
        .then(user => dispatch(receiveCurrentUser(user)))
);