import React from 'react';
import { Link } from 'react-router-dom';

const UserNav = () => (
  <div className="user-page-nav-wrapper">
    <nav className="user-page-nav">
      <ul>
        <li>
          <Link className="user-page-nav-link" to={`/my/profile`}>
                Reservations
          </Link>
        </li>
        <li>
          <Link className="user-page-nav-link" to={`/my/favorites`}>
                Saved Restaurants
          </Link>
        </li>
        <li>
          <Link className="user-page-nav-link" to={`/my/profile/edit`}>
                Account Details
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default UserNav;