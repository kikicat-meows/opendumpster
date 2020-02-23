import React from 'react';
import { Link } from 'react-router-dom';
import { formatOpeningTime, formatClosingTime } from '../../util/format_time_util';
import { displayRatingStars } from '../../util/display_avg_rating_stars_util';
import { formatReviewCountCap } from '../../util/format_review_count_util';

import RestaurantReservationContainer from './restaurant_reservation_container';
import RestaurantReviewsContainer from '../reviews/restaurant_reviews_container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { faUtensils } from '@fortawesome/free-solid-svg-icons';


class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
        // this.showPage = this.showPage.bind(this);
        this.smoothScroll = this.smoothScroll.bind(this);
    };

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.clearTimeslots();
        this.props.clearReservationErrors();
        this.props.requestARestaurant(this.props.match.params.restaurantId);
        
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.restaurantId !== this.props.match.params.restaurantId) {
            this.props.requestARestaurant(this.props.match.params.restaurantId);
            this.props.getRestaurantReviews(this.props.match.params.restaurantId);
        }
    }

    hourOfOperations(restaurant) {
        let weekdays = Object.keys(restaurant.hours);
        let weekdays_reversed = weekdays.reverse();

        return (
            weekdays_reversed.map(day => (
                <p key={day} className='restaurant-show-hours-info'>{day} : 
                    <span>
                        {formatOpeningTime(restaurant.hours[day].open)} - {formatClosingTime(restaurant.hours[day].close)}
                    </span>
                </p>
            ))
        )
    }

    smoothScroll(element) {
      const ele = document.querySelector(`#${element}`);
      const offset = 45;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = ele.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      // ele.scrollIntoView({behavior: 'smooth'});
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }


    render() {
        let { restaurant } = this.props;
        let overviewClass;
        let reviewsClass;

        if (this.props.location.hash === '#reviews') {
          overviewClass = 'res-nav-link';
          reviewsClass = 'res-nav-link active'
        } else {
          overviewClass = 'res-nav-link active';
          reviewsClass = 'res-nav-link';
        }
        
        let mountedComponent = null;
        if (restaurant && restaurant.hours) {

            mountedComponent = (
              <div className="restaurant-show-page-container">
                <div className="restaurant-show-page-banner">
                  {/* <img src={window.showbannerURL} alt="placeholder show banner"/> */}
                </div>

                <div className="restaurant-show-page-content wrapper">
                  <div className="show-left">
                    <nav className="restaurant-show-nav">
                      <ul className="res-nav">
                        <li className="overview-link">
                          <Link className={`${overviewClass}`} 
                          onClick={() => this.smoothScroll('overview')}
                          to={`/restaurants/${restaurant.id}#overview`}>
                            Overview
                          </Link>
                        </li>
                        <li className="review-link">
                          <Link className={`${reviewsClass}`}
                          onClick={() => this.smoothScroll('reviews')}
                          to={`/restaurants/${restaurant.id}#reviews`}>
                            Reviews
                          </Link>
                        </li>
                      </ul>
                    </nav>
                    <div className="restaurant-show-overview" id='overview'>
                      <div className="restaurant-show-name">
                        <h1>{restaurant.name}</h1>
                      </div>
                      <div className="restaurant-show-summary">
                        <div className="restaurant-show-summ-rate-review">
                          <div className="restaurant-show-summ-rate">
                            <div className="restaurant-show-summ-rate-container">
                              {displayRatingStars(restaurant.avg_rating)}
                            </div>
                            <div className="restaurant-show-summ-rate-num">
                              {Math.round(restaurant.avg_rating * 10) / 10}
                            </div>
                          </div>
                          <div className="restaurant-show-summ-review">
                            <FontAwesomeIcon icon={faCommentAlt}/>
                            <span>{formatReviewCountCap(restaurant.num_reviews)}</span>
                          </div>
                        </div>
                        <div className="restaurant-show-summ-cuisine">
                            <FontAwesomeIcon icon={faUtensils} />
                            <span>{restaurant.cuisine[0]}</span>
                        </div>
                      </div>
                      <div className="restaurant-show-description">
                      <p>{restaurant.description}</p>
                      </div>
                    </div>
                    <div className="restaurant-show-content">
                      <RestaurantReviewsContainer restaurant={restaurant}/>
                    </div>

                  </div>

                  <div className="show-right">
                    <RestaurantReservationContainer />

                    <div className="restaurant-show-addinfo">
                      <div className="restaurant-show-hours">
                        <h4>Hours of Operation</h4>
                        {this.hourOfOperations(restaurant)}
                      </div>
                      <div className="restaurant-show-cuisine">
                        <h4>Cuisines</h4>
                        <p>{restaurant.cuisine.join(", ")}</p>
                      </div>
                      <div className="restaurant-show-phone">
                        <h4>Phone number</h4>
                        <p>{restaurant.phone}</p>
                      </div>
                      <div className="restaurant-show-website">
                        <h4>Website</h4>
                        <p>
                          <a href={restaurant.website} target="_blank">
                            {restaurant.website}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
        }
        
        return (
            <div>
                {mountedComponent}
            </div>
        )
    };
};

export default RestaurantShow;