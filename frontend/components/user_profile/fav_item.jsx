import React from 'react';
import { Link } from 'react-router-dom';

import { displayRatingStars } from "../../util/display_avg_rating_stars_util";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const FavItem = props => {
    const link = `/restaurants/${props.restaurant.id}`;

    return (
      <div className="user-page-upcoming-container">
        <div className="user-page-upcoming-row">
          <div className="user-page-rest-row-info">
            <Link
              className="user-page-rest-row-image"
              target="_blank"
              to={link}
            >
              <img
                src={window.trashcanURL}
                alt="placeholder-restaurant-image"
                className="user-page-rest-image"
              />
            </Link>
            <Link className="user-page-rest-row-name" target="_blank" to={link}>
              {props.restaurant.name}
            </Link>
            <div className="user-page-upcoming-res-links">
              <div className="user-page-links-float">
                <span className="user-page-past-res-link-favorites" onClick={ () => props.deleteFavorite(props.favorite.id).then(() => props.requestUserFavorites(props.currentUser.id)) }> 
                  <FontAwesomeIcon icon={faBookmark} />
                  <span>Remove from saved restaurants</span>
                </span>
              </div>
            </div>
            <div className="user-page-ratings-container">
                <div className="user-page-ratings">
                {displayRatingStars(props.restaurant.avg_rating)}
                </div>
            </div>
            <p className="user-page-upcoming-seats">
                {props.restaurant.cuisine[0]}&nbsp;|&nbsp;{props.restaurant.city}
            </p>
            <div className="user-page-favorite-book">
                <Link to={link} className='user-page-fav-button' target='_blank'>
                    Reserve Now
                </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default FavItem;