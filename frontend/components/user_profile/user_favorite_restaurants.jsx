import React from 'react';

import UserNav from './user_nav';
import FavItem from './fav_item';

class UserFavorites extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.currentUser) {
            this.props.requestUserFavorites(this.props.currentUser.id);
        }
    }

    sortFavoriteRestaurants() {
        let favoriteRestaurants = this.props.favorites;

        return favoriteRestaurants.sort((a, b) => 
            a.name > b.name ? 1 : -1
        )
    }

    displayFavorites() {
        let favoriteRes;
        let userFavoritesArray = this.props.currentUser.favorites;

        if (this.props.favorites.length > 0) {
            let sortedFavs = this.sortFavoriteRestaurants();

            favoriteRes = (
                <>
                    {sortedFavs.map( restaurant => {
                        let favoriteItem = userFavoritesArray.find( ({ restaurant_id }) => restaurant_id === restaurant.id );

                        return <FavItem
                            currentUser={this.props.currentUser}
                            key={restaurant.id}
                            restaurant={restaurant}
                            favorite={favoriteItem}
                            deleteFavorite={this.props.deleteFavorite}
                            requestUserFavorites={this.props.requestUserFavorites}
                            />
                    })}
                </>
            )
        } else {
            favoriteRes = 
                <div className="user-page-nores-container">
                    <p>
                        You have no favorite restaurants to show on this list.
                    </p>
                </div>
        }

        return favoriteRes;
    }

    render () {
        let renderedComponent = null;

        if (this.props.favorites) {
            renderedComponent = 
                <div className="user-page-favorites">
                    <div className="user-page-content-block favorites">
                        <div className="user-page-content-block-header">
                            <h2>Saved Restaurants</h2>
                        </div>
                        {this.displayFavorites()}
                    </div>
                </div>
        }

        return (
          <div className="user-page wrapper">
            <div className="user-page-main-nav">
              <UserNav />
              <div className="user-page-main-content clearfix">
                {renderedComponent}
              </div>
            </div>
          </div>
        );
    }
}

export default UserFavorites;