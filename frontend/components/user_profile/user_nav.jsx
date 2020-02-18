import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const UserNav = () => (
  <div className="user-page-nav-wrapper">
    <nav className="user-page-nav">
      <ul>
        <li>
          <NavLink className="user-page-nav-link" exact to={`/my/profile`}>
                Reservations
          </NavLink>
        </li>
        <li>
          <NavLink className="user-page-nav-link" exact to={`/my/favorites`}>
                Saved Restaurants
          </NavLink>
        </li>
        <li>
          <NavLink className="user-page-nav-link" exact to={`/my/profile/edit`}>
                Account Details
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default UserNav;