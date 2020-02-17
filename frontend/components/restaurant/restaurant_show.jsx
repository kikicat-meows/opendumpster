import React from 'react';
import { Link } from 'react-router-dom';
import { formatOpeningTime, formatClosingTime } from '../../util/format_time_util';

import RestaurantReservationContainer from './restaurant_reservation_container';


class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
        // this.showPage = this.showPage.bind(this);
    };

    componentDidMount() {
        window.scrollTo(0, 0);
        // setTimeout(this.props.requestARestaurant(this.props.match.params.restaurantId).then(()=>this.forceUpdate()), 0);
        this.props.clearTimeslots();
        this.props.clearReservationErrors();
        this.props.requestARestaurant(this.props.match.params.restaurantId);
        
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.restaurantId !== this.props.match.params.restaurantId) {
            this.props.requestARestaurant(this.props.match.params.restaurantId);
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


    render() {
        let { restaurant } = this.props;

        let mountedComponent = null;
        if (restaurant && restaurant.hours) {
            mountedComponent = 
            <div className = 'restaurant-show-page-container'>
                <div className='restaurant-show-page-banner'>
                    {/* <img src={window.showbannerURL} alt="placeholder show banner"/> */}
                </div>

                <div className='restaurant-show-page-content wrapper'>
                    <div className='show-left'>
                        <div className='restaurant-show-overview'>
                            <h1>{restaurant.name}</h1>
                            <p>{restaurant.description}</p>
                        </div>
                    </div>

                    <div className='show-right'>
                        <RestaurantReservationContainer />

                        <div className='restaurant-show-addinfo'>
                            <div className='restaurant-show-hours'>
                                <h4>Hours of Operation</h4>
                                {
                                    this.hourOfOperations(restaurant)
                                }
                            </div>
                            <div className='restaurant-show-cuisine'>
                                <h4>Cuisines</h4>
                                <p>{restaurant.cuisine.join(", ")}</p>
                            </div>
                            <div className='restaurant-show-phone'>
                                <h4>Phone number</h4>
                                <p>{restaurant.phone}</p>
                            </div>
                            <div className='restaurant-show-website'>
                                <h4>Website</h4>
                                <p>{restaurant.website}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        }
        
        return (
            <div>
                {mountedComponent}
            </div>
        )
    };
};

export default RestaurantShow;