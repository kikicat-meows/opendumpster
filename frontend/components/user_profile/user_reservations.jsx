import React from 'react';

import UserNav from './user_nav';
import UpcomingResItem from './upcoming_res_item';
import PastResItem from './past_res_item';

class UserReservations extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.getUserReservations(this.props.currentUser.id);
    }
  }

  sortUpcomingReservations() {
    let upcoming = this.props.reservations.upcoming;

    return upcoming.sort((a, b) =>
      a.date > b.date ? 1 : a.date === b.date ? (a.time > b.time ? 1 : -1) : -1
    );
  }

  displayUpcomingReservations() {
    let upcomingRes;

    if (this.props.reservations.upcoming.length > 0) {
      let sortedRes = this.sortUpcomingReservations();

      upcomingRes = (
        <>
          {sortedRes.map(reservation => (
            <UpcomingResItem
              currentUser={this.props.currentUser}
              reservation={reservation}
              openModal={this.props.openModal}
              key={reservation.id}
            />
          ))}
        </>
      );
    } else {
      upcomingRes = (
        <div className="user-page-upcoming-container">
          <p>No upcoming reservations</p>
        </div>
      );
    }

    return upcomingRes;
  }

  sortPastReservations() {
    let past = this.props.reservations.past;

    return past.sort((a, b) =>
      a.date < b.date ? 1 : a.date === b.date ? (a.time < b.time ? 1 : -1) : -1
    );
  }

  displayPastReservations() {
    let pastRes;

    if (this.props.reservations.past.length > 0) {
      let sortedRes = this.sortPastReservations();

      pastRes = (
        <>
          {sortedRes.map(reservation => (
            <PastResItem reservation={reservation} key={reservation.id} />
          ))}
        </>
      );
    } else {
      pastRes = (
        <div className="user-page-upcoming-container">
          <p>No past reservations.</p>
        </div>
      );
    }

    return pastRes;
  }

  sortCancelledReservations() {
    let cancelled = this.props.reservations.cancelled;

    return cancelled.sort((a, b) =>
      a.date < b.date ? 1 : a.date === b.date ? (a.time < b.time ? 1 : -1) : -1
    );
  }

  displayCancelledReservations() {
    let cancelledRes;

    if (this.props.reservations.cancelled.length > 0) {
      let sortedRes = this.sortCancelledReservations();

      cancelledRes = (
        <>
          {sortedRes.map(reservation => (
            <PastResItem reservation={reservation} key={reservation.id} />
          ))}
        </>
      );
    } else {
      cancelledRes = (
        <div className="user-page-upcoming-container">
          <p>No cancelled reservations.</p>
        </div>
      );
    }

    return cancelledRes;
  }

  render() {
    let renderedComponent = null;

    if (this.props.reservations) {
      renderedComponent = (
        <div className="user-page-reservations">
          <div className="user-page-content-block upcoming-res">
            <div className="user-page-content-block-header">
              <h2>Upcoming Reservations</h2>
            </div>
            {this.displayUpcomingReservations()}
          </div>
          <div className="user-page-content-block past-res">
            <div className="user-page-content-block-header">
              <h2>Past Reservations</h2>
            </div>
            {this.displayPastReservations()}
          </div>
          <div className="user-page-content-block cancelled-res">
            <div className="user-page-content-block-header">
              <h2>Cancelled Reservations</h2>
            </div>
            {this.displayCancelledReservations()}
          </div>
        </div>
      );
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

export default UserReservations;