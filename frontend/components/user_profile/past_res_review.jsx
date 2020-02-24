import React from "react";

import { formatDateShort } from "../../util/format_date_util";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const PastResReview = props => {
    let updated;
    let starsArray = [];

    if (props.review.created_at !== props.review.updated_at) {
        updated = 
        <div className="review-updated-date">
            <span>Updated on {formatDateShort(props.review.updated_at)}</span>
        </div>
    }

    for (let idx = 0; idx < props.review.rating; idx++) {
        starsArray.push(
        <FontAwesomeIcon
            key={`gold-${idx}`}
            icon={faStar}
            className="review-ratings-gold"
        />
        );
    }

    let blankStars = 1;
    while (starsArray.length < 5) {
        starsArray.push(
        <FontAwesomeIcon
            key={`blank-${blankStars}`}
            icon={faStar}
            className="review-ratings-blank"
        />
        );
        blankStars++;
    }

    return (
      <div className="user-review">
        <div className="review-ratings-container">
          <div className="review-ratings">{starsArray}</div>
          <div className="review-created-date">
            <span>Reviewed on {formatDateShort(props.review.created_at)}</span>
          </div>
          {updated}
        </div>
        <div className="review-comment-container">
          <p className="review-comment">{props.review.comment}</p>
        </div>
      </div>
    );

}

export default PastResReview;