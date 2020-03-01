import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { 
    requestUserFavorites,
    deleteFavorite 
} from '../../actions/favorite_actions';

import UserFavorites from './user_favorite_restaurants';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    favorites: state.entities.favorites,
});

const mDTP = dispatch => ({
    requestUserFavorites: userId => dispatch(requestUserFavorites(userId)),
    deleteFavorite: favId => dispatch(deleteFavorite(favId)),
})

export default connect(mSTP, mDTP)(UserFavorites);