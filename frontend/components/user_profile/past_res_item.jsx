import React from "react";
import { Link } from "react-router-dom";

import { formatDateSlash } from "../../util/format_date_util";
import { formatSeat } from "../../util/format_seat_util";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import * as Solid from '@fortawesome/free-solid-svg-icons';

import PastResReview from './past_res_review';

const PastResItem = props => {
  let bookmarked = props.favorite ? (
    <span className="user-page-past-res-link" onClick={ ()=> props.deleteFavorite(props.favorite.id)}>
      <FontAwesomeIcon icon={Solid.faBookmark} />
      &nbsp;Restaurant saved
    </span>
  ) : (
    <span className="user-page-past-res-link" onClick={ () => props.createNewFavorite({ user_id: props.currentUser.id, restaurant_id: props.reservation.restaurant_id })}>
      <FontAwesomeIcon icon={faBookmark} />
      &nbsp;Save this restaurant
    </span>
  );  

  const link = `/restaurants/${props.reservation.restaurant_id}`;
  let cancelledString = props.reservation.cancellation ? <p className="user-page-upcoming-date">Cancelled</p> : "";
  let cancelledLinks = props.reservation.cancellation ? (
    <div className="user-page-links-float">
      {bookmarked}
    </div>
  ) : props.review ? (
    <>
    <div className="user-page-links-float">
      <Link className="user-page-past-res-link" to={`${link}`} target='_blank'>
        <FontAwesomeIcon icon={faCommentAlt} />
        &nbsp;Edit Review
      </Link>
      {bookmarked}
    </div>
    <PastResReview review={props.review} />
    </>
  ) : (
    <div className="user-page-links-float">
      <Link className="user-page-past-res-link" to={`${link}`} target='_blank'>
        <FontAwesomeIcon icon={faCommentAlt} />
        &nbsp;Write Review
      </Link>
      {bookmarked}
    </div>
  );    

  return (
    <div className="user-page-upcoming-container">
      <div className="user-page-upcoming-row">
        <div className="user-page-rest-row-info">
          <Link className="user-page-rest-row-image" target="_blank" to={link}>
            <img
              src={window.trashcanURL}
              alt="placeholder-restaurant-image"
              className="user-page-rest-image"
            />
          </Link>
          <Link className="user-page-rest-row-name" target="_blank" to={link}>
            {props.reservation.restaurant}
          </Link>
          <p className="user-page-past-date">
            {formatDateSlash(props.reservation.date)}
          </p>
          {cancelledString}
          <p className="user-page-upcoming-seats">
            Table for {formatSeat(props.reservation.seats)}.
          </p>
          <div className="user-page-upcoming-res-links">
            {cancelledLinks}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastResItem;
