import React from 'react';
import { Link } from 'react-router-dom';

import { formatDateSlash } from '../../util/format_date_util';
import { formatOpeningTime } from '../../util/format_time_util';
import { formatSeat } from '../../util/format_seat_util';

const UpcomingResItem = props => {
  const link = `/restaurants/${props.reservation.restaurant_id}`;
  const viewlink = `/reservations/${props.reservation.id}`;

  return (
    <div className="user-page-upcoming-container">
      <div className="user-page-upcoming-row">
        <div className="user-page-rest-row-info">
          <Link className="user-page-rest-row-image" target="_blank" to={link}>
            <img
              src={window.trashcanURL}
              alt="placeholder-restaurant-image"
              className="user-page-rest-image"
            />
          </Link>
          <Link className="user-page-rest-row-name" target="_blank" to={link}>
            {props.reservation.restaurant}
          </Link>
          <p className="user-page-upcoming-date">
            {formatDateSlash(props.reservation.date)} at{" "}
            {formatOpeningTime(props.reservation.time)}.
          </p>
          <p className="user-page-upcoming-seats">
            Table for {formatSeat(props.reservation.seats)}.
          </p>
          <div className="user-page-upcoming-res-links">
            <div className="user-page-links-float">
              <Link className="user-page-upcoming-res-link" to={viewlink}>
                View
              </Link>
              <Link className="user-page-upcoming-res-link" to={viewlink}>
                Modify
              </Link>
              <p
                className="user-page-upcoming-res-link"
                onClick={() => props.openModal([
                  "cancel",
                  props.reservation.id,
                  props.currentUser.id
                ])}
              >
                Cancel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingResItem;