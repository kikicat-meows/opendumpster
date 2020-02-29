import * as FavoriteAPIUtil from '../util/favorite_api_util';

import { receiveCurrentUser } from './session_actions';

export const RECEIVE_USER_FAVORITES = 'RECEIVE_USER_FAVORITES';
// export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

const receiveUserFavorites = favorites => ({
    type: RECEIVE_USER_FAVORITES,
    favorites
})

// const removeFavorite = favoriteId = ({
//     type: REMOVE_FAVORITE,
//     favoriteId
// })

export const requestUserFavorites = userId => dispatch => (
    FavoriteAPIUtil.fetchUserFavoriteRestaurants(userId)
        .then(favorites => dispatch(receiveUserFavorites(favorites)))
);

export const createNewFavorite = favorite => dispatch => (
    FavoriteAPIUtil.createNewFavorite(favorite)
        .then(user => dispatch(receiveCurrentUser(user)))
);

export const deleteFavorite = favoriteId => dispatch => (
    FavoriteAPIUtil.deleteFavorite(favoriteId)
        .then(user => dispatch(receiveCurrentUser(user)))
)

