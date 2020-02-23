import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  updateReview,
  getRestaurantReviews,
  clearReviewErrors
} from "../../actions/review_actions";
import { requestARestaurant } from "../../actions/restaurant_actions";

import ReviewForm from "./review_form";

const mSTP = (state) => ({
  formType: "edit",
  errors: state.errors.review,
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
  action: review => dispatch(updateReview(review)),
  getRestaurantReviews: restaurantId =>
    dispatch(getRestaurantReviews(restaurantId)),
  clearReviewErrors: () => dispatch(clearReviewErrors()),
  requestARestaurant: id => dispatch(requestARestaurant(id))
});

export default withRouter(connect(mSTP, mDTP)(ReviewForm));
