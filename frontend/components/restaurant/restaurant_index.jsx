import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantIndexItem from './restaurant_index_item';
import SearchFormContainer from '../search/search_form_container';

class RestaurantIndex extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        if (this.props.restaurants.length === 0) {
            this.props.requestAllRestaurants();
        }
    }



    render () {
        let {restaurants} = this.props;

        let indexContainer;
            if (this.props.restaurants) {
                indexContainer = 
                    <div className='restaurants-index-container clearfix'>
                        <ul>
                            {
                                restaurants.map(restaurant => (
                                    <li key={restaurant.id}>
                                        <RestaurantIndexItem restaurant={restaurant} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
            }

        return (
            <div className='restaurants-index-page'>
                <SearchFormContainer />

                {indexContainer}
            </div>

        )
    }
}

export default RestaurantIndex;