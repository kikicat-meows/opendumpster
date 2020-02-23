import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const displayRatingStars = (avg_rating) =>  {
        let rating = Math.round(avg_rating * 10) / 10;
        let integer = Math.floor(rating);
        let fraction = Math.round((rating - integer) * 10) / 10;
        let percentage = fraction * 100;

        let starsArray = [];

        for (let i = 0; i < integer; i++) {
            starsArray.push(
                <FontAwesomeIcon
                    icon={faStar}
                    key={`star-rating-${i}`}
                    className={`rating-star filled`} />
            )
        }

        if (percentage > 0) {
            let style = {
                width: 'calc(' + fraction + '* 16px)',
                overflow: 'hidden',
            }

            starsArray.push(
                <div className="rating-star-fracCont">
                    <div 
                        className="rating-star-fraction"
                        style={style}>
                        <FontAwesomeIcon 
                            icon={faStar}
                            key={`star-rating-fraction`}
                            className={`rating-star filled`}
                            />
                    </div>
                    <FontAwesomeIcon 
                        icon={faStar}
                        key={`star-rating-fracback`}
                        className={`rating-star`}/>
                </div>
            )
        }

        let count = 1;
        while (starsArray.length < 5) {
            starsArray.push(
                <FontAwesomeIcon 
                    icon={faStar}
                    key={`star-rating-blank-${count}`}
                    className={`rating-star`}/>
            );
            count++;
        }

        return starsArray;
    }