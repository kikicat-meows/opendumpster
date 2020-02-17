import React from 'react';
import { Link } from 'react-router-dom';

class DropdownNav extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.logout();
        this.props.closeModal();
        this.props.history.push('/');
    }

    render () {
        return (
          <div className="top-bar-dropdown-container">
            <div className="top-bar-dropdown-nav">
              <Link
                className="top-bar-dropdown-link"
                to={`/my/profile`}
                onClick={this.props.closeModal}
              >
                My Profile
              </Link>
              <Link
                className="top-bar-dropdown-link"
                to={`/my/favorites`}
                onClick={this.props.closeModal}
              >
                My Saved Restaurants
              </Link>
              <a className="top-bar-dropdown-link" onClick={this.handleLogout}>
                Sign out
              </a>
            </div>
          </div>
        );
    }
}

export default DropdownNav;