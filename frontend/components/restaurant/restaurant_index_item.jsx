import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantIndexItem = ({ restaurant }) => {

    const cuisines = restaurant.cuisine;
    const link = `/restaurants/${restaurant.id}`;

    return (
        <div className='restaurant-index-item'>
            <Link className='restaurant-index-img-link' to={link}>
                <img src={window.trashcanURL} 
                        alt="placeholder-restaurant-image"
                        className='restaurant-index-item-img'/>
            </Link>
            <div className='restaurant-index-item-content'>
                <div className='restaurant-index-header'>
                    <Link className='restaurant-index-item-link' to={link}>{restaurant.name}</Link>
                </div>
                <div className='restaurant-index-item-rating'>
                    Placeholder for Rating
                </div>
                <div className='restaurant-index-item-info'>
                    <span>{cuisines[0]}</span>
                    <span className='span-dot'>&#183;</span>
                    <span>{restaurant.city}</span>
                </div>
                <div className='restaurant-index-item-times'>
                    Timeslot Placeholder
                </div>
            </div>
        </div>
    )
};

export default RestaurantIndexItem;