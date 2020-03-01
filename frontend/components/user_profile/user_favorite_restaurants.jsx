import React from 'react';

import UserNav from './user_nav';

class UserFavorites extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.currentUser) {
            this.props.requestUserFavorites(this.props.currentUser.id);
        }
    }

    render () {
        let renderedComponent = null;

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