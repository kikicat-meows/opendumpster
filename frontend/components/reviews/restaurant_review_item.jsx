import React from 'react';

import { 
    formatDateShort, 
    formatDateSlash 
} from '../../util/format_date_util';
import {
    formatReviewCount
} from '../../util/format_review_count_util';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCommentAlt
} from '@fortawesome/free-regular-svg-icons';
import {
    faStar
} from '@fortawesome/free-solid-svg-icons';

// props will contain review information, & currentUser if avail
const RestaurantReviewItem = props => {
    let updated;
    let actions;
    let containerName;
    let starsArray = [];

    if (props.review.created_at !== props.review.updated_at) {
        updated = 
            <div className="review-updated-date">
                <span>
                Updated on {formatDateShort(props.review.updated_at)}
                </span>
            </div>
    }

    if (props.currentUser) {
        containerName = 'review-item-container-user';

        actions = 
            <>
                <div className="review-action-edit">
                    Edit
                </div>
                <div className="review-action-delete" onClick={()=>props.openModal(['deleteReview', props.review])}>
                    Delete
                </div>
            </>
    } else {
        containerName = 'review-item-container-other'
    }

    for (let idx = 0; idx < props.review.rating; idx++) {
        starsArray.push(
        <FontAwesomeIcon key={`gold-${idx}`}icon={faStar} className='review-ratings-gold'/>);
    }

    let blankStars = 1;
    while (starsArray.length < 5) {
        starsArray.push(
          <FontAwesomeIcon key={`blank-${blankStars}`} icon={faStar} className="review-ratings-blank" />
        );
        blankStars ++;
    }

    return (
        <div className={containerName}>
            <div className="review-item-left">
                <div className="review-user-initials-container">
                    <div className="review-user-initials-circle">
                        <div className="review-user-initials">
                            {props.review.user_initials}
                        </div>
                    </div>
                </div>
                <div className="review-user-username-container">
                    <span className="review-user-username">
                        {props.review.username}
                    </span>
                </div>
                <div className="review-user-reviewscount-container">
                    <FontAwesomeIcon icon={faCommentAlt}/>
                    <span>{formatReviewCount(props.review.user_reviews_count)}</span>
                </div>
            </div>
            <div className="review-item-right">
                <div className="review-ratings-container">
                    <div className="review-ratings">
                        {starsArray}
                    </div>
                    <div className="review-created-date">
                        <span>
                            Reviewed on {formatDateShort(props.review.created_at)}
                        </span>
                    </div>
                    {updated}
                </div>
                <div className="review-comment-container">
                    <p className="review-comment">
                        {props.review.comment}
                    </p>
                </div>
                <div className="review-actions">
                    {actions}
                </div>
            </div>
        </div>
    )

};

export default RestaurantReviewItem;