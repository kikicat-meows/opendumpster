import { connect } from 'react-redux';
import {
    requestARestaurant
} from '../../actions/restaurant_actions';
import {
    clearTimeslots
} from '../../actions/timeslot_actions';
import {
    getRestaurantReviews
} from '../../actions/review_actions';
import { clearReservationErrors } from "../../actions/reservation_actions";
import { openModal } from '../../actions/modal_actions';
import {
    createNewFavorite,
    deleteFavorite
} from '../../actions/favorite_actions'

import RestaurantShow from './restaurant_show';


const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
  restaurantId: ownProps.match.params.restaurantId,
  favoriteForm: {
    user_id: state.session.id,
    restaurant_id: ownProps.match.params.restaurantId
  },
});


const mDTP = dispatch => ({
    requestARestaurant: (id) => 
    dispatch(requestARestaurant(id)),
    clearTimeslots: () => dispatch(clearTimeslots()),
    clearReservationErrors: () => dispatch(clearReservationErrors()),
    getRestaurantReviews: id => dispatch(getRestaurantReviews(id)),
    openModal: ctx => dispatch(openModal(ctx)),
    createNewFavorite: favorite => dispatch(createNewFavorite(favorite)),
    deleteFavorite: favId => dispatch(deleteFavorite(favId)),
});


export default connect(mSTP, mDTP)(RestaurantShow);